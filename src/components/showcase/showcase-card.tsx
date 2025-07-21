import { NextPage } from "next";
import Image from "next/image";
import { ShowcaseType } from "@/types/showcase";
import Link from "next/link";

interface Props {
  data: ShowcaseType;
}

const ShowcaseCard: NextPage<Props> = ({ data }) => {
  return (
    <Link
      href={data.url}
      target="_blank"
      className=" rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-colors border dark:border-zinc-800 p-4"
    >
      <div className="relative">
        <Image
          src={typeof data.image === "string" ? data.image : data.image.src}
          width={1000}
          height={600}
          alt={data.alt}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Tags */}
        <div className="absolute top-0 right-0 m-2 flex flex-wrap gap-1">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Type Badge */}
        <span
          className={`absolute bottom-0 left-0 text-white text-xs font-bold px-2 py-1 rounded-tr-md ${
            data.type === "backend"
              ? "bg-green-500"
              : data.type === "fullstack"
              ? "bg-yellow-500"
              : "bg-purple-500"
          }`}
        >
          {data.type === "backend"
            ? "Backend/API"
            : data.type === "fullstack"
            ? "Full Stack"
            : "Frontend"}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {data.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 mb-4">
          {data.subtitle}
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
          View Project
          <i className="fas fa-arrow-right ml-2"></i>
        </div>
      </div>
    </Link>
  );
};

export default ShowcaseCard;
