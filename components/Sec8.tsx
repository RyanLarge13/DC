import Image from "next/image";
import Tools from "../public/assets/tools.svg";
import React from "react";
import One from "../public/assets/one.svg";
import Two from "../public/assets/two.svg";
import Three from "../public/assets/three.svg";
import Four from "../public/assets/four.svg";
import Five from "../public/assets/five.svg";
import Six from "../public/assets/six.svg";

const Sec8 = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start py-20">
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

export default Sec8;
