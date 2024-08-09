import {
  Instruction,
  Service as PrismaService,
  Review,
  ServiceType,
  Tags,
  Testimonial,
} from "@prisma/client";
import Image from "next/image";
import Check from "@/public/assets/check-mark.svg";
import iconMap from "@/constants/iconMap";
import React from "react";
import CannotFind from "./CannotFind";

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
    <section className="flex flex-col items-center justify-between py-20 md:px-40 lg:px-80 xl:flex-row">
      <div className="mb-3">
        <Icon />
      </div>
      <p className="rounded-md bg-orange-500 px-3 py-2 text-xs shadow-md">
        {service.type.title}
      </p>
      <div className="mb-10 mt-3 flex flex-wrap">
        {service.tags.map((tag) => (
          <div
            key={tag.id}
            className="rounded-sm bg-fuchsia-500 px-2 py-1 text-xs"
          >
            {tag.title}
          </div>
        ))}
      </div>
      <h2 className="mb-1 px-10 text-xl">{service.shortDesc}</h2>
      <p className="px-10 text-sm text-slate-300">{service.desc}</p>
      <div className="mt-20 px-5 text-left text-xs">
        {formattedLongDesc.map((txt: string, index: number) => (
          <React.Fragment key={index}>
            <p>{txt}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-20">
        <p>Starting At</p>
        <p className="text-2xl font-bold">${service.basePrice.toFixed(2)}</p>
      </div>
      <div>
        {service.benefits.map((benefit: string) => (
          <div className="my-3 flex items-start justify-start gap-x-2 text-left">
            <Image src={Check} alt="check mark" className="w-5" />
            <p className="text-sm">{benefit}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 px-10">
        <h3>Related Services</h3>
        {service.related.length > 0 ? (
          <div>
            {service.related.map((relation) => (
              <div key={relation.id}></div>
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
    </section>
  );
};

export default ServiceComponent;
