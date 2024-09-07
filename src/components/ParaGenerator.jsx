import { useState } from "react"

export const ParaGenerator = () => {
    const [words, setWords] = useState("")
    const [para, setpara] = useState("")

    const rwords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do",
        "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "ut",
        "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris",
        "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "dolor"
      ];

      const generate = () => {
        const wordArray = []
        for(let i = 0; i < words; i++){
            const word = rwords[Math.floor(Math.random() * rwords.length)]
            wordArray.push(word)
        }
        setpara(wordArray.join(" "))
      }

    return(
        <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-200">
            <h1 className="text-3xl font-bold mb-8">Para Generator</h1>

            <div className="flex space-x-4 justify-center w-screen">
                <input className="w-2/3 rounded-md p-2" type="number" value={words} placeholder="Enter number of words" onChange={(e)=>setWords(e.target.value)} />

                <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800" onClick={generate}>Generate</button>
            </div>

            <div className="mt-8 p-4 border border-gray-400 w-3/4">
                {para}
            </div>
        </div>
    )
}