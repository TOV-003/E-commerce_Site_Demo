import Input from "../shared/Input.jsx";
import { useEffect, useState } from "react";
import Layout from "../shared/Layout.jsx";

export default function Register() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        image: ""
    });

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    function HandleChange(e) {
        const { name, value, type, files } = e.target;
        setUserData((u) => ({ ...u, [name]: type === "file" ? files[0] : value }));
    }

    function HandleSubmit() {
        console.log("Data Submittd:", userData);
    }

    return (
        <Layout>
            <div className="flex flex-col items-center gap-4 h-fit w-full py-4">
                <h1 className="text-3xl text-black font-semibold">Register</h1>
                <div className="h-fit flex justify-center items-center flex-col gap-4 text-blue-900">
                    <Input type="text" value={userData.firstName} placeholder="First Name" name="firstName" change={HandleChange} />
                    <Input type="text" value={userData.lastName} placeholder="Last Name" name="lastName" change={HandleChange} />
                    <Input type="text" value={userData.phone} placeholder="Phone" name="phone" change={HandleChange} />
                    <Input type="text" value={userData.address} placeholder="Address" name="address" change={HandleChange} />
                    <Input type="password" value={userData.password} placeholder="Password" name="password" change={HandleChange} />
                    <Input type="password" value={userData.confirmPassword} placeholder="Confirm Password" name="confirmPassword" change={HandleChange} />
                </div>
                <button className="border-2 border-black bg-white font-semibold text-xl cursor-pointer px-4 py-2" onClick={HandleSubmit}>
                    Register
                </button>
            </div>

        </Layout>
    )
}
