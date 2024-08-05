import React from "react";
import { PrismaClient } from "@prisma/client";
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

const CategoryService = async ({ params }: { params: { name: string } }) => {
  const servicesAndType = await getServices(params.name);
  return (
    <section>
      {servicesAndType ? (
        <div>
          {servicesAndType.services.length < 1 ? (
            <p className="text-xs text-slate-300">
              We are sorry, we cannot find any services under {params.name}.
              Please try again later
            </p>
          ) : (
            <div>
              {servicesAndType.services.map((service) => (
                <ServiceCard
                  title={service.title}
                  shortDesc={service.shortDesc}
                  desc={service.desc}
                  icon={null}
                  styles={service.styles || ""}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          We are sorry, it seems as though we no longer support this service
          type. Please contact the developer if this issue persists
        </div>
      )}
    </section>
  );
};

export default CategoryService;
