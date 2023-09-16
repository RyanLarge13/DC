import Image from "next/image";
import services from "@/constants/services";
import FilterMenu from "@/components/FilterMenu";
import Button from "@/components/Button";
import FilterOptions from "@/components/FilterOptions"
import Footer from "@/components/Footer";

const page = () => {
  return (
    <section className="px-3">
      <h1 className="text-7xl mt-10 mr-5 mb-2">
        DC{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent ">
          Services
        </span>
      </h1>
      <p>
        Search through our provided services, match what fits your dreams and
        begin building your new empire!
      </p>
      <form className="mt-10">
        <input
          placeholder="Search"
          className="p-3 rounded-md shadow-md outline-none border-none bg-white bg-opacity-20 backdrop-blur-sm w-full"
        />
      </form>
      <FilterOptions />
      <div className="mt-40">
        {services.map((card) => (
          <div className="p-3 h-screen">
            <div className="sticky top-20">
            <Image
              src={card.img}
              alt={card.title}
              className="w-full h-[300px] rounded-md shadow-md mb-5"
            />
            <div className="flex justify-between items-center border-b border-b-purple-300">
              <p className="text-2xl font-semibold">{card.title}</p>
              <p>{card.priceRange}</p>
            </div>
            <p>{card.desc}</p>
            <div className="mt-5 flex justify-between items-center gap-x-4">
              <Button
                text="Add to cart"
                click={null}
                params={null}
                classes=""
              />
              <Button text="Expand" click={null} params={null} classes="" />
            </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default page;
