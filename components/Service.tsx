import { Service } from "@prisma/client";
import React from "react";

const Service = ({ service }: { service: Service }) => {
  return (
    <section className="flex flex-col items-center justify-between bg-gradient-to-tr from-fuchsia-500 to-cyan-500 py-20 md:px-40 lg:px-80 xl:flex-row">
      <p>{service.desc}</p>
      <p>{service.longDesc}</p>
    </section>
  );
};

export default Service;
