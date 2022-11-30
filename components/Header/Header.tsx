import ContactIcon from "./ContactIcon"
import Socials from "./Socials"

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between p-10 bg-black overflow-x-hidden">
            <Socials/>
            <ContactIcon/>
        </div>
    )
}

export default Header