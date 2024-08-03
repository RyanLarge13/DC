import React from "react";
import Image from "next/image";
import NoProj from "@/public/assets/no-past-proj.svg";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getPosts = async (pageNumber: number) => {
  "use server";
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "asc" }, { title: "asc" }],
    skip: 10 * pageNumber,
    take: 10,
  });
  return blogPosts;
};

const Blog = async () => {
  const posts = await getPosts(0);

  return (
    <section className="relative min-h-screen px-10 py-20 text-center md:px-40 lg:px-60">
      {posts.length < 1 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <h2 className="px-10">Interested in what Dev Commerce is up to?</h2>
          <h3 className="mt-5 px-5 text-4xl font-bold">Follow Along Here</h3>
          <Image
            src={NoProj}
            alt="no projects to show"
            className="mt-20 object-contain"
          />
          <p className="px-10 text-xs">
            We could not find any blog posts to show at the moment
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Blog;
