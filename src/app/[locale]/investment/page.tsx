"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import investmentImage from "../../../assets/images/invesment.jpg";
import invesmentImage2 from "../../../assets/images/invesment-2.jpg";

import DownloadIcon from "@/components/dynamicIcons/download";
import TimerIcon from "@/components/dynamicIcons/timer";
import StarsIcon from "@/components/dynamicIcons/starts";

const Investment = () => {
  const t = useTranslations("Investment");

  const investmentSetps = [
    {
      title: t("downloadApp"),
      description: t("downloadAppDes"),
      icon: DownloadIcon,
    },
    {
      title: t("Register"),
      description: t("RegisterDes"),
      icon: TimerIcon,
    },
    {
      title: t("investmentPortfolio"),
      description: t("investmentPortfolioDes"),
      icon: StarsIcon,
    },
  ];

  return (
    <div>
      <h1 className=""> {t("title")}</h1>
      <Image
        src={investmentImage}
        className="w-full object-cover rounded-xl mt-5"
        alt="Investment"
      />
      <section className="mt-16">
        <div className="relative z-50 lg:grid lg:gap-12 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-6 lg:order-2">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-6 lg:order-2">
              <div className="bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075] py-[30px] ps-[50px] pe-4">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  {t("title")}
                </h2>
                <nav className="grid gap-4 mt-5 md:mt-10">
                  {investmentSetps.map((item, index) => (
                    <div
                      key={index}
                      className="hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <div className="flex">
                        <item.icon />
                        <span className="grow ms-6">
                          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                            {item.title}
                          </span>
                          <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200 text-sm">
                            {item.description}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src={invesmentImage2}
                    alt="invesment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;