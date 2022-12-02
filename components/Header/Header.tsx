import ContactIcon from "./contactIcon"
import Socials from "./socials"

const Header = () => {
    return (
        <div className="h-[110px] sticky top-0 z-[500] flex items-center justify-between p-10">
            <Socials/>
            <ContactIcon/>
        </div>
    )
}

export default Header