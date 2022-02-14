import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";

import Common from "../../Hooks/Common";

const ConnectCrm = () => {
  const { t: text } = useTranslation("ConnectedCrm");

  const { titleFontFamily, paragraphFontFamily } = Common();

  const { locale } = useRouter();
  const isArabicLanguage = locale === "ar" && true;

  const mainContainer = classNames(
    "mt-15",
    // "md:mb-20",
    "flex",
    "flex-wrap",
    "items-center",
    "bg-neutral-100",
    {
      "flex-row-reverse": isArabicLanguage,
    }
  );

  const alignText = classNames("text-center", {
    "md:text-right": isArabicLanguage,
    "lg:text-left": !isArabicLanguage,
  });

  return (
    <>
      <div className="-mb-2">
        <Image
          src="/images/background-gradient-top.svg"
          width="1446"
          height="109"
          alt="background image"
        />
      </div>
      <div className={mainContainer} id="Integration">
        <div className=" w-full md:w-1/2 lg:text-left mb-8 md:px-10 xl:px-24">
          {/* <div className="w-full md:w-1/2 lg:text-left mb-8 md:pl-10 xl:pl-24"> */}
          <h3
            className={`${alignText} ${titleFontFamily} text-3xl lg:text-5xl font-bold p-4`}
            dir="rtl"
          >
            <span className="text-gradient">{text("crm-title-first")}</span>
            {text("crm-title-second")}
          </h3>
          <p
            className={`${alignText} ${paragraphFontFamily} mt-2 leading-8 p-4 text-2xl  text-gray-500`}
            dir="rtl"
          >
            {text("crm-paragraph-frist")}
            <span className="text-primary font-bold">
              {text("crm-paragraph-second-color")}
            </span>
            {text("crm-paragraph-third")}
          </p>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <Image
            src="/images/connect-crm.png"
            width="547"
            height="457"
            alt="Supported CRM image"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="-mt-2">
        <Image
          src="/images/background-gradient-bottom.svg"
          width="1446"
          height="109"
          alt="background image"
        />
      </div>
    </>
    // <div
    //   className="flex flex-col items-center text-center px-8 h-full"
    //   id="Integration"
    // >
    //   <FeaturesRow
    //     title="Connect with any External CRM"
    //     description="Connection to Ziwo Cloud Contact Center takes a few minutes. Connect it to any CRM (Customer relationship management), choose a number, and start receiving calls from customers or calling them."
    //     imageWidth="547"
    //     imageHeight="457"
    //     image="/images/connect-crm.png"
    //     imageAlt="Feature image"
    //     reverse
    //   />
    // </div>
  );
};

export default ConnectCrm;
