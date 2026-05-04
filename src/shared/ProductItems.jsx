import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";


export default function ProductItems({ products }) {


    const { addToCart } = useContext(ProductContext);
    const [split, setPlit] = useState(true);
    function altIMG(e) {
        e.target.src = PIC;
        e.target.onerror = null;
    }

    return (
        <>
            <div className="new grid grid-cols-4 gap-6 font-semibold text-xl">
                {split ? (
                    products?.slice(0, products.length / 2).map((el) => (
                        <div key={el.id} className="border border-white flex flex-col items-center gap-2 p-2">
                            <Link to={`/SingleProductPage/${el.id}`}>
                                <img src={el.image} alt="Sneaker Image" onError={altIMG} />
                            </Link>
                            <p>{el.name}</p>
                            <p>${el.price}</p>
                            <p className="text-sm text-gray-400">{el.category}</p>
                            <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => addToCart(el, 1, el.defaultSize)}>Add to Cart</button>
                        </div>

                    ))
                ) : (
                    products?.map((el) => (
                        <div key={el.id} className="border border-white flex flex-col items-center gap-2 p-2">
                            <Link to={`/SingleProductPage/${el.id}`}>
                                <img src={el.image} alt="Sneaker Image" onError={altIMG} />
                            </Link>
                            <p>{el.name}</p>
                            <p>${el.price}</p>
                            <p className="text-sm text-gray-400">{el.category}</p>
                            <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => addToCart(el, 1, el.defaultSize)}>Add to Cart</button>
                        </div>

                    ))
                )}
            </div>

            <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-52 cursor-pointer" onClick={() => setPlit((s) => !s)}>{split ? "Show More" : "Show Less"}</button>
        </>
    )
}