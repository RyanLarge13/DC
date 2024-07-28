import React from "react";
import Image from "next/image";
import Hr from "@/public/assets/hr.svg";
import PriceCard from "@/components/PriceCard";
import Footer from "@/components/Footer";

const Sec2 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      <p className="mb-20 text-xl">Make Your Stance</p>
      <div className="no-scrollbar grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:gap-x-5">
        <PriceCard
          title="Free Portfolio"
          tag="FREE"
          price="0"
          benefits={[
            "30+ Free Templates",
            "Free Domain",
            "Fun Customization",
            "Free Forever",
          ]}
          desc="Create your personal portfolio for free here!"
          btnTxt="Start Building"
          styles="bg-slate-900"
        />
        <PriceCard
          title="Professional Portfolio"
          tag="TOP CHOICE"
          price="50"
          benefits={[
            "Custom Domain",
            "Fully Customizable",
            "Employer Ready",
            "SEO Integration",
          ]}
          desc="Make your stance in the world wide web with a fully custom personal portfolio to show off to employers or customers"
          btnTxt="Get Started"
          styles="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 xl:scale-110"
        />
        <PriceCard
          title="Landing Page"
          tag="SPECIAL OFFER"
          price="30"
          benefits={[
            "Custom Domain",
            "Fully Customizable",
            "Logo Included",
            "SEO Integration",
          ]}
          desc="Trying to get seen or show off your services? Check out our landing page options and start building while the offer lasts!"
          btnTxt="Get Started"
          styles="bg-slate-900"
        />
      </div>
    </section>
  );
};

const Sec3 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      <p className="mb-20 text-xl">Mobile Apps</p>
      <div className="no-scrollbar grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:gap-x-5">
        <PriceCard
          title="Android App"
          tag="ANDROID"
          price="500"
          benefits={[
            "Compatible With Android",
            "Deploy To Google Play",
            "Free Google Play Registration Fee",
            "Monetize For Free",
          ]}
          desc="Start building your first mobile application for Android"
          btnTxt="Start Building"
          styles="bg-slate-900"
        />
        <PriceCard
          title="Cross Platform"
          tag="TOP CHOICE"
          price="800"
          benefits={[
            "IOS & Android Compatible",
            "Deploy To Multiple App Stores",
            "Multiple Free App Store Registrations",
            "Monetize For Free",
          ]}
          desc="Build your mobile application for both IOS and Android devices. Deploy your new application to multiple app stores and deploy a web version of your app to the internet!"
          btnTxt="Let's Go!"
          styles="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 xl:scale-110"
        />
        <PriceCard
          title="IOS App"
          tag="IPHONE"
          price="550"
          benefits={[
            "Compatible With Iphone",
            "Deploy To Apple Store",
            "Free Apple Registration Fee",
            "Monetize For Free",
          ]}
          desc="Start building your first mobile application for IOS"
          btnTxt="Start Building"
          styles="bg-slate-900"
        />
      </div>
    </section>
  );
};

const Sec4 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      <p className="mb-20 text-xl">Desktop Apps</p>
      <div className="no-scrollbar grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:gap-x-5">
        <PriceCard
          title="Microsoft"
          tag="WINDOWS OS"
          price="1200"
          benefits={[
            "Compatible With All Microsoft Systems",
            "Package Your App For The Microsoft Store",
            "Free Distribution Landing Page",
            "Free Documentation",
          ]}
          desc="Build a solution for Microsoft systems and make it available to you and your team or the entire world"
          btnTxt="Get Started"
          styles="bg-slate-900"
        />
        <PriceCard
          title="Mac, Linux, Microsoft"
          tag="TOP CHOICE"
          price="2000"
          benefits={[
            "Distribute Across Multiple OS",
            "Package Your App On Multiple Platforms",
            "Free Distribution Landing Page",
            "Free Documentation",
          ]}
          desc="Get your desktop environment set up on all popular operating systems with your new application to solve your problems"
          btnTxt="Let's Go!"
          styles="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 xl:scale-110"
        />
        <PriceCard
          title="Games"
          tag="GAMING"
          price="5000"
          benefits={[
            "Choose A Platform",
            "Publish Your Game On Steam",
            "Server Included",
            "Free Landing Page & Branding",
          ]}
          desc="Do you have the next big game idea? Build for mobile or PC and get your idea distributed the the world"
          btnTxt="Get Started"
          styles="bg-slate-900"
        />
      </div>
    </section>
  );
};

const Sec5 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      <p className="mb-20 text-xl">Specials</p>
      <div className="no-scrollbar grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:gap-x-5">
        <PriceCard
          title="PWA"
          tag="PROGRESSIVE WEB APP"
          price="1000"
          benefits={[
            "Free Branding",
            "Downloadable on Any Platform",
            "Publish Your App On App Stores",
            "Free Distribution Landing Page",
          ]}
          desc="Enter the world of PWA's, build a web application ready to deploy to any app store, downloadable straight form the browser and accessible via the internet"
          btnTxt="Get Started"
          styles="bg-slate-900"
        />
        <PriceCard
          title="Completely Custom"
          tag="TOP CHOICE"
          price="0"
          benefits={[
            "Completely Customize EVERYTHING",
            "Build Your Own Brand",
            "Choose Your Platform",
            "Guide The Way",
          ]}
          desc="don't see what you are looking for? No problem, Select this option so we can get in touch and have a deep discussion on your goals and get you a free quote to start integrating your custom solutions"
          btnTxt="Let's Go!"
          styles="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 xl:scale-110"
        />
        <PriceCard
          title="E-Commerce"
          tag="BUSINESS SOLUTION"
          price="1500"
          benefits={[
            "SEO Optimization",
            "Free Branding",
            "Get Started Business Solutions",
            "Full-stack Implementation Included",
          ]}
          desc="for personal or business solutions no matter how big or how small, we have you covered on all of your E-commerce needs"
          btnTxt="Get Started"
          styles="bg-slate-900"
        />
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <main>
      <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-60 xl:flex xl:items-center xl:justify-between xl:gap-x-10 xl:text-left">
        <div className="max-w-[600px] flex-1">
          <h2 className="mt-10 px-5 text-4xl font-bold">Pricing & Plans</h2>
          <Image
            src={Hr}
            alt="horizontal"
            className="mx-auto my-10 w-20 xl:mx-0 xl:ml-5"
          />
          <p className="px-10 xl:px-0 xl:pl-5">
            Our Pricing plans are straight forward! Every project depending on
            type has a base price and after an in-depth discussion, an estimated
            quote is given to you for completely free. No Charges until the
            actual building process begins!
          </p>
        </div>
        <div className="max-w-[600px] flex-1">
          <h3 className="mt-20 px-5 text-2xl font-bold xl:mt-0 xl:pl-0">
            <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              No
            </span>{" "}
            Commitment
          </h3>
          <h3 className="mt-5 px-5 text-2xl font-bold xl:pl-0">
            {" "}
            <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              No
            </span>{" "}
            Contracts
          </h3>
          <h3 className="mt-5 px-5 text-2xl font-bold xl:pl-0">
            {" "}
            <span className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              No
            </span>{" "}
            Hidden Fees
          </h3>
          <p className="mt-20 px-10 xl:mt-5 xl:px-0">
            Check out our selection of pricing plans below. You will find a
            price for ever software we specialize in, plus a few extra specials
          </p>
          <p className="mt-20 px-10 text-xs text-gray-400 xl:mt-5 xl:px-0">
            All prices below are base prices for starting the application. All
            default integrations and features can be viewed when at checkout.
            All further customization charges will be discussed before the
            project moves forward
          </p>
        </div>
      </section>
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />
    </main>
  );
};

export default Pricing;
