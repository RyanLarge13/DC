import React from "react";
import Image from "next/image";

type PropTypes = {
  title: string;
  shortDesc: string;
  desc: string;
  icon: React.ReactNode;
  styles: string;
};

const ServiceCard = ({ title, shortDesc, desc, icon, styles }: PropTypes) => {
  return (
    <div
      className={`my-5 flex min-w-[66%] flex-col items-center justify-between rounded-md bg-slate-950 p-5 shadow-lg shadow-slate-950 ${styles}`}
    >
      <h3 className="mb-3 font-semibold">{title}</h3>
      <p className="mb-5 mt-2 text-xl font-bold">{shortDesc}</p>
      <p className="text-4xl">{icon}</p>
      <hr className="mb-10 mt-8 w-full border-t border-t-slate-500" />
      <div>
        <p className="px-5">{desc}</p>
        <button className="mt-10 w-full rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white duration-500 hover:from-cyan-500 hover:to-fuchsia-500">
          View
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;