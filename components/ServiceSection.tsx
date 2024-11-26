"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Service as ServiceInterface, ServiceType, Tags } from "@prisma/client";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import Switch from "./Switch";
import { FaStarHalfStroke } from "react-icons/fa6";
import CannotFind from "./CannotFind";

interface Service extends ServiceInterface {
  tags: Tags[];
  type: ServiceType;
}

const ServiceSection = ({ services }: { services: Service[] }) => {
  const [servicesToRender, setServicesToRender]: [
    Service[],
    Dispatch<SetStateAction<Service[]>>,
  ] = useState(services);
  const [sorted, setSorted]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [filter, setFilter] = useState("");
  const [filterTag, setFilterTag] = useState("");
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
      setAlpha(true);
      setPrice(true);
      setFeatured(true);
    }
    if (sorted) {
      if (servicesToRender.length > 1) {
        const copy = [...servicesToRender];
        copy.sort((a, b) => a.title.localeCompare(b.title));
        copy.sort((a, b) => b.basePrice - a.basePrice);
        copy.sort((a, b) => (a === b ? 0 : b ? 1 : -1));
        setServicesToRender(copy);
      }
    }
  }, [sorted]);

  useEffect(() => {
    const copy = [...services];
    if (!filter) {
      setServicesToRender(copy);
      return;
    }
    const filtered = copy.filter(
      (service) =>
        service.type.title.toLocaleLowerCase() === filter.toLocaleLowerCase(),
    );
    setServicesToRender(filtered);
  }, [filter]);

  useEffect(() => {
    const copy = [...services];
    if (!filterTag) {
      setServicesToRender(copy);
      return;
    }
    const filtered = copy.filter((service) =>
      service.tags.some(
        (tag) => tag.title.toLowerCase() === filterTag.toLowerCase(),
      ),
    );
    setServicesToRender(filtered);
  }, [filterTag]);

  useEffect(() => {
    if (search) {
      if (!searchText) {
        setServicesToRender(services);
      } else {
        const toRender = services.filter((service) =>
          service.title.toLowerCase().includes(searchText.toLowerCase()),
        );
        setServicesToRender(toRender);
      }
    } else {
      setServicesToRender(services);
      setSearchText("");
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
        copy.sort((a, b) => a.basePrice - b.basePrice);
      }
      if (sorted && !price) {
        copy.sort((a, b) => b.basePrice - a.basePrice);
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
      <div
        className={` ${sorted ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} mt-2 flex flex-wrap items-center justify-start gap-3 duration-300`}
      >
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "database design & development"
                ? ""
                : "database design & development",
            )
          }
          className={`rounded-sm ${filter === "database design & development" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          DB
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "desktop applications" ? "" : "desktop applications",
            )
          }
          className={`rounded-sm ${filter === "desktop applications" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Desktop
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "game development" ? "" : "game development",
            )
          }
          className={`rounded-sm ${filter === "game development" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Game
        </button>
        <button
          onClick={() =>
            setFilter((prev) => (prev === "maintenance" ? "" : "maintenance"))
          }
          className={`rounded-sm ${filter === "maintenance" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Maintenance
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "Mobile Applications" ? "" : "Mobile Applications",
            )
          }
          className={`rounded-sm ${filter === "Mobile Applications" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Mobile
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "server development" ? "" : "server development",
            )
          }
          className={`rounded-sm ${filter === "server development" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Server
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "terminal based applications"
                ? ""
                : "terminal based applications",
            )
          }
          className={`rounded-sm ${filter === "terminal based applications" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          Terminal
        </button>
        <button
          onClick={() =>
            setFilter((prev) =>
              prev === "Web Development" ? "" : "Web Development",
            )
          }
          className={`rounded-sm ${filter === "Web Development" ? "bg-fuchsia-500" : "bg-orange-500"} px-3 py-2 text-xs duration-300`}
        >
          web
        </button>
      </div>
      <div
        className={` ${sorted ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} mt-3 flex flex-wrap items-center justify-start gap-3 duration-300`}
      >
        <button
          onClick={() =>
            setFilterTag((prev) =>
              prev === "Most Popular" ? "" : "Most Popular",
            )
          }
          className={`rounded-sm ${filterTag === "Most Popular" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Most Popular
        </button>
        <button
          onClick={() =>
            setFilterTag((prev) => (prev === "Best Value" ? "" : "Best Value"))
          }
          className={`rounded-sm ${filterTag === "Best Value" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Best Value
        </button>
        <button
          onClick={() =>
            setFilterTag((prev) =>
              prev === "Lowest Price" ? "" : "Lowest Price",
            )
          }
          className={`rounded-sm ${filterTag === "Lowest Price" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Lowest Price
        </button>
        <button
          onClick={() =>
            setFilterTag((prev) =>
              prev === "Highest Rated" ? "" : "Highest Rated",
            )
          }
          className={`rounded-sm ${filterTag === "Highest Rated" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Highest Rated
        </button>
        <button
          onClick={() =>
            setFilterTag((prev) =>
              prev === "Special Offers" ? "" : "Special Offers",
            )
          }
          className={`rounded-sm ${filterTag === "Special Offers" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Special Offers
        </button>
        <button
          onClick={() =>
            setFilterTag((prev) =>
              prev === "Subscriptions" ? "" : "Subscriptions",
            )
          }
          className={`rounded-sm ${filterTag === "Subscriptions" ? "bg-fuchsia-500" : "bg-cyan-500"} px-3 py-2 text-xs duration-300`}
        >
          Subscriptions
        </button>
      </div>
      {servicesToRender.length < 1 ? (
        <CannotFind
          Text={<p className="text-sm">No Services</p>}
          link={{ href: "/services", txt: "Refresh" }}
        />
      ) : (
        <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2 xl:grid-cols-3">
          {servicesToRender.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSection;
