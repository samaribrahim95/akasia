import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import '@/assets/css/index.css'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
        <body className="text-gray-600 dark:bg-gray-950 dark:text-gray-200">
          <NextIntlClientProvider messages={messages}>
            <div>
              <Navbar />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
  );
}
