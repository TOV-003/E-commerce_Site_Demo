

export default function Input({ type, value, change, name, placeholder }) {


    return (
        <input type={type} value={value} onChange={change} name={name} placeholder={placeholder} className="bg-black px-4 py-2 text-xl text-white rounded-md text-center w-200 cursor-pointer" />

    )
} 