import Head from "next/head";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const isEnglishLocale = router.locale == "en-US" && true;

  const pageTitle = isEnglishLocale
    ? "Cloud Contact Center Software | Cloud Call Center | Cloud Calling | ZIWO |"
    : "برنامج مركز الاتصال السحابي | مركز الاتصال السحابي | حلول مراكز الاتصال | حلول ZIWO |";
  const pageMetaDescription = isEnglishLocale
    ? "Cloud Contact Center Solution - API Based CRM integration - International Virtual Phone Numbers - Call tracking - Call masking - IVR"
    : "برنامج مركز اتصالات سحابي – واجهة برمجة التطبيقات – برامج إدارة علاقات العملاء – ارقام هواتف من مخالف الدول – تتبع المكالمات – إخفاء الرقم";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {/* TODO: will update the description */}
        <meta name="description" content={pageMetaDescription} />
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
