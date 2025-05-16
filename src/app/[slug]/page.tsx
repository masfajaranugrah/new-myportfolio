import { getBlogs } from "@/lib/blog";
import { useMDXComponents } from "@/mdx-components";
import { NextPage } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import Link from "next/link";
import BlogCard from "@/components/blog-card";
import ReadingTime from "@/components/reading-time";
import Head from "next/head";
import { ChevronLeft } from "lucide-react";
import SectionTitle from "@/components/common/section-title";
import BlogBreadcrumb from "@/components/blog/breadcrumb";
import AdBanner from "@/components/ad/ad-banner";

interface Props {
  params: Promise<{ slug: string }>;
}

const extractTOC = async (content: string) => {
  const headings: { id: string; text: string; level: number }[] = [];

  await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "Table of Contents", tight: true })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(() => (tree) => {
      visit(tree, "element", (node: any) => {
        if (
          ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName) &&
          node.properties?.id
        ) {
          headings.push({
            id: node.properties.id as string,
            text: node.children[0]?.value || "",
            level: parseInt(node.tagName[1], 10),
          });
        }
      });
    })
    .use(rehypeStringify)
    .process(content);

  return headings;
};

const Page: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug == slug);
  const toc = await extractTOC(blog?.content ?? "");

  return (
    <section className="w-full flex items-center justify-center flex-col">
      <Head>
        <title>{blog?.metadata.title}</title>
      </Head>
      <div className="flex gap-4 container">
        <div className="w-1/12 lg:block hidden mt-28">
          <Link
            href={"/blog"}
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft />
            <p>Back</p>
          </Link>
        </div>
        <div className="w-full lg:w-8/12 h-screen no-scrollbar overflow-y-scroll px-2">
          <div className="flex gap-4 flex-col mt-28">
            <h1 className="text-xl md:text-4xl">{blog?.metadata.title}</h1>
            <ReadingTime
              createdAt={blog?.metadata.date.createdAt}
              length={blog?.content.length}
            />
            <BlogBreadcrumb slug={blog?.slug ?? ""} />
            <Link
              href={blog?.metadata.author.github ?? ""}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Image
                src={`${blog?.metadata.author.github}.png`}
                alt={blog?.metadata.author.name ?? ""}
                width={120}
                height={120}
                className="rounded-full w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="font-medium">
                  {blog?.metadata.author.name}
                </span>
                <span className="text-zinc-400">
                  {blog?.metadata.author.role}
                </span>
              </div>
            </Link>
          </div>
          <MDXRemote
            source={blog?.content ?? ""}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight, rehypeSlug],
                remarkPlugins: [remarkToc],
              },
            }}
            components={useMDXComponents({})}
          />
          <div className="flex items-center gap-2"></div>
          <SectionTitle
            data={{
              title: "Recommendation",
              subtile: "You might like this post",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 container w-full gap-2">
            {blogs.slice(0, 2).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
        <div className="left-0 mt-28 px-4 sticky top-0 w-3/12 lg:block hidden">
          <div>
            <h2 className="text-lg font-semibold mb-2">On this page</h2>
            <ul className="text-sm text-zinc-400">
              {toc.map((item) => (
                <li
                  key={item.id}
                  style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
                >
                  <Link
                    href={`#${item.id}`}
                    scroll={true}
                    className="hover:text-white"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 hover:cursor-pointer">
              {blog?.metadata.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 mx-1 bg-zinc-300 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-600 border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </p>
            <AdBanner
              adFormat="auto"
              dataFullWidthResponsive={true}
              adSlot={process.env.NEXT_PUBLIC_AD_SLOT}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
