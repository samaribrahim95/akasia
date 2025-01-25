"use client"
import { useTranslations } from "next-intl"
import { useState } from "react";

const TrimParagraph = () => {
  const t = useTranslations();
  const defaultLength = 400;
  const [trimLength, setTrimLength] = useState<number>(defaultLength);
  return (
    <p>
      {t("Home.content").slice(0, trimLength)}

      {
        trimLength == t("Home.content").length &&
        <span className="cursor-pointer text-blue-900" onClick={() => setTrimLength(defaultLength)}> {t("Home.readLess")} </span>
        ||
        <>
          <span>...</span>
          <span className="cursor-pointer text-blue-900" onClick={() => setTrimLength(t("Home.content").length)}> {t("Home.readMore")} </span>
        </>
      }
    </p>
  )
}

export default TrimParagraph