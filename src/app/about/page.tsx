"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import aboutImg from "../../assets/images/about.jpg";
import aboutImg2 from "../../assets/images/about-2.jpg";

import MissionIcon from "@/components/dynamicIcons/mission";
import VisionIcon from "@/components/dynamicIcons/vision";

import RobotIcon from "@/components/dynamicIcons/robot";
import LikeIcon from "@/components/dynamicIcons/like";
import BookIcon from "@/components/dynamicIcons/book";
import UsersIcon from "@/components/dynamicIcons/users";
import CheckIcon from "@/components/dynamicIcons/check";

import AboutCards from "../components/aboutCards";

// const [locale, setLocale] = useState<string>();

const About = () => {
  const t = useTranslations("About");

  const aboutAkasia = [
    {
      title: t("ourVision"),
      description: t("ourVisionDes"),
      icon: VisionIcon,
    },
    {
      title: t("ourMission"),
      description: t("ourMissionDes"),
      icon: MissionIcon,
    },
  ];

  const aboutPoints = [
    {
      title: t("akasia"),
      description: t("financialPartner"),
      icon: RobotIcon,
    },
    {
      title: t("towardsFuture"),
      description: t("towardsFutureDes"),
      icon: LikeIcon,
    },
    {
      title: t("innovationTrust"),
      description: t("innovationTrustDes"),
      icon: BookIcon,
    },
    {
      title: t("strongKnowledge"),
      description: t("strongKnowledgeDes"),
      icon: UsersIcon,
    },
  ];

  const featuresAkasia = [
    {
      feature: t("feature1"),
      icon: CheckIcon,
    },
    {
      feature: t("feature2"),
      icon: CheckIcon,
    },
    {
      feature: t("feature3"),
      icon: CheckIcon,
    },
    {
      feature: t("feature4"),
      icon: CheckIcon,
    },
    {
      feature: t("feature5"),
      icon: CheckIcon,
    },
    {
      feature: t("feature6"),
      icon: CheckIcon,
    },
  ];

  const solutionsAkasia = [
    {
      solution: t("solution1"),
      icon: BookIcon,
    },
    {
      solution: t("solution2"),
      icon: BookIcon,
    },
    {
      solution: t("solution3"),
      icon: BookIcon,
    },
    {
      solution: t("solution4"),
      icon: BookIcon,
    },
    {
      solution: t("solution5"),
      icon: BookIcon,
    },
  ];

  return (
    <div>
      <h1 className=""> {t("title")}</h1>
      <Image
        src={aboutImg}
        className="w-full object-cover rounded-xl mt-10"
        alt="About Akasia"
      />
      <section className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <div>
            <h2 className="uppercase font-bold text-2xl md:text-3xl">
              {t("newVision")}
            </h2>
            <p className="md:max-w-[800px]">{t("newVisionDes")}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {aboutPoints.map((point, index) => (
              <div className="flex gap-x-5" key={index}>
                <point.icon />
                <div className="grow">
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gap-8 lg:py-16">
        <div className="flex flex-col lg:h-[32rem] lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 flex-1">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl lg:text-4xl">
                {t("innovativeInvestmentPaths")}
              </h2>
              <div className="space-y-5">
                <div className="w-full lg:mt-8 bg-transparent border rounded-xl lg:max-w-sm border-gray-200 dark:border-gray-500"></div>
                <p className="flex items-start justify-start me-10">
                  {t("innovativeInvestmentPathsDes")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-auto lg:w-1/2 dark:bg-gray-300 rounded-2xl">
            <Image
              className="object-contain w-full h-full mx-auto rounded-xl lg:max-w-2xl"
              src={aboutImg2}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="grid sm:grid-cols-3 gap-8">
            {featuresAkasia.map((item, index) => (
              <div className="gap-x-3 flex items-start" key={index}>
                <item.icon />
                <div className="grow">
                  <span className="text-sm text-gray">{item.feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gap-8 py-16 z-20">
        <div className="flex flex-col-reverse  md:flex-row-reverse gap-4 justify-center items-stretch relative z-50 ">
          {aboutAkasia.map((item, index) => (
            <AboutCards
              key={index}
              title={item.title}
              description={item.description}
              iconCard={<item.icon />}
            />
          ))}
        </div>
      </section>

      <section className="gap-8 py-16 overflow-hidden">
        <div className="relative ">
          <div className="absolute top-0 right-0  w-[480px] h-[480px] pointer-events-none bg-gradient-to-b from-slate-500/25 via-slate-500/5 via-25% to-slate-500/0 to-75% rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <h2 className="uppercase text-3xl text-gray-900 font-bold lg:text-4xl dark:text-white !leading-[47px]">
                {t("provideSolutions")}
              </h2>
            </div>
            <div className="space-y-6 lg:space-y-10  ">
              {solutionsAkasia.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-5 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200">
                    <item.icon />
                  </span>
                  <div className="ms-2 sm:ms-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {item.solution}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
