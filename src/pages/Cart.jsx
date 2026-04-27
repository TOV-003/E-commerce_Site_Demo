import Layout from "../shared/Layout.jsx";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";

export default function Cart() {

    const { cartItems, setCartItems } = useContext(ProductContext);
    const { removeFromCart } = useContext(ProductContext);
    function altIMG(e) {
        e.target.src = PIC;
        e.target.onerror = null;
    }



    return (
        <Layout>
            <div className="bg-white h-full flex flex-col gap-4 items-center text-black font-bold text-4xl py-4">
                <div className="main">
                    <div className="section1 flex flex-col gap-2 items-center">
                        <p className="text-4xl text-black font-black">CART</p>
                        <table className="new  font-semibold text-xl border-collapse text-center border-2 border-black max-w-[70vw]">
                            <tr>
                                <th className="border-2 border-black px-4 py-2" >Image</th>
                                <th className="border-2 border-black px-4 py-2">Name</th>
                                <th className="border-2 border-black px-4 py-2">Price</th>
                                <th className="border-2 border-black px-4 py-2">Quantity</th>
                                <th className="border-2 border-black px-4 py-2">Total</th>
                                <th className="border-2 border-black px-4 py-2">Size</th>
                                <th className="border-2 border-black px-4 py-2">Category</th>
                                <th className="border-2 border-black px-4 py-2">Remove</th>
                            </tr>
                            {cartItems?.map((el) => (
                                <tr>
                                    <td className="border-2 border-black px-4 py-2">
                                        <Link to={`/SingleProductPage/${el.id}`}>
                                            <img src={el.image} alt="Sneaker Image" onError={altIMG} className="w-32 h-32" />
                                        </Link>
                                    </td>
                                    <td className="border-2 border-black px-4 py-2">{el.name}</td>
                                    <td className="border-2 border-black px-4 py-2">${el.price}</td>
                                    <td className="border-2 border-black px-4 py-2">
                                        <div className="flex gap-4 items-center justify-center">
                                            <button className="bg-green-600 rounded-md px-4 py-2 w-fit cursor-pointer" onClick={() => {
                                                const targetId = parseInt(el.id);
                                                const targetSize = el.size;
                                                const newCart = cartItems.map(el2 => parseInt(el2.id) === targetId && el2.size === targetSize ? { ...el2, quantity: parseInt(el2.quantity) + 1 } : el2);
                                                setCartItems(newCart);
                                                localStorage.setItem("cartItems", JSON.stringify(newCart));
                                            }}>+</button>
                                            <span>{el.quantity}</span>
                                            <button className="bg-red-600 rounded-md px-4 py-2 w-fit cursor-pointer" onClick={() => {
                                                const targetId = parseInt(el.id);
                                                const targetSize = el.size;
                                                const newCart = cartItems.map(el2 => parseInt(el2.id) === targetId && el2.size === targetSize ? { ...el2, quantity: Math.max(1, parseInt(el2.quantity) - 1) } : el2);
                                                setCartItems(newCart);
                                                localStorage.setItem("cartItems", JSON.stringify(newCart));
                                            }}>-</button>
                                        </div>
                                    </td>
                                    <td className="border-2 border-black px-4 py-2">${Number(el.price) * Number(el.quantity)}</td>
                                    <td className="border-2 border-black px-4 py-2">{el.size}</td>
                                    <td className="border-2 border-black text-sm text-gray-400">{el.category}</td>
                                    <td className="border-2 border-black px-4 py-2">
                                        <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => removeFromCart(el.id, el.size)}>Remove</button>
                                    </td>
                                </tr>

                            ))}

                        </table>
                        {console.log(cartItems)}
                        <p className="text-4xl text-black font-black">TOTAL: ${cartItems?.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0)}</p>
                    </div>
                </div>
            </div>
        </Layout >
    )
};