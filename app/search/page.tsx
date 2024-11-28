import { redirect } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = async () => {
  const submitSearch = async (data: FormData) => {
    "use server";
    const searchText = data.get("search");
    redirect(`/search/${searchText}`);
  };

  return (
    <main>
      <section className="min-h-screen py-20 md:px-40 lg:px-80">
        <form
          action={submitSearch}
          className="mt-10 flex items-center justify-between gap-x-3 px-8"
        >
          <input
            type="text"
            autoFocus={true}
            autoComplete="off"
            name="search"
            placeholder="Type Your Search"
            className="w-full rounded-sm bg-slate-950 px-3 py-2 outline-none focus:outline-none"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="px-20">
          <h2 className="mt-20 text-center text-4xl font-bold">Search</h2>
          <div className="mt-10 text-center">
            <p className="mb-3 text-xl font-semibold">
              Search anything here on Dev Commerce.
              <br /> For example, you can search for
            </p>
            <ul className="my-20 flex list-disc flex-col items-center justify-center gap-y-3 text-orange-400">
              <li>Dev Commerce Website Pages</li>
              <li>Services</li>
              <li>Blog Posts</li>
              <li>And More!</li>
            </ul>
            <p className="text-sm text-slate-400">
              Simply type in your search and be on your way
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
