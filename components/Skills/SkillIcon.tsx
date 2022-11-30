import Image from 'next/image'
const SkillIcon = ({src}:{src:string}) => {
    return(
        <div>
            <Image width={90} height={90} alt="skill icon" src={src}/>
        </div>
    )
}
export default SkillIcon