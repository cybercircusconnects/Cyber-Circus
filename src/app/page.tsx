import Home from "@/components/Home/Home";
import FAQSchema from "@/components/FAQSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/");
const pageTitle = "Cyber Circus | Software Development Company in Lahore, Pakistan";
const pageDescription =
  "Cyber Circus is a software development company in Lahore, Pakistan. We build enterprise software that transforms how your business operates. NOT a music company. We partner with enterprises to create scalable solutions, modernize systems, and deliver technology that drives real results. Let's talk about your project.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cyber circus software",
    "cyber circus software company",
    "cyber circus connect",
    "software development lahore",
    "enterprise software pakistan",
    "custom software development pakistan",
    "digital transformation lahore",
    "IT solutions lahore",
    "enterprise software development",
    "custom software solutions",
    "digital transformation services",
    "cloud architecture consulting",
    "SaaS development",
    "web application development",
    "mobile app development",
    "enterprise applications",
    "software engineering services",
    "IT consulting"
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

export default function Page() {
  return (
    <>
      <FAQSchema />
      <Home />
    </>
  );
}

