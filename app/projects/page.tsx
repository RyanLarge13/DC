import React, { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import CannotFind from "@/components/CannotFind";
import Loader from "@/components/Loader";
const prisma = new PrismaClient();

const getProjects = async () => {
  "use server";
  const pastProjects = await prisma.completeProject.findMany({
    orderBy: { createdAt: "asc" },
    take: 5,
  });
  return pastProjects;
};

const Sec2 = async () => {
  const projects = await getProjects();

  return projects.length < 1 ? (
    <div className="flex h-full flex-col items-center justify-center">
      <CannotFind
        Text={
          <p className="px-10 text-xs">
            We have no featured work to show at the moment
          </p>
        }
        link={{ href: "/projects", txt: "Reload" }}
      />
    </div>
  ) : (
    projects.map((proj) => <div></div>)
  );
};

const Projects = () => {
  return (
    <section className="relative min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="px-10">Build a new Project with Dev Commerce</h2>
        <h3 className="mt-5 px-5 text-4xl font-bold">Get Featured Here</h3>
        <a
          href="/services"
          className="mx-10 mt-10 block rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white"
        >
          Start Building!
        </a>
      </div>
      <Suspense fallback={<Loader />}>
        <Sec2 />
      </Suspense>
    </section>
  );
};

export default Projects;
