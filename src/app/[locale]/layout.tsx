import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import "../../assets/css/index.css";
import { LocalesType, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import StartYourTrip from "@/components/startYourTrip";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: t('siteName')
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LocalesType)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);


  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body className="w-full h-full min-h-screen relative text-gray-600 dark:bg-gray-950 dark:text-gray-200">
        <NextIntlClientProvider messages={messages}>
          <div>
            <Navbar locale={locale} />
            <div className="container">
              {children}
              <StartYourTrip />
            </div>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
