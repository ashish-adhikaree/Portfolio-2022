import Image from 'next/image'
const Avatar = ({width, animate}:{width:any, animate: boolean}) => {
    return (
        <Image className={animate ? 'animate-avatar-entry rounded-full' : 'rounded-full'} alt='profile' width={width} height={150} src='/assets/profile.png'/>
    )
}

export default Avatar