import Link from 'next/link'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Socials = () => {
    return (
    <div className='flex space-x-10 items-center'>
        <Link href="https://github.com/ashish-adhikaree" className='socials-icon' title='Github Profile'>
            <BsGithub size={25}/>
        </Link>
        <Link href="https://www.linkedin.com/in/ashish-adhikari33/" className='socials-icon' title='LinkedIn Profile'>
            <BsLinkedin size={25}/>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100007897335684" className='socials-icon' title='Facebook Profile'>
            <BsFacebook size={25}/>
        </Link>
    </div>
    )
}

export default Socials