import { NextPage } from "next";

interface Props {
  data: {
    title: string;
    subtile: string;
  };
}

const SectionTitle: NextPage<Props> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20">
      <p className="text-xl md:text-2xl font-medium">{data.title}</p>
      <p className="text-md md:text-xl text-muted-foreground text-center">
        {data.subtile}
      </p>
    </div>
  );
};

export default SectionTitle;
