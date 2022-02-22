import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Common from "../../Hooks/Common";

const Footer = () => {
  const { t: text } = useTranslation("Footer");

  const { paragraphFontFamily } = Common();

  return (
    <footer className="py-3 text-center bg-footerBacgroundColor text-white">
      <Link href="https://www.facebook.com/ziwobyaswat">
        <a target="_blank">
          <Image
            src="/images/facebook-logo.svg"
            width="36"
            height="36"
            alt="facebook logo"
          />
        </a>
      </Link>
      <span className="px-1"></span>
      <Link href="https://www.linkedin.com/company/ziwo/">
        <a target="_blank">
          <Image
            src="/images/linkedin-logo.svg"
            width="36"
            height="36"
            alt="facebook logo"
          />
        </a>
      </Link>
      <p className={paragraphFontFamily} dir="rtl">
        {text("footer-text")}
      </p>

      {/* TODO: We will need it in future */}
      {/* <div className="grid  md:grid-cols-5 justify-center md:justify-items-center leading-10">
        <div>
          <p className="font-bold">Product</p>
          <p>Omni channel</p>
          <p>360 View</p>
          <p>Workforce Engagement</p>
          <p className="mb-6">AI Knowledgebase</p>
        </div>
        <div>
          <p className="font-bold">Features</p>
          <p>Call Masking</p>
          <p>Call Tracking</p>
          <p>Call Whispering</p>
          <p>Roaming Agent</p>
          <p>Outbound dialer</p>
          <p>Web Callback</p>
          <p>End Call Survey</p>
          <p>CDR</p>
          <p>Statistics</p>
          <p className="mb-6">FCR</p>
        </div>
        <div>
          <p className="font-bold">Integrations</p>
          <p>Freshdesk</p>
          <p>Freshsales</p>
          <p>Hubspot</p>
          <p>MS Dynamics 365</p>
          <p>Salesforce</p>
          <p>SAP</p>
          <p>Zapier</p>
          <p>Zendesk</p>
          <p>Zendesk Sell</p>
          <p className="mb-6">Intercom</p>
        </div>
        <div>
          <p className="font-bold">Resources</p>
          <p>Blog</p>
          <p className="mb-6">Knowledgebase</p>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Become a Partner</p>
          <p>Careers</p>
          <Image
            src="/images/what'sapp-barcode.png"
            width="124"
            height="124"
            alt="background image"
          />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
