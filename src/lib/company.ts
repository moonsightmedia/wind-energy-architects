/**
 * Single source of truth for GRAU Engineering GmbH contact and legal data.
 * Used in Footer, ContactSection, and should match Impressum/Datenschutz.
 */
export const company = {
  name: "GRAU Engineering GmbH",
  address: {
    street: "Obere Mühle 42",
    zip: "58644",
    city: "Iserlohn",
    country: "Deutschland",
  },
  email: "info@grau-eng.de",
  phone: "+49 172 3211514",
  phoneHref: "+491723211514", // For tel: links (no spaces/parentheses)
} as const;

export const companyAddressLines = [
  company.address.street,
  `${company.address.zip} ${company.address.city}`,
  company.address.country,
] as const;
