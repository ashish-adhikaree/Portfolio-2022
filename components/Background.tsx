import Avatar from "./Avatar"

const Background = () => {
    return(
        <div className="absolute flex items-center justify-center w-full h-full">
            <div className="background-animation duration-300 h-[100px] w-[100px]"></div>
            <div className="background-animation duration-150 h-[250px] w-[250px]"></div>
            <div className="background-animation duration-500 h-[400px] w-[400px]"></div>
        </div>
    )
}

export default Background