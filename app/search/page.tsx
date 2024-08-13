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
      <section className="min-h-screen px-10 py-20 text-center md:px-40 lg:px-80">
        <h2 className="mt-10 px-5 text-4xl font-bold">Search</h2>
        <form
          action={submitSearch}
          className="mt-10 flex items-center justify-between gap-x-3"
        >
          <input
            type="text"
            autoComplete="off"
            name="search"
            placeholder="Type Your Search"
            className="w-full rounded-sm bg-slate-950 px-3 py-2 outline-none focus:outline-none"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="mt-20 px-10 text-left">
          <p className="mb-3 text-center text-xl font-semibold">
            Search anything here on Dev Commerce. For example, you can search
            for
          </p>
          <ul className="mb-5 flex list-disc flex-col items-start justify-start gap-y-3 text-orange-400">
            <li>Dev Commerce Website Pages</li>
            <li>Services</li>
            <li>Blog Posts</li>
            <li>And More!...</li>
          </ul>
          <p className="text-center text-sm text-slate-400">
            Simply type in your search and be on your way
          </p>
        </div>
      </section>
    </main>
  );
};

export default Search;
