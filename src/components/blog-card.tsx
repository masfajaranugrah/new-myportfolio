import { Blog } from "@/types/blog";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogTitle from "./blog-title";

interface Props {
  blog: Blog;
}

const BlogCard: NextPage<Props> = ({ blog }) => {
  return (
    <Link
      href={blog.slug}
      className="col-span-1 flex flex-col gap-2 p-2 border border-transparent dark:hover:border-zinc-700 border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 transition-colors rounded-[35px] bg-zinc-100 dark:bg-zinc-900"
    >
      <div className="rounded-[30px] overflow-hidden border border-zinc-400 dark:border-zinc-800/50">
        <Image
          src={blog.metadata.cover}
          className="object-cover w-full h-full"
          width={1080}
          height={720}
          alt={blog.metadata.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <BlogTitle
          createdAt={blog.metadata.date.createdAt}
          length={blog.content.length}
          title={blog.metadata.title}
        />
        <div>
          <div
            // target="_blank"
            // href={blog.metadata.author.github}
            className="flex items-center gap-2"
          >
            <Image
              src={blog.metadata.author.github + ".png"}
              alt={blog.metadata.author.name}
              width={40}
              height={40}
              className="rounded-full w-14 h-14"
            />
            <div className="flex flex-col">
              <span>{blog.metadata.author.name}</span>
              <span className="text-zinc-400">{blog.metadata.author.role}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
