import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesCTA from "@/components/Services/ServicesCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/services");
const pageTitle = "Enterprise Software Solutions & Services | Cyber Circus Lahore";
const pageDescription =
  "Cyber Circus offers comprehensive enterprise software services in Lahore, Pakistan. From custom web apps to mobile solutions and cloud infrastructure—we offer the full spectrum of software development services. Each project is tailored to your needs, built to scale, and designed to deliver impact.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "enterprise software solutions lahore",
    "custom software development services pakistan",
    "digital transformation services lahore",
    "cloud architecture services pakistan",
    "mobile app development services lahore",
    "DevOps services pakistan",
    "UI/UX design services lahore",
    "quality assurance services",
    "enterprise integration services",
    "data engineering services",
    "SaaS development lahore",
    "IT consulting services pakistan",
    "cyber circus services"
  ],
  openGraph: {
    title: `${pageTitle} | Cyber Circus`,
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}

