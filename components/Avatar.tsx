import Image from 'next/image'
const Avatar = () => {
    return (
        <Image className="rounded-full" alt='profile' width={200} height={50} src='/profile.png'/>
    )
}

export default Avatar