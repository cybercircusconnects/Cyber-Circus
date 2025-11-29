import BannerSection from "@/components/Contact/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import ContactSchema from "@/components/Contact/ContactSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/contact");
const pageTitle = "Contact Cyber Circus | Software Development Company Lahore, Pakistan";
const pageDescription =
  "Ready to start your next project? Get in touch with Cyber Circus software development company in Lahore, Pakistan. We'll help you understand your options and create a plan that fits your goals and budget. Contact us at info@cybercircusconnect.com or +92-302-9825213.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "contact cyber circus",
    "cyber circus contact lahore",
    "software development services pakistan",
    "enterprise software consulting lahore",
    "digital transformation consulting pakistan",
    "technology consulting lahore",
    "schedule consultation",
    "software development contact pakistan",
    "IT consulting contact lahore"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl
  },
  twitter: {
    title: pageTitle,
    description: pageDescription
  },
  alternates: {
    canonical: pageUrl
  }
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <BannerSection />
      <ContactSection />
      <ContactSchema />
    </>
  );
}

