"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTxt from "../assets/images/akasia-txt-logo.svg";
import logoTxtLight from "../assets/images/akasia-txt-logo-light.svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavBar");
  const pathname = usePathname();
  const router = useRouter();

  const menuItem = [
    {
      title: t("about"),
      to: `/${locale}/about`,
    },
    {
      title: t("howInvest"),
      to: `/${locale}/investment`,
    },
    {
      title: t("contact"),
      to: `/${locale}/contact`,
    },
  ];

  const toggleLang = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-white/30 backdrop-blur-md border-b-blue-900/5 dark:border-b-gray-100/5 border-b shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div id="nav-logo">
          <div className="hidden dark:flex">
            <Link href="/">
              <Image
                alt="logo - akasia"
                loading="lazy"
                width="70"
                height="50"
                className="object-cover object-center"
                src={logoTxtLight}
              />
            </Link>
          </div>
          <div className="flex dark:hidden">
            <Link href="/">
              <Image
                alt="logo - akasia"
                width="70"
                height="50"
                className=""
                src={logoTxt}
              />
            </Link>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {menuItem.map((items, index) => (
              <li key={index}>
                <Link
                  href={items.to}
                  className="font-medium text-black dark:text-slate-100"
                  //   aria-current="page"
                >
                  {items.title}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => toggleLang(locale == "ar" ? "en" : "ar")}
                className="font-medium text-black dark:text-slate-100"
              >
                {locale == "ar" ? "EN" : "ع"}
              </button>
            </li>
            <li>
              <button className="bg-gradient-to-bl from-slate-500 to-indigo-300 hover:bg-blue-200 text-white py-1 px-3 inline-flex items-center rounded-full">
                <span>{t("downloadApp")}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
