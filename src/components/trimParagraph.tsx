"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const TrimParagraph = () => {
  const t = useTranslations();
  const defaultLength = 400;
  const [trimLength, setTrimLength] = useState<number>(defaultLength);
  return (
    <p className="mt-10 mb-16 px-3">
      {t("Home.content").slice(0, trimLength)}

      {(trimLength == t("Home.content").length && (
        <span
          className="cursor-pointer text-sky-600 dark:text-sky-200 ms-1"
          onClick={() => setTrimLength(defaultLength)}
        >
          {" "}
          {t("Home.readLess")}{" "}
        </span>
      )) || (
        <>
          <span>...</span>
          <span
            className="cursor-pointer text-sky-600 dark:text-sky-200 ms-1"
            onClick={() => setTrimLength(t("Home.content").length)}
          >
            {" "}
            {t("Home.readMore")}{" "}
          </span>
        </>
      )}
    </p>
  );
};

export default TrimParagraph;
