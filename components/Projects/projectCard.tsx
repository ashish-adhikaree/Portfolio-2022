import Image from "next/image";
import { Project } from "../../typedeclaration";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ title, bannersrc, projectlink, tools }: Project) => {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-[250px] h-[350px] bg-gray-300 aspect-[4/5] rounded-md"
    >
      <div className="w-full h-2/3 bg-gray-400 rounded-t-md">
        <Image
          className="w-full h-full object-cover rounded-t-md"
          alt="projectbanner"
          src={bannersrc}
          height={400}
          width={400}
        />
      </div>
      <div className="text-gray-900 p-5 pt-[2rem] relative">
        <div className="text-xl font-[800] tracking-wide uppercase">
          {title}
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-bold">Tools:</p>
          {tools.map((tool, index) => {
            return (
              <Image
                className="pl-[2px]"
                key={index}
                alt={tool}
                src={`/assets/skills/${tool}.png`}
                width={30}
                height={30}
              ></Image>
            );
          })}
        </div>
        <div className="w-full flex items-center justify-center">
          <Link
            className="rounded-md font-bold w-[150px] bg-yellow-300 absolute top-[-20px] m-auto py-3 text-center"
            href={projectlink}
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
