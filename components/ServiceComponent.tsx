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
    <section className="flex flex-col items-center justify-between py-20 md:px-40 lg:px-80">
      <div className="mb-40">
        <Icon />
      </div>
      <div className="mb-40">
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
        className="block rounded-md bg-orange-500 px-3 py-2 text-xs shadow-md"
      >
        {service.type.title}
      </a>
      <div className="mb-10 mt-3 flex flex-wrap">
        {service.tags.map((tag) => (
          <a
            key={tag.id}
            href={`/services/tag/${tag.title}`}
            className="block rounded-sm bg-fuchsia-500 px-2 py-1 text-xs"
          >
            {tag.title}
          </a>
        ))}
      </div>
      <h2 className="mb-3 px-10 text-xl">{service.shortDesc}</h2>
      <p className="px-10 text-sm text-slate-300">{service.desc}</p>
      <div className="mt-20 px-5 text-left text-xs">
        {formattedLongDesc.map((txt: string, index: number) => (
          <React.Fragment key={index}>
            <p className="my-[-5px]">{txt}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
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
      <div className="mt-20 self-start px-10 text-left">
        <h3 className="mb-3 text-xl font-semibold">
          Included Features With Your New{" "}
          <span className="text-cyan-500">{service.title}</span>
        </h3>
        <ul className="list-disc">
          {service.includes.map((inc, index) => (
            <li key={index} className="my-1 font-semibold">
              {inc}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20 self-start px-10 text-left">
        <h3 className="mb-3 text-xl font-semibold">
          Best Use Cases For{" "}
          <span className="text-fuchsia-500">{service.title}</span>
        </h3>
        <div className="list-disc">
          {service.useCases.map((useCase, index) => (
            <div
              key={index}
              className="my-3 rounded-sm bg-gradient-to-tr from-fuchsia-500 to-cyan-500 p-3 text-center font-semibold"
            >
              {useCase}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 px-10">
        <h3>Related Services</h3>
        {service.related.length > 0 ? (
          <div>
            {service.related.map((relation) => (
              <div key={relation.id}>related</div>
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
      <div className="mt-40 px-10">
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
