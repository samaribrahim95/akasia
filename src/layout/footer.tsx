"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import logo from "../assets/images/akasia-logo.svg";
import logoLight from "../assets/images/akasia-logo-light.svg";

import MailIcon from "../assets/images/icons/mail.svg";
import xIcon from "../assets/images/icons/x.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";
import sunIcon from "../assets/images/icons/sun.svg";
import moonIcon from "../assets/images/icons/moon.svg";

import { useEffect } from "react";
import { toggleTheme } from "@/hepler";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const linksIcons = [
    {
      label: "our instagram",
      link: "https://www.instagram.com/get_akasia",
      icon: instagramIcon,
      class: "gd-social-icons p-3 bg-gray-950 rounded-md",
    },
    {
      label: "our X",
      link: "/",
      icon: xIcon,
      class: "gd-social-icons p-3 bg-gray-950 rounded-md",
    },
    {
      label: "Contact us via Email",
      link: "/",
      icon: MailIcon,
      class: "gd-social-icons p-3 bg-gray-950 rounded-md",
    },
  ];

  const quickLinks = [
    {
      title: t("home"),
      to: "/",
    },
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

  const legalLinks = [
    {
      title: t("privacy"),
      to: `/${locale}/privacy`,
    },
  ];

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <footer className="bg-gradient-to-t border-gray-900/5 border-t dark:border-gray-100/5 dark:from-gray-950/90 dark:to-gray-900/40 dark:via-gray-950/40 from-slate-500/25 relative to-75% to-slate-500/0 via-25% via-slate-500/5 z-40">
      <div className="w-full flex flex-col justify-center mx-auto align-center max-w-[1000px]">
        <div className="gap-12 grid md:grid-cols-4 place-content-center place-items-center pt-6">
          <Link
            href="/"
            className="gap-2 md:col-span-2 pb-4 w-full justify-items-center"
          >
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
              className="flex dark:hidden"
            />
            <Image
              src={logoLight}
              alt="Logo"
              width={70}
              height={70}
              className="hidden dark:flex"
            />
          </Link>
          <div
            id="footer-quick"
            className="flex flex-col flex-1  w-full justify-center md:justify-end md:items-start gap-2"
          >
            <h3 className="text-md">{t("quickLinks")}</h3>
            <ul className="flex  flex-col justify-center items-center md:justify-start md:items-start">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <span className="font-medium text-sm">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            id="footer-services"
            className="flex flex-1 flex-col  w-full items-center justify-center md:justify-start md:items-start gap-2"
          >
            <h3 className="text-md">{t("legal")}</h3>
            <ul className="flex flex-col justify-center items-center md:justify-start md:items-start">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <span className="font-medium text-sm">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="footer-copywrite"
          className="border-t dark:border-blue-100/5  border-gray-900/5 mt-6 mx-3 font-thin text-sm"
        >
          <div className="w-full mb-3 mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center ">
            <div
              id="copywrite"
              className="flex flex-row w-full justify-center sm:justify-center items-center gap-1 text-sm"
            >
              <span className="font-medium text-sm text-gray-900 dark:text-white">
                {t("rightsReserved", { year: currentYear })}
              </span>
            </div>
            <div
              id="footer-social"
              className="flex flex-row w-full items-center justify-center sm:justify-end gap-6 uppercase"
            >
              {linksIcons.map((link, index) => (
                <Link
                  aria-label={link.label}
                  className="bg-gray-950 rounded-md p-1"
                  href={link.link}
                  key={index}
                  target="_blank"
                >
                  <Image src={link.icon} alt="icon" width={14} height={14} />
                </Link>
              ))}

              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className=""
              >
                <Image
                  src={moonIcon}
                  alt="icon"
                  width={25}
                  height={25}
                  className="flex dark:hidden"
                />
                <Image
                  src={sunIcon}
                  alt="icon"
                  width={25}
                  height={25}
                  className="hidden dark:flex"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
