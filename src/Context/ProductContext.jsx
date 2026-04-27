import { createContext, useEffect, useState } from "react";
import Products from "../data/data.js";
import { toast } from "react-toastify";

const ProductContext = createContext();



function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [isUser] = useState(false);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const [cartCount, setCartCount] = useState(0);

    async function getProducts() {
        try {
            const response = await fetch("http://localhost:8000/products");
            return await response.json();
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        })
    }, []);

    useEffect(() => {
        console.log("Updated Cart:", cartItems);
    }, [cartItems]);


    function addToCart(product, quantity, size) {
        if (!isUser) {
            let updatedCartItems;

            const existingCartItems = cartItems.find((el) => Number(el.id) === Number(product.id) && el.size === size);

            if (existingCartItems) {
                updatedCartItems = cartItems.map(el =>
                    parseInt(el.id) === parseInt(product.id) && el.size === size ?
                        { ...el, quantity: parseInt(el.quantity) + parseInt(quantity), size: el.size || size } : el
                )
            }
            else {
                updatedCartItems = [...cartItems, { ...product, quantity: quantity, size: size }]
            }

            setCartItems(updatedCartItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            toast.info("Item added");
        }
        else {
            console.log("This is a user");
        }
    }

    function removeFromCart(id, size) {
        let updatedCartItems = cartItems.filter(el => parseInt(el.id) !== parseInt(id) || el.size !== size)
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        toast.success("Item removed");
    }

    useEffect(() => {
        function calculateCartCount() {
            const count = cartItems.reduce((total, el) => total + parseInt(el.quantity), 0);
            setCartCount(count);
        }
        calculateCartCount();
    }, [cartItems])

    useEffect(() => {
        console.log("prod:", products)
    }, [products])

    return <ProductContext.Provider value={{ products, setProducts, addToCart, cartItems, removeFromCart, getProducts, cartCount }}>{children}</ProductContext.Provider>
}


export default ProductProvider;
export { ProductContext };
