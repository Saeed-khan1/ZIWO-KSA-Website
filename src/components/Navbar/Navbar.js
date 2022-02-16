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

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLanguageToggle = async (event) => {
    await setLanguage(event.target.value);
    console.log("========= language ", event.target.value);
  };

  const swipContent = classNames({
    "flex-row-reverse": isArabicLanguage,
  });

  return (
    <nav className="px-4 py-2 shadow-sm sticky top-0 bg-white z-50">
      <div className={`${swipContent} flex justify-between`}>
        <div className={`flex ${swipContent} space-x-7`}>
          <div className="ml-4">
            <Link href="/">
              <a className="flex items-center py-2">
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
            className={`hidden lg:flex items-center space-x-5 lg:space-x-7 xl:space-x-14 ${swipContent} `}
          >
            <Link href="#why-ziwo">
              <a
                className={`${paragraphFontFamily} py-2 px-2 font-semibold hover:text-primary transition duration-300`}
              >
                {text("navbar-why-ziwo")}
              </a>
            </Link>

            <Link href="#Integration">
              <a
                className={`${paragraphFontFamily} py-2 px-2 font-semibold hover:text-primary transition duration-300`}
              >
                {text("navbar-integrations")}
              </a>
            </Link>
            <Link href="#benefits">
              <a
                className={`${paragraphFontFamily} py-2 px-2 font-semibold hover:text-primary transition duration-300`}
              >
                {text("navbar-benefits")}
              </a>
            </Link>
            <Link href="#customized-plans">
              <a
                className={`${paragraphFontFamily} py-2 px-2 font-semibold hover:text-primary transition duration-300`}
              >
                {text("navbar-customized-plans")}
              </a>
            </Link>
            <Link href="#pricing">
              <a
                className={`${paragraphFontFamily} py-2 px-2 font-semibold hover:text-primary transition duration-300`}
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
            <Link href="https://demo.ziwo.io/freetrial">
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
            <Link href="#Benefits">
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
  );
};

export default Navbar;
