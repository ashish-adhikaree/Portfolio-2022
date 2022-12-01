import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="font-medium space-x-1 md:space-x-5 animate-navlinks-entry">
            <Link href="#about" className="navlinks">ABOUT</Link>
            <Link href="#education" className="navlinks">EDUCATION</Link>
            <Link href="#skills" className="navlinks">SKILLS</Link>
            <Link href="#projects" className="navlinks">PROJECTS</Link>
            <Link href="#blogs" className="navlinks">BLOGS</Link>
        </div>
    )
}

export default Navbar