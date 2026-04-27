import { useParams, Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import Layout from "../shared/Layout.jsx";
import PIC from "../assets/PIC.jpg";


export default function SingleProductPage() {
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(ProductContext);
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const [selected, setSelected] = useState(null);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        const found = products?.find(
            (el) => parseInt(el.id) === parseInt(id)
        )

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSingleProduct(found);
        console.log("found:", found);
    }, [products, id]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelected(singleProduct?.defaultSize)
    }, [singleProduct]);

    function select(el) {
        setSelected(el);
    }

    function altIMG(e) {
        e.target.src = PIC;
        e.target.onerror = null;
    }

    useEffect(() => {
        console.log([selected, quantity]);
    }, [quantity, selected])

    return (
        <Layout>
            <div className="border border-white flex flex-row items-center justify-evenly gap-2 py-2 px-8">
                <Link to={`/SingleProductPage/${singleProduct?.id}`}>
                    <img src={singleProduct?.image} alt="Sneaker Image" className="w-120" onError={altIMG} />
                </Link>
                <div className="flex flex-col gap-2 items-start">
                    <p className="text-5xl text-black font-bold">{singleProduct?.name}</p>
                    <p className="text-3xl text-black">${singleProduct?.price}</p>
                    <p className="text-lg text-gray-600">{singleProduct?.category}</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl text-black">Quantity</p>
                        <input type="number" className="border-2 border-gray-800 w-12 text-center text-2xl  aspect-square" defaultValue={1} onChange={(e) => { setQuantity(e.target.value); }} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl text-black">Size</p>
                        <div className="flex flex-row gap-2">
                            {singleProduct?.sizes?.map((el, index) => {
                                if (selected === el) {
                                    return (<div key={index} className="border-2 border-green-800 bg-emerald-500 w-12 text-center text-2xl  aspect-square cursor-pointer">{el}</div>)
                                }
                                else {
                                    return (<div key={index} className="border-2 border-gray-800 w-12 text-center text-2xl  aspect-square cursor-pointer" onClick={() => select(el)}>{el}</div>)
                                }
                            })}
                        </div>
                    </div>
                    <button className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-full cursor-pointer" onClick={() => addToCart(singleProduct, quantity, selected)}>Add to Cart</button>
                </div>

            </div>
        </Layout>

    )
}