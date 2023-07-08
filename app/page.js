import adCards from "@/constants/adCards";
import services from "@/constants/services";
import Image from "next/image";
import Button from "@/components/Button";
import AdCard from "@/components/AdCard";

export default function Home() {
  return (
    <section className="pt-20">
      <div className="p-5 ml-3">
        <h1 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Welcome to Dev Commerce
        </h1>
        <p className="mr-2 text-sm">
          What would you like to see come to life today? A new{" "}
          <span className="uppercase font-semibold">portfolio</span>?{" "}
          <span className="uppercase font-semibold">A Blog</span>,
          <span className="uppercase font-semibold"> ecommerce</span> webpage,
          mobile or desktop{" "}
          <span className="uppercase font-semibold">application</span>?
        </p>
        <p className="my-5 text-lg">
          You name it,{" "}
          <span className="uppercase font-semibold">I build it</span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-3 px-1 mt-20">
        {adCards.map((card) => (
          <AdCard key={card.title} card={card} />
        ))}
      </div>
      <div className="mx-3 mt-3">
        <Button text="view all" click={null} params={null} classes="" />
      </div>
      <div>
        <div className="p-5 ml-3 mt-40">
          <h2 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Services & Maintenence
          </h2>
          <p className="mr-2 text-sm">
            There is more to the story of a developer than building really cool
            stuff. Just like any other creation they must be maintained,
            upgraded and given some TLC every now and then
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center py-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-[95%] rounded-md shadow-md p-2 my-5"
            >
              <Image
                src={service.img}
                // width={350}
                // height={350}
                alt={service.title}
                className="rounded-md shadow-md w-[350px] h-[350px] object-cover"
              />
              <h3 className="mt-2 mb-1 border-b-2 border-b-black">
                {service.title}
              </h3>
              <p className="text-xs">{service.desc}</p>
              <Button text="read more" click={null} params={null} classes="" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 ml-3 mt-40">
        <h2 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          About DC & The Creator
        </h2>
        <p className="mr-2 text-sm">
          My name is Ryan Large, creator and digital entrepreneur of Dev
          Commerce the most financially stable & beneficial way to achieve your
          dreams in the world of tech
        </p>
        {/*<Image
          src={"/assets/me.jpg"}
          width={275}
          height={275}
          alt="me"
          className="rounded-md shadow-md"
        />*/}
      </div>
    </section>
  );
}
