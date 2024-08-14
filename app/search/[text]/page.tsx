import React, { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import ServiceCard from "@/components/ServiceCard";
import CannotFind from "@/components/CannotFind";
import { redirect } from "next/navigation";
import { FaSearch } from "react-icons/fa";
const prisma = new PrismaClient();

const Sec3 = async ({ title }: { title: string }) => {
  const findBlogs = async () => {
    "use server";
    const blogsToReturn = await prisma.blogPost.findMany({
      where: { title: { contains: title, mode: "insensitive" } },
    });
    return blogsToReturn;
  };

  const blogs = await findBlogs();

  if (blogs.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center">
        <CannotFind
          Text={<p className="text-sm">No Blog Posts Matched Your Search</p>}
          link={{ href: "/blog", txt: "View All Blog Posts" }}
        />
      </div>
    );
  }

  return blogs.map((blog) => (
    <div key={blog.id}>BLog</div>
    // <ServiceCard key={blog.id} service={blog} />
  ));
};

const Sec2 = async ({ title }: { title: string }) => {
  const findServices = async () => {
    "use server";
    const servicesToReturn = await prisma.service.findMany({
      where: { title: { contains: title, mode: "insensitive" } },
    });
    return servicesToReturn;
  };

  const services = await findServices();

  if (services.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center">
        <CannotFind
          Text={<p className="text-sm">No Services Matched Your Search</p>}
          link={{ href: "/services", txt: "View All Services" }}
        />
      </div>
    );
  }

  return services.map((service) => (
    <ServiceCard key={service.id} service={service} />
  ));
};

const SearchDisplay = async ({ params }: { params: { text: string } }) => {
  const url = "http://localhost:3000";
  const search = decodeURIComponent(params.text);

  const pages = [
    { title: "About Us Page", href: "/about", iframePath: `${url}/about` },
    { title: "Blog", href: "/blog", iframePath: `${url}/blog` },
    { title: "Pricing", href: "/pricing", iframePath: `${url}/pricing` },
    { title: "Projects", href: "/projects", iframePath: `${url}/projects` },
    { title: "Services", href: "/services", iframePath: `${url}/services` },
    { title: "Our Team", href: "/team", iframePath: `${url}/team` },
    { title: "Home", href: "/", iframePath: `${url}/` },
  ];

  const matchedPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase()),
  );

  const submitSearch = async (data: FormData) => {
    "use server";
    const searchText = data.get("search");
    redirect(`/search/${searchText}`);
  };

  return (
    <main>
      <section className="min-h-screen px-10 py-20 md:px-40 lg:px-80">
        <p className="mb-3 mt-10 text-center text-sm text-slate-400">
          Your Search
        </p>
        <h2 className="px-5 text-center text-4xl font-bold">{search}</h2>
        <form
          action={submitSearch}
          className="mt-10 flex items-center justify-between gap-x-3"
        >
          <input
            type="text"
            autoFocus={true}
            autoComplete="off"
            name="search"
            placeholder={search || "New Search"}
            className="w-full rounded-sm bg-slate-950 px-3 py-2 outline-none focus:outline-none"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="mt-20">
          <p className="mb-5 text-2xl font-bold text-orange-400">Pages</p>
          <div>
            {matchedPages.length < 1 ? (
              <div className="flex flex-col items-center justify-center">
                <CannotFind
                  Text={<p className="text-sm">No Pages Matched Your Search</p>}
                  link={{ href: "/", txt: "Go To Home Page" }}
                />
              </div>
            ) : (
              matchedPages.map((page, index) => (
                <a key={index} href={page.href} className="my-5 block">
                  <p className="mb-1 text-fuchsia-500">{page.title} page</p>
                  <iframe
                    src={page.iframePath}
                    width={300}
                    height={300}
                    className="aspect-square w-full rounded-md"
                  ></iframe>
                </a>
              ))
            )}
          </div>
        </div>
        <div className="mt-20">
          <p className="mb-5 text-2xl font-bold text-orange-400">Services</p>
          <div>
            <Suspense>
              <Sec2 title={search} />
            </Suspense>
          </div>
        </div>
        <div className="mt-20">
          <p className="mb-5 text-2xl font-bold text-orange-400">Blog Posts</p>
          <div>
            <Suspense>
              <Sec3 title={search} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchDisplay;
