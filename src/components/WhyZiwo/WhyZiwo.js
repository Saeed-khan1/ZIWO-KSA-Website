import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import Common from "../../Hooks/Common";

const WhyZiwo = () => {
  const router = useRouter();
  const { t: text } = useTranslation();

  const { titleFontFamily, paragraphFontFamily } = Common();

  const isArabicLanguage = router.locale === "ar" && true;

  const textDirection = !isArabicLanguage ? "ltr" : "rtl";

  const ziwoMapImageOnDesktop = isArabicLanguage
    ? "/images/ziwo-map-desktop-arabic.svg"
    : "/images/ziwo-map-desktop-english.svg";
  const ziwoMapImageOnMobile = isArabicLanguage
    ? "/images/ziwo-map-mobile-arabic.svg"
    : "/images/ziwo-map-mobile-english.svg";

  return (
    <section
      className="flex flex-col items-center h-full mt-16 text-center"
      id="why-ziwo"
    >
      <h2
        className={`${titleFontFamily} text-8xl md:text-10xl font-bold`}
        dir={textDirection}
      >
        {text("WhyZiwo:why-ziwo-title")}{" "}
        {
          <span className="text-gradient">
            {text("WhyZiwo:why-ziwo-title-color")}
          </span>
        }
      </h2>
      <p
        className={`${paragraphFontFamily} leading-9 text-center lg:w-6/12 mt-5 mb-12 md:mb-5 text-base md:text-7xl px-10 text-paragraphGrayColor`}
        dir={textDirection}
      >
        <span>
          {isArabicLanguage && text("WhyZiwo:why-ziwo-arabic-prefix")}
        </span>
        <span className="text-primary font-bold">
          {text("common:ziwo-name")}
        </span>
        {text("WhyZiwo:why-ziwo-parag-first")}
        <span className="text-primary font-bold">
          {text("common:ziwo-name")}
        </span>
        <span>{text("WhyZiwo:why-ziwo-parag-second")}</span>
        <span className="text-primary font-bold">
          {text("WhyZiwo:why-ziwo-parag-countries")}
        </span>
        <span>{text("WhyZiwo:why-ziwo-parag-third")}</span>
      </p>
      <div className="hidden sm:inline-block">
        <Image
          src={ziwoMapImageOnDesktop}
          width="1277"
          height="652"
          alt="background image"
        />
      </div>
      <div className="inline-block sm:hidden">
        <Image
          src={ziwoMapImageOnMobile}
          width="369"
          height="369"
          alt="background image"
        />
      </div>
    </section>
  );
};

export default WhyZiwo;
