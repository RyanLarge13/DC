import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="px-5 lg:px-40">
      <h1 className="text-7xl mt-5 mb-20">
        <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Contact
        </span>{" "}
        DC
      </h1>
      <ContactForm />
      <div className="mt-5 flex flex-col justify-start items-start gap-y-3">
        <a href="mailto:ryanlarge@ryanlarge.dev">
          Email us: ryanlarge@ryanlarge.dev
        </a>
        <a href="tel:702-981-1370">Call us: 702-981-1370</a>
        <p>Write a review</p>
        <p>Issues or complaints</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
