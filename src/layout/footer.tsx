"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <footer className="bg-gradient-to-t border-gray-900/5 border-t dark:border-gray-100/5 dark:from-gray-950/90 dark:to-gray-900/40 dark:via-gray-950/40 from-slate-500/25 relative to-75% to-slate-500/0 via-25% via-slate-500/5 z-40">
      <div className="w-full flex flex-col justify-center mx-auto align-center max-w-[1000px]">
        <div className="gap-12 grid lg:grid-cols-4 place-content-center place-items-center pt-6">
          <Link
            href="/"
            className="gap-2 lg:col-span-2 pb-4 w-full justify-items-center"
          >
            <Image
              src="/akasia-logo.svg"
              alt="Logo"
              width={70}
              height={70}
              className="flex dark:hidden"
            />
            <Image
              src="/akasia-logo-light.svg"
              alt="Logo"
              width={70}
              height={70}
              className="hidden dark:flex"
            />
          </Link>
          <div
            id="footer-quick"
            className="flex flex-col flex-1  w-full justify-center sm:justify-end sm:items-start gap-2"
          >
            <h3 className="text-md">Quick Links</h3>
            <ul className="flex  flex-col justify-center items-center sm:justify-start sm:items-start">
              <li id="f-home">
                <Link href="/">
                  <span className="font-medium text-sm">Home</span>
                </Link>
              </li>
              <li id="f-about">
                <Link href="/about">
                  <span className="font-medium text-sm">About akasia</span>
                </Link>
              </li>
              <li id="f-howtoinvest">
                <Link href="/investment">
                  <span className="font-medium text-sm">How to Invest</span>
                </Link>
              </li>
              <li id="f-contactus">
                <Link href="/contactus">
                  <span className="font-medium text-sm">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            id="footer-services"
            className="flex flex-1 flex-col  w-full items-center justify-center sm:justify-start sm:items-start gap-2"
          >
            <h3 className="text-md">Legal</h3>
            <ul className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
              <li id="footer-privacypolicy">
                <Link href="/privacy/">
                  <span className="font-medium text-sm">Privacy Policy</span>
                </Link>
              </li>
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
              className="flex flex-row w-full justify-center sm:justify-center items-center gap-1 text-xs"
            >
              <span className="text-xs font-medium text-sm text-gray-900 dark:text-white">
                &copy; {new Date().getFullYear()} All rights reserved
              </span>
            </div>
            <div
              id="footer-social"
              className="flex flex-row w-full items-center justify-center sm:justify-end gap-6 uppercase"
            >
              <Link
                id="footer-social-email"
                aria-label="Contact us via Email"
                className="gd-social-icons p-3 bg-gray-950 rounded-md"
                href="mailto:info@getakasia.com"
              >
                <Image
                  src="/icons/mail.svg"
                  alt="icon"
                  width={12}
                  height={12}
                />
              </Link>
              <Link
                id="footer-social-x"
                aria-label="RLF on X / Twitter"
                className="gd-social-icons bg-gray-950 rounded-md"
                target="_blank"
                href="/"
              >
                <div>
                  <Image src="/icons/x.svg" alt="icon" width={12} height={12} />
                </div>
              </Link>
              <Link
                id="footer-social-insta"
                aria-label="RLF on Instagram"
                className="gd-social-icons bg-gray-950 rounded-md"
                target="_blank"
                href="https://www.instagram.com/get_akasia"
              >
                <div>
                  <Image
                    src="/icons/instagram.svg"
                    alt="icon"
                    width={12}
                    height={12}
                  />
                </div>
              </Link>
              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className=""
              >
                <Image
                  src="/icons/moon.svg"
                  alt="icon"
                  width={25}
                  height={25}
                  className="flex dark:hidden"
                />
                <Image
                  src="/icons/sun.svg"
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
