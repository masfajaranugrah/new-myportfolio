 
      "use client"
import { NextPage } from "next";
import {useState} from 'react'
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
      type: "fullstack",
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
"functions as an online marketplace, offering a platform where sellers and buyers can conduct transactions..",
      alt: "Marketplace",
      url: "https://github.com/masfajaranugrah/marketplace",
      image: ShowcaseImageConstants.demo8,
      title: "Marketplace",
      tags: ["React Js", "CSS Tailwind", "Stripe", "Express Js"],
      type: "fullstack",
    },
  ];
export const Showcase: NextPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  const typeColors: Record<string, string> = {
    all: "bg-blue-100 text-blue-600",
    frontend: "bg-purple-100 text-purple-600",
    backend: "bg-green-100 text-green-600",
    fullstack: "bg-yellow-100 text-yellow-600",
  };

  return (
    <section id="showcase" className="py-16 px-4  ">
      <div className="max-w-7xl mx-auto">
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
  onClick={() => setFilter(type)}
  className={`px-6 py-2 rounded-full font-medium transition-all ${
    filter === type
      ? typeColors[type]
      : "bg-gray-100   text-gray-600 dark:text-gray-800"
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
  {filteredProjects.length === 0 ? (
    <div className="col-span-full text-center text-gray-500 dark:text-gray-300">
      <p><i className="fas fa-exclamation-circle mr-2" />No projects found in this category.</p>
    </div>
  ) : (
    filteredProjects.map((project, index) => (
      <ShowcaseCard key={index} data={project} />
    ))
  )}
</div>

      </div>
    </section>
  );
};
