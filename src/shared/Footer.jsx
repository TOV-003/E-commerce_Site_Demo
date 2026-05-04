export default function Footer() {
    return (
        <div className="bg-white flex justify-between  items-center text-black text-md border-t-2 border-black py-4 px-6">
            <ul className="flex flex-col gap-2 ">
                <li className="text-2xl font-bold">About Shoe Store</li>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
            <ul className="flex flex-col gap-2 ">
                <li className="text-2xl font-bold">Social Media</li>
                <li>Follow Us</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
            </ul>
            <ul className="flex flex-col gap-2 ">
                <li className="text-2xl font-bold">Customer Service</li>
                <li>Help Center</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Track Order</li>
                <li>Contact Support</li>
            </ul>
            <ul className="flex flex-col gap-2 ">
                <li className="text-2xl font-bold">Contact Us</li>
                <li>Email: info@shoestore.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Shoe St, City, Country</li>
                <li>Business Hours: Mon-Fri 9am-5pm</li>
                <li>Customer Support: support@shoestore.com</li>
            </ul>
        </div>
    )
}