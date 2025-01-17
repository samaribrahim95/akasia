import Header from "@/layout/header";
import "./globals.css";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full min-h-screen relative text-gray-600 dark:bg-gray-950 dark:text-gray-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
