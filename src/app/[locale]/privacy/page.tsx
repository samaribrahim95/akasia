"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import BluredBg from "@/components/blueredBg";

import BreadCrumb from "@/components/breadcrumb";
import privacyImage from "../../../assets/images/privacy.jpg";

const Privacy = () => {
  const t = useTranslations();
  return (
    <div className="mt-[100px] relative min-h-svh flex flex-col justify-between">
      <BreadCrumb
        data={[
          {
            link: "/",
            text: t("Home.siteName"),
          },
          {
            link: "#",
            text: t("Privacy.title"),
          },
        ]}
      />

      <h1 className="">{t("Privacy.title")}</h1>
      <Image
        src={privacyImage}
        className="w-full object-cover rounded-xl mt-5 animate-fade-in"
        alt="Privacy Policy Akasia"
      />
      <BluredBg />
      <section className="py-16 gap-8 md:gap-12 animate-slide-in-top">
        <h2 className="mb-3">{t("Privacy.Overview")}</h2>
        <p className="mb-6">{t("Privacy.OverviewDes")}</p>
        <h2 className="mb-3">{t("Privacy.Introduction")}</h2>
        <p className="mb-6">{t("Privacy.IntroductionDes")}</p>
        <h2 className="mb-3">{t("Privacy.InformationCollection")}</h2>
        <p className="mb-6">{t("Privacy.InformationCollectionDes")}</p>
        <p className="mb-6">{t("Privacy.InformationCollectionDes2")}</p>
        <h2 className="mb-3">{t("Privacy.InformationRegardingChildren")}</h2>
        <p className="mb-6">{t("Privacy.InformationRegardingChildrenDes")}</p>
        <h2 className="mb-3">{t("Privacy.OtherWays")}</h2>
        <p className="mb-6">{t("Privacy.OtherWaysDes")}</p>
        <h2 className="mb-3">{t("Privacy.UseInformation")} </h2>
        <p className="mb-6">{t("Privacy.UseInformationDes")}</p>
        <h2 className="mb-3">{t("Privacy.ChangesPrivacyPolicy")}</h2>
        <p className="mb-6">{t("Privacy.ChangesPrivacyPolicyDes")}</p>
        <h2 className="mb-3"> {t("Privacy.ContactInformation")} </h2>
        <p className="mb-6">
          {t("Privacy.ContactInformationDes")}
          <Link
            href="mailto:info@getakasia.com"
            className="mt-2 text-sm text-gray-900  dark:text-gray-400"
          >
            info@getakasia.com
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Privacy;
