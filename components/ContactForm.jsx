import Button from "@/components/Button";

const ContactForm = () => {
  return (
    <form className="mt-5">
      <input
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full"
        placeholder="Name"
      />
      <input
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full my-3"
        placeholder="Email"
      />
      <input
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full"
        placeholder="Message"
      />
      <Button text="Send" click={null} params={null} classes="" />
    </form>
  );
};

export default ContactForm;
