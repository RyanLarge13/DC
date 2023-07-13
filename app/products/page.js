import Button from "@/components/Button";
import adCards from "@/constants/adCards";

const page = () => {
  return (
    <section>
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl ml-2 mt-10 mr-5">
        DC Products
      </h1>
      <p>
        Search through our provided products, match what fits your dreams and
        begin building your new empire!
      </p>
      <form className="mt-5">
        <input
          placeholder="Search"
          className="p-3 rounded-md shadow-md outline-none border-none bg-white bg-opacity-20 backdrop-blur-sm w-full"
        />
      </form>
      <div className="mt-20">
        {adCards.map((card) => (
          <div><p>{card.title}</p></div>
        ))}
      </div>
    </section>
  );
};

export default page;
