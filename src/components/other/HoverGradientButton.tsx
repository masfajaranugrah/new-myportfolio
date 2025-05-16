import { NextPage } from "next";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

interface Props {
  text: string;
}

const HoverGradientButton: NextPage<Props> = ({ text }) => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-primary-500 text-white flex items-center space-x-2"
    >
      <span>{text}</span>
    </HoverBorderGradient>
  );
};

export default HoverGradientButton;
