import { NextPage } from "next";

interface Props {
  createdAt?: string;
  length?: number;
}

const ReadingTime: NextPage<Props> = ({ createdAt, length = 0 }) => {
  return (
    <>
      <p className="text-zinc-400">
        {createdAt}・<span>{Math.ceil(length / 30 / 60)} Minutes reading</span>
      </p>
    </>
  );
};

export default ReadingTime;
