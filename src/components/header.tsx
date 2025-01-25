import CircleTrueIcon from "@/components/dynamicIcons/circleTrue";
import AwardIcon from "@/components/dynamicIcons/award";
import FileTrueIcon from "@/components/dynamicIcons/fileTrue";
import InstagramIcon from "@/components/dynamicIcons/instagram";
import XIcon from "@/components/dynamicIcons/x";
import { useTranslations } from "next-intl";
import BluredBg from "@/components/blueredBg";
import Link from "next/link";
import WaveAnimation from "./waves";

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
            <div className="mt-8 mb-8">
              <div className="flex gap-6 mb-4 items-center justify-center">
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
              </div>
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
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:place-items-center md:justify-between gap-4">
        <p className="flex items-center">
          <FileTrueIcon />
          <span className="text-sm mx-2 font-medium">{t("licensedByFinancial")}</span>
        </p>
        <p className="flex items-center">
          <CircleTrueIcon />
          <span className="text-sm mx-2 font-medium">{t("compliantIslamic")}</span>
        </p>
        <p className="flex items-center">
          <AwardIcon />
          <span className="text-sm mx-2 font-medium">{t("transparency")}</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
