import adCards from "../constants/adCards";
import AdCard from "@/components/AdCard";

export default function Home() {
  return (
    <section className="pt-20">
      <div className="bg-white rounded-md p-5 ml-3 backdrop-blur-sm bg-opacity-10 w-[50%]">
        <h1 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Welcome to Dev Commerce
        </h1>
        <p className="w-[50%] ml-2">
          What would you like to see come to life today? A new{" "}
          <span className="uppercase font-semibold">portfolio</span>?{" "}
          <span className="uppercase font-semibold">Blog</span>,
          <span className="uppercase font-semibold"> ecommerce</span> webpage,
          mobil or desktop{" "}
          <span className="uppercase font-semibold">application</span>? You name
          it, <span className="uppercase font-semibold">I build it</span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-y-10 gap-x-20 px-20 mt-20">
        {adCards.map((card) => (
          <AdCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
