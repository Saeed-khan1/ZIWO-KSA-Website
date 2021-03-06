import Head from "next/head";

import Header from "../src/components/Header/Header";
import CustomizedPlans from "../src/components/CustomizedPlans/CustomizedPlans";
import Features from "../src/components/Features/Features";
import CustomerReviews from "../src/components/CustomerReviews/CustomerReviews";
import ProfitableSolution from "../src/components/ProfitableSolution/ProfitableSolution";
import Cta from "../src/components/CTA/Cta";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import ConnectCrm from "../src/components/ConnectCRM/ConnectCrm";
import WhyZiwo from "../src/components/WhyZiwo/WhyZiwo";
import Benefits from "../src/components/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cloud Contact Center Software | Cloud Contact Center | ZIWO
        </title>
        {/* TODO: will update the description */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/ziwo-favicon.png" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <WhyZiwo />
        <ConnectCrm />
        <Benefits />
        {/* <Features /> */}
        <CustomerReviews />
        <CustomizedPlans />
        <ProfitableSolution />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
