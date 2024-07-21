import Image from "next/image";
import React from "react";
import ThumbsUp from "../public/assets/thumbs-up.svg";
import Money from "../public/assets/money.svg";
import VerControl from "../public/assets/version-control.svg";

const Sec6 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-20">
      <div className="mt-20 max-w-[500px] px-10 text-center md:mt-0 md:px-0">
        <h2 className="mb-3 text-4xl font-bold leading-[1.5em]">
          When You Work With <br />{" "}
          <span className="text-clip bg-gradient-to-tr from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Dev Commerce
          </span>
        </h2>
        <p>
          You wont just have a solid developer working with you or your team,
          you will also have all of the recourses and tools available to
          complete your dreams in a record pace
        </p>
      </div>
      <div className="mb-20 grid grid-cols-1 gap-x-5 px-10 md:mb-0 lg:grid-cols-2 lg:px-0 xl:grid-cols-3">
        <div className="flex flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950">
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
        <div className="flex flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950">
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
        <div className="flex flex-col items-start justify-between rounded-md bg-black p-5 shadow-lg shadow-slate-950">
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

export default Sec6;
