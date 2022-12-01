import SkillIcon from "./SkillIcon";
import { motion } from "framer-motion";
import SectionHeader from "../sectionHeader";

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
      <SectionHeader title ="skills" description="The following technologies are my comforts."/>
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
                "cursor-pointer 0 self-center " +
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
