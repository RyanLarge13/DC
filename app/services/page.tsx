import React from "react";
import Hr from "@/public/assets/hr.svg";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import { CgWebsite } from "react-icons/cg";
import {
  FaAppStore,
  FaDatabase,
  FaGamepad,
  FaMobileAlt,
  FaMoneyBill,
  FaServer,
  FaShoppingCart,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { FaDesktop, FaPerson, FaWebAwesome, FaWebflow } from "react-icons/fa6";
import ServiceCard from "@/components/ServiceCard";

const Sec2 = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
      <div className="no-scrollbar grid grid-cols-1 overflow-x-auto overflow-y-hidden py-5">
        <ServiceCard
          title="E-Commerce"
          shortDesc="Build Your Online Presence"
          desc="Get your online business up and running online! Sell your products and grow"
          icon={<FaShoppingCart />}
          styles=""
        />
        <ServiceCard
          title="Landing Page"
          shortDesc="Show Off your Stuff"
          desc="Build a beautiful landing page for your portfolio business or product"
          icon={<FaWebAwesome />}
          styles=""
        />
        <ServiceCard
          title="Portfolio"
          styles=""
          shortDesc="Create A Footprint"
          icon={<FaPerson />}
          desc="Get employment ready, show off your greatest skills and start creating you"
        />
        <ServiceCard
          title="Web App"
          shortDesc="Build An App For The Web"
          desc="Have a new brilliant idea? Start with deploying it on the web and gather traffic"
          icon={<FaAppStore />}
          styles=""
        />
        <ServiceCard
          title="Progressive Web App"
          shortDesc="Cross Platform"
          desc="Build a website with downloadable features, has native like experience and built in cross platform functionality"
          icon={<FaWebflow />}
          styles=""
        />
        <ServiceCard
          title="Free Portfolio"
          shortDesc="Free Forever!"
          desc="Create your own website here at Dev Commerce for free. Sign up for an account and continue!"
          icon={<FaMoneyBill />}
          styles=""
        />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <main>
      <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
        <h2 className="mt-10 px-5 text-4xl font-bold">Services</h2>
        <Image src={Hr} alt="horizontal" className="mx-auto my-10 w-20" />
        <p className="px-10 xl:px-0 xl:pl-5">
          Start reviewing what Dev Commerce has to offer and begin building your
          first product now!
        </p>
        <div className="mt-20 grid grid-cols-2 gap-5">
          <CategoryCard title="Web" icon={<CgWebsite />} />
          <CategoryCard title="Mobile" icon={<FaMobileAlt />} />
          <CategoryCard title="Desktop" icon={<FaDesktop />} />
          <CategoryCard title="Game" icon={<FaGamepad />} />
          <CategoryCard title="Terminal" icon={<FaTerminal />} />
          <CategoryCard title="Server" icon={<FaServer />} />
          <CategoryCard title="DataBase" icon={<FaDatabase />} />
          <CategoryCard title="Maintenance" icon={<FaTools />} />
        </div>
        <div className="no-scrollbar mt-40 flex items-start justify-start gap-x-5 overflow-x-auto overflow-y-hidden px-5">
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Popular Choices</p>
          </div>
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Favorite Picks</p>
          </div>
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Best Value</p>
          </div>
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Simple Solutions</p>
          </div>
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Special Offers</p>
          </div>
          <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
            <p>Custom</p>
          </div>
        </div>
      </section>
      <Sec2 />
    </main>
  );
};

export default Services;
