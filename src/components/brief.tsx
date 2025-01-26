import { useTranslations } from "next-intl";
import HomeImage from "../assets/images/home.png";
import Image from "next/image";

const Brief = () => {
  const t = useTranslations("Home");
  return (
    <section className="py-16">
      <div className="grid gid-cols-1 md:grid-cols-2 gap-6">
        <div className=""> <h2>
        {t("akasiaCapital")}
      </h2>
        <div className="flex flex-col justify-center">
          <p className="mb-4">{t("akasiaDescription1")}</p>
          <p className="mb-4">{t("akasiaDescription2")}</p>
          <p>{t("akasiaDescription3")}</p>
        </div>
        </div>
     <div>
          <Image
            src={HomeImage}
            alt={t("akasiaCapital")}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Brief;
