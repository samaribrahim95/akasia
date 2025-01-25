"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import contactImage from "../../../assets/images/contact.jpg";
import ContactInfo from "@/components/contactInfo";
import BreadCrumb from "@/components/breadcrumb";
import BluredBg from "@/components/blueredBg";

const Contact = () => {
  const t = useTranslations();
  return (
    <div>
      <BreadCrumb
        data={[
          {
            link: "/",
            text: t("Home.siteName"),
          },
          {
            link: "#",
            text: t("Contact.title"),
          },
        ]}
      />
      <h1 className=""> {t("Contact.title")}</h1>
      <Image
        src={contactImage}
        className="w-full object-cover rounded-xl mt-5"
        alt="Contact Akasia"
      />
      <BluredBg />
      <ContactInfo />
    </div>
  );
};

export default Contact;
