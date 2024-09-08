import { useState } from "react"

export const GithubCard = () => {
    const [input, setinput] = useState("")
    const [userData, setUserData] = useState(null);
    const [error, seterror] = useState(null)

    const fetchGitHubData = async () => {
        seterror(null)
        try{
            const response = await fetch(`https://api.github.com/users/${input}`)
            if(!response.ok) throw new Error("User not found")
            
            const data = await response.json()
            setUserData(data)
        }
        catch(e){
            seterror(e.message)
        }
    }

    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-400">
            <h1 className="text-3xl font-bold mb-8">GitHub Info Card</h1>

            <div className="flex space-x-4 w-screen p-2 mb-4 items-center justify-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder="Enter GitHub Username"
                    className="border border-gray-400 p-2 rounded-md w-1/2"
                />

                <button
                    onClick={fetchGitHubData}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                    Fetch GitHub Info
                </button>
            </div>

            <div className="mt-8 p-4 border border-gray-300 w-3/4 text-left bg-white rounded-lg shadow-md">
                {error ? <p className="text-red-500">{error}</p>
                : userData ?
                <div>
                    <img
                    src={userData.avatar_url}
                    alt={userData.login}
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-center">{userData.name || userData.login}</h2>
                    <p className="text-center text-gray-500">@{userData.login}</p>
                    {userData.bio && (
                    <p className="text-center mt-2 text-gray-700">{userData.bio}</p>
                    )}

                    <div className="mt-4">
                    <p>Followers: <strong>{userData.followers}</strong></p>
                    <p>Following: <strong>{userData.following}</strong></p>
                    <p>Public Repos: <strong>{userData.public_repos}</strong></p>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 text-blue-500 hover:underline"
                    >
                        View GitHub Profile
                    </a>
                    </div>
                </div>
                : <p className="text-center text-gray-500">Enter a username and click fetch to display info</p>

                }

            </div>
        </div>
    )
}