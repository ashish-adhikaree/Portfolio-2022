import Image from 'next/image'
const SkillIcon = ({src}:{src:string}) => {
    return(
        <Image  className="hover:scale-[1.1] transition-all duration-20" width={90} height={90} alt="skill icon" src={src}/>

    )
}
export default SkillIcon