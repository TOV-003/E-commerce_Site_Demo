import Layout from "../shared/Layout.jsx";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";

export default function Home() {

    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(ProductContext);
    function altIMG(e) {
        e.target.src = PIC;
        e.target.onerror = null;
    }
    return (
        <Layout>
            <div className="bg-yellow-400 h-full flex flex-col gap-4 items-center text-white font-bold text-4xl py-4">
                <div className="main">
                    <div className="section1 flex flex-col gap-2 items-center">
                        <p className="text-4xl text-white font-black">CATEGORY: KIDS</p>
                        <div className="new grid grid-cols-4 gap-6 font-semibold text-xl">
                            {products?.filter((el) => el.category === "kids").map((el) => (
                                <div key={el.id} className="border border-white flex flex-col items-center gap-2 p-2">
                                    <Link to={`/SingleProductPage/${el.id}`}>
                                        <img src={el.image} alt="Sneaker Image" onError={altIMG} />
                                    </Link>
                                    <p>{el.name}</p>
                                    <p>${el.price}</p>
                                    <p className="text-sm text-blue-200">{el.category}</p>
                                    <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => addToCart(el, 1, el.defaultSize)}>Add to Cart</button>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};