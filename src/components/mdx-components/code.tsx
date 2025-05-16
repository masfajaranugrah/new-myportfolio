import { NextPage } from "next";

const Code: NextPage = ({ ...props }) => {
  return <code {...props} className="font-mono dark:text-white text-black"/>;
};

export default Code;
