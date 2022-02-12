import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

const Benefits = () => {
  const router = useRouter();
  const { t: text } = useTranslation("Benefits");

  const isArabicLanguage = router.locale === "ar" && true;

  return (
    <>
      <section
        className="flex flex-col items-center h-full mt-16 text-center"
        id="benefits"
      >
        {/* *************** TITLE ******************* */}
        <h2 className="text-3xl lg:text-5xl font-bold">
          {text("benefits-title")}
          <span className="text-gradient">
            {text("benefits-title-bg-text")}
          </span>
        </h2>
        <p
          className="text-center text-medium px-2 my-2 font-bold text-gray-400"
          dir="rtl"
        >
          {text("benefits-paragraph")}
        </p>
        <p
          className="text-center text-medium px-2 text-primary font-bold"
          dir="rtl"
        >
          {text("benefits-paragraph-second")}
        </p>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 p-6 lg:px-20 md:mx-10 text-center">
        {/* ************** OMNICHANNEL ******************** */}
        <div className={isArabicLanguage && "order-3"}>
          <Image
            src="/images/omnichannel.svg"
            width="175"
            height="175"
            alt="omnichannel benefits image"
          />
          <h4 className="font-bold text-4xl mb-4" dir="rtl">
            {text("omnichannel-card-title")}
          </h4>
          <p className="px-0 xl:px-6 text-lg" dir="rtl">
            {isArabicLanguage && text("omnichannel-card-paragraph-prefix")}
            <span className="text-primary font-bold">
              {text("omnichannel-card-paragraph-first")}
            </span>
            {text("omnichannel-card-paragraph-second")}
          </p>
          <span className="font-bold text-gray-400">
            {text("omnichannel-card-paragraph-third")}
          </span>
        </div>

        {/* ************** SUPPPORT ******************** */}
        <div className={isArabicLanguage && "order-2"}>
          <Image
            src="/images/support.svg"
            width="175"
            height="175"
            alt="support benefits image"
          />
          <h4 className="font-bold text-4xl mb-4" dir="rtl">
            {text("support-card-title")}
          </h4>
          <p className="px-0 xl:px-6 text-lg" dir="rtl">
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
        <div className={isArabicLanguage && "order-1"}>
          <Image
            src="/images/unique-feature.svg"
            width="175"
            height="175"
            alt="unique features benefits image"
          />
          <h4 className="font-bold text-4xl mb-4" dir="rtl">
            {text("features-card-title")}
          </h4>
          <p className="px-0 xl:px-6 text-lg" dir="rtl">
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
