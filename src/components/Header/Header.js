import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";

import BrandsLogo from "../BrandsLogo/BrandsLogo";
import CustomButton from "../Common/CustomButton/CustomButton";
import Common from "../../Hooks/Common";

const Header = () => {
  const router = useRouter();
  let { t: text } = useTranslation();

  const { titleFontFamily, paragraphFontFamily } = Common();

  const isEnglishLocale = router.locale == "en-US" && true;

  const buttonLink = !isEnglishLocale
    ? "https://demo.ziwo.io/arabic"
    : "https://demo.ziwo.io/freetrial";

  const textDirection = isEnglishLocale ? "ltr" : "rtl";

  const verticalFeatureClass = classNames(
    "mt-10",
    // "mx-10",
    // "lg:mx-20",
    "container",
    "mx-auto",
    // "md:mb-20",
    "flex",
    "flex-wrap",
    "items-center",
    "text-center",
    {
      "md:text-left": isEnglishLocale,
      "md:text-right": !isEnglishLocale,
      "flex-row-reverse": !isEnglishLocale,
    }
  );

  return (
    <>
      <section className={verticalFeatureClass}>
        <div className="w-full lg:w-5/12">
          {/* *********** HEADER TITLE ************************ */}
          <h1
            className={`${titleFontFamily} font-bold text-8xl md:text-9xl`}
            dir={textDirection}
          >
            {text("Header:header-title_simply")}
            <span className="text-gradient">
              {text("Header:header-title_talk")}
            </span>
            {isEnglishLocale && <br />}
            <span>
              {!isEnglishLocale && text("Header:header-title-text-for-arabic")}
            </span>
            <span className="block lg:inline-block">
              {text("Header:header-title_clients")}
            </span>
          </h1>
          {/* *********** HEADER PARAGRAPH ************************ */}
          <p
            className={`${paragraphFontFamily} px-6 md:px-0 leading-8 md:leading-10 my-4 text-base md:text-7xl text-paragraphGrayColor`}
            dir={textDirection}
          >
            <span className="font-bold">
              {text("Header:header-paragraph-prefix")}
            </span>
            <span className="text-primary font-bold">
              {text("Header:header-paragraph-first")}
            </span>
            {isEnglishLocale && text("Header:header-text")}
            <span className="font-bold">
              {text("Header:header-paragraph-second-text-bold")}
            </span>
            <span>{text("Header:header-paragraph-third")}</span>
          </p>
          <Link href={buttonLink}>
            <a target="_blank">
              <CustomButton title={text("common:try-for-free")} />
            </a>
          </Link>
          <p className={`${paragraphFontFamily} mt-2 mb-8 text-gray-500`}>
            {text("Header:header-credit-card")}
          </p>
        </div>
        <div className="w-full lg:w-7/12">
          <div className=" hidden lg:flex justify-end">
            {/* *********** HEADER IMAGE ************************ */}
            <Image
              src="/images/home-background.svg"
              width="811"
              height="538"
              alt="background image"
              priority
            />
          </div>
        </div>
      </section>
      <BrandsLogo />
    </>
  );
};

export default Header;
