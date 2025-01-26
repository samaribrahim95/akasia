import Link from "next/link"

const MobileMenu = ({ opened }: { opened: boolean }) => {
  return (
    <div className={`absolute ${opened ? 'left-0' : 'left-full'} top-0 w-full h-[100dvh] flex flex-col items-center p-3 transition-all duration-500 ease-in-out backdrop-blur-xl bg-black z-[49]`}>
      <div className="pt-16 flex h-[100dvh] flex-col items-start justify-between w-full max-w-[1000px] z-[999]">
        <div>
          <ul>
            <li id="f-about" className="mt-3 flex flex-col justify-center gap-2 items-start sm:justify-start sm:items-start">
              <Link href="/about/">
                <h4 className="text-gray-900 dark:text-gray-50">About Akasia Capital</h4>
              </Link>
            </li>
            <li id="f-solutions" className="mt-3 flex flex-col justify-center gap-2 items-start sm:justify-start sm:items-start">
              <Link href="/investment/">
                <h4 className="text-gray-900 dark:text-gray-50">How to Invest</h4>
              </Link>
            </li>
            <li id="f-ContactUs" className="mt-3 flex flex-col justify-center gap-2 items-start sm:justify-start sm:items-start">
              <Link href="/contactus/">
                <h4 className="text-gray-900 dark:text-gray-50">Contact</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div id="f-contactus" className="mt-3">
            <h4 className="text-gray-900 dark:text-gray-50">Contact</h4>
            <ul>
              <li>
                <Link href="tel:+966114792233">
                  <span className="text-gray-900 dark:text-gray-50">Phone: +966114442233</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:info@getakasia.com">
                  <span className="text-gray-900 dark:text-gray-50">Email: info@getakasia.com</span>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="text-gray-900 dark:text-gray-50">Riyadh, Al Malqa, Saudi Arabia</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-row items-center justify-between dark:border-t-slate-500/50 border-t-gray-300/50 border-t pt-6 pb-6">
            <Link href="#">
              <button aria-label="Toggle dark mode" className="">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <span className="dark:block hidden text-gray-900 dark:text-gray-50 font-bold">Light Colors</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" x2="3" y1="12" y2="12"></line>
                    <line x1="21" x2="23" y1="12" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
              </button>
            </Link>
            <div className="flex flex-row items-center justify-centers gap-2">
              <button className="font-rubik text-black dark:text-white">
                <span className="font-semibold">العربية</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu