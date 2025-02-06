import { LocalesType, routing } from "@/i18n/routing";
import Solutions from "@/components/solutions";
import Header from "../../components/header";
import ContactInfo from "@/components/contactInfo";
import Brief from "@/components/brief";
import CommonQuestions from "@/components/commonQuestions";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server"; // To fetch translations if needed

// This function generates static params for locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Home component that receives `locale` as a parameter
export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LocalesType)) {
    notFound();
  }

  // Optionally fetch translations based on the locale if needed
  const translations = await getTranslations({ locale, namespace: "Home" });

  return (
    <div className="mt-[100px]">
      <Header locale={locale}/>
      <Brief />
      <Solutions />
      <CommonQuestions />
      <ContactInfo />
    </div>
  );
}
