import React from "react";
import { FaCode } from "react-icons/fa6";

import iconMap from "@/constants/iconMap";
import { Service } from "@prisma/client";

const ServiceCard = ({ service }: { service: Service }) => {
  const { title, styles, shortDesc, icon, desc } = service;

  const IconNode = iconMap[icon] || null;

  return (
    <div
      className={`relative my-10 flex min-w-[66%] flex-col items-center justify-between rounded-md bg-slate-950 p-5 shadow-lg shadow-slate-950 ${styles}`}
    >
      <h3 className="mb-3 font-semibold">{title}</h3>
      <p className="mb-5 mt-2 text-center text-xl font-bold">{shortDesc}</p>
      <p className="text-4xl">{IconNode ? <IconNode /> : <FaCode />}</p>
      <hr className="mb-10 mt-8 w-full border-t border-t-slate-500" />
      <div className="w-full">
        <p className="px-5 text-center">{desc}</p>
        <a
          href={`/services/${service.title}`}
          className="mt-10 block min-w-full rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-[length:400%_100%] bg-left px-10 py-3 text-center text-white duration-300 hover:bg-right"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
