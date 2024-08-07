import React from "react";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import NoProj from "@/public/assets/no-past-proj.svg";
import ServiceCard from "@/components/ServiceCard";
const prisma = new PrismaClient();

const getServices = async (title: string) => {
  "use server";
  const servicesAndType = await prisma.serviceType.findUnique({
    where: { title: title },
    include: { services: true },
  });
  return servicesAndType;
};

const CategoryService = async ({ params }: { params: { title: string } }) => {
  const title = decodeURIComponent(params.title);
  const servicesAndType = await getServices(title);

  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
      {servicesAndType ? (
        <div>
          {servicesAndType.services.length < 1 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                src={NoProj}
                alt="no projects to show"
                className="mt-20 object-contain"
              />
              <p className="mt-5 px-10 text-xs text-slate-300">
                We are sorry, we cannot find any services under the category{" "}
                <span className="text-orange-500">{title}</span>. Please try
                again later
              </p>
              <a
                href="/services"
                className="to-cyan-500px-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3"
              >
                More Services
              </a>
            </div>
          ) : (
            <div>
              {servicesAndType.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={NoProj}
            alt="no projects to show"
            className="mt-20 object-contain"
          />
          <p className="mt-5 px-10 text-xs text-slate-300">
            We are sorry, it seems as though we no longer support services under
            the category <span className="text-orange-500">{title}</span>.
            Please contact the developer if this issue persists
          </p>
          <a
            href="/services"
            className="to-cyan-500px-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3"
          >
            More Services
          </a>
        </div>
      )}
    </section>
  );
};

export default CategoryService;
