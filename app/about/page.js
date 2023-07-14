import Image from "next/image";

const page = () => {
  return (
    <section className="px-3">
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl mt-10 mr-5">
        Hi There! <br /> Welcome to DC
      </h1>
      <p className="text-sm ml-2 mt-5">
        My name is Ryan Large, creator and digital entrepreneur of Dev Commerce.
        I created this company in hopes of giving back to the community of
        people, businesses & corporations. I want to help build upon the digital
        community in an efficient way and truly find a place in the world which
        is involved with growth and advancement for others.
      </p>
      <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl mt-10 mr-5">
        Meet Ryan
      </h2>
      <div className="mt-5">
        <div className="mb-3">
          <Image
            src="/assets/me.jpg"
            width={300}
            height={300}
            alt="Ryan Large"
            className="rounded-md shadow-md"
          />
        </div>
        <blockquote className="ml-5">
          "Let's build your dreams" - Ryan Large
        </blockquote>
      </div>
      <p></p>
    </section>
  );
};

export default page;
