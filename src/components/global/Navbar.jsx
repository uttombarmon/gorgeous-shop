import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-cyan-100">
            <div className="navbar-start">
                <a className="text-xl font-semibold mx-4">GorgeousShop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/products"}>Products</NavLink></li>
                    <li><NavLink to={"/about"}>About Us</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact US</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox=" 0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-400 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/products"}>Products</NavLink></li>
                        <li><NavLink to={"/about"}>About Us</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact US</NavLink></li>
                        <li>
                            <button className="px-4 py-2 btn bg-slate-700 text-white hover:bg-black"><NavLink to={"/login"}>Log In</NavLink></button>
                        </li>
                        <li>
                            <button className=" px-4 py-2 btn bg-slate-600 hover:bg-black text-white"><NavLink to={"/Registration"}>Registration</NavLink></button>
                        </li>
                    </ul>
                </div>
                <span className=" hidden lg:flex">
                    <button className="px-4 py-2 btn bg-slate-700 text-white hover:bg-black"><NavLink to={"/login"}>Log In</NavLink></button>
                    <button className=" px-4 py-2 btn ml-2 bg-slate-600 hover:bg-black text-white"><NavLink to={"/Registration"}>Registration</NavLink></button>
                </span>
            </div>
        </div>
    )
}

export default Navbar
