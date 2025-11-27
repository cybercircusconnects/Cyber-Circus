import type { Metadata } from "next";

const siteUrl = "https://cybercircusconnect.com";
const ogImageUrl = `${siteUrl}/opengraph-image.png`;

export const siteConfig = {
  name: "Cyber Circus",
  legalName: "Cyber Circus",
  tagline: "Enterprise Software Development & Digital Transformation",
  description:
    "Cyber Circus builds enterprise software that solves real business challenges. We partner with companies to create custom solutions, modernize legacy systems, and drive digital transformation that delivers measurable results.",
  keywords: [
    "enterprise software development",
    "custom software solutions",
    "digital transformation",
    "cloud architecture",
    "software consulting",
    "enterprise applications",
    "technology services",
    "digital innovation",
    "software engineering",
    "IT consulting",
    "SaaS development",
    "web application development",
    "mobile app development",
    "DevOps services",
    "UI/UX design",
    "quality assurance",
    "enterprise integration",
    "data engineering",
    "analytics solutions"
  ],
  contact: {
    email: "info@cybercircus.com",
    phone: "+92-348-9745648",
    salesPhone: "+92-302-9825213",
    address: {
      street: "J2 Block Block J 2 Phase 2 Johar Town",
      city: "Lahore",
      region: "Punjab",
      postalCode: "54782",
      country: "PK"
    }
  },
  social: {
    facebook: "https://www.facebook.com/cybercircusconnet",
    instagram: "https://www.instagram.com/cybercircus.connect",
    youtube: "https://www.youtube.com/@cybercircus.connect",
    threads: "https://www.threads.com/@cybercircus.connect",
    github: "https://github.com/cybercircusconnects"
  }
};

const sharedOpenGraph = {
  type: "website",
  locale: "en_US",
  url: siteUrl,
  siteName: siteConfig.name,
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  images: [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} – ${siteConfig.tagline}`
    }
  ]
} satisfies NonNullable<Metadata["openGraph"]>;

const sharedTwitter = {
  card: "summary_large_image",
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  images: [ogImageUrl],
  creator: "@CyberCircus"
} satisfies NonNullable<Metadata["twitter"]>;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: sharedOpenGraph,
  twitter: sharedTwitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code"
  },
  category: "technology"
};

type MetadataOverrides = Partial<Metadata> & {
  title?: Metadata["title"];
};

const mergeObjects = <T extends Record<string, unknown> | null | undefined>(
  base: T,
  override: T
): T => {
  if (!base) return override;
  if (!override) return base;
  const result = {
    ...base,
    ...Object.fromEntries(
      Object.entries(override).map(([key, value]) => {
        const baseValue = (base as Record<string, unknown>)[key];
        if (
          value &&
          typeof value === "object" &&
          !Array.isArray(value) &&
          baseValue &&
          typeof baseValue === "object" &&
          !Array.isArray(baseValue)
        ) {
          return [key, mergeObjects(baseValue as Record<string, unknown>, value as Record<string, unknown>)];
        }
        return [key, value];
      })
    )
  };

  return result as T;
};

export const createMetadata = (overrides: MetadataOverrides = {}): Metadata => {
  return {
    ...baseMetadata,
    ...overrides,
    title: overrides.title ?? baseMetadata.title,
    description: overrides.description ?? baseMetadata.description,
    keywords: overrides.keywords ?? baseMetadata.keywords,
    openGraph: mergeObjects(baseMetadata.openGraph, overrides.openGraph),
    twitter: mergeObjects(baseMetadata.twitter, overrides.twitter),
    alternates: mergeObjects(baseMetadata.alternates, overrides.alternates)
  };
};

export const buildCanonicalUrl = (path: string): string =>
  path === "/" ? siteUrl : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export type JsonLd = Record<string, unknown>;

export const getOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  legalName: siteConfig.legalName,
  logo: `${siteUrl}/transparnt-logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.region,
    postalCode: siteConfig.contact.address.postalCode,
    addressCountry: siteConfig.contact.address.country
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      areaServed: "Worldwide",
      availableLanguage: ["English"]
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.salesPhone,
      contactType: "sales",
      email: "sales@cybercircus.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"]
    }
  ],
  sameAs: Object.values(siteConfig.social)
});

export const getServiceSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development Services",
  provider: {
    "@type": "Organization",
    name: siteConfig.name
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Enterprise Web Development",
          description:
            "Custom web applications built with modern frameworks and cloud-native architecture."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Mobile Application Development",
          description: "Native and cross-platform mobile applications for iOS and Android."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Cloud Architecture & DevOps",
          description:
            "Cloud-native solutions and automated DevOps pipelines for scalable infrastructure."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Digital Transformation Consulting",
          description:
            "Strategic technology consulting to modernize legacy systems and optimize processes."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "UI/UX Design & User Experience",
          description: "Intuitive, accessible interfaces that improve engagement and conversion."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Quality Assurance & Testing",
          description:
            "Comprehensive testing services ensuring reliability, performance, and security."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Enterprise Integration Services",
          description: "API development, microservices, and integration platforms."
        }
      },
      {
        "@type": "OfferCatalogItem",
        item: {
          "@type": "Service",
          name: "Data Engineering & Analytics",
          description:
            "Data pipelines, warehouses, and analytics platforms for informed decision-making."
        }
      }
    ]
  }
});

export const getContactSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.name}`,
  description:
    "Contact Cyber Circus for enterprise software development, digital transformation, and technology consulting services.",
  url: `${siteUrl}/contact`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      areaServed: "Worldwide",
      availableLanguage: ["English"]
    }
  ]
});

