import BannerSection from "@/components/About/BannerSection";
import TransformIdeasIntoReality from "@/components/About/TransformIdeasIntoReality";
import ValuesSection from "@/components/About/ValuesSection";
import ContactSection from "@/components/About/ContactSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/about");
const pageTitle = "About Cyber Circus | Software Development Company in Lahore, Pakistan";
const pageDescription =
  "Learn how Cyber Circus, a software development company in Lahore, Pakistan, became a trusted partner for businesses seeking better software. We build solutions that teams actually use, solve real problems, and deliver the kind of results that matter. NOT a music or entertainment company.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "about cyber circus",
    "cyber circus software company",
    "software development company lahore",
    "enterprise software developers pakistan",
    "technology consulting company lahore",
    "digital transformation company pakistan",
    "custom software solutions lahore",
    "software engineering team",
    "IT consulting services lahore"
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

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <BannerSection />
      <TransformIdeasIntoReality />
      <ValuesSection />
      <ContactSection />
    </>
  );
}

