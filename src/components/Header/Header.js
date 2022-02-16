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

  console.log("============= paragraphFont", titleFontFamily);

  const reverse = router.locale == "ar" ? true : false;
  const isEnglishLocale = router.locale == "en-US" && true;

  const verticalFeatureClass = classNames(
    "mt-20",
    "mx-10",
    "lg:mx-20",
    "md:mb-20",
    "flex",
    "flex-wrap",
    "items-center",
    "text-center",
    {
      "md:text-left": isEnglishLocale,
      "md:text-right": !isEnglishLocale,
      "flex-row-reverse": reverse,
    }
  );

  console.log("======= ", router.locale, text("common:greeting"));
  return (
    <>
      <section className={verticalFeatureClass}>
        <div className="w-full lg:w-1/2">
          {/* *********** HEADER TITLE ************************ */}
          <h1
            className={`${titleFontFamily} font-bold titleFontSize md:text-6xl`}
          >
            {text("Header:header-title_simply")}{" "}
            <span className="text-gradient">
              {text("Header:header-title_talk")}
            </span>
            {!isEnglishLocale && text("Header:header-title-text-for-arabic")}
            <br />
            {text("Header:header-title_clients")}
          </h1>
          {/* *********** HEADER PARAGRAPH ************************ */}
          <p
            className={`${paragraphFontFamily} my-5 text-medium text-paragraphGrayColor`}
            // dir="rtl"
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
          <Link href="https://demo.ziwo.io/freetrial">
            <a target="_blank">
              <CustomButton title={text("common:try-for-free")} />
            </a>
          </Link>
          <p className={`${paragraphFontFamily} mt-2 text-gray-500`}>
            {text("Header:header-credit-card")}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
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
