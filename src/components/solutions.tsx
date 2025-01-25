import BookIcon from "@/components/dynamicIcons/book";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations("About");

  const solutionsAkasia = [
    t("solution1"),
    t("solution2"),
    t("solution3"),
    t("solution4"),
    t("solution5"),
  ];
  return (
    <section className="gap-8 py-16 overflow-hidden">
      <div className="relative ">
        <div className="absolute top-0 right-0  w-[480px] h-[480px] pointer-events-none bg-gradient-to-b from-slate-500/25 via-slate-500/5 via-25% to-slate-500/0 to-75% rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-12 ">
          <div>
            <h2 className="uppercase text-3xl text-gray-900 font-bold lg:text-4xl dark:text-white !leading-[60px]">
              {t("provideSolutions")}
            </h2>
          </div>
          <div className="space-y-6 lg:space-y-10  ">
            {solutionsAkasia.map((item, index) => (
              <div className="flex items-center" key={index}>
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-5 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200">
                  <BookIcon />
                </span>
                <div className="ms-2 sm:ms-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
