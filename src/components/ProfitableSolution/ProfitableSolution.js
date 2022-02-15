import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";

import PriceCard from "../Common/PriceCard/PriceCard";
import Common from "../../Hooks/Common";

const ProfitableSolution = () => {
  const [isDollor, setIsDollor] = React.useState(false);
  const [isSubscriptionYearly, setIsSubscriptionYearly] = React.useState(false);

  const { t: text } = useTranslation("ProfitableSolution");

  const { titleFontFamily, paragraphFontFamily } = Common();

  const { locale } = useRouter();
  const isArabicLanguage = locale === "ar" && true;

  const phoneSystemPriceInDollorOrRiyal = isDollor ? "$30" : "SAR 113";
  const contactCenterPriceInDollorOrRiyal = isDollor ? "$82" : "SAR 308";

  const subscriptionType = !isSubscriptionYearly
    ? "Billed Annually"
    : "Billed Quarterly";

  const cloudPhoneSystemPrice = isArabicLanguage ? "س.ر ١١٣" : "$30";
  const cloudContactCenterPrice = isArabicLanguage ? "س.ر ٣٠٨" : "$30";

  const handleCurrencyToggle = (event) => {
    const value = event.target.value;
    setIsDollor(!isDollor);
  };

  const handleSubscriptionTypeToggle = (event) => {
    const value = event.target.value;
    setIsSubscriptionYearly(!isSubscriptionYearly);
  };

  return (
    <div
      className="flex flex-col items-center mt-16 text-center px-8 h-full"
      id="pricing"
    >
      <h2 className={`${titleFontFamily} text-3xl lg:text-5xl font-bold`}>
        <span className="text-gradient">
          {text("profitable-title-bg-color")}
        </span>{" "}
        {text("profitable-title")}
      </h2>
      <p className={`${paragraphFontFamily} text-center lg:w-8/12 my-5`}>
        {text("profitable-paragraph-first")}
        <span className="text-primary font-bold">
          {text("profitable-paragraph-color-text")}
        </span>
        {text("profitable-paragraph-second")}
      </p>

      <div className="flex items-center flex-wrap justify-center w-full mb-12">
        <label
          htmlFor="toogleA"
          className="flex items-center cursor-pointer md:w-1/2 w-full ml-7 mb-4 md:mb-0 md:ml-0 justify-center md:justify-end"
        >
          <p className={`${paragraphFontFamily} mr-3 text-gray-700 font-bold`}>
            {text("profitable-sbuscription-yearly")}
          </p>
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="sr-only"
              onChange={handleSubscriptionTypeToggle}
            />
            <div className="w-14 h-6 bg-primary rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow top-0 right-7 transition"></div>
          </div>
          <p
            className={`${paragraphFontFamily} ml-3 mr-10 text-gray-700 font-bold`}
          >
            {text("profitable-sbuscription-quaterly")}
          </p>
        </label>
        <label
          htmlFor="currencyToggle"
          className="flex items-center cursor-pointer md:w-1/2 w-full justify-center md:justify-start mr-6 md:mr-0 border-0 md:border-l-2"
        >
          <p
            className={`${paragraphFontFamily} mr-3 ml-10 text-gray-700 font-bold`}
          >
            {text("profitable-sbuscription-billing-type-riyal")}
          </p>
          <div className="relative">
            <input
              id="currencyToggle"
              type="checkbox"
              className="sr-only"
              value={true}
              onChange={handleCurrencyToggle}
            />
            <div className="w-14 h-6 bg-primary rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow top-0 right-7 transition"></div>
          </div>
          <p className={`${paragraphFontFamily} ml-3 text-gray-700 font-bold`}>
            {text("profitable-sbuscription-billing-type-dollar")}
          </p>
        </label>
      </div>

      <div className="block lg:flex xl:mx-16">
        <PriceCard
          title={text("profitable-card-business-title")}
          titleDescription={text("profitable-card-business-price")}
          titleDescription={phoneSystemPriceInDollorOrRiyal}
          shortDesciption={text("profitable-card-business-experience")}
          // userSubscriptionType={contactCenterPriceInDollorOrRiyal}
          userSubscriptionType={text("user-subscription-type")}
          userBillingType={subscriptionType}
          briefDescription={text("profitable-card-business-description")}
          buttonTitle={text("profitable-card-business-button-title")}
          buttonLink="https://demo.ziwo.io/freetrial"
          listItemsArray={[
            text("profitable-card-business-list-item-1"),
            text("profitable-card-business-list-item-2"),
            text("profitable-card-business-list-item-3"),
            text("profitable-card-business-list-item-4"),
          ]}
        />
        <PriceCard
          title={text("profitable-card-contact-title")}
          titleDescription={text("profitable-card-contact-price")}
          titleDescription={contactCenterPriceInDollorOrRiyal}
          shortDesciption={text("profitable-card-contact-short-description")}
          // userSubscriptionType={contactCenterPriceInDollorOrRiyal}
          userSubscriptionType={text("user-subscription-type")}
          userBillingType={subscriptionType}
          briefDescription={text("profitable-card-contact-brief-description")}
          cardBackgroundColor="primary"
          listItemsArray={[
            text("profitable-card-contact-list-item-1"),
            text("profitable-card-contact-list-item-2"),
            text("profitable-card-contact-list-item-3"),
            text("profitable-card-contact-list-item-4"),
            text("profitable-card-contact-list-item-5"),
            text("profitable-card-contact-list-item-6"),
            text("profitable-card-contact-list-item-7"),
          ]}
          buttonLink="https://demo.ziwo.io/freetrial"
          buttonTextColor="text-black"
          buttonBackgroundColor="bg-white"
          buttonTitle={text("profitable-card-contact-button-title")}
        />
        <PriceCard
          title={text("profitable-card-enterprise-title")}
          titleDescription={text(
            "profitable-card-enterprise-title-description"
          )}
          titleShortDescription={text(
            "profitable-card-enterprise-short-title-description"
          )}
          shortDesciption={text("profitable-card-enterprise-short-description")}
          listItemsArray={[
            text("profitable-card-enterprise-list-item-1"),
            text("profitable-card-enterprise-list-item-2"),
            text("profitable-card-enterprise-list-item-3"),
            text("profitable-card-enterprise-list-item-4"),
            text("profitable-card-enterprise-list-item-5"),
            text("profitable-card-enterprise-list-item-6"),
            text("profitable-card-enterprise-list-item-7"),
          ]}
          buttonTitle={text("profitable-card-enterprise-button-title")}
          buttonLink="https://ziwo.typeform.com/contact-us"
        />
      </div>
    </div>
  );
};

export default ProfitableSolution;
