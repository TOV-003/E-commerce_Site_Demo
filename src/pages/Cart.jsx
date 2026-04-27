import Layout from "../shared/Layout.jsx";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";

export default function Cart() {

    const { cartItems } = useContext(ProductContext);
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
                        <div className="new grid grid-cols-4 gap-6 font-semibold text-xl">
                            {cartItems?.map((el) => (
                                <div key={el.id + " " + el.size} className="border border-black flex flex-col items-center gap-2 p-2">
                                    <Link to={`/SingleProductPage/${el.id}`}>
                                        <img src={el.image} alt="Sneaker Image" onError={altIMG} />
                                    </Link>
                                    <p>{el.name}</p>
                                    <p>${el.price}</p>
                                    <p>x {el.quantity}</p>
                                    <p>To be Paid: ${Number(el.price) * Number(el.quantity)}</p>
                                    <p>{el.size}</p>
                                    <p className="text-sm text-gray-400">{el.category}</p>
                                    <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => removeFromCart(el.id, el.size)}>Remove</button>
                                </div>

                            ))}
                        </div>
                        {console.log(cartItems)}
                        <p className="text-4xl text-black font-black">TOTAL: ${cartItems?.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0)}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
};