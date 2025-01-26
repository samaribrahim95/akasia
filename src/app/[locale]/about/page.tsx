"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import aboutImg from "../../../assets/images/about.jpg";
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
import BreadCrumb from "@/components/breadcrumb";
import BluredBg from "@/components/blueredBg";

const About = () => {
  const t = useTranslations();

  const aboutAkasia = [
    {
      title: t("About.ourVision"),
      description: t("About.ourVisionDes"),
      icon: VisionIcon,
    },
    {
      title: t("About.ourMission"),
      description: t("About.ourMissionDes"),
      icon: MissionIcon,
    },
  ];

  const aboutPoints = [
    {
      title: t("About.akasia"),
      description: t("About.financialPartner"),
      icon: RobotIcon,
    },
    {
      title: t("About.towardsFuture"),
      description: t("About.towardsFutureDes"),
      icon: LikeIcon,
    },
    {
      title: t("About.innovationTrust"),
      description: t("About.innovationTrustDes"),
      icon: BookIcon,
    },
    {
      title: t("About.strongKnowledge"),
      description: t("About.strongKnowledgeDes"),
      icon: UsersIcon,
    },
  ];

  const featuresAkasia = [
    {
      feature: t("About.feature1"),
      icon: CheckIcon,
    },
    {
      feature: t("About.feature2"),
      icon: CheckIcon,
    },
    {
      feature: t("About.feature3"),
      icon: CheckIcon,
    },
    {
      feature: t("About.feature4"),
      icon: CheckIcon,
    },
    {
      feature: t("About.feature5"),
      icon: CheckIcon,
    },
    {
      feature: t("About.feature6"),
      icon: CheckIcon,
    },
  ];

  return (
    <div className="mt-[100px]">
      <BreadCrumb
        data={[
          {
            link: "/",
            text: t("Home.siteName"),
          },
          {
            link: "#",
            text: t("About.title"),
          },
        ]}
      />
      <h1> {t("About.title")}</h1>
      <Image
        src={aboutImg}
        className="w-full object-cover rounded-xl mt-5 animate-fade-in"
        alt="About Akasia"
      />
      <BluredBg />
      <section className="py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 animate-slide-in-top">
        <div className="lg:col-span-2">
          <div>
            <h2 className="uppercase dark:text-gray-200">
              {t("About.newVision")}
            </h2>
            <p className="md:max-w-[800px]">{t("About.newVisionDes")}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {aboutPoints.map((point, index) => (
              <div className="flex gap-x-5" key={index}>
                <point.icon />
                <div className="grow">
                  <h3>{point.title}</h3>
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
              <h2>{t("About.innovativeInvestmentPaths")}</h2>
              <div className="space-y-5">
                <div className="w-full lg:mt-8 bg-transparent border rounded-xl lg:max-w-sm border-gray-200 dark:border-gray-500"></div>
                <p className="flex items-start justify-start me-10">
                  {t("About.innovativeInvestmentPathsDes")}
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
                  <span className="text-gray">{item.feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gap-8 py-16 z-20 relative">
        <div
          className="absolute blur-3xl overflow-hidden sm:-top-20"
          aria-hidden="true"
        >
          <div className="gradient-box-light relative left-[calc(50%-10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[0deg]   sm:left-[calc(50%-10rem)] sm:w-[72.1875rem] "></div>
        </div>
        <div className="flex flex-col-reverse  md:flex-row-reverse gap-4 justify-center items-stretch relative z-20 ">
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
