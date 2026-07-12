"use client";

import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import {
  CONTACT_METHODS,
  FIELD_LIMITS,
  PROJECT_TYPES,
  TIMELINES,
  readInquiry,
  validateInquiry,
  type FieldErrors,
  type InquiryField,
} from "./validation";
import {
  submitInquiry,
  type InquiryState,
} from "./actions";
import styles from "./contact.module.css";

type FieldShellProps = {
  field: InquiryField;
  label: string;
  required?: boolean;
  helper?: string;
  errors: FieldErrors;
  children: React.ReactNode;
};

function FieldShell({ field, label, required, helper, errors, children }: FieldShellProps) {
  const helperId = helper ? `${field}-helper` : undefined;
  const errorId = errors[field] ? `${field}-error` : undefined;
  return (
    <div className={styles.field}>
      <label htmlFor={field} className={styles.label}>
        {label} {required ? <span className={styles.required}>*</span> : null}
      </label>
      {helper ? <p id={helperId} className={styles.helper}>{helper}</p> : null}
      {children}
      {errors[field] ? <p id={errorId} className={styles.fieldError}>{errors[field]}</p> : null}
    </div>
  );
}

function describedBy(field: InquiryField, helper: boolean, errors: FieldErrors) {
  return [helper ? `${field}-helper` : "", errors[field] ? `${field}-error` : ""]
    .filter(Boolean)
    .join(" ") || undefined;
}

export default function ContactForm() {
  const router = useRouter();
  const initialState: InquiryState = { status: "idle", fieldErrors: {} };
  const [serverState, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submittedValuesRef = useRef<Record<InquiryField, string> | null>(null);
  const startedAt = useMemo(() => Date.now(), []);
  const errors = Object.keys(clientErrors).length ? clientErrors : serverState.fieldErrors;

  useEffect(() => {
    if (serverState.status === "success") {
      router.push("/contact/thank-you");
      return;
    }
    if (serverState.status !== "error") return;

    const form = formRef.current;
    const submittedValues = submittedValuesRef.current;
    if (form && submittedValues) {
      for (const [field, value] of Object.entries(submittedValues)) {
        const controls = form.elements.namedItem(field);
        if (controls instanceof RadioNodeList) {
          controls.value = value;
        } else if (
          controls instanceof HTMLInputElement ||
          controls instanceof HTMLSelectElement ||
          controls instanceof HTMLTextAreaElement
        ) {
          controls.value = value;
        }
      }
    }
    summaryRef.current?.focus();
  }, [router, serverState]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const values = readInquiry(new FormData(event.currentTarget));
    const nextErrors = validateInquiry(values);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setClientErrors(nextErrors);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setClientErrors({});
    submittedValuesRef.current = values;
  }

  const inputProps = (field: InquiryField, helper = false) => ({
    id: field,
    name: field,
    maxLength: FIELD_LIMITS[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": describedBy(field, helper, errors),
  });

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate className={styles.form}>
      <input type="hidden" name="startedAt" value={startedAt} />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="companyFax">Company fax</label>
        <input id="companyFax" name="companyFax" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className={styles.requiredNote}>Fields marked with an asterisk are required.</p>

      {(Object.keys(errors).length > 0 || serverState.formError) ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
          <h3>{serverState.internalInquiryDelivered ? "Your inquiry was received." : "Your inquiry could not be sent."}</h3>
          <p>
            {serverState.internalInquiryDelivered
              ? "NorthWing Labs received your inquiry, but could not send the confirmation email. Please do not submit the same inquiry again."
              : "Please review the form and try again. If the problem continues, no information has been confirmed as delivered."}
          </p>
          {serverState.formError ? <p>{serverState.formError}</p> : null}
        </div>
      ) : null}

      <div className={styles.fieldGrid}>
        <FieldShell field="fullName" label="Full name" required errors={errors}>
          <input {...inputProps("fullName")} type="text" autoComplete="name" required />
        </FieldShell>
        <FieldShell field="organization" label="Business or organization" errors={errors}>
          <input {...inputProps("organization")} type="text" autoComplete="organization" />
        </FieldShell>
        <FieldShell field="email" label="Email address" required errors={errors}>
          <input {...inputProps("email")} type="email" inputMode="email" autoComplete="email" required />
        </FieldShell>
        <FieldShell field="phone" label="Phone number" errors={errors}>
          <input {...inputProps("phone")} type="tel" inputMode="tel" autoComplete="tel" />
        </FieldShell>
        <FieldShell field="website" label="Website" errors={errors}>
          <input {...inputProps("website")} type="url" inputMode="url" autoComplete="url" />
        </FieldShell>
        <FieldShell field="projectType" label="What type of project are you considering?" required errors={errors}>
          <select {...inputProps("projectType")} required defaultValue="">
            <option value="" disabled>Select the closest option</option>
            {PROJECT_TYPES.map((option) => <option key={option}>{option}</option>)}
          </select>
        </FieldShell>
      </div>

      <FieldShell field="businessProblem" label="What are you trying to improve?" required helper="Describe the process, bottleneck, customer experience, operational issue, or product idea." errors={errors}>
        <textarea {...inputProps("businessProblem", true)} rows={6} required />
      </FieldShell>
      <FieldShell field="desiredOutcome" label="What would a better result look like?" required helper="Explain what you want to become faster, easier, clearer, more reliable, or possible." errors={errors}>
        <textarea {...inputProps("desiredOutcome", true)} rows={6} required />
      </FieldShell>
      <FieldShell field="currentProcess" label="How does the process work today?" helper="Share any spreadsheets, software, manual steps, or disconnected tools currently involved." errors={errors}>
        <textarea {...inputProps("currentProcess", true)} rows={5} />
      </FieldShell>
      <FieldShell field="timeline" label="What is your general timeline?" errors={errors}>
        <select {...inputProps("timeline")} defaultValue="">
          <option value="">Select a general timeline</option>
          {TIMELINES.map((option) => <option key={option}>{option}</option>)}
        </select>
      </FieldShell>
      <FieldShell field="constraints" label="Budget, constraints, or other considerations" helper="Share any budget, deadline, staffing, existing-tool, or operational constraints that may shape the approach." errors={errors}>
        <textarea {...inputProps("constraints", true)} rows={5} />
      </FieldShell>

      <fieldset className={styles.fieldset} aria-describedby={errors.preferredContact ? "preferredContact-error" : undefined}>
        <legend>How would you prefer to be contacted?</legend>
        <div className={styles.radioGroup}>
          {CONTACT_METHODS.map((method) => (
            <label key={method} className={styles.radioLabel}>
              <input type="radio" name="preferredContact" value={method} aria-invalid={errors.preferredContact ? true : undefined} />
              <span>{method}</span>
            </label>
          ))}
        </div>
        {errors.preferredContact ? <p id="preferredContact-error" className={styles.fieldError}>{errors.preferredContact}</p> : null}
      </fieldset>

      <p className={styles.privacyNote}>NorthWing Labs will use the information you provide to review your inquiry and respond to you.</p>
      <PrimaryButton type="submit" disabled={pending} className={styles.submitButton}>
        {pending ? "Starting Conversation…" : "Start a Conversation"}
      </PrimaryButton>
    </form>
  );
}
