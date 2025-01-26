import CircleTrueIcon from "@/components/dynamicIcons/circleTrue";
import AwardIcon from "@/components/dynamicIcons/award";
import { useTranslations } from "next-intl";
import BluredBg from "@/components/blueredBg";
import Link from "next/link";
import WaveAnimation from "./waves";
import Image from "next/image";

import CMA from "../assets/images/cma.svg";
import SCB from "../assets/images/scb.svg";
import screen1 from "../assets/images/screen-1.png";

const Header = () => {
  const t = useTranslations("Home");

  return (
    <div className="relative min-h-svh flex flex-col justify-between pt-16 pb-8">
      <BluredBg />
      <div className="grid flex-1 mb-6">
        <div className="flex items-center justify-center">
          <div>
            <WaveAnimation />
            <div className="mt-8 text-center">
              <h1 className="font-bold text-zinc-900 text-center mb-4 dark:text-white">
                {t("title")}
              </h1>
              <p className="text-md font-light max-w-lg mx-auto">
                {t("description")}
              </p>
            </div>
            <div className="mt-5 mb-8">
              <div className="text-center">
                <Link
                  href="/about"
                  className="text-sm font-noto font-semibold leading-6 hover:ms-2"
                >
                  {t("learnMore")}
                  <span className="inline-block ltr:rotate-180 mx-2">←</span>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-bottom">
              <div className="gap-8 grid md:grid-cols-3 mx-auto px-6 z-30">
                <div>
                  <Image
                    src={screen1}
                    alt=""
                    className="max-h-[300px] w-auto mx-auto"
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-2 ">
                  <div className="flex flex-col md:flex-row justify-start mb-8">
                    <div className="h-14 mx-1 py-3 px-4 bg-gray-100 rounded-xl dark:bg-white/[.60] flex items-center justify-center cursor-pointer mb-4">
                      <Image src={CMA} alt="" className="px-2 max-w-[200px]" />
                    </div>
                    <div className="h-14 py-2 px-4 mx-1 bg-gray-100 rounded-xl dark:bg-white/[.60] flex items-center justify-center cursor-pointer">
                      <Image src={SCB} alt="" className="px-2 max-w-[175px]" />
                    </div>
                  </div>
                  <div className="flex flex-col mb-6">
                    <p className="flex items-center mb-3">
                      <CircleTrueIcon />
                      <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                        {t("compliantIslamic")}
                      </span>
                    </p>
                    <p className="flex items-center mb-3">
                      <AwardIcon />
                      <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                        {t("transparency")}
                      </span>
                    </p>
                  </div>
                  <div className="text-center md:text-start">
                    <button className="bg-gradient-to-bl from-slate-500 to-indigo-300 hover:bg-blue-200 text-white py-2 px-4 inline-flex items-center rounded-full">
                      <svg
                        className="fill-current w-4 h-4 mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span>{t("downloadApp")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
