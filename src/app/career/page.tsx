import BannerSection from "@/components/Career/BannerSection";
import CareerOpportunities from "@/components/Career/CareerOpportunities";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";
import type { Position } from "@/types/career";

const pageUrl = buildCanonicalUrl("/career");
const pageTitle = "Careers at Cyber Circus | Software Development Jobs Lahore, Pakistan";
const pageDescription =
  "Join a software development team that builds software that matters. At Cyber Circus in Lahore, Pakistan, you'll work on challenging projects, use modern tech stacks, and help businesses transform their operations. See our open engineering roles.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cyber circus careers",
    "cyber circus jobs lahore",
    "software engineering jobs pakistan",
    "enterprise software developer jobs lahore",
    "technology careers pakistan",
    "software development careers lahore",
    "engineering opportunities pakistan",
    "developer jobs lahore",
    "IT jobs pakistan"
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

const openPositions: Position[] = [
  {
    id: 1,
    title: "React.js Developer",
    department: "Frontend Engineering",
    location: "Remote / New York",
    type: "Full-time",
    description:
      "Join our frontend team to craft responsive, accessible enterprise applications powered by React, Next.js, and modern design systems."
  },
  {
    id: 2,
    title: "Java Developer",
    department: "Backend Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description:
      "Build scalable microservices, architect resilient APIs, and optimize cloud workloads using Java, Spring Boot, and modern DevOps practices."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin",
    type: "Full-time",
    description:
      "Design and automate CI/CD pipelines, manage Kubernetes clusters, and ensure observability, security, and performance across environments."
  }
];

const showOpenPositions = false;

export default function CareerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/career" }
        ]}
      />
      <BannerSection />
      <CareerOpportunities
        showOpenPositions={showOpenPositions}
        positions={openPositions}
      />
    </>
  );
}

