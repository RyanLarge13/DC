"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "@prisma/client";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import Switch from "./Switch";
import { FaStarHalfStroke } from "react-icons/fa6";

const ServiceSection = ({ services }: { services: Service[] }) => {
  const [servicesToRender, setServicesToRender]: [
    Service[],
    Dispatch<SetStateAction<Service[]>>,
  ] = useState(services);
  const [sorted, setSorted]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [search, setSearch]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [alpha, setAlpha]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);
  const [price, setPrice]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);
  const [featured, setFeatured]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);
  const [searchText, setSearchText]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");

  useEffect(() => {
    if (!sorted) {
      setServicesToRender(services);
    }
  }, [sorted]);

  useEffect(() => {
    if (search) {
      if (!searchText) {
        setServicesToRender(services);
      } else {
        const toRender = services.filter((service) =>
          service.title.includes(searchText),
        );
        setServicesToRender(toRender);
      }
    } else {
      setServicesToRender(services);
    }
  }, [searchText, search]);

  useEffect(() => {
    if (servicesToRender.length > 1) {
      let copy = [...servicesToRender];
      if (sorted && alpha) {
        copy.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (sorted && !alpha) {
        copy.sort((a, b) => b.title.localeCompare(a.title));
      }
      setServicesToRender(copy);
    }
  }, [alpha]);

  useEffect(() => {
    if (servicesToRender.length > 1) {
      let copy = [...servicesToRender];
      if (sorted && price) {
        copy.sort((a, b) => b.basePrice - a.basePrice);
      }
      if (sorted && !price) {
        copy.sort((a, b) => a.basePrice - b.basePrice);
      }
      setServicesToRender(copy);
    }
  }, [price]);

  useEffect(() => {
    if (servicesToRender.length > 1) {
      let copy = [...servicesToRender];
      if (sorted && featured) {
        copy.sort((a, b) => (a === b ? 0 : b ? 1 : -1));
      }
      if (sorted && !featured) {
        copy.sort((a, b) => (a === b ? 0 : a ? 1 : -1));
      }
      setServicesToRender(copy);
    }
  }, [featured]);

  return (
    <div>
      <Switch title="Sort" styles="py-2" value={sorted} toggle={setSorted} />
      <Switch title="Search" styles="py-2" value={search} toggle={setSearch} />
      <div
        className={`flex items-center justify-start gap-x-5 ${search ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} mb-1 duration-300`}
      >
        <input
          placeholder="Search Services"
          className="w-full rounded-sm bg-slate-950 px-2 py-3 text-sm outline-none focus:outline-none"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div
        className={`flex items-center justify-start gap-x-5 ${sorted ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} duration-300`}
      >
        <button
          className={`duration-300 ${sorted ? "translate-x-0 scale-100" : "translate-x-[-20px] scale-0"}`}
          onClick={() => setAlpha((prev) => !prev)}
        >
          {alpha ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </button>
        <button
          onClick={() => setPrice((prev) => !prev)}
          className={`flex items-center justify-center delay-75 duration-300 ${sorted ? "translate-x-0 scale-100" : "translate-x-[-20px] scale-0"}`}
        >
          ${price ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>
        <button
          onClick={() => setFeatured((prev) => !prev)}
          className={`flex items-center justify-center delay-100 duration-300 ${sorted ? "translate-x-0 scale-100" : "translate-x-[-20px] scale-0"}`}
        >
          <FaStarHalfStroke />
          {featured ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>
      </div>
      {servicesToRender.map((service: Service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceSection;
