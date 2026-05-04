import Layout from "../shared/Layout.jsx";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import ProductItems from "../shared/ProductItems.jsx";
import { Link } from "react-router-dom";
import PIC from "../assets/PIC.jpg";

export default function Home() {

    const { products } = useContext(ProductContext);
    const men = products?.filter((el) => el.category === "men");

    return (
        <Layout>
            <div className="bg-blue-400 h-full flex flex-col gap-4 items-center text-white font-bold text-4xl py-4">
                <div className="main">
                    <div className="section1 flex flex-col gap-2 items-center">
                        <p className="text-4xl text-white font-black">CATEGORY: MEN</p>
                        <ProductItems products={men} />
                    </div>
                </div>
            </div>
        </Layout>
    )
};