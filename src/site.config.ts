/**
 * Genetikon site config — STRUCTURE-vs-SKIN tenant config.
 * Engine (components) tenant-neutral; müşteri-özel her şey burada.
 * Kaynak: ../Data/ia/site_map.yaml + brand_tokens.yaml + contact.yaml
 */

export const siteConfig = {
  name: "Genetikon Genetics Center",
  brandLine: "Genetikon Genetics Center — Stem Cell Therapy Laboratory",
  domain: "genetikon.com",
  url: "https://www.genetikon.com",
  defaultLocale: "en",
  locales: ["en", "tr"] as const,
  complianceProfile: "medical" as const,
  jurisdiction: { primary: "georgia", secondary: "turkiye" },

  contact: {
    address: "165 Vakhtang Gorgasali St, Batumi 6004, Georgia",
    phone: "+995 593 41 21 14",
    whatsapp: "+995593412114",
    email: "batumi@genetikon.com",
    geo: { lat: 41.6461, lng: 41.6367 }, // Batumi (yaklasik; owner dogrulamali)
  },

  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },

  departments: [
    {
      slug: "medical-genetics",
      key: "medicalGenetics",
      accent: "brand-600",
    },
    {
      slug: "stem-cell-therapy",
      key: "stemCell",
      accent: "brand-700",
    },
    {
      slug: "ivf-center",
      key: "ivf",
      accent: "brand-500",
    },
  ],

  // Medical compliance flags (Safety/SAFETY_POLICY.md)
  compliance: {
    showPrices: false, // yurtici tanitim yasagi m.5/1-m
    showTestimonials: false, // m.5/1-e
    showTeamNames: false, // owner: kisi ismi yayinlanmaz
    beforeAfterGallery: false, // owner approval gerekir
    medicalDisclaimerRequired: true,
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];
