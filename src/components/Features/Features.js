import Image from "next/image";

import FeaturesRow from "../Common/FeaturesRow/FeaturesRow";

const Features = () => {
  return (
    <section>
      <div className="">
        <Image
          src="/images/background-top-image.png"
          width="1920"
          height="110"
          // layout="fill"
          alt="background image"
        />
      </div>
      {/* <img src="/images/background-top-image.png" alt="" /> */}
      <div
        className="flex flex-col items-center text-center px-8 h-full bg-zinc-50"
        id="features"
      >
        <h2 className="text-3xl lg:text-5xl font-bold">
          <span className="text-gradient">Unlimited</span> Features
        </h2>
        <p className="text-center lg:w-8/12 my-5">
          Our cloud call center offers hundreds of features to help your company
          serve customers better, sell more, and handle more calls. Alongside
          real-time monitoring of the quality of service, workload, and employee
          productivity.
        </p>
        <FeaturesRow
          title={<span className="text-gradient">Omnichannel</span>}
          description="ZIWO assists companies in organizing their interactions with customers and it allows the customers to seamlessly switch backward and forward across all different channels, alongside phone, website, WhatsApp, SMS."
          imageWidth="670"
          imageHeight="588"
          image="/images/omnichannel.png"
          imageAlt="Feature image"
        />
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

export default Features;
