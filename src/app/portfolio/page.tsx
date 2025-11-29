import BannerSection from "@/components/Portfolio/BannerSection";
import ProjectSection from "@/components/Portfolio/ProjectSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/portfolio");
const pageTitle = "Portfolio | Cyber Circus Software Development Projects | Lahore, Pakistan";
const pageDescription =
  "See how Cyber Circus software development company in Lahore, Pakistan has helped companies transform their operations. Our portfolio showcases real projects—enterprise platforms, mobile apps, and digital transformation initiatives that deliver results.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cyber circus portfolio",
    "cyber circus software projects",
    "enterprise software solutions pakistan",
    "software development projects lahore",
    "digital transformation case studies",
    "custom software examples pakistan",
    "technology projects lahore",
    "web development portfolio pakistan",
    "mobile app portfolio"
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

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" }
        ]}
      />
      <BannerSection />
      <ProjectSection />
    </>
  );
}

