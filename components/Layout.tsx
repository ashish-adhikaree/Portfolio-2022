import { PropsWithChildren } from "react"
import Header from "./Header/Header"

const Layout = ({children}:PropsWithChildren) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout