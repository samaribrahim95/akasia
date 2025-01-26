import { Fragment } from "react";
import LeftChevronIcon from "../components/dynamicIcons/leftChevron"

const BreadCrumb = ({ data }: { data: { text: string; link: string }[] }) => {
  return (
    <div className="px-6 py-2 flex flex-row gap-2 bg-gray-400/10 dark:bg-gray-100/10 backdrop-blur-xl rounded-full z-20 mb-8 font-light dark:text-gray-300 text-gray-800">
      {
        data.map((d, index) =>
          <Fragment key={index}>
            <a href={d.link} className="text-xxs sm:text-xs md:text-sm">{d.text}</a>
            {
              index !== data.length - 1 && <span><LeftChevronIcon /></span>
            }
          </Fragment>)
      }
    </div>
  );
};

export default BreadCrumb;
