export const FIELD_LIMITS = {
  fullName: 100,
  organization: 150,
  email: 254,
  phone: 40,
  website: 2048,
  projectType: 40,
  businessProblem: 3000,
  desiredOutcome: 3000,
  currentProcess: 3000,
  timeline: 40,
  constraints: 3000,
  preferredContact: 20,
} as const;

export const PROJECT_TYPES = [
  "Custom Software",
  "AI Tools",
  "Business Automation",
  "Mobile App",
  "SaaS Product",
  "Not Sure Yet",
] as const;

export const TIMELINES = [
  "Just Exploring",
  "As Soon as Practical",
  "Within 1–3 Months",
  "Within 3–6 Months",
  "More Than 6 Months",
  "Not Sure Yet",
] as const;

export const CONTACT_METHODS = ["Email", "Phone"] as const;

export type InquiryField = keyof typeof FIELD_LIMITS;
export type FieldErrors = Partial<Record<InquiryField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readInquiry(formData: FormData) {
  return Object.fromEntries(
    Object.keys(FIELD_LIMITS).map((key) => [
      key,
      String(formData.get(key) ?? "").trim(),
    ]),
  ) as Record<InquiryField, string>;
}

export function validateInquiry(values: Record<InquiryField, string>) {
  const errors: FieldErrors = {};

  const required: InquiryField[] = [
    "fullName",
    "email",
    "projectType",
    "businessProblem",
    "desiredOutcome",
  ];
  for (const field of required) {
    if (!values[field]) errors[field] = "This field is required.";
  }

  for (const [field, limit] of Object.entries(FIELD_LIMITS) as [
    InquiryField,
    number,
  ][]) {
    if (values[field].length > limit) {
      errors[field] = `Enter no more than ${limit.toLocaleString()} characters.`;
    }
  }

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.website) {
    try {
      const url = new URL(values.website);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      errors.website = "Enter a complete website URL, including http:// or https://.";
    }
  }

  if (
    values.projectType &&
    !PROJECT_TYPES.includes(values.projectType as (typeof PROJECT_TYPES)[number])
  ) {
    errors.projectType = "Select one of the available project types.";
  }
  if (
    values.timeline &&
    !TIMELINES.includes(values.timeline as (typeof TIMELINES)[number])
  ) {
    errors.timeline = "Select one of the available timelines.";
  }
  if (
    values.preferredContact &&
    !CONTACT_METHODS.includes(
      values.preferredContact as (typeof CONTACT_METHODS)[number],
    )
  ) {
    errors.preferredContact = "Select one of the available contact methods.";
  }

  return errors;
}
