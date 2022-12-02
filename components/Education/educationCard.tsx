import type { School } from "../../typedeclaration";
import Image from "next/image";
import { motion } from "framer-motion";

const EducationCard = ({ logoSRC, name, address, grade, year }: School) => {
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
      className="w-[300px] h-[400px] bg-gray-100 aspect-[4/5] rounded-md"
    >
      <Image
        alt="school-image"
        className="rounded-t-md w-full h-[250px] object-cover"
        src={`/assets/education/${logoSRC}`}
        height={400}
        width={400}
      />
      <div className="p-5 pt-3">
        <div className="font-[800] text-xl text-gray-900">{name}</div>
        <div className="font-semibold text-gray-700">{address}</div>
        <div className="text-gray-600">{year}</div>
        <div className="font-bold text-gray-800">{grade}</div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
