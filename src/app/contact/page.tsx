"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import contactImage from "../../assets/images/contact.jpg";
import MailIcon from "@/components/dynamicIcons/mail";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div>
      <h1 className=""> {t("title")}</h1>
      <Image
        src={contactImage}
        className="w-full object-cover rounded-xl mt-5"
        alt="Contact Akasia"
      />
      <section className="mt-16 sm:w-[580px] lg:w-full mx-auto">
        <div className="gap-8 grid lg:grid-cols-2 mx-auto px-6 z-30">
          <div>
            <p className="font-medium ">{t("title")}</p>
            <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-gray-950 dark:text-white">
              {t("hearFromYou")}
            </h1>
            <p className="mt-3">{t("haveConversation")}</p>
          </div>
          <div className="">
            <div className="p-4 rounded-lg bg-gray-200/50 md:p-6 dark:bg-gray-800/40 backdrop-blur-xl items-center grid sm:grid-cols-2 md:gap-8">
              <div>
                <span className="inline-block p-3 text-gray-900 rounded-lg bg-white dark:bg-slate-200">
                  <MailIcon />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  {t("contactViaEmail")}
                </h2>
              </div>
              <div>
                <p className="md:mt-3 text-sm text-gray-500 dark:text-gray-400 items-end justify-end md:text-end">
                  {t("respondQuickly")}
                </p>
                <p className=" md:text-end">
                  <Link
                    href="mailto:info@getakasia.com"
                    className="mt-2 text-sm text-gray-900  dark:text-gray-400"
                  >
                    info@getakasia.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
