import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import '../../assets/css/index.css'
import { LocalesType, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
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
            <div className="container md:max-w-[1000px] mx-auto pt-[80px] mb-[50px] px-5">
              {children}
            </div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
