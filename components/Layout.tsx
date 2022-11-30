import { PropsWithChildren } from "react"
import Header from "./Header/Header"

const Layout = ({children}:PropsWithChildren) => {
    return (
        <div className="max-w-7xl m-auto">
            <Header/>
            {children}
        </div>
    )
}

export default Layout