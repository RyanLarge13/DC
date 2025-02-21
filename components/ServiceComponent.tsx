import Image from "next/image";
import React from "react";

import iconMap from "@/constants/iconMap";
import Check from "@/public/assets/check-mark.svg";
import {
  Instruction,
  Review,
  Service as PrismaService,
  ServiceType,
  Tags,
  Testimonial,
} from "@prisma/client";

import CannotFind from "./CannotFind";
import ServiceCard from "./ServiceCard";
import UseCasesService from "./UseCasesService";

interface Service extends PrismaService {
  type: ServiceType;
  tags: Tags[];
  reviews: Review[];
  related: PrismaService[];
  testimonials: Testimonial[];
  instructions: Instruction[];
}

const ServiceComponent = ({ service }: { service: Service }) => {
  const formattedLongDesc = service.longDesc.replace(/\\n/g, "\n").split("\n");
  const Icon = iconMap[service.icon];

  return (
    <section className="flex flex-col items-center justify-between py-20 md:px-40 lg:px-80">
      <button className="fixed bottom-0 left-0 right-0 z-[999] bg-slate-800 bg-opacity-30 p-3 text-center backdrop-blur-sm">
        Add To Cart
      </button>
      <div className="mb-40">
        <Icon />
      </div>
      <div className="mb-40 flex flex-col items-center justify-center md:flex-row">
        {service.images.map((img, index) => (
          <div className="relative h-40 w-40 rotate-45 overflow-hidden shadow-lg shadow-slate-950">
            <img
              key={index}
              src={img}
              alt={`${service.title} ${index}`}
              width={40}
              height={40}
              className="absolute h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <a
        href={`/services/category/${service.type.title}`}
        className="block rounded-md bg-orange-500 px-3 py-2 text-xs shadow-md duration-200 hover:bg-pink-500"
      >
        {service.type.title}
      </a>
      <div className="mb-10 mt-3 flex flex-wrap gap-3">
        {service.tags.map((tag) => (
          <a
            key={tag.id}
            href={`/services/tag/${tag.title}`}
            className="block rounded-sm bg-fuchsia-500 px-2 py-1 text-xs duration-200 hover:bg-orange-500"
          >
            {tag.title}
          </a>
        ))}
      </div>
      <h2 className="mb-3 mt-20 px-10 text-xl">{service.shortDesc}</h2>
      <p className="px-10 text-sm text-slate-300">{service.desc}</p>
      <div className="mt-20 px-5 text-left text-xs">
        {formattedLongDesc.map((txt: string, index: number) => (
          <React.Fragment key={index}>
            <p className="my-[-5px]">{txt}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="md:my-20 md:flex md:items-center md:justify-between md:gap-x-10">
        <div className="mt-20">
          <p>Starting At</p>
          <p className="text-2xl font-bold">${service.basePrice.toFixed(2)}</p>
          <p className="mt-3">Hourly Rate Option</p>
          <p className="text-2xl font-bold">
            ${service.hourlyRate?.toFixed(2)} / h
          </p>
        </div>
        <div className="mt-20">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="my-3 flex items-start justify-start gap-x-2 text-left"
            >
              <Image src={Check} alt="check mark" className="w-5" />
              <p className="text-sm">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 self-start px-10 text-left">
        <h3 className="mb-3 text-xl font-semibold">
          Included Features With Your New{" "}
          <span className="text-cyan-500">{service.title}</span>
        </h3>
        <ul className="">
          {service.includes.map((inc, index) => (
            <li
              key={index}
              className="relative my-7 rounded-md bg-slate-900 p-4 pl-10 text-sm font-semibold shadow-lg shadow-slate-700"
            >
              <div className="absolute left-[-10px] top-[-10px] flex aspect-square w-10 items-center justify-center rounded-md bg-orange-500 shadow-md">
                <p className="text-2xl font-bold">{index + 1}</p>
              </div>
              <p>{inc}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-40 self-start text-left">
        <h3 className="mb-3 text-xl font-semibold">
          Best Use Cases For <br />
          <span className="text-fuchsia-500">{service.title}</span>
        </h3>
        <UseCasesService useCases={service.useCases} />
      </div>
      <div className="mt-20 px-10">
        <h3>Related Services</h3>
        {service.related.length > 0 ? (
          <div className="flex flex-col items-stretch justify-center gap-x-5 lg:flex-row">
            {service.related.map((relation) => (
              <ServiceCard service={relation} />
            ))}
          </div>
        ) : (
          <CannotFind
            Text={
              <p className="pt-3">
                We cannot find any related services at this time
              </p>
            }
            link={{
              href: `/services/category/${service.type.title}`,
              txt: `Try Other ${service.type.title} Services`,
            }}
          />
        )}
      </div>
      <div className="mt-40">
        <h3>Reviews</h3>
        {service.reviews.length > 0 ? (
          <div>
            {service.reviews.map((review) => (
              <div key={review.id}>review</div>
            ))}
          </div>
        ) : (
          <CannotFind
            Text={<p className="pt-3">No Reviews Yet For This Service</p>}
            link={{
              href: `/`,
              txt: `Create A Review`,
            }}
          />
        )}
      </div>
      <div className="mt-40 px-10">
        <h3>Testimonials</h3>
        {service.testimonials.length > 0 ? (
          <div>
            {service.testimonials.map((testimonial) => (
              <div key={testimonial.id}>Testimonial</div>
            ))}
          </div>
        ) : (
          <CannotFind
            Text={
              <p className="pt-3">
                No Testimonials Have Been Made For This Service Yet
              </p>
            }
            link={{
              href: `/`,
              txt: `Be The First!`,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ServiceComponent;
