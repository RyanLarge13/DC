import React, { Suspense } from "react";
import Hr from "@/public/assets/hr.svg";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import NoProj from "@/public/assets/no-past-proj.svg";
import { PrismaClient } from "@prisma/client";
import ServiceSection from "@/components/ServiceSection";
import TagCard from "@/components/TagCard";
import Loader from "@/components/Loader";

const prisma = new PrismaClient();

const getCategories = async () => {
  "use server";
  const categories = await prisma.serviceType.findMany();
  const tags = await prisma.tags.findMany();
  return { categories: categories, tags: tags };
};

const getServices = async () => {
  "use server";
  const services = await prisma.service.findMany({ include: { tags: true } });
  return services;
};

const Sec2 = async () => {
  const categoriesAndTags = await getCategories();

  const { categories, tags } = categoriesAndTags;

  return (
    <>
      <div className="mt-20 grid grid-cols-2 gap-5">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
      <div className="no-scrollbar mt-40 flex items-start justify-start gap-x-5 overflow-x-auto overflow-y-hidden px-5">
        {tags.map((tag) => (
          <TagCard key={tag.id} tag={tag} />
        ))}
      </div>
    </>
  );
};

const Sec3 = async () => {
  const services = await getServices();

  return (
    <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
      <div className="no-scrollbar grid grid-cols-1 overflow-x-auto overflow-y-hidden py-5">
        {services.length < 1 ? (
          <>
            <Image
              src={NoProj}
              alt="no projects to show"
              className="mt-20 object-contain"
            />
            <p className="mt-5 px-10 text-xs text-slate-300">
              We are terribly sorry, but we seem to be having issues with
              retrieving our services. Please try to refresh the page
            </p>
            <a
              href="/"
              className="to-cyan-500px-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3"
            >
              Refresh Page
            </a>
          </>
        ) : (
          <ServiceSection services={services} />
        )}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <main>
      <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
        <h2 className="mt-10 px-5 text-4xl font-bold">Services</h2>
        <Image src={Hr} alt="horizontal" className="mx-auto my-10 w-20" />
        <p className="px-10 xl:px-0 xl:pl-5">
          Start reviewing what Dev Commerce has to offer and begin building your
          first product now!
        </p>
        <Suspense fallback={<Loader />}>
          <Sec2 />
        </Suspense>
      </section>
      <Suspense fallback={<Loader />}>
        <Sec3 />
      </Suspense>
    </main>
  );
};

export default Services;
