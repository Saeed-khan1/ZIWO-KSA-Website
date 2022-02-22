import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import Common from "../../Hooks/Common";
import classNames from "classnames";

const CustomerReviews = () => {
  const router = useRouter();
  const { t: text } = useTranslation("CustomerReviews");

  const { titleFontFamily, paragraphFontFamily } = Common();

  const isArabicLanguage = router.locale === "ar" && true;

  const textDirection = !isArabicLanguage ? "ltr" : "rtl";

  const alignText = classNames({
    "text-left": !isArabicLanguage,
    "text-right": isArabicLanguage,
  });

  return (
    <section>
      <div className="-mb-2">
        <Image
          src="/images/background-gradient-top.svg"
          width="1446"
          height="109"
          layout="responsive"
          alt="background image"
        />
      </div>
      <div className="bg-neutral-100">
        <div className="flex flex-col container mx-auto px-0 lg:px-20 items-center ">
          <h2
            className={`${titleFontFamily} text-11xl md:text-10xl font-bold my-8`}
            dir={textDirection}
          >
            {text("customer-title-first")}
            <span className="text-gradient">
              {text("customer-title-color-text")}
            </span>
            {text("customer-title-second")}
            {/* {text("customer-title-second")} */}
          </h2>
          {/* TODO: the review star will be dynmaic based on the customer review from backend */}
          <Image
            className="mb-8"
            src="/images/review-star.png"
            width="311"
            height="31"
            alt="background image"
          />
          <div className="flex flex-wrap text-center mt-8 mx-8">
            <div className="w-full md:w-4/12 mb-16">
              <Image
                src="/images/google-logo.png"
                width="120"
                height="39"
                alt="background image"
              />
              <h3
                className={`${titleFontFamily} text-10xl font-bold my-3`}
                dir={textDirection}
              >
                <span className="text-primary">4.7</span>/5
              </h3>
              <p
                className={`${paragraphFontFamily} px-3 md:px-8`}
                dir={textDirection}
              >
                <span>
                  {isArabicLanguage && text("google-description-arabic-prefix")}
                </span>
                <span className="font-bold text-primary">
                  {text("google-description-first")}
                </span>
                {text("google-description-second")}
              </p>
            </div>
            <div className="w-full md:w-4/12 mb-16">
              <Image
                src="/images/crowd-logo.png"
                width="120"
                height="34"
                alt="background image"
              />
              <h3
                className={`${titleFontFamily} text-10xl font-bold my-3`}
                dir={textDirection}
              >
                <span className="text-primary">4.8</span>/5
              </h3>
              <p
                className={`${paragraphFontFamily} px-3 md:px-10`}
                dir={textDirection}
              >
                {text("crowed-description-first")}
                <span className="font-bold text-primary">
                  {text("crowed-description-second")}
                </span>
                {isArabicLanguage && text("crowed-description-third")}
              </p>
            </div>
            <div className="w-full md:w-4/12 mb-16">
              <Image
                src="/images/capterra-logo.png"
                width="120"
                height="27"
                alt="background image"
              />
              <h3
                className={`${titleFontFamily} text-10xl font-bold my-3`}
                dir={textDirection}
              >
                <span className="text-primary">4.8</span>/5
              </h3>
              <p
                className={`${paragraphFontFamily} px-3 lg:px-20 mx-0 lg:mx-6`}
                dir={textDirection}
              >
                {text("capterra-description")}
              </p>
            </div>
          </div>
          {/* <Image
          src="/images/avatar.png"
          width="145"
          height="145"
          alt="background image" 
        /> */}
          <div className="flex flex-wrap text-center mx-8">
            <div className="w-full md:w-8/12 mb-16">
              <div className="text-left mx-2 md:ml-20 ">
                <Image
                  src="/images/first-comma.svg"
                  width="63"
                  height="37"
                  alt="comma"
                />
              </div>
              <h4
                className={`${paragraphFontFamily} ${alignText} ${
                  !isArabicLanguage && "font-bold"
                } mx-2 md:ml-20 text-base md:text-2xl text-gray-400`}
                style={{ lineHeight: "36px" }}
                dir={textDirection}
              >
                {isArabicLanguage && text("customer-review-prefix")}
                <span className="text-primary">
                  {text("customer-review-color-text-first")}
                </span>
                <span className="text-gray-400">
                  {text("customer-review-text-first")}
                </span>
                <span className="text-primary">
                  {text("customer-review-color-text-second")}
                </span>
                {isArabicLanguage && text("customer-review-arabic-postfix")}
              </h4>
              <div className="text-right">
                <Image
                  src="/images/last-comma.svg"
                  width="63"
                  height="37"
                  alt="comma"
                />
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <Image
                src="/images/yazan-photo.png"
                width="188"
                height="200"
                alt="Yaza picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div
          className={`text-center md:${alignText} container mx-auto ${
            isArabicLanguage ? "md:mr-40" : "md:ml-40"
          } md:px-28`}
        >
          <p
            className={`${paragraphFontFamily} text-paragraphGrayColor`}
            dir={textDirection}
          >
            {text("customer-review-company-name")}
          </p>
          <p
            className={`mb-2 text-paragraphGrayColor ${paragraphFontFamily}`}
            dir={textDirection}
          >
            <span>{text("customer-review-company-representative-name")}</span>
            <span className={`${isArabicLanguage && "block"}`}>
              {text("customer-review-company-representative-designation")}
            </span>
          </p>
        </div>
      </div>
      <div className="-mt-3">
        <Image
          src="/images/background-gradient-bottom.svg"
          width="1446"
          height="109"
          layout="responsive"
          alt="background image"
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
