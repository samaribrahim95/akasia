import { Fragment } from "react";

const BreadCrumb = ({ data }: { data: { text: string; link: string }[] }) => {
  return (
    <div className="px-6 py-2 flex flex-row gap-2 bg-gray-400/30 dark:bg-gray-100/10 backdrop-blur-xl rounded-full z-20 mb-6">
      {data.map((d, index) => (
        <Fragment key={index}>
          <a href={d.link}>{d.text}</a>
          {index !== data.length - 1 && <span>{">"}</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
