"use client";

import Script from "next/script";
import { buildCanonicalUrl } from "@/lib/seo";

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Cyber Circus a music or entertainment company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Cyber Circus is NOT a music or entertainment company. We are a software development company based in Lahore, Pakistan. We specialize in enterprise software development, custom software solutions, and digital transformation services for businesses."
        }
      },
      {
        "@type": "Question",
        name: "What does Cyber Circus do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cyber Circus is a software development company that builds enterprise software solutions. We help businesses transform their operations through custom software development, cloud architecture, mobile app development, and digital transformation consulting. We are located in Lahore, Pakistan and serve clients worldwide."
        }
      },
      {
        "@type": "Question",
        name: "Where is Cyber Circus located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cyber Circus is located in Lahore, Pakistan. Our office is at J2 Block Block J 2 Phase 2 Johar Town, Lahore, 54782, Punjab, Pakistan. We provide software development services to clients globally."
        }
      },
      {
        "@type": "Question",
        name: "What services does Cyber Circus offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cyber Circus offers comprehensive software development services including enterprise web development, mobile app development (iOS and Android), cloud architecture and DevOps, digital transformation consulting, UI/UX design, quality assurance and testing, enterprise integration services, and data engineering solutions."
        }
      },
      {
        "@type": "Question",
        name: "Is Cyber Circus the same as the music group Cyber Circus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we are completely different. Cyber Circus (cybercircusconnect.com) is a software development company in Lahore, Pakistan. We are NOT affiliated with any music or entertainment groups named Cyber Circus. We build enterprise software solutions for businesses."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact Cyber Circus software company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Cyber Circus software development company by email at info@cybercircusconnect.com or by phone at +92-302-9825213. Visit our contact page at cybercircusconnect.com/contact for more information. We are located in Lahore, Pakistan."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
};

export default FAQSchema;

