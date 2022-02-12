import Link from "next/link";
import classNames from "classnames";

import CustomButton from "../CustomButton/CustomButton";

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
}) => {
  const cardClasses = classNames({
    "bg-primary": cardBackgroundColor,
    "text-white": cardBackgroundColor,
  });

  return (
    <div
      className={`${cardClasses} px-4 mb-6 py-4 max-w-sm h-full border-2 shadow-md rounded-xl mx-2 lg:mx-8`}
    >
      <h3 className="text-2xl text-center mt-5 lg:px-6 xl:px-10" dir="rtl">
        {title}
      </h3>
      <h3 className="mb-6 text-6xl">{titleDescription}</h3>
      <h3 className="font-bold text-xl">{titleShortDescription}</h3>
      <div className="my-4">
        <Link href="/">
          <a>
            <CustomButton
              title={buttonTitle}
              bgColor={buttonBackgroundColor}
              textColor={buttonTextColor}
            />
          </a>
        </Link>
      </div>
      <hr className="my-6 w-3/12 mx-auto" />
      <p className="mb-6 font-bold">{shortDesciption}</p>
      <p className="font-bold mb-4">{briefDescription}</p>
      <ul className="text-left list-disc list-inside price-card">
        {listItemsArray?.map((item, index) => {
          return (
            <li key={index} className="mb-2 w-10/12 card-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PriceCard;
