import { NextPage } from "next";

const A: NextPage = ({ ...props }) => {
  return (
    <a {...props} className="text-[#52A8FF] hover:underline" target="_blank" />
  );
};

export default A;
