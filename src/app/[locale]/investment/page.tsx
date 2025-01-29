"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import investmentImage from "../../../assets/images/invesment.jpg";
import invesmentImage2 from "../../../assets/images/invesment-2.jpg";
import BluredBg from "@/components/blueredBg";
import appIcon1 from "../../../assets/images/app-store-icon.png";
import appIcon2 from "../../../assets/images/play-store-icon-v.png";

import DownloadIcon from "@/components/dynamicIcons/download";
import TimerIcon from "@/components/dynamicIcons/timer";
import StarsIcon from "@/components/dynamicIcons/starts";
import BreadCrumb from "@/components/breadcrumb";

import screen2 from "../../../assets/images/screen-2-left.png";

const Investment = () => {
  const t = useTranslations();

  const investmentSetps = [
    {
      title: t("Investment.doDownloadApp"),
      description: t("Investment.doDownloadAppDes"),
      icon: DownloadIcon,
    },
    {
      title: t("Investment.Register"),
      description: t("Investment.RegisterDes"),
      icon: TimerIcon,
    },
    {
      title: t("Investment.investmentPortfolio"),
      description: t("Investment.investmentPortfolioDes"),
      icon: StarsIcon,
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
            text: t("Investment.title"),
          },
        ]}
      />
      <h1 className=""> {t("Investment.title")}</h1>
      <Image
        src={investmentImage}
        className="w-full object-cover rounded-xl mt-5 animate-fade-in"
        alt="Investment"
      />
      <section className="py-16 grid gap-8 md:gap-12 animate-slide-in-top">
        <div className="justify-items-between gap-8 grid md:grid-cols-3 mx-auto px-6 z-30 max-w-[850px]">
          <div>
            <Image
              src={screen2}
              alt=""
              className="max-h-[280px] md:max-h-[350px] w-auto mx-auto"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className=" !leading-[60px] dark:text-gray-200 mb-6 text-gray-800 text-center">
              {t("Investment.downloadSlogn")}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center pb-8 items-center">
              <Link href="#">
                <Image
                  className="mx-1 w-[170px] max-w-full"
                  src={appIcon1}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  className="mx-1 w-[170px] max-w-full"
                  src={appIcon2}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <BluredBg />
      </section>

      <section className="py-16 animate-slide-in-bottom">
        <div className="relative z-20 lg:grid lg:gap-12 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-6 lg:order-2">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-6 lg:order-2">
              <div className="bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075] py-[30px] ps-[50px] pe-4">
                <h2 className="font-bold dark:text-gray-200">
                  {t("Investment.title")}
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
