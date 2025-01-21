import { JSX } from "react";

const AboutCards = (p: {
  title: string;
  description: string;
  iconCard: JSX.Element;
}) => {
  return (
    <div className="w-full lg:w-[50%] h-auto flex flex-col gap-6 items-start p-4 z-50 border rounded-3xl border-gray-300 dark:border-slate-500 backdrop-blur-sm	">
      <div className="flex flex-row gap-4 items-center justify-start border-b border-b-gray-300  dark:border-b-slate-500 w-full pb-3">
        {p.iconCard}
        <h3 className="">{p.title}</h3>
      </div>
      <div>
        <p className="">{p.description}</p>
      </div>
    </div>
  );
};

export default AboutCards;
