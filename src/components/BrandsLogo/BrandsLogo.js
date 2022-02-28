import Image from "next/image";

const BrandsLogo = () => {
  return (
    <section>
      <div className="flex justify-around items-center px-2 md:px-8  bg-image bg-neutral-100 pt-10 pb-1">
        <Image
          src="/images/alsaif-gallery-logo.png"
          width="87"
          height="95"
          alt="background image"
        />
        <Image
          src="/images/khaleej-logo.png"
          width="82"
          height="78"
          alt="background image"
        />
        <Image
          src="/images/burgerizzr-logo.png"
          width="96"
          height="96"
          alt="background image"
        />
        <Image
          src="/images/bwareq-logo.png"
          width="67"
          height="67"
          alt="background image"
        />
        <div className="hidden lg:inline-block">
          <Image
            src="/images/zension-logo.png"
            width="175"
            height="30"
            alt="background image"
          />
        </div>
        <div className="hidden lg:inline-block">
          <Image
            src="/images/sushishop-logo.png"
            width="165"
            height="76"
            alt="background image"
          />
        </div>
        <div className="hidden lg:inline-block">
          <Image
            src="/images/sitros-logo.png"
            width="150"
            height="50"
            alt="background image"
          />
        </div>
      </div>
      <div className="-mt-2">
        <Image
          src="/images/background-gradient-bottom.png"
          width="1446"
          height="109"
          layout="responsive"
          alt="background image"
        />
      </div>
    </section>
  );
};

export default BrandsLogo;
