import { MetadataRoute } from "next";
import { Blog } from "@/types/blog";
import { getBlogs } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPostsSitemap = await generateBlogPostsSitemapObjects();
  return [
    {
      url: "https://josumaru.my.id",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://josumaru.my.id/blog",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    ...blogPostsSitemap
  ];
}


const generateBlogPostsSitemapObjects = async () => {
  const data = await getBlogs()

  const blogs = data.map((blog: Blog) => ({
    url: `https://josumaru.my.id/${blog.slug}`,
    lastModified: new Date(blog.metadata.date.createdAt),
    changeFrequency: "always" as const,
    priority: 0.9,
  }));
  return blogs;
};
