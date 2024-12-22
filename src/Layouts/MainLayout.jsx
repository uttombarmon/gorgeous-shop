import { Outlet } from "react-router-dom"
import Navbar from "../components/global/Navbar"
import Footer from "../components/global/Footer"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className=" min-h-screen max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
