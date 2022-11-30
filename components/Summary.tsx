import Title from "./Title"
import Avatar from "./Avatar"
import Navbar from "./Header/Navbar"
import Background from "./Background"
const Summary = () => {
    return (
        <div className="flex flex-col items-center space-y-10 pt-5 relative">
            <Title/>
            <Avatar width={150} animate={true}/>
            <Navbar/>
      </div>
    )
}

export default Summary