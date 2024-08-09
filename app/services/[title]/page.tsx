import React, { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import CannotFind from "@/components/CannotFind";
import ServiceComponent from "@/components/ServiceComponent";
import Loader from "@/components/Loader";
const prisma = new PrismaClient();

const getService = async (title: string) => {
  "use server";
  const service = await prisma.service.findUnique({
    where: { title: title },
    include: {
      related: true,
      tags: true,
      type: true,
      testimonials: true,
      reviews: true,
    },
  });
  return service;
};

const Sec2 = async ({ title }: { title: string }) => {
  const service = await getService(title);

  return service ? (
    <ServiceComponent service={service} />
  ) : (
    <div>
      <CannotFind
        Text={
          <p className="px-10 text-xs">
            We could not find <span className="text-orange-500">{title}</span>{" "}
            in services
          </p>
        }
        link={{ href: "/services", txt: "Go To Services" }}
      />
    </div>
  );
};

const ServiceByTitle = async ({ params }: { params: { title: string } }) => {
  const title = decodeURIComponent(params.title);
  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
      <h2 className="my-5 px-10 text-center text-4xl font-bold leading-[1.5em] xl:px-0">
        {title}
      </h2>
      <Suspense fallback={<Loader />}>
        <Sec2 title={title} />
      </Suspense>
    </section>
  );
};

export default ServiceByTitle;
