import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import CustomButton from "../Common/CustomButton/CustomButton";
import Common from "../../Hooks/Common";

const Cta = () => {
  const router = useRouter();
  const { t: text } = useTranslation("Cta");

  const { titleFontFamily, paragraphFontFamily } = Common();

  const isArabicLanguage = router.locale === "ar" && true;

  return (
    <div className="flex flex-col items-center bg-ctaBackgroundColor text-white mt-10 pb-8">
      <h2
        className={`${titleFontFamily} text-3xl lg:text-5xl font-bold my-8`}
        // dir="rtl"
      >
        {text("cta-title")}
      </h2>
      <p
        className={`${paragraphFontFamily} mb-6 w-10/12 md:w-6/12 text-center`}
        dir="rtl"
      >
        {text("cta-paragraph-first")}
        <span className="font-bold text-primary">
          {text("cta-paragraph-color-text")}
        </span>
        {text("cta-paragraph-second")}
      </p>
      <Link href="https://ziwo.typeform.com/contact-us">
        <a target="_blank">
          <CustomButton title={text("cta-contact-us")} />
        </a>
      </Link>
      {/* <p className="mb-8 mt-6">No credit card required</p> */}
    </div>
  );
};

export default Cta;
