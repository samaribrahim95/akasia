import Image from "next/image"
import Link from "next/link"
import sunIcon from "../assets/images/icons/sun.svg";
import moonIcon from "../assets/images/icons/moon.svg";
import { toggleTheme } from "@/hepler";
import { useTranslations } from "next-intl";

type Props = {
  menuItem: {
    title: string,
    to: string
  }[],
  opened: boolean,
  locale: string,
  toggleLang: (locale: string) => void
}

const MobileMenu = (p: Props) => {
  const t = useTranslations();
  return (
    <div className={`fixed ${p.opened ? 'left-0' : 'left-full'} top-0 w-full h-svh flex flex-col items-center justify-between p-3 pt-16 transition-all duration-500 ease-in-out backdrop-blur-lg dark:bg-black/40 bg-white/40 z-[49]`}>

      <ul className="w-full">
        {
          p.menuItem.map((item, index) =>
            <li className="px-2 py-3 mb-3" key={index}>
              <Link href={item.to}>
                {item.title}
              </Link>
            </li>)
        }
      </ul>

      <div className="w-full flex flex-col gap-6">
        <div className="mt-3">
          {t("NavBar.contact")}
          <ul>
            <li>
              <Link href="tel:+966114792233">
                <span>{t("NavBar.phone")}: +966114442233</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:info@getakasia.com">
                <span>{t("NavBar.email")}: info@getakasia.com</span>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <span>Riyadh, Al Malqa, Saudi Arabia</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-row items-center justify-between dark:border-t-slate-500/50 border-t-gray-300/50 border-t pt-6 pb-6">
          <Link href="#">
            <button onClick={toggleTheme}>
              <div className="flex flex-row gap-2 justify-start items-center">
                <span className="dark:block hidden font-bold">{t("NavBar.lightMode")}</span>
                <span className="dark:hidden block font-bold">{t("NavBar.darkMode")}</span>
                <Image
                  src={moonIcon}
                  alt="icon"
                  width={25}
                  height={25}
                  className="flex dark:hidden"
                />
                <Image
                  src={sunIcon}
                  alt="icon"
                  width={25}
                  height={25}
                  className="hidden dark:flex"
                />
              </div>
            </button>
          </Link>
          <button onClick={() => p.toggleLang(p.locale == "ar" ? "en" : "ar")} className="font-semibold">
            {p.locale == "ar" ? 'English' : 'العربية'}
          </button>
        </div>
      </div>

    </div>
  )
}

export default MobileMenu