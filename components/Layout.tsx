import { PropsWithChildren } from "react"
import Header from "./Header/header"

const Layout = ({children}:PropsWithChildren) => {
    return (
        <div id="layout" className="max-w-7xl m-auto text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-none">
            <Header/>
            {children}
        </div>
    )
}

export default Layout