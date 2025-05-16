import { getBlogs } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug == params.slug);

  if (!blog) return;

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    openGraph: {
      title: blog.metadata.title,
      description: blog.metadata.description,
      url: blog.metadata.author.website,
      type: "article",
      images: [
        {
          url: blog.metadata.cover,
          width: 1200,
          height: 630,
          alt: blog.metadata.title,
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
