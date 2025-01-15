import Header from "@/layout/header";
import "./globals.css";
import Footer from "@/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-600 dark:bg-gray-950 dark:text-gray-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
