"use client";

// import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import contactImage from "../../assets/images/contact.jpg";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div>
      <h1 className=""> {t("title")}</h1>
      <Image
        src={contactImage}
        className="w-full object-cover rounded-xl mt-10"
        alt="Contact Akasia"
      />
      <section className="mt-16"></section>
    </div>
  );
};

export default Contact;
