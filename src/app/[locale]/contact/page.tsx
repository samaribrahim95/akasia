"use client";
import React from "react"; // Import React explicitly
import { useTranslations } from "next-intl";
import Image from "next/image";
import contactImage from "../../../assets/images/contact.jpg";
import ContactInfo from "@/components/contactInfo";
import BreadCrumb from "@/components/breadcrumb";
import BluredBg from "@/components/blueredBg";

// Add type for params
type Params = {
  locale: string;
};

// Your component definition
const Contact = ({ params }: { params: Promise<Params> }) => {

  const t = useTranslations();

  // Accessing params directly - no need for React.use() in this case
  const { locale }  = React.use(params) as Params;

  return (
    <div className="mt-[100px]">
      <BreadCrumb
        data={[
          {
            link: `/${locale}/`,
            text: t("Home.siteName"),
          },
          {
            link: "#",
            text: t("Contact.title"),
          },
        ]}
      />
      <h1> {t("Contact.title")}</h1>
      <Image
        src={contactImage}
        className="w-full object-cover rounded-xl mt-5 animate-fade-in"
        alt="Contact Akasia"
      />
      <BluredBg />
      <ContactInfo />
    </div>
  );
};

export default Contact;
