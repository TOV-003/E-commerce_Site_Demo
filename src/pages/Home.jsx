import Layout from "../shared/Layout.jsx";
import blackFriday from "../assets/blackFriday.jpg"
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import ProductItems from "../shared/ProductItems.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";

export default function Home() {

    const { products } = useContext(ProductContext);

    return (
        <Layout>
            <div className="bg-red-900 h-full flex flex-col gap-4 items-center text-white font-bold text-4xl py-4">
                <img src={blackFriday} className="h-125" />
                <div className="flex flex-col gap-4 items-center">
                    <div className="section1 flex flex-col gap-2 items-center">
                        <p className="text-4xl text-white font-black">NEW HEAT</p>
                        <ProductItems products={products} />
                    </div>

                </div>
            </div>
        </Layout>
    )
};