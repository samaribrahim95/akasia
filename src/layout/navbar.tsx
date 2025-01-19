"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTxt from "../assets/images/akasia-txt-logo.svg";
import logoTxtLight from "../assets/images/akasia-txt-logo-light.svg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("NavBar");
  const router = useRouter();
  const [locale, setLocale] = useState<string>('');
  const menuItem = [
    {
      title: t("about"),
      to: "/about",
    },
    {
      title: t("howInvest"),
      to: "/investment",
    },
    {
      title: t("contact"),
      to: "/contact",
    },
  ];

  useEffect(() => {
    const getCookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("AKASIAAPP_LOCALE="))
    if(getCookieLocale) {
      const cookiesLocaleList = getCookieLocale.split("=");
      if(cookiesLocaleList.length > 0) {
        const cookiesLocale = cookiesLocaleList[1];
        if (cookiesLocale) {
          setLocale(cookiesLocale);
        } else {
          const browserLocale = navigator.language.slice(0, 2);
          setLocale(browserLocale);
          document.cookie = `AKASIAAPP_LOCALE=${browserLocale}`;
          router.refresh();
        }
      }
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `AKASIAAPP_LOCALE=${newLocale}`;
    router.refresh();
  };
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b h-[52px] border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div id="nav-logo">
          <div className="hidden dark:flex">
            <Link href='/'>
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
            <Link href='/'>
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
                onClick={() => changeLocale(locale == "ar" ? "en" : "ar")}
                className="font-medium text-black dark:text-slate-100"
              >
                {locale == "ar" ? "english" : "العربية"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
