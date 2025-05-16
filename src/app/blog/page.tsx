import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/blog";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const blogs = await getBlogs();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid mx-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-4 mt-28">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.slug} />
        ))}
      </div>
    </div>
  );
};

export default Page;
