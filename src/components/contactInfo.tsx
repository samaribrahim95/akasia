import Link from "next/link";
import MailIcon from "./dynamicIcons/mail";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("Contact");

  return (
    <section className="sm:w-[580px] lg:w-full mx-auto py-16 gap-8 md:gap-12 animate-slide-in-top">
      <div className="gap-8 grid lg:grid-cols-2 mx-auto z-30">
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
  );
};

export default ContactInfo;
