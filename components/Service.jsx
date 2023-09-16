"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

const Service = ({ service }) => {
  return (
    <motion.div className="my-20">
      <Image
        src={service.img}
        alt={service.title}
        className="rounded-md shadow-2xl w-[300px] h-[300px] object-cover"
      />
      <h3 className="mt-2 mb-1 text-lg font-semibold">{service.title}</h3>
      <p>{service.priceRange}</p>
      <p>{service.desc}</p>
      <Button
        text={`View ${service.title}`}
        click={null}
        params={null}
        classes="mt-3"
      />
    </motion.div>
  );
};

export default Service;
