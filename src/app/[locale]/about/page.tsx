"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import aboutImg from "../../../assets/images/about.jpg"
import aboutImg2 from "../../../assets/images/about-2.jpg";

import MissionIcon from "@/components/dynamicIcons/mission";
import VisionIcon from "@/components/dynamicIcons/vision";

import RobotIcon from "@/components/dynamicIcons/robot";
import LikeIcon from "@/components/dynamicIcons/like";
import BookIcon from "@/components/dynamicIcons/book";
import UsersIcon from "@/components/dynamicIcons/users";
import CheckIcon from "@/components/dynamicIcons/check";

import AboutCards from "../../../components/aboutCards";
import Solutions from "@/components/solutions";

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



  return (
    <div>
      <h1 className=""> {t("title")}</h1>
      <Image
        src={aboutImg}
        className="w-full object-cover rounded-xl mt-5"
        alt="About Akasia"
      />
      <section className="py-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
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
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 flex-1">
            <div className="lg:max-w-lg mb-16 lg:mb-0">
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
        <div className="mt-10">
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

      <Solutions />
    </div>
  );
};

export default About;
