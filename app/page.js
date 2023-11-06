import adCards from "@/constants/adCards";
import services from "@/constants/services";
import Image from "next/image";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const topProducts = adCards.filter((card) => card.rank < 2);
  const topServices = services.filter((srv) => srv.rank < 2);

  return (
    <section className="px-8">
      <div className="mb-5 mt-10">
        <p className="uppercase mb-10">It's time to create</p>
        <h1 className="font-semibold text-7xl leading-[1.25em] mb-2">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Dev
          </span>{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            C
          </span>
          ommerce
        </h1>
        <p className="mr-2 mt-10">
          What would you like to see come to life today? A new portfolio, blog,
          ecommerce page, mobile or desktop application?
        </p>
        <p className="mt-5 mb-10 text-lg">You name it, I build it</p>
        <Button
          text="Shop Products"
          click={"route"}
          params={"/products"}
          classes="w-min px-10 py-3 whitespace-nowrap"
        />
        <div className="grid grid-cols-2 place-items-start gap-20 mt-20">
          <div>
            <p className="text-6xl">100+</p>
            <p className="text-xs mt-2 text-slate-500">HAPPY CLIENTS</p>
          </div>
          <div>
            <p className="text-6xl">10%</p>
            <p className="text-xs mt-2 text-slate-500">TO CHARETY</p>
          </div>
          <div>
            <p className="text-6xl">250</p>
            <p className="text-xs mt-2 text-slate-500">TOP DEVELOPERS</p>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <h2 className="font-semibold text-5xl">
          Most Popular{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Products
          </span>
        </h2>
        <p className="mt-10 mb-[-2em]">
          Whether you are trying to monetize your life, build a stance on the
          web for an employer or deploy the next big app to Google play, DC has
          you covered
        </p>
        <p>Explore more products here..</p>
        <Button
          text="Shop all products"
          click={"route"}
          params={"/products"}
          classes="from-blue-500 to-cyan-500"
        />
      </div>
      <div className="my-40">
        <h2 className="font-semibold text-5xl mb-2">
          Popular{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Services
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Maintenence
          </span>
        </h2>
        <p className="mb-[-2em]">
          There is more to the story of a developer than building really cool
          stuff. Just like any other creation they must be maintained, upgraded
          and given some TLC every now and then
        </p>
        <p>Explore more services here..</p>
        <Button
          text="Shop all services"
          click={"route"}
          params={"/services"}
          classes="from-blue-500 to-cyan-500"
        />
      </div>
      <div className="my-40">
        <h2 className="font-semibold text-5xl mb-2">
          About{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            DC
          </span>{" "}
          & The{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Creator
          </span>
        </h2>
        <p>
          My name is Ryan Large, creator and digital entrepreneur of Dev
          Commerce the most financially stable & beneficial way to achieve your
          dreams in the world of tech
        </p>
        <div className="mb-5">
          <div className="relative w-full h-[50vh] mt-5 md:min-w-[50%]">
            <Image
              src={"/assets/me.jpg"}
              width={275}
              height={275}
              alt="me"
              className="rounded-md absolute top-0 right-0 shadow-lg md:right-[55%]"
            />
            <Image
              src={"/assets/logo.svg"}
              width={275}
              height={275}
              alt="me"
              className="rounded-md absolute bottom-0 left-0 shadow-lg"
            />
          </div>
          <h3 className="font-semibold text-3xl mb-2 mt-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Background
          </h3>
          <p>
            Specializing in Javascript and respective frameworks for creating
            customized, unique & envious cross platform fullstack web
            applications, Dev Commerce came to life two years ago as my journey
            into the world of web development began
          </p>
          <p className="mt-3">
            Completing the year long Fullstack web development program at Career
            Foundry and extensive self education, dedication and diligence have
            brought me to a comfortable place in the tech community.
          </p>
        </div>
        <Button
          text="Learn More"
          click={"route"}
          params={"/about"}
          classes=""
        />
      </div>
      <div>
        <h2 className="font-semibold text-5xl mb-2">
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Connect
          </span>{" "}
          With Me
        </h2>
        <p>
          Personally message me here and ask me about anything you have
          questions about and I will reply to you immediately.
        </p>
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
}
