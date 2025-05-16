"use client";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const GithubActivity: NextPage = ({}) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(theme === "dark");
    setIsLoading(false);
  }, [theme]);
  if (isLoading)
    return (
      <div className="flex max-md:h-[200px] flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
    );

  return (
    <div className="relative w-full h-full max-[380px]:h-[100px] max-[474px]:h-[140px] max-[620px]:h-[150px] max-[764px]:h-[200px]">
      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=masfajaranugrah&radius=16&theme=redical&area=true&order=5&hide_border=true&hide_title=true&bg_color=transparent&line=fb7185&point=be123c&color=0d1117"
        height="300"
        alt="activity-graph graph"
        width={300}
        className="grayscale hover:grayscale-0 object-fill duration-500 h-full w-full absolute"
        style={{ display: !isDark ? "block" : "none" }}
      />
      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=masfajaranugrah&radius=16&theme=redical&area=true&order=5&hide_border=true&hide_title=true&bg_color=transparent&line=fb7185&point=be123c&color=ffffff"
        height="300"
        alt="activity-graph graph"
        width={300}
        style={{ display: isDark ? "block" : "none" }}
        className="grayscale hover:grayscale-0 object-cover duration-500 h-full w-full absolute"
      />
    </div>
  );
};

export default GithubActivity;
