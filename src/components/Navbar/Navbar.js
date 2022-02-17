import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

import CustomButton from "../Common/CustomButton/CustomButton";
import Common from "../../Hooks/Common";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(true);

  const { paragraphFontFamily } = Common();

  const { t: text } = useTranslation("Navbar");
  const router = useRouter();

  const isArabicLanguage = router.locale === "ar" && true;

  const buttonLink = isArabicLanguage
    ? "https://ziwo.typeform.com/free-trial-ar"
    : "https://demo.ziwo.io/freetrial";

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const logoMargin = classNames({
    "ml-4": isArabicLanguage,
  });

  const handleLanguageToggle = async (event) => {
    await setLanguage(event.target.value);
  };

  const swipContent = classNames({
    "flex-row-reverse": isArabicLanguage,
  });

  const itemSpacing = classNames({
    "mx-4": isArabicLanguage,
  });

  return (
    <section className="shadow-sm">
      <nav className="container mx-auto py-2 sticky bg-white z-50">
        <div className={`${swipContent} flex justify-between`}>
          <div className={`flex ${swipContent} space-x-7`}>
            <div className={logoMargin}>
              <Link href="/">
                <a className="flex items-center py-2 mx-4 md:mx-0">
                  <Image
                    src="/images/ziwo-logo.png"
                    alt="ziwo logo"
                    width={90}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            {/* ************************************ PRIMARY NAVBAR ITEMS  ************************************** */}
            <div
              className={`hidden lg:flex items-center py-3 space-x-3 xl:space-x-6 ${swipContent} `}
            >
              <Link href="#why-ziwo">
                <a
                  className={`${paragraphFontFamily} ${itemSpacing} py-2 px-4 font-semibold hover:text-primary hover:font-normal  hover:bg-gray-100 transition duration-300`}
                >
                  {text("navbar-why-ziwo")}
                </a>
              </Link>

              <Link href="#Integration">
                <a
                  className={`${paragraphFontFamily} py-2 px-4 font-semibold hover:text-primary hover:bg-gray-100 hover:font-normal transition duration-300`}
                >
                  {text("navbar-integrations")}
                </a>
              </Link>
              <Link href="#benefits">
                <a
                  className={`${paragraphFontFamily} py-2 px-4 font-semibold hover:text-primary hover:bg-gray-100 hover:font-normal transition duration-300`}
                >
                  {text("navbar-benefits")}
                </a>
              </Link>
              <Link href="#customized-plans">
                <a
                  className={`${paragraphFontFamily} py-2 px-4 font-semibold hover:text-primary hover:bg-gray-100 hover:font-normal transition duration-300`}
                >
                  {text("navbar-customized-plans")}
                </a>
              </Link>
              <Link href="#pricing">
                <a
                  className={`${paragraphFontFamily} py-2 px-4 font-semibold hover:text-primary hover:bg-gray-100 hover:font-normal transition duration-300`}
                >
                  {text("navbar-pricing")}
                </a>
              </Link>
            </div>
          </div>
          {/* **************************************  MOBILE MENU BUTTON  **************************************  */}
          <div className={`flex items-center ${swipContent}`}>
            <span className="mt-2">
              <Image
                src="/images/language-icon.svg"
                alt="ziwo logo"
                width={20}
                height={20}
              />
            </span>
            <select
              className={"pr-1 py-2 rounded mr-3"}
              onChange={() => handleLanguageToggle(event)}
            >
              <option
                value="en-US"
                selected={!isArabicLanguage}
                className="nunito"
              >
                English
              </option>
              <option selected={isArabicLanguage} className="cairo" value="ar">
                العربية
              </option>
            </select>
            <div className="hidden lg:flex items-center space-x-3 mx-3">
              <Link href={buttonLink}>
                <a target="_blank">
                  <CustomButton title={text("navbar-try-for-free-button")} />
                </a>
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="outline-none mx-3"
                onClick={handleMobileMenuToggle}
              >
                <svg
                  className="w-6 h-6  hover:text-primary"
                  x-show="! showMobileMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* ***************************************  MOBILE MENU  ********************************************  */}
        <div hidden={showMobileMenu}>
          <ul className="font-semibold">
            <li>
              <Link href="#why-ziwo">
                <a
                  className={`${paragraphFontFamily} block text-sm px-2 py-4 transition hover:text-primary duration-300`}
                  onClick={handleMobileMenuToggle}
                >
                  {text("navbar-why-ziwo")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="#Integration">
                <a
                  className={`${paragraphFontFamily} block text-sm px-2 py-4 transition hover:text-primary duration-300`}
                  onClick={handleMobileMenuToggle}
                >
                  {text("navbar-integrations")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="#benefits">
                <a
                  className={`${paragraphFontFamily} block text-sm px-2 py-4 transition hover:text-primary duration-300`}
                  onClick={handleMobileMenuToggle}
                >
                  {text("navbar-benefits")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="#customized-plans">
                <a
                  className={`${paragraphFontFamily} block text-sm px-2 py-4 hover:text-primary  duration-300`}
                  onClick={handleMobileMenuToggle}
                >
                  {text("navbar-customized-plans")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <a
                  className={`${paragraphFontFamily} block text-sm px-2 py-4 transition hover:text-primary duration-300`}
                  onClick={handleMobileMenuToggle}
                >
                  {text("navbar-pricing")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
