"use client";

import { NextPage } from "next";
import { useState, useRef, useLayoutEffect } from "react";
import ShowcaseCard from "./showcase-card";
import { ShowcaseType } from "@/types/showcase";
import SectionTitle from "../common/section-title";
import { ShowcaseImageConstants } from "@/constants/showcase-image-constants";

const projects: ShowcaseType[] = [
  {
    subtitle: "Lompatkelas.com is a business and intellectual property consultant since 2015.",
    alt: "Lompat kelas",
    url: "https://lompatkelas.vercel.app",
    image: ShowcaseImageConstants.demo1,
    title: "Lompat Kelas",
    tags: ["React", "CSS Tailwind"],
    type: "frontend",
  },
  {
    subtitle:
      "Designed to strengthen branding and make it easier for potential clients to recognize and access the services offered.",
    alt: "Company Profile",
    url: "https://demo1-lompatkelas.vercel.app",
    image: ShowcaseImageConstants.demo2,
    title: "Company Profile",
    tags: ["React", "CSS Tailwind"],
    type: "frontend",
  },
  {
    subtitle:
      "is designed to facilitate centralized management of client and service data.",
    alt: "Dashboard",
    url: "https://github.com/masfajaranugrah/philiadash",
    image: ShowcaseImageConstants.demo3,
    title: "Dashboard",
    tags: ["Laravel", "FullCalendar.io", "Bootstrap"],
    type: "fullstack",
  },

  {
    subtitle:
      "Designed to strengthen branding and make it easier for potential clients to recognize and access the services offered.",
    alt: "Company Profile",
    url: "https://paten-masfajaranugrahs-projects.vercel.app",
    image: ShowcaseImageConstants.demo5,
    title: "Company profile",
    tags: ["React", "CSS Tailwind"],
    type: "frontend",
  },
  {
    subtitle:
      "Philia Adventure Land's website is a company profile featuring rides, facilities, and adventure tour packages.",
    alt: "Philia Adventure Land",
    url: "https://www.philiadventureland.com",
    image: ShowcaseImageConstants.demo6,
    title: "Philia Adventure Land",
    tags: ["Next.js", "CSS Tailwind"],
    type: "fullstack",
  },
  {
    subtitle:
      "Philia Adventure Land's website is a company profile featuring rides, facilities, and adventure tour packages.",
    alt: "Philia Adventure Land",
    url: "https://github.com/masfajaranugrah/up_philia",
    image: ShowcaseImageConstants.demo7,
    title: "Philia Adventure Land",
    tags: ["Laravel", "Bootstrap"],
    type: "fullstack",
  },
  {
    subtitle:
      "functions as an online marketplace, offering a platform where sellers and buyers can conduct transactions.",
    alt: "Marketplace",
    url: "https://github.com/masfajaranugrah/marketplace",
    image: ShowcaseImageConstants.demo8,
    title: "Marketplace",
    tags: ["React Js", "CSS Tailwind", "Stripe", "Express Js"],
    type: "fullstack",
  },
  {
  subtitle: "RESTful API backend for a marketplace platform, built with Node.js and documented using Swagger.",
  alt: "Api App Course",
  url: "https://github.com/App-Course/backend",
  image: ShowcaseImageConstants.demo9,
  title: "Api App Course",
  tags: ["Node Js", "Express js", "Swagger"],
  type: "backend",
    },

{
  subtitle: "Professional website and mobile app development services—fast, responsive, and reliable.",
  alt: "Website and Mobile App Development Services",
  url: "https://joki.fajaranugrahdev.my.id",
  image: ShowcaseImageConstants.demo10,
  title: "Website & Mobile App Development Services",
  tags: ["Next.js", "Flutter", "Kotlin"],
  type: "frontend",
},
{
  subtitle: "RESTful API backend for an e-commerce platform, built with Node.js and Express.js using Clean Architecture for scalable and maintainable code, documented with Swagger.",
  alt: "API E-Commerce Clean Architecture",
  url: "https://github.com/masfajaranugrah/E-commerce",
  image: ShowcaseImageConstants.demo9,
  title: "API E-Commerce (Clean Architecture)",
  tags: ["Node.js", "Express.js", "Swagger", "Clean Architecture"],
  type: "backend",
}
  ];

const itemsPerPage = 6;

export const Showcase: NextPage = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const typeColors: Record<string, string> = {
    all: "bg-blue-100 text-blue-600",
    frontend: "bg-purple-100 text-purple-600",
    backend: "bg-green-100 text-green-600",
    fullstack: "bg-yellow-100 text-yellow-600",
  };

  const handleFilter = (type: string) => {
    setFilter(type);
    setCurrentPage(1);
  };

  return (
    <section id="showcase" className="py-16 px-4">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionTitle
            data={{
              title: "Hall of Fame",
              subtile: "Projects I have worked on",
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {["all", "fullstack", "frontend", "backend"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === type
                  ? typeColors[type]
                  : "bg-gray-100 text-gray-600 dark:text-gray-800"
              }`}
            >
              <i
                className={`fas ${
                  type === "all"
                    ? "fa-layer-group"
                    : type === "frontend"
                    ? "fa-laptop-code"
                    : type === "backend"
                    ? "fa-server"
                    : "fa-code-branch"
                } mr-2`}
              ></i>
              {type === "all"
                ? "All Projects"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-300">
              <p>
                <i className="fas fa-exclamation-circle mr-2" />
                No projects found in this category.
              </p>
            </div>
          ) : (
            currentProjects.map((project, index) => (
              <ShowcaseCard key={index} data={project} />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages >= 1 && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-[10px] transition-all font-medium ${
                  currentPage === i + 1
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};