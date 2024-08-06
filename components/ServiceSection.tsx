"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceType } from "@/types";

const ServiceSection = ({ services }: {services: ServiceType[]}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div></div>
        <div></div>
      </div>
      {services.map((service: ServiceType) => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
};

export default ServiceSection;
