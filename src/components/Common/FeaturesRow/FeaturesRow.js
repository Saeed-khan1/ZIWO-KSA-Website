import Image from "next/image";
import classNames from "classnames";

const FeaturesRow = ({
  reverse,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  title,
  description,
}) => {
  const verticalFeatureClass = classNames(
    "mt-15",
    "md:mb-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full md:w-1/2 lg:text-left mb-8 md:pl-10 xl:pl-24">
        <h3 className="text-3xl lg:text-5xl font-bold w-full xl:w-8/12 text-center md:text-left">
          {title}
        </h3>
        <p className="mt-6 leading-8 w-full lg:w-8/12">{description}</p>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <Image
          src={image}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default FeaturesRow;
