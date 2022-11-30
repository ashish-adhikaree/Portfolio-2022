import SkillIcon from "./SkillIcon";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "typescript",
    "javascript",
    "python",
    "reactjs",
    "nextjs",
    "vuejs",
    "firebase",
    "wordpress",
    "cpanel",
    "photoshop",
    "illustrator",
    "premierepro",
    "figma",
  ];
  return (
    <div
      id="skills"
      className="snap-start h-screen flex flex-col items-center space-y-5 pt-[100px] relative z-[100]"
    >
      <motion.h1
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="title tracking-widest"
      >
        SKILLS
      </motion.h1>
      <motion.p
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-2xl pb-10"
      >
        The following technologies are my comforts.
      </motion.p>
      <div className="grid grid-cols-5 gap-4 px-5">
        {skills.map((skill, index) => {
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
              className={
                "cursor-pointer hover:scale-[1.1] transition-all duration-200 self-center " +
                (skill == "nextjs" || skill == "cpanel"
                  ? "bg-white rounded-full p-1"
                  : "")
              }
              key={index}
              title={skill.toUpperCase()}
            >
              <SkillIcon src={`/assets/skills/${skill}.png`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
