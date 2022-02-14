import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import Common from "../../Hooks/Common";

const CustomizedPlans = () => {
  let { t: text } = useTranslation();

  const { titleFontFamily, paragraphFontFamily } = Common();

  return (
    <div
      className="flex flex-col items-center h-full mt-16 text-center px-8"
      id="customized-plans"
    >
      <h2 className={`${titleFontFamily} text-3xl lg:text-5xl font-bold`}>
        {text("CustomizedPlans:customized-plans-title-frist")}
        <span className="text-gradient">
          {text("CustomizedPlans:customized-plans-title-second")}
        </span>{" "}
      </h2>
      <p
        className={`${paragraphFontFamily} text-center lg:w-8/12 mt-5 mb-12 md:mb-5 text-2xl text-gray-500`}
      >
        {text("CustomizedPlans:customized-plans-paragraph-first")}
        <span className="font-bold">
          {text("CustomizedPlans:customized-plans-paragraph-second-bold")}
        </span>
      </p>
      <Image
        src="/images/customized-plans.png"
        width="1160"
        height="558"
        alt="customized plans image"
      />
    </div>
  );
};

export default CustomizedPlans;
