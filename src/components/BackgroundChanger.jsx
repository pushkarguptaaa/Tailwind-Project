import { useState } from "react"

export const BackgroundChanger = () => {
    const [bg, setbg] = useState("bg-white")

    const handleClick = color => {
        setbg(color)
    }

    return(
        <div className= {`h-screen w-screen flex flex-col justify-center items-center ${bg}`}>
            <h1 className="text-2xl font-bold mb-8 text-gray-800">Click a button to change the background!</h1>
        
        <div className="flex space-x-4">
            <button className="px-4 py-2 rounded bg-red-500 text-white font-bold hover:bg-red-700" onClick= {() => handleClick("bg-red-500")}>
                Red
            </button>

            <button className="px-4 py-2 rounded bg-green-500 text-white font-bold hover:bg-green-700" onClick= {() => handleClick("bg-green-500")}>
                Green
            </button>

            <button className="px-4 py-2 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-700" onClick= {() => handleClick("bg-yellow-500")}>
                Yellow
            </button>

            <button className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-700" onClick= {() => handleClick("bg-blue-500")}>
                Blue
            </button>

        </div>
        </div>
    )
}