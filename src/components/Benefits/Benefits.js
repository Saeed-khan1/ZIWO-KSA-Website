import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

import Common from "../../Hooks/Common";

const Benefits = () => {
  const router = useRouter();
  const { t: text } = useTranslation("Benefits");

  const { titleFontFamily, paragraphFontFamily } = Common();

  const isArabicLanguage = router.locale === "ar" && true;

  return (
    <>
      <section
        className="flex flex-col items-center h-full mt-16 text-center"
        id="benefits"
      >
        {/* *************** TITLE ******************* */}
        <h2 className={`${titleFontFamily} text-3xl lg:text-5xl font-bold`}>
          {text("benefits-title")}
          <span className="text-gradient">
            {text("benefits-title-bg-text")}
          </span>
        </h2>
        <p
          className={`${paragraphFontFamily} text-center text-medium px-2 my-2 font-bold text-gray-400`}
          dir="rtl"
        >
          {text("benefits-paragraph")}
        </p>
        <p
          className={`${paragraphFontFamily} text-center text-medium px-2 text-primary font-bold`}
          dir="rtl"
        >
          {text("benefits-paragraph-second")}
        </p>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 p-6 lg:px-20 md:mx-10 text-center">
        {/* ************** OMNICHANNEL ******************** */}
        <div className={classNames({ "order-3": isArabicLanguage })}>
          <Image
            src="/images/omnichannel.svg"
            width="175"
            height="175"
            alt="omnichannel benefits image"
          />
          <h4
            className={`${titleFontFamily} font-bold text-4xl mb-4`}
            dir="rtl"
          >
            {text("omnichannel-card-title")}
          </h4>
          <p
            className={`${paragraphFontFamily} text-gray-500 px-0 xl:px-4 text-lg`}
            dir="rtl"
          >
            {isArabicLanguage && text("omnichannel-card-paragraph-prefix")}
            <span className="text-primary font-bold">
              {text("omnichannel-card-paragraph-first")}
            </span>
            <span>{text("omnichannel-card-paragraph-second")}</span>
            <span className="font-bold text-gray-400">
              {text("omnichannel-card-paragraph-third")}
            </span>
          </p>
        </div>

        {/* ************** SUPPPORT ******************** */}
        <div className={classNames({ "order-2": isArabicLanguage })}>
          <Image
            src="/images/support.svg"
            width="175"
            height="175"
            alt="support benefits image"
          />
          <h4
            className={`${titleFontFamily} font-bold text-4xl mb-4`}
            dir="rtl"
          >
            {text("support-card-title")}
          </h4>
          <p
            className={`${paragraphFontFamily} text-gray-500 px-0 xl:px-6 text-lg`}
            dir="rtl"
          >
            {text("support-card-paragraph-first")}
            <span className="text-primary font-bold">
              {text("support-card-paragraph-second")}
            </span>
            {text("support-card-paragraph-third")}
            <span className="text-primary font-bold">
              {text("support-card-paragraph-forth")}
            </span>
            {text("support-card-paragraph-fifth")}
          </p>
        </div>

        {/* ************** UNIQUE FEATURES ******************** */}
        <div className={classNames({ "order-1": isArabicLanguage })}>
          <Image
            src="/images/unique-feature.svg"
            width="175"
            height="175"
            alt="unique features benefits image"
          />
          <h4
            className={`${titleFontFamily} font-bold text-4xl mb-4`}
            dir="rtl"
          >
            {text("features-card-title")}
          </h4>
          <p
            className={`${paragraphFontFamily} text-gray-500 px-0 xl:px-6 text-lg`}
            dir="rtl"
          >
            {text("features-card-paragraph-first")}
            <span className="font-bold text-gray-400">
              {text("features-card-paragraph-second")}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
