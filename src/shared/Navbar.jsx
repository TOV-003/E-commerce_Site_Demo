import { NavLink, Link } from "react-router-dom";
import { IoPersonCircleOutline, IoBagOutline } from "react-icons/io5";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";

export default function Navbar() {

    const { cartCount } = useContext(ProductContext);

    const links = [
        { title: "Home", path: "/" },
        { title: "Men", path: "/Men" },
        { title: "Women", path: "/Women" },
        { title: "Kids", path: "/Kids" },
        { title: "Register", path: "/Register" }
    ]
    return (
        <div className="text-white bg-black p-4 flex justify-between items-center sticky top-0 w-full z-10">
            <Link to="/" className="logo text-xl font-black">SHOE STORE</Link>
            <div className="actions flex justify-between items-center gap-8">
                {links.map((el, index) => (<NavLink to={el.path} key={index} className={({ isActive }) => isActive ? "text-red-600" : "text-white"}>{el.title}</NavLink>))}
            </div>
            <div className="font-semibold flex justify-between gap-4">
                <Link to="/Register">
                    <IoPersonCircleOutline size={24} className="cursor-pointer" />
                </Link>

                <Link to="/Cart">
                    <IoBagOutline size={24} className="cursor-pointer" />
                </Link>
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">{cartCount}</span>
            </div>
        </div>
    )
};