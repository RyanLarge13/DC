import React from "react";
import Image from "next/image";
import NoProj from "@/public/assets/no-past-proj.svg";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProjects = async () => {
  "use server";
  const pastProjects = await prisma.completeProject.findMany({
    orderBy: { createdAt: "asc" },
    take: 5,
  });
  return pastProjects;
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="relative min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      {projects.length < 1 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <h2 className="px-10">Build a new Project with Dev Commerce</h2>
          <h3 className="mt-5 px-5 text-4xl font-bold">
            Be The First To Be Featured
          </h3>
          <a
            href="/services"
            className="mx-10 mt-10 block rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white"
          >
            Start Building!
          </a>
          <Image
            src={NoProj}
            alt="no projects to show"
            className="mt-20 object-contain"
          />
          <p className="px-10 text-xs">
            We have no featured work to show at the moment
          </p>
        </div>
      ) : (
        projects.map((proj) => <div></div>)
      )}
    </section>
  );
};

export default Projects;
