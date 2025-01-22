"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import privacyImage from "../../../assets/images/privacy.jpg";

const Privacy = () => {
  const t = useTranslations("Privacy");
  return (
    <div>
      <h1 className="">{t("title")}</h1>
      <Image
        src={privacyImage}
        className="w-full object-cover rounded-xl mt-5"
        alt="Privacy Policy Akasia"
      />
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-2">{t("Overview")}</h2>
        <p className="mb-4">{t("OverviewDes")}</p>
        <h2 className="text-2xl font-bold mb-2">{t("Introduction")}</h2>
        <p className="mb-4">{t("IntroductionDes")}</p>
        <h2 className="text-2xl font-bold mb-2">
          {t("InformationCollection")}
        </h2>
        <p className="mb-4">{t("InformationCollectionDes")}</p>
        <p className="mb-4">{t("InformationCollectionDes2")}</p>
        <h2 className="text-2xl font-bold mb-2">
          {t("InformationRegardingChildren")}
        </h2>
        <p className="mb-4">{t("InformationRegardingChildrenDes")}</p>
        <h2 className="text-2xl font-bold mb-2">{t("OtherWays")}</h2>
        <p className="mb-4">{t("OtherWaysDes")}</p>
        <h2 className="text-2xl font-bold mb-2">{t("UseInformation")} </h2>
        <p className="mb-4">{t("UseInformationDes")}</p>
        <h2 className="text-2xl font-bold mb-2">{t("ChangesPrivacyPolicy")}</h2>
        <p className="mb-4">{t("ChangesPrivacyPolicyDes")}</p>
        <h2 className="text-2xl font-bold mb-2"> {t("ContactInformation")} </h2>
        <p className="mb-4">
          {t("ContactInformationDes")}
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
