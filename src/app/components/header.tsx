import CircleTrueIcon from "@/components/dynamicIcons/circleTrue";
import AwardIcon from "@/components/dynamicIcons/award";
import FileTrueIcon from "@/components/dynamicIcons/fileTrue";
import InstagramIcon from "@/components/dynamicIcons/instagram";
import XIcon from "@/components/dynamicIcons/x";
import { useTranslations } from "next-intl";

const Header = () => {
  const t= useTranslations('Home')
  return (
    <div className="min-h-svh">
      <div className="relative gda-section-akasia  isolate h-[calc(100svh-10svh)] flex flex-col items-center justify-center">
        <div
          className="absolute inset-x-0 -top-40  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="gradient-box relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]   sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          <div className="gradient-box relative left-[calc(50%-30rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="w-full gda-section-child-empty">
          <div className="h-auto w-full flex flex-col items-center justify-center isLoaded">
            <canvas
              id="gradient-canvas"
              data-js-darken-top="true"
              data-transition-in="true"
              width="983"
              height="600"
              className="isLoaded"
            ></canvas>
          </div>
          <div className="mt-8 h-auto w-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-zinc-900 text-center">{t('title')}</h1>
            <p className="text-md font-light text-center max-w-[500px]">{t('description')}</p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8  justify-center items-center mt-8  mb-8">
            <div className="flex flex-1 justify-end">
              <div className="flex sm:flex-row gap-6 z-20">
                <a
                  href="https://www.instagram.com/get_akasia"
                  className="px-4 py-2.5 "
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/get_akasia"
                  className="px-4 py-2.5"
                >
                  <XIcon />
                </a>
              </div>
            </div>
            <a
              href="/about"
              className="text-sm font-noto font-semibold leading-6 hover:mr-2"
            >
              {t('learnMore')}<span aria-hidden="true">←</span>
            </a>
          </div>
          <div className="sm:absolute bottom-0 left-6 right-6 mx-auto max-w-[1080px]  grid grid-cols-2 md:grid-cols-3 md:place-items-center gap-6 lg:gap-12 ">
            <p className="flex items-center ">
              <FileTrueIcon />
              <span className="mx-2 font-medium">{t('licensedByFinancial')}</span>
            </p>
            <p className="flex items-center">
              <CircleTrueIcon />
              <span className="mx-2 font-medium">{t('compliantIslamic')}</span>
            </p>
            <p className="flex items-center text-gray-700 dark:text-gray-200">
              <AwardIcon />
              <span className="mx-2 font-medium">{t('transparency')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
