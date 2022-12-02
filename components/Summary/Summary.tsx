import Title from "./title"
import Avatar from "../avatar"
import Navbar from "./navbar"
const Summary = () => {
    return (
        <div className="snap-end pt-40 h-screen flex flex-col items-center space-y-10 relative ">
            <Title/>
            <Avatar width={150} animate={true}/>
            <Navbar/>
      </div>
    )
}

export default Summary