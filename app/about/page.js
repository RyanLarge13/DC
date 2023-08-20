import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"

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
      <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl mt-10 mr-5">
        Fullstack Web Developer
      </h2>
      <div className="ml-2">
        <p className="text-sm mb-5">
          Introducing an accomplished Fullstack Web Developer with a wide range
          of skills and experience across various technologies. With a strong
          foundation in React, Next.js, JavaScript, and C++, combined with
          expertise in other languages such as bash, Python, and TypeScript, I
          bring a versatile skill set to the table.
        </p>
        <p className="text-sm mb-5">
          Having worked extensively with frontend frameworks including
          ReactNative, JQuery, Angular, and Vue, I possess a deep understanding
          of modern web development practices. Proficiency in HTML, CSS, and
          frameworks like Bootstrap and Tailwind CSS enables me to create
          visually appealing and responsive user interfaces. I am well-versed in
          the principles of functional programming, object-oriented programming,
          and have expertise in building applications using component-based
          architectures.
        </p>
        <p className="text-sm mb-5">
          On the backend, I have experience with technologies such as
          Express.js, PostgreSQL, MongoDB, Prisma, SQL, and MySQL. I am skilled
          in database management, ensuring efficient data retrieval, and
          maintaining data integrity. Additionally, I am proficient in debugging
          and testing methodologies, utilizing tools like Jest to ensure robust
          code quality.
        </p>
        <p className="text-sm mb-5">
          Moreover, I have hands-on experience with design and UI/UX tools such
          as Inkscape, Adobe Photoshop, and Figma. This allows me to create
          visually appealing designs and intuitive user experiences that enhance
          the overall quality of web applications.
        </p>
        <p className="text-sm mb-5">
          Furthermore, my expertise extends to cloud platforms like AWS,
          deployment platforms such as Vercel and Railway.app, and version
          control systems like GitHub. I have hands-on experience with MongoDB
          Atlas and have worked with serverless functions, enabling efficient
          and scalable solutions. I am also adept at client communication and
          have successfully managed teams, fostering collaboration and driving
          project success.
        </p>
        <p className="text-sm mb-5">
          In summary, as a Fullstack Web Developer, I bring a comprehensive
          skill set encompassing frontend and backend technologies, database
          management, testing, deployment, and client management. With a passion
          for clean and efficient code, combined with a strong problem-solving
          mindset, I am committed to delivering high-quality web applications
          that meet the needs of both clients and end-users.
        </p>
      </div>
      <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl mt-10 mr-5">
        Personal Goals
      </h2>
      <div className="text-sm ml-2">
        <p>
          I am deeply passionate about giving back to society and utilizing my
          skill set as a Fullstack Web Developer to make a positive impact. With
          a strong belief in the transformative power of the internet, I strive
          to help individuals and businesses find their place on the web and
          bring their dreams to life. By offering web solutions that are simple,
          efficient, and tailored to their unique needs, I aim to provide value
          that is worth their time and money. My commitment to quality ensures
          that each project is executed with meticulous attention to detail,
          delivering exceptional results. I believe that everyone deserves a
          chance to thrive online, and I am dedicated to offering my services at
          a competitive price, making web development accessible to a wider
          audience.
        </p>
      </div>
           <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl mt-10 mr-5">
        Connect With Me
      </h2>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default page;
