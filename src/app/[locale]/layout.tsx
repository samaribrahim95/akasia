import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import "../../assets/css/index.css";
import { LocalesType, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import StartYourTrip from "@/components/startYourTrip";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

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
      <body className="text-gray-600 dark:bg-gray-950 dark:text-gray-200">
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
