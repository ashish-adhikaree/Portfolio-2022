import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="font-medium space-x-5 animate-navlinks-entry">
            <Link href="#skills" className="navlinks">ABOUT</Link>
            <Link href="#skills" className="navlinks">SKILLS</Link>
            <Link href="#skills" className="navlinks">PROJECTS</Link>
            <Link href="#skills" className="navlinks">BLOGS</Link>
        </div>
    )
}

export default Navbar