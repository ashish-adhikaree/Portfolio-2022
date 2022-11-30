import Avatar from "../Avatar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-center relative z-[100] px-5 max-w-7xl"
    >
      <div className="grid grid-cols-2 max-w-screen-md gap-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="self-center"
        >
          <Avatar animate={false} width={200} />
        </motion.div>
        <div className="nself-center text-2xl">
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="title tracking-wide mb-10"
          >
            Who am I?
          </motion.h1>
          <motion.p
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            A- level graduate with interests in Physics, Mathematics, Computer
            Science and business. Currently busy with my undergraduate
            application procedure, learning new tools and developing my startup.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
