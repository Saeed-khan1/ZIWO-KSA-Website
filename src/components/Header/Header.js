import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";

import BrandsLogo from "../BrandsLogo/BrandsLogo";
import CustomButton from "../Common/CustomButton/CustomButton";

const Header = () => {
  const router = useRouter();
  let { t: text } = useTranslation();

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
          <h1 className="font-bold text-3xl md:text-5xl">
            {text("Header:header-title_simply")}{" "}
            <span className="text-gradient">
              {text("Header:header-title_talk")}
            </span>
            <br />
            {text("Header:header-title_clients")}
          </h1>
          {/* *********** HEADER PARAGRAPH ************************ */}
          <p className="my-5 text-medium text-gray-500" dir="rtl">
            <span className="text-primary font-bold">
              {isEnglishLocale && text("common:ziwo-name")}
            </span>
            {text("Header:header-paragraph")}
          </p>
          <Link href="/">
            <a>
              <CustomButton title={text("common:try-for-free")} />
            </a>
          </Link>
          <p className="mt-2 text-gray-500">
            {text("Header:header-credit-card")}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" hidden lg:flex justify-end">
            {/* *********** HEADER IMAGE ************************ */}
            <Image
              src="/images/home-image-1.svg"
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
    // <div>
    //   <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
    //     <div className="col-start-1 mx-6 lg:ml-24 mt-10">
    //       <h1 className="font-bold text-3xl md:text-5xl">Simply.Talk</h1>
    //       <h1 className="font-bold text-3xl md:text-5xl leading-normal">
    //         to Your <span className="text-gradient">Clients</span>
    //       </h1>
    //       <p className="w-sreen my-7 text-base md:text-2xl tracking-widest	">
    //         {/* <span className="text-primary font-bold">ZIWO</span> is a leading{" "}
    //         <span className="font-bold">
    //           cloud-based telephony system in Saudi Arabia.
    //         </span>{" "}
    //         This solution will provide you with crystal clear phone calls and
    //         many capabilities that will centralize all your phone operations in
    //         one single interface. */}
    //         {t("Header:header-paragraph")}
    //       </p>
    //       <Link href="/">
    //         <a>
    //           <CustomButton title="Try fro free" />
    //         </a>
    //       </Link>
    //       <p className="mt-3 font-bold">No credit card required</p>
    //     </div>
    //     <div className=" hidden lg:flex justify-end">
    //       <Image
    //         src="/images/home-image.png"
    //         width="856"
    //         height="567"
    //         alt="background image"
    //         priority
    //       />
    //     </div>
    //   </div>
    //   <BrandsLogo />
    // </div>
  );
};

export default Header;
