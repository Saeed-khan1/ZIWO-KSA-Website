import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const CustomerReviews = () => {
  const { t: text } = useTranslation("CustomerReviews");
  const router = useRouter();

  const isArabicLanguage = router.locale === "ar" && true;

  return (
    <section>
      <Image
        src="/images/background-top-image.png"
        width="1920"
        height="110"
        // layout="fill"
        alt="background image"
      />
      <div className="flex flex-col items-center bg-zinc-50">
        <h2 className="text-3xl lg:text-5xl font-bold my-8">
          {text("customer-title-first")}{" "}
          <span className="text-gradient">
            {text("customer-title-color-text")}
          </span>{" "}
          {text("customer-title-second")}
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
            <h3 className="text-5xl font-bold my-3">
              <span className="text-primary">4.7</span>/5
            </h3>
            <p>
              “<strong>{text("google-description-first")}</strong>{" "}
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
            <h3 className="text-5xl font-bold my-3">
              <span className="text-primary">4.8</span>/5
            </h3>
            <p>
              {text("crowed-description-first")}
              <strong>{text("crowed-description-second")}</strong>”
            </p>
          </div>
          <div className="w-full md:w-4/12 mb-16">
            <Image
              src="/images/capterra-logo.png"
              width="120"
              height="27"
              alt="background image"
            />
            <h3 className="text-5xl font-bold my-3">
              <span className="text-primary">4.8</span>/5
            </h3>
            <p>{text("capterra-description")}</p>
          </div>
        </div>
        {/* <Image
          src="/images/avatar.png"
          width="145"
          height="145"
          alt="background image"
        /> */}
        <div className="flex flex-wrap text-center  mt-8 mx-8">
          <div className="w-full md:w-8/12 mb-16">
            <div className="text-left mx-2 md:ml-20 pl-0 lg:pl-40">
              <Image
                src="/images/first-comma.svg"
                width="63"
                height="37"
                alt="comma"
              />
            </div>
            <h4 className="font-bold mx-2 md:ml-20 pl-0 lg:pl-40" dir="rtl">
              <span className="text-primary">
                {text("customer-review-color-text-first")}
              </span>
              <span className="text-gray-400">
                {text("customer-review-text-first")}
              </span>
              <span className="text-primary">
                {text("customer-review-color-text-second")}
              </span>
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
        <div className="text-center md:text-left font-bold">
          <p>CitrussTV</p>
          <p>
            Yazan Al-Tamimi IT, <span className="font-normal">Deputy head</span>
          </p>
        </div>
      </div>
      <Image
        src="/images/background-bottom-image.png"
        width="1920"
        height="109"
        alt="background image"
      />
    </section>
  );
};

export default CustomerReviews;
