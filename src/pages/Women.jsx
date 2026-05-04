import Layout from "../shared/Layout.jsx";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";
import ProductItems from "../shared/ProductItems.jsx";

export default function Home() {

    const { products } = useContext(ProductContext);
    const women = products?.filter((el) => el.category === "women");
    return (
        <Layout>
            <div className="bg-pink-300 h-full flex flex-col gap-4 items-center text-white font-bold text-4xl py-4">
                <div className="main">
                    <div className="section1 flex flex-col gap-2 items-center">
                        <p className="text-4xl text-white font-black">CATEGORY: WOMEN</p>
                        <ProductItems products={women} />
                    </div>
                </div>
            </div>
        </Layout>
    )
};