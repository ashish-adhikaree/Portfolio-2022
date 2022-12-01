import {motion} from 'framer-motion'

export const SectionHeader = ({title, description}:{title:string, description:string}) => {
    return (
        <div className='section-header flex flex-col items-center space-y-5'>
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
        className="title uppercase "
      >
        {title}
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
        {description}
      </motion.p>
        </div>
    )
}

export default SectionHeader