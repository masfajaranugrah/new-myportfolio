import { NextPage } from "next";
import ShowcaseCard from "./showcase-card";
import { ShowcaseType } from "@/types/showcase";
import SectionTitle from "../common/section-title";
import { ShowcaseImageConstants } from "@/constants/showcase-image-constants";

const Showcase: NextPage = ({}) => {
  const data: ShowcaseType[] = [
    {
      subtitle: "Lompatkelas.com is a business and intellectual property consultant since 2015.",
      alt: "Lompat kelas",
      url: "https://lompatkelas.vercel.app",
      image: ShowcaseImageConstants.demo1,
      title: "Lompat Kelas",
      tags: ["React", "CSS Tailwind"],
    },
    {
      subtitle:
  "Designed to strengthen branding and make it easier for potential clients to recognize and access the services offered.",
      alt: "Company Profile",
      url: "https://demo1-lompatkelas.vercel.app",
      image: ShowcaseImageConstants.demo2,
      title: "Company Profile",
     tags: ["React", "CSS Tailwind"],
    },
    {
      subtitle:
        "is designed to facilitate centralized management of client and service data.",
      alt: "Dashboard",
      url: "https://github.com/masfajaranugrah/philiadash",
      image: ShowcaseImageConstants.demo3,
      title: "Dashboard",
      tags: ["Laravel", "FullCalendar.io", "Bootstrap"],
    },
  
    {
      subtitle:
  "Designed to strengthen branding and make it easier for potential clients to recognize and access the services offered.",
      alt: "Company Profile",
      url: "https://paten-masfajaranugrahs-projects.vercel.app",
      image: ShowcaseImageConstants.demo5,
      title: "Company profile",
      tags: ["React", "CSS Tailwind"],
    },
     {
      subtitle:
"Philia Adventure Land's website is a company profile featuring rides, facilities, and adventure tour packages.",
      alt: "Philia Adventure Land",
      url: "https://www.philiadventureland.com",
      image: ShowcaseImageConstants.demo6,
      title: "Philia Adventure Land",
      tags: ["Next.js", "CSS Tailwind"],
    },
   {
      subtitle:
"Philia Adventure Land's website is a company profile featuring rides, facilities, and adventure tour packages.",
      alt: "Philia Adventure Land",
      url: "https://github.com/masfajaranugrah/up_philia",
      image: ShowcaseImageConstants.demo7,
      title: "Philia Adventure Land",
      tags: ["Laravel", "Bootstrap"],
    },
    {
      subtitle:
"functions as an online marketplace, offering a platform where sellers and buyers can conduct transactions..",
      alt: "Marketplace",
      url: "https://github.com/masfajaranugrah/up_philia",
      image: ShowcaseImageConstants.demo8,
      title: "Marketplace",
      tags: ["React Js", "CSS Tailwind", "Stripe", "Express Js"],
    },
 
    
  ];

  return (
    <div id="showcase" className="items-center flex justify-center flex-col">
      <SectionTitle
        data={{ title: "Hall of Fame", subtile: "Projects I have worked on" }}
      />
      <div className="container px-3">
        {/* <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
            {data.map((data, index) => (
              <ShowcaseCard key={index} data={data} />
            ))}
          </div>
          <div className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
            {data.map((data, index) => (
              <ShowcaseCard key={index} data={data} />
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((data, index) => (
            <ShowcaseCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
