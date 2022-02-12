import classNames from "classnames";
import { useRouter } from "next/router";

const CustomButton = ({
  title,
  bgColor = "bg-primary",
  textColor = "text-white",
}) => {
  const router = useRouter();
  const locale = router.locale;

  const buttonClasses = classNames("px-4", {
    "hover:bg-gray-300": bgColor == "bg-white",
    "hover:text-primary": bgColor == "bg-primary",
    "hover:bg-white": bgColor == "bg-primary",
    // "px-2": locale === "en-US",
    // "px-6": locale === "ar",
  });

  return (
    <button
      className={`${buttonClasses} ${bgColor} ${textColor} font-bold py-2 rounded`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
