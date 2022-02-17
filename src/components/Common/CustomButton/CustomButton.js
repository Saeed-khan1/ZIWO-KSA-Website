import classNames from "classnames";

import Common from "../../../Hooks/Common";

const CustomButton = ({
  title,
  bgColor = "bg-primary",
  textColor = "text-white",
}) => {
  const { paragraphFontFamily } = Common();

  const buttonClasses = classNames("px-4", {
    "hover:bg-gray-300": bgColor == "bg-white",
    "hover:text-primary": bgColor == "bg-primary",
    "hover:bg-gray-200": bgColor == "bg-primary",
  });

  return (
    <button
      className={`${buttonClasses} ${paragraphFontFamily} ${bgColor} ${textColor} font-bold py-2 rounded`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
