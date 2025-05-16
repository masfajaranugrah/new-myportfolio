import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const dir = path.join(process.cwd(), "src/markdown");

export const getBlogs = async (): Promise<Blog[]> => {
  const files = fs.readdirSync(dir);
  const blogs: Blog[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const filePath = path.join(dir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: metadata, content } = matter(fileContents);
    return {
      slug,
      metadata: {
        title: metadata.title || "",
        description: metadata.description || "",
        date: {
          createdAt: metadata.date?.createdAt || "",
          updatedAt: metadata.date?.updatedAt || "",
        },
        tags: metadata.tags || [],
        cover: metadata.cover || "",
        author: {
          name: metadata.author?.name || "",
          role: metadata.author?.role || "",
          github: metadata.author?.github || "",
          twitter: metadata.author?.twitter || "",
          website: metadata.author?.website || "",
          instagram: metadata.author?.instagram || "",
        },
      },
      content,
    };
  });
  blogs.sort((a, b) => {
    const dateA = new Date(a.metadata.date.createdAt).getTime();
    const dateB = new Date(b.metadata.date.createdAt).getTime();
    return dateB - dateA;
  });
  return blogs;
};
