import { PropsWithChildren } from "react"
import Header from "./Header/Header"

const Layout = ({children}:PropsWithChildren) => {
    return (
        <div className="max-w-7xl m-auto text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-none">
            <Header/>
            {children}
        </div>
    )
}

export default Layout