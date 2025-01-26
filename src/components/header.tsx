import CircleTrueIcon from "@/components/dynamicIcons/circleTrue";
import AwardIcon from "@/components/dynamicIcons/award";
import FileTrueIcon from "@/components/dynamicIcons/fileTrue";
import { useTranslations } from "next-intl";
import BluredBg from "@/components/blueredBg";
import Link from "next/link";
import WaveAnimation from "./waves";
import Image from "next/image";

import CMA from "../assets/images/cma.svg";
import SCB from "../assets/images/scb.svg";
import screen1 from "../assets/images/screen-1-left.png";

const Header = () => {
  const t = useTranslations("Home");

  return (
    <div className="relative min-h-svh flex flex-col justify-between pb-8">
      <BluredBg />
      <div className="grid flex-1 mb-6">
        <div className="flex items-center justify-center">
          <div>
            <WaveAnimation />
            <div className="mt-8 text-center">
              <h1 className="font-bold text-2xl	mb-4">{t("title")}</h1>
              <p className="text-md font-light max-w-lg mx-auto">
                {t("description")}
              </p>
            </div>
            <div className="mt-8 mb-3">
              {/* <div className="flex gap-6 mb-4 items-center justify-center">
                <Link
                  href="https://www.instagram.com/get_akasia"
                  className="px-4 py-2.5 "
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="https://twitter.com/get_akasia"
                  className="px-4 py-2.5"
                >
                  <XIcon />
                </Link>
              </div> */}
              <div className="text-center">
                <Link
                  href="/about"
                  className="text-sm font-noto font-semibold leading-6 hover:mr-2"
                >
                  {t("learnMore")}
                  <span className="inline-block ltr:rotate-180 mx-2">←</span>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-bottom">
              <div className="gap-8 grid md:grid-cols-3 mx-auto px-6 z-30">
                <div>
                  <Image src={screen1} alt="" className="max-h-52 w-auto ms-auto" />
                </div>
                <div className="flex flex-col justify-center md:col-span-2 ">
                  <div className="flex flex-row justify-start mb-8">
                    <div className="h-14 mx-1 py-2 px-4 bg-gray-100 rounded-xl dark:bg-white/[.075] flex items-center justify-center cursor-pointer">
                      <Image
                        src={CMA}
                        alt=""
                        className="max-h-full"
                      />
                    </div>
                    <div className="h-14 py-2 px-4 mx-1 bg-gray-100 rounded-xl dark:bg-white/[.075] flex items-center justify-center cursor-pointer">
                      <Image src={SCB} alt="" className="max-h-full" />
                    </div>
                  </div>
                  <div className="flex flex-col mb-6">
                    <p className="flex items-center mb-3">
                      <CircleTrueIcon />
                      <span className="text-sm mx-2 font-medium text-gray-800 dark:text-gray-200">
                        {t("compliantIslamic")}
                      </span>
                    </p>
                    <p className="flex items-center mb-3">
                      <AwardIcon />
                      <span className="text-sm mx-2 font-medium text-gray-800 dark:text-gray-200">
                        {t("transparency")}
                      </span>
                    </p>
                  </div>
                  <div className="text-center md:text-start">
                    <button className="bg-gradient-to-bl from-slate-500 to-indigo-300 hover:bg-blue-200 text-white py-3 px-4 inline-flex items-center rounded-full">
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
