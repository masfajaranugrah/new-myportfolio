"use client";
import { NextPage } from "next";

interface Props {
  createdAt: string;
  length: number;
  title: string;
}

const BlogTitle: NextPage<Props> = ({ createdAt, length, title }) => {
  return (
    <>
      <p className="text-zinc-400">
        {createdAt}・<span>{Math.ceil(length / 30 / 60)} Minutes reading</span>
      </p>
      <p className="line-clamp-2">{title}</p>
    </>
  );
};

export default BlogTitle;
