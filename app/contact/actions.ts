"use server";

import { readInquiry, validateInquiry, type FieldErrors } from "./validation";

export type InquiryState = {
  status: "idle" | "error" | "success";
  fieldErrors: FieldErrors;
  formError?: string;
  internalInquiryDelivered?: boolean;
};

const MAX_PAYLOAD_CHARACTERS = 15_000;
const MIN_COMPLETION_TIME_MS = 2_000;
const APPROVED_EMAIL_DOMAIN = "forms.northwinglabs.com";
const INQUIRY_RECIPIENT = "hello@northwinglabs.com";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function displayValue(value: string) {
  return value || "Not provided";
}

function buildEmailContent(values: ReturnType<typeof readInquiry>) {
  const fields = [
    ["Full name", values.fullName],
    ["Business or organization", values.organization],
    ["Email address", values.email],
    ["Phone number", values.phone],
    ["Website", values.website],
    ["Project type", values.projectType],
    ["What they are trying to improve", values.businessProblem],
    ["Desired outcome", values.desiredOutcome],
    ["Current tools or process", values.currentProcess],
    ["General timeline", values.timeline],
    ["Budget, constraints, or considerations", values.constraints],
    ["Preferred contact method", values.preferredContact],
  ] as const;

  const text = [
    "New NorthWing Labs website inquiry",
    "",
    ...fields.flatMap(([label, value]) => [
      `${label}:`,
      displayValue(value),
      "",
    ]),
  ].join("\n");

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:24px;background:#f2f4f8;color:#051231;font-family:Arial,sans-serif;line-height:1.6">
        <main style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #ced3db;border-radius:14px;padding:32px">
          <h1 style="margin:0 0 24px;color:#052862;font-size:24px">New NorthWing Labs website inquiry</h1>
          ${fields
            .map(
              ([label, value]) => `
                <section style="margin:0 0 20px">
                  <h2 style="margin:0 0 4px;color:#052862;font-size:14px">${escapeHtml(label)}</h2>
                  <p style="margin:0;white-space:pre-wrap">${escapeHtml(displayValue(value))}</p>
                </section>`,
            )
            .join("")}
        </main>
      </body>
    </html>`;

  return { text, html };
}

function buildConfirmationContent(fullName: string) {
  const firstName = fullName.split(/\s+/)[0];
  const text = `Hi ${firstName},

Thank you for contacting NorthWing Labs.

We received the information you shared and will review your business problem, current process, desired outcome, and practical constraints.

If the opportunity appears aligned, the next step will be a focused conversation to clarify the problem and determine the most practical path forward.

You do not need to prepare a technical brief. Starting with the business problem is enough.

Patrick Nichols
NorthWing Labs
Helping Your Business Take Flight.`;

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:24px;background:#f2f4f8;color:#051231;font-family:Arial,sans-serif;line-height:1.6">
        <main style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #ced3db;border-radius:14px;padding:32px">
          <p>Hi ${escapeHtml(firstName)},</p>
          <p>Thank you for contacting NorthWing Labs.</p>
          <p>We received the information you shared and will review your business problem, current process, desired outcome, and practical constraints.</p>
          <p>If the opportunity appears aligned, the next step will be a focused conversation to clarify the problem and determine the most practical path forward.</p>
          <p>You do not need to prepare a technical brief. Starting with the business problem is enough.</p>
          <p style="margin-top:24px">Patrick Nichols<br>NorthWing Labs<br>Helping Your Business Take Flight.</p>
        </main>
      </body>
    </html>`;

  return { text, html };
}

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const values = readInquiry(formData);
  const fieldErrors = validateInquiry(values);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const payloadSize = Object.values(values).reduce(
    (total, value) => total + value.length,
    0,
  );
  if (payloadSize > MAX_PAYLOAD_CHARACTERS) {
    return {
      status: "error",
      fieldErrors: {},
      formError: "The inquiry is too large to process. Please shorten the longer responses and try again.",
    };
  }

  const honeypot = String(formData.get("companyFax") ?? "");
  const startedAt = Number(formData.get("startedAt"));
  if (honeypot || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_COMPLETION_TIME_MS) {
    return {
      status: "error",
      fieldErrors: {},
      formError: "Your inquiry could not be sent. Please review the form and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const configuredDomain = process.env.RESEND_EMAIL_DOMAIN
    ?.trim()
    .toLowerCase();
  if (!apiKey || configuredDomain !== APPROVED_EMAIL_DOMAIN) {
    return {
      status: "error",
      fieldErrors: {},
      formError:
        "Inquiry delivery is temporarily unavailable. No information has been delivered.",
    };
  }

  const { text, html } = buildEmailContent(values);
  const subjectName = values.fullName.replace(/\s+/g, " ").trim();
  let internalInquiryDelivered = false;

  try {
    const internalResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: `NorthWing Labs Website <inquiries@${configuredDomain}>`,
        to: [INQUIRY_RECIPIENT],
        reply_to: values.email,
        subject: `Website inquiry: ${values.projectType} — ${subjectName}`,
        text,
        html,
      }),
      cache: "no-store",
    });

    if (!internalResponse.ok) {
      return {
        status: "error",
        fieldErrors: {},
        formError:
          "Inquiry delivery is temporarily unavailable. No information has been confirmed as delivered.",
      };
    }
    internalInquiryDelivered = true;

    const confirmation = buildConfirmationContent(values.fullName);
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: `NorthWing Labs <inquiries@${configuredDomain}>`,
        to: [values.email],
        reply_to: INQUIRY_RECIPIENT,
        subject: "We received your NorthWing Labs inquiry",
        text: confirmation.text,
        html: confirmation.html,
      }),
      cache: "no-store",
    });

    if (!confirmationResponse.ok) {
      return {
        status: "error",
        fieldErrors: {},
        internalInquiryDelivered: true,
        formError:
          "Your inquiry was received, but the confirmation email could not be sent.",
      };
    }

    return { status: "success", fieldErrors: {} };
  } catch {
    if (internalInquiryDelivered) {
      return {
        status: "error",
        fieldErrors: {},
        internalInquiryDelivered: true,
        formError:
          "Your inquiry was received, but the confirmation email could not be sent.",
      };
    }
    return {
      status: "error",
      fieldErrors: {},
      formError:
        "Inquiry delivery is temporarily unavailable. No information has been confirmed as delivered.",
    };
  }
}
