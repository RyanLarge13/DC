import Image from "next/image";
import adCards from "@/constants/adCards";
import Button from "@/components/Button";

const page = () => {
  return (
    <section className="px-3">
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl mt-10 mr-5">
        DC Products
      </h1>
      <p>
        Search through our provided products, match what fits your dreams and
        begin building your new empire!
      </p>
      <form className="mt-10">
        <input
          placeholder="Search"
          className="p-3 rounded-md shadow-md outline-none border-none bg-white bg-opacity-20 backdrop-blur-sm w-full"
        />
      </form>
      <div className="mt-40 grid grid-cols-1 gap-5">
        {adCards.map((card) => (
          <div className="p-3 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
            <Image
              src={card.img}
              alt={card.title}
              className="w-full h-[300px] rounded-md shadow-md mb-5"
            />
            <div className="flex justify-between items-center border-b border-b-purple-300">
              <p className="text-xl">{card.title}</p>
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
        ))}
      </div>
    </section>
  );
};

export default page;
