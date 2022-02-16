import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import CustomButton from "../CustomButton/CustomButton";
import Common from "../../../Hooks/Common";

const PriceCard = ({
  title,
  titleDescription,
  titleShortDescription,
  shortDesciption,
  briefDescription,
  listItemsArray,
  cardBackgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  buttonTitle,
  buttonLink,
  userSubscriptionType,
  userBillingType,
}) => {
  const { titleFontFamily, paragraphFontFamily } = Common();

  const { locale } = useRouter();
  const isArabicLanguage = locale === "ar" && true;

  const cardClasses = classNames({
    "bg-primary": cardBackgroundColor,
    "text-white": cardBackgroundColor,
  });

  const changeTextColor = classNames({
    "text-whire": cardBackgroundColor,
    "text-primary": !cardBackgroundColor,
  });

  const listItemImagePosition = classNames({
    "before:-right-12": isArabicLanguage,
    "text-right": isArabicLanguage,
    "text-left": !isArabicLanguage,
    "before:left-2": !isArabicLanguage,
  });

  const alignText = classNames({});

  return (
    <div
      className={`${cardClasses} px-4 mb-6 py-4 max-w-sm h-full border-2 shadow-md rounded-xl mx-s lg:mx-6`}
    >
      <h3
        className={`${titleFontFamily} font-bold text-2xl text-center mt-5 lg:px-6 xl:px-10`}
        dir="rtl"
      >
        {title}
      </h3>
      <h3 className={`${titleFontFamily} mb-6 text-6xl`}>{titleDescription}</h3>
      <p className={(cardClasses, paragraphFontFamily)}>
        {userSubscriptionType}
      </p>
      <p className={`font-bold ${changeTextColor} ${paragraphFontFamily}`}>
        {userBillingType}
      </p>
      <p className={`${paragraphFontFamily} px-6`}>{titleShortDescription}</p>
      <div className="my-4">
        <Link href={buttonLink}>
          <a target="_blank">
            <CustomButton
              title={buttonTitle}
              bgColor={buttonBackgroundColor}
              textColor={buttonTextColor}
            />
          </a>
        </Link>
      </div>
      <hr className="my-6 w-3/12 mx-auto" />
      <p className={`${paragraphFontFamily} mb-6 font-bold`}>
        {shortDesciption}
      </p>
      <p className={`${paragraphFontFamily} font-bold mb-4`}>
        {briefDescription}
      </p>
      <ul className=" list-disc list-inside price-card card-options">
        {listItemsArray?.map((item, index) => {
          return (
            <li
              key={index}
              className={`${paragraphFontFamily} ${listItemImagePosition} mb-2 w-10/12 card-item`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PriceCard;
