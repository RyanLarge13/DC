import Link from "next/link";

const Project = ({ proj }) => {
  return (
    <Link href={proj.link}>
      <div
        className={`p-3 rounded-md shadow-md my-2 bg-white bg-opacity-25 backdrop-blur-sm`}
      >
        <p
          className={`bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent border-b border-b-purple-300`}
        >
          {proj.title}
        </p>
        <p className="text-sm">{proj.desc}</p>
      </div>
    </Link>
  );
};

export default Project;
