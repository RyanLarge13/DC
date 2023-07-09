import adCards from "@/constants/adCards";
import services from "@/constants/services";
import Image from "next/image";
import Button from "@/components/Button";
import AdCard from "@/components/AdCard";
import Service from "@/components/Service";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <section className="pt-20">
      <div className="p-5 ml-3">
        <h1 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Welcome to Dev Commerce
        </h1>
        <p className="mr-2 text-sm lg:text-lg lg:w-[30%]">
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
      <div className="flex justify-center items-center flex-wrap gap-3 lg:gap-x-20 px-1 mt-20">
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
          <p className="mr-2 text-sm md:text-md lg:text-lg lg:w-[30%]">
            There is more to the story of a developer than building really cool
            stuff. Just like any other creation they must be maintained,
            upgraded and given some TLC every now and then
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center py-3 lg:gap-x-20">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>
      </div>
      <div className="p-5 ml-3 mt-40">
        <h2 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          About DC & The Creator
        </h2>
        <p className="mr-2 text-sm md:text-md lg:text-lg lg:w-[40%]">
          My name is Ryan Large, creator and digital entrepreneur of Dev
          Commerce the most financially stable & beneficial way to achieve your
          dreams in the world of tech
        </p>
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="relative w-full h-[50vh] mt-5 md:min-w-[50%]">
            <Image
              src={"/assets/me.jpg"}
              width={275}
              height={275}
              alt="me"
              className="rounded-md absolute top-0 right-0 shadow-md"
            />
            <Image
              src={"/assets/logo.svg"}
              width={275}
              height={275}
              alt="me"
              className="rounded-md absolute bottom-0 left-0 shadow-md"
            />
          </div>
          <div className="md:p-5">
            <h3 className="font-semibold text-2xl mb-2 mt-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Background
            </h3>
            <p className="lg:w-[40%] text-sm">
              Specializing in Javascript and respective frameworks for creating
              customized, unique & envious cross platform fullstack web
              applications, Dev Commerce came to life two years ago as my
              journey into the world of web development began
            </p>
            <p className="mt-2 lg:w-[40%] text-sm">
              Completing the year long Fullstack web development program at
              Career Foundry and extensive self education, dedication and
              diligence have brought my to a comfortable place in the tech
              community.
            </p>
            <p className="mt-2 lg:w-[40%] text-sm">
              Check out some of the great projects I have collaborated on and
              built for clients such as you!
            </p>
            <div>links</div>
          </div>
        </div>
        <h3 className="font-semibold text-2xl mb-2 mt-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Stats
        </h3>
        <div className="w-full rounded-md shadow-md bg-opacity-30 p-3 bg-white backdrop-blur-sm">
          <h4 className="bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent border-b-2 border-b-purple-300 mb-2">
            50+ projects
          </h4>
          <p className="text-xs">
            Paid, probono, or just for fun. DC brings to you experience
            knowledge & efficiency
          </p>
        </div>
        <div className="w-full rounded-md shadow-md bg-opacity-30 p-3 bg-white backdrop-blur-sm my-3">
          <h4 className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent border-b-2 border-b-purple-300 mb-2">
            23+ clients
          </h4>
          <p className="text-xs">
            Paid, probono, or just for fun. DC brings to you experience
            knowledge & efficiency
          </p>
        </div>
        <div className="w-full rounded-md shadow-md bg-opacity-30 p-3 bg-white backdrop-blur-sm">
          <h4 className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent border-b-2 border-b-purple-300 mb-2">
            100% Reliability
          </h4>
          <p className="text-xs">
            Paid, probono, or just for fun. DC brings to you experience
            knowledge & efficiency
          </p>
        </div>
      </div>
      <div className="p-5 ml-3 mt-40">
        <h2 className="font-semibold text-4xl mb-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Connect With Me
        </h2>
        <p className="mr-2 text-sm">
          My name is Ryan Large, creator and digital entrepreneur of Dev
          Commerce the most financially stable & beneficial way to achieve your
          dreams in the world of tech
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
