"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import contactImage from "../../../assets/images/contact.jpg";
import ContactInfo from "@/components/contactInfo";

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
      <ContactInfo />
    </div>
  );
};

export default Contact;
