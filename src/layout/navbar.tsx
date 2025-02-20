"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTxt from "../assets/images/akasia-txt-logo.svg";
import logoTxtLight from "../assets/images/akasia-txt-logo-light.svg";
import { useLocale, useTranslations } from "next-intl";
import MenuBarIcon from "@/components/dynamicIcons/menuBar";
import CloseIcon from "@/components/dynamicIcons/close";
import MobileMenu from "./mobileMenu";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled , setIsScrolled] = useState(false);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100)
      setIsScrolled(true);
      else 
      setIsScrolled(false);
    }   
    
    window.addEventListener('scroll' , handleScroll);

    if (openMenu) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [openMenu])



  const toggleLang = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  const linkHome = `/${locale}/`;

  return (
    <div className="overflow-hidden w-full">
      <nav className={`fixed w-full z-[99] top-0 backdrop-blur-md border-b-blue-900/5 dark:border-b-gray-100/5 border-b ${isScrolled? 'shadow-lg' : ''} `}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div id="nav-logo">
            <div className="hidden dark:flex">
              <Link href={linkHome}>
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
              <Link href={linkHome}>
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
          <div className="md:hidden flex items-end gap-4">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="w-10 h-5 text-gray-500 focus:outline-none dark:text-gray-400 text-center"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <span className="mx-auto inline-block transition-all">
                {
                  openMenu && <CloseIcon />
                  || <MenuBarIcon />
                }
              </span>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              {menuItem.map((items, index) => (
                <li className="flex items-center" key={index}>
                  <Link
                    href={items.to}
                    className="font-medium text-black dark:text-slate-100 leading-normal"
                  >
                    {items.title}
                  </Link>
                </li>
              ))}

              <li className={`${locale == "ar"  ? "flex items-center" : "" }`}>
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
      <MobileMenu opened={openMenu} menuItem={menuItem} locale={locale} toggleLang={toggleLang} setOpenMenu={setOpenMenu} />

    </div>
  );
};

export default Navbar;
