import useTranslation from "next-translate/useTranslation";

import PriceCard from "../Common/PriceCard/PriceCard";

const ProfitableSolution = () => {
  const { t: text } = useTranslation("ProfitableSolution");

  return (
    <div
      className="flex flex-col items-center mt-16 text-center px-8 h-full"
      id="pricing"
    >
      <h2 className="text-3xl lg:text-5xl font-bold">
        <span className="text-gradient">
          {text("profitable-title-bg-color")}
        </span>{" "}
        {text("profitable-title")}
      </h2>
      <p className="text-center lg:w-8/12 my-5">
        {text("profitable-paragraph-first")}
        <span className="text-primary font-bold">
          {text("profitable-paragraph-color-text")}
        </span>
        {text("profitable-paragraph-second")}
      </p>

      <div className="block lg:flex xl:mx-16">
        <PriceCard
          title={text("profitable-card-business-title")}
          titleDescription={text("profitable-card-business-price")}
          shortDesciption={text("profitable-card-business-experience")}
          briefDescription={text("profitable-card-business-description")}
          buttonTitle={text("profitable-card-business-button-title")}
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
          shortDesciption={text("profitable-card-contact-short-description")}
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
        />
      </div>
    </div>
  );
};

export default ProfitableSolution;
