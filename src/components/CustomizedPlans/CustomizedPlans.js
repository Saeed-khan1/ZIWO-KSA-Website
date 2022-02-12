import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const CustomizedPlans = () => {
  let { t: text } = useTranslation();

  return (
    <div
      className="flex flex-col items-center h-full mt-16 text-center px-8"
      id="customized-plans"
    >
      <h2 className="text-3xl lg:text-5xl font-bold">
        {text("CustomizedPlans:customized-plans-title-frist")}
        <span className="text-gradient">
          {text("CustomizedPlans:customized-plans-title-second")}
        </span>{" "}
      </h2>
      <p className="text-center lg:w-8/12 mt-5 mb-12 md:mb-5">
        {text("CustomizedPlans:customized-plans-paragraph")}
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
