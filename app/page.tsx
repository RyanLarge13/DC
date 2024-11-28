import Image from "next/image";
import HeroImg from "@/public/assets/heroImg.svg";
import CheckMark from "@/public/assets/check-mark.svg";
import Sec3Img from "@/public/assets/sec3Img.svg";
import Sec4Img from "@/public/assets/sec4Img.svg";
import Money from "@/public/assets/money.svg";
import ThumbsUp from "@/public/assets/thumbs-up.svg";
import VerControl from "@/public/assets/version-control.svg";
import Tools from "@/public/assets/tools.svg";
import One from "@/public/assets/one.svg";
import Two from "@/public/assets/two.svg";
import Three from "@/public/assets/three.svg";
import Four from "@/public/assets/four.svg";
import Five from "@/public/assets/five.svg";
import Six from "@/public/assets/six.svg";
import Hearts from "@/public/assets/hearts.svg";
import MessageMe from "@/public/assets/message-me.svg";
import Footer from "@/components/Footer";
import { MdMore } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiUnrealengine } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-x-20 py-20 md:px-40 lg:px-60 xl:flex-row xl:py-0">
      <div className="flex flex-1 flex-col items-center justify-center px-3 text-center md:px-0 xl:items-start xl:text-left">
        <h2 className="max-w-[600px] px-5 text-4xl font-bold leading-[1.5em]">
          Welcome to Dev Commerce Software
        </h2>
        <p className="mt-8 max-w-[600px] px-10 xl:pl-5">
          My name is Ryan Large, I am an seasoned professional software engineer
          ready to help you build your tech empire!!
        </p>
        <a
          href="/services"
          className="ml-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-center text-white"
        >
          Services
        </a>
      </div>
      <div className="flex-1">
        <Image
          src={HeroImg}
          alt="hero"
          width={1000}
          height={900}
          className="mt-10 h-80 w-80 object-contain md:mt-0 md:h-[800px] md:w-[800px]"
        />
      </div>
    </section>
  );
};

const Sec2 = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-20 text-center">
      <p className="px-10 font-bold">Do you need a top notch developer?</p>
      <h2 className="my-10 px-10 text-4xl font-bold xl:px-0">
        Then you are in the right place!
      </h2>
      <p className="max-w-[500px] px-10 xl:px-5">
        Dev Commerce helps entrepreneurs build and launch new products and
        assists growing companies and laymen by connecting them to the software
        world and web
      </p>
      <a
        href="/services"
        className="to-cyan-500px-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3"
      >
        View Our Services
      </a>
    </section>
  );
};

const Sec3 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-x-40 py-20 md:px-40 lg:px-60 xl:flex-row xl:py-0">
      <div className="flex-1">
        <Image
          src={Sec3Img}
          alt="phone"
          width={1000}
          height={900}
          className="mt-20 h-80 w-80 object-contain md:mt-0 md:h-[800px] md:w-[800px]"
        />
      </div>
      <div className="mt-10 flex-1 px-10 xl:px-0">
        <h2 className="text-4xl font-bold leading-[1.5em]">
          Building a New Product?
        </h2>
        <p>
          We will help you launch your product with greater value. We{" "}
          <span className="text-fuchsia-500">specialize </span>
          in:
        </p>
        <ul className="mt-10">
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Mobile Application Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Web Site Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Server Development</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Desktop Applications</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Database Management and Design</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <Image src={CheckMark} alt="check" width={30} height={30} />
            <p>Game Development</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Sec4 = () => {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-x-20 py-20 md:px-40 lg:px-60 xl:flex-row xl:py-0">
      <div className="flex-1 px-10 text-center md:px-0 xl:text-left">
        <h2 className="mt-10 max-w-[600px] text-4xl font-bold leading-[1.5em] xl:mt-5">
          Searching For A Helping Hand?
        </h2>
        <p className="max-w-[500px]">
          We can lend you help by providing you with the development tools,
          experience and trust to take care of your projects and send them sky
          rocketing to the finish line
        </p>
        <ul className="mt-10 grid max-w-[500px] grid-cols-2 place-items-center xl:place-items-start">
          <li className="my-5 flex items-center justify-start gap-x-5">
            <FaReact />
            <p>React</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <IoLogoElectron />
            <p>Electron</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <FaNodeJs />
            <p>Node.js</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <TbBrandReactNative />
            <p>React Native</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <SiUnrealengine />
            <p>Unreal Engine</p>
          </li>
          <li className="my-5 flex items-center justify-start gap-x-5">
            <BiLogoPostgresql />
            <p>Postgres</p>
          </li>
          <li className="col-span-2 my-5 flex items-center justify-start gap-x-5">
            <MdMore />
            <p>And Many More</p>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={Sec4Img}
          alt="phone"
          className="h-80 w-80 object-contain md:h-[800px] md:w-[800px]"
        />
      </div>
    </section>
  );
};

const Sec5 = () => {
  return (
    <div className="bg-gradient-to-tr from-fuchsia-500 to-cyan-500 py-20 text-center">
      <h3 className="px-10 text-3xl font-bold xl:px-0">
        How About Exchanging Ideas?
      </h3>
      <button className="to-cyan-500px-5 mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3">
        Contact Me
      </button>
    </div>
  );
};

const Sec6 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-20 md:px-40 lg:px-60">
      <div className="mt-20 max-w-[500px] px-10 text-center md:mt-0 md:px-0">
        <h2 className="mb-3 text-4xl font-bold leading-[1.5em]">
          When You Work With <br />{" "}
          <span className="text-clip bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Dev Commerce
          </span>
        </h2>
        <p className="px-5 xl:px-0">
          You wont just have a solid developer working with you or your team,
          you will also have all of the recourses and tools available to
          complete your dreams in a record pace
        </p>
      </div>
      <div className="mb-20 grid grid-cols-1 gap-5 gap-y-10 px-10 md:mb-0 lg:grid-cols-2 lg:px-0 xl:grid-cols-3">
        <div className="flex max-w-[400px] flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950">
          <Image
            src={ThumbsUp}
            alt="thumbs up"
            width={30}
            height={30}
            className="my-10 self-center"
          />
          <div>
            <h3 className="mb-5 text-xl font-bold">Meet Deadlines</h3>
            <p>Are you ready to get down to business now? Not a problem</p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950">
          <Image
            src={Money}
            alt="thumbs up"
            width={30}
            height={30}
            className="my-10 self-center"
          />
          <div>
            <h3 className="mb-5 text-xl font-bold">Competitive Pricing</h3>
            <p>Find the best pricing for any need</p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950 lg:col-span-2 lg:max-w-none xl:col-span-1 xl:max-w-[400px]">
          <Image
            src={VerControl}
            alt="thumbs up"
            width={30}
            height={30}
            className="my-10 self-center"
          />
          <div>
            <h3 className="mb-5 text-xl font-bold">Organize And Deliver</h3>
            <p>Whatever your goals Dev Commerce has you covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sec7 = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-x-20 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 px-10 py-20 md:flex-row md:px-40 lg:px-80">
      <h2 className="mb-3 text-3xl font-bold leading-[1.5em]">
        Get your software built, running, and deployed in just
        <span className="font-bold text-black"> 3-6 Months</span>
      </h2>
      <p>
        Meet the Dev Commerce development that builds, tests, ships and
        maintains quality code. Our process ensures your project is completed in
        the minimum amount of time
      </p>
    </section>
  );
};

const Sec8 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start py-20 md:px-40 lg:px-60">
      <Image src={Tools} alt="tools logo" width={300} height={150} />
      <p className="mb-5 mt-20">How do we work so fast?</p>
      <h2 className="mb-3 px-10 text-center text-4xl font-bold leading-[1.5em] xl:px-0">
        Our Process, Integrity and Experience
      </h2>
      <p className="mt-3 max-w-[500px] px-10 text-center md:px-0 xl:px-0">
        In 3 to 6 months, we achieve what other development teams take 1 to 2
        years to accomplish. Our focus isn't on creating small, lightweight
        products simply because minimalism is trendy. We excel in this approach
        because of our expertise and our deep commitment to our customers'
        success
      </p>
      <div className="mt-20 grid grid-cols-1 gap-10 px-5 md:px-0 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image src={One} alt="one" width={15} height={15} className="mb-10" />
          <div>
            <h3 className="mb-3 text-xl font-bold">Requiring Assets</h3>
            <p>
              Gather and analyze requirements with stakeholders to document
              needs and constraints through interviews and surveys, ensuring all
              software aspects are captured.
            </p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image src={Two} alt="one" width={25} height={25} className="mb-10" />
          <div>
            <h3 className="mb-3 text-xl font-bold">Planning & Design</h3>
            <p>
              Create a blueprint for the software architecture, defining
              components and interactions using models like UML diagrams,
              ensuring organization, scalability, and maintainability.
            </p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image
            src={Three}
            alt="one"
            width={25}
            height={25}
            className="mb-10"
          />
          <div>
            <h3 className="mb-3 text-xl font-bold">Implementing & Coding</h3>
            <p>
              Write code per design specifications, implement algorithms, and
              create user interfaces, using version control systems for
              collaboration and quality assurance.
            </p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image
            src={Four}
            alt="one"
            width={25}
            height={25}
            className="mb-10"
          />
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Testing & Quality Assurance
            </h3>
            <p>
              Conduct various tests to identify and fix bugs, ensuring
              functionality, performance, and security, with automated tools
              increasing efficiency and coverage.
            </p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image
            src={Five}
            alt="one"
            width={25}
            height={25}
            className="mb-10"
          />
          <div>
            <h3 className="mb-3 text-xl font-bold">Deployment & Release</h3>
            <p>
              Deploy the tested software to production using CI/CD pipelines to
              automate the process, minimize downtime, and address immediate
              issues as it becomes available to users.
            </p>
          </div>
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-between rounded-md p-5 text-center shadow-lg shadow-slate-950">
          <Image src={Six} alt="one" width={25} height={25} className="mb-10" />
          <div>
            <h3 className="mb-3 text-xl font-bold">Maintenance & Support</h3>
            <p>
              Monitor the software, provide updates, and add new features, using
              user feedback for continuous improvement and ensuring the software
              remains functional and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sec9 = () => {
  return (
    <section className="flex flex-col items-center justify-start py-20 md:px-40 lg:px-60">
      <Image src={Hearts} alt="tools logo" width={300} height={150} />
      <p className="mt-20 px-5 text-center font-bold text-fuchsia-500">
        Because we believe in good business
      </p>
      <h2 className="my-5 px-10 text-center text-4xl font-bold leading-[1.5em] xl:px-0">
        No Long Term Contracts
      </h2>
      <p className="max-w-[600px] px-10 text-center xl:px-0">
        Our business model and pricing are simple: you pay a monthly development
        subscription fee based on how many developers you need. Protect your
        cash flow now and always. Try us without long-term commitment. See how
        we help you save money.
      </p>
      <a
        href="/pricing"
        className="mt-10 rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white"
      >
        View Pricing
      </a>
    </section>
  );
};

const Sec10 = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-gradient-to-tr from-fuchsia-500 to-cyan-500 py-20 md:px-40 lg:px-80 xl:flex-row">
      <Image
        src={MessageMe}
        alt="message logo"
        width={300}
        height={150}
        className="object-contain"
      />
      <div className="mt-20 flex w-min flex-col items-center justify-center px-10 lg:px-0 xl:mt-0 xl:items-start">
        <h2 className="mb-5 text-4xl font-bold">Contact Us</h2>
        <form>
          <input
            name="email"
            id="email"
            value=""
            placeholder="yourname@example.com"
            className="rounded-l-md bg-transparent p-3 text-center shadow-lg placeholder:text-white xl:text-left"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-r-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg xl:mt-0 xl:w-min"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
      <Sec10 />
      <Footer />
    </main>
  );
}
