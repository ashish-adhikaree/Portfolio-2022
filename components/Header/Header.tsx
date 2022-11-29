import ContactIcon from "./ContactIcon"
import Socials from "./Socials"

const Header = () => {
    return (
        <div className="flex items-center justify-between sticky top-0 p-10 bg-black">
            <Socials/>
            <ContactIcon/>
        </div>
    )
}

export default Header