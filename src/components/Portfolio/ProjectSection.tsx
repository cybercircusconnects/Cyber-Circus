"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform for Gemstone Business",
    description:
      "A sophisticated enterprise e-commerce platform for a luxury gemstone and jewelry business. Built with modern technologies to handle high-value transactions, inventory management, and customer certifications. Features seamless payment processing, real-time inventory tracking, and secure certificate generation for premium gemstones.",
    image: "/capitalgemologicallab.PNG",
    category: "web",
    technologies: ["Next.js", "Node.js", "AWS", "MongoDB", "Figma"],
    demoLink: "https://stones-project-frontend.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Solar System Visualizer Platform",
    description:
      "An interactive web application that helps homeowners visualize solar panel installations. Users can upload property images, adjust panel placement, and receive real-time estimates on energy production and cost savings. Features 3D modeling capabilities and integrates with weather data for accurate solar potential assessments.",
    image: "/solar-system.png",
    category: "web",
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
    demoLink: "https://solar-system-two-mu.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "GitCross Co-Working Space Platform",
    description:
      "A comprehensive platform for modern co-working spaces enabling users to browse available spaces, book desks or meeting rooms, and manage memberships. Features interactive space explorer, real-time availability calendars, and a community portal for networking opportunities among members.",
    image: "/gitx.png",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://gitcross.com",
    featured: false,
  },
  {
    id: 4,
    title: "Karepilot",
    description:
      "A comprehensive organization and venue management platform designed to streamline operations across multiple locations. Features include organization management, venue templates, map management, asset tracking, alerts & geofencing, and analytics. The system enables users to manage multiple venues across different organization types with real-time status tracking, contact management, and timezone support.",
    image: "/karepilot.png",
    category: "web",
    technologies: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Shadcn", "Redux Toolkit Query", "Tailwind CSS", "Flutter", "Figma"],
    demoLink: "https://karepilot-frontend.vercel.app/organizations/list",
    featured: true,
  },
];

const categories: string[] = ["all", ...Array.from(new Set(projects.map((project) => project.category)))];

const ProjectSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit mx-auto mb-6">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Enterprise Software Solutions Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We&apos;ve built everything from custom web platforms to mobile apps and enterprise systems. Take a look at some of the projects we&apos;re proud of—each one solved a real business challenge and delivered real results.
            </p>
          </div>
        </Fade>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 rounded-md transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => category === "all" || project.category === category)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {project.featured && (
                            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0">
                              Featured
                            </Badge>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <CardHeader className="flex-grow">
                          <CardTitle className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={`${project.id}-${tech}`}
                                variant="outline"
                                className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>

                        <CardFooter className="pt-4">
                          <Button
                            asChild
                            variant="default"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group"
                          >
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Eye className="h-4 w-4" />
                              View Live Project
                              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-16">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-base font-semibold"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

