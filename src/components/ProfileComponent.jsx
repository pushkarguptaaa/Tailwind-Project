export const ProfileComponent = () => {
    return(
       <div className="flex justify-center h-screen w-screen items-center">
            <div className="bg-white rounded-lg shadow-lg w-2/4 ">
                <div className="bg-cover h-40 bg-blue-400"></div>

                <div className="flex justify-center -mt-12">
                    <img className="w-32 h-32 rounded-full border-4 border-white object-cover" src="/src/images/bg.jpg" />
                </div>

                <div className="text-center px-3 py-2">
                    <h2 className="text-lg font-semibold">Rita Correia <span className="text-gray-600">32</span></h2>
                    <p className="text-gray-600">London</p>
                </div>

                <div className="flex justify-around mt-4 text-center text-gray-600">
                    <div>
                        <p className="font-bold">80K</p>
                        <p className="text-sm">Followers</p>
                    </div>
                    <div>
                        <p className="font-bold">803K</p>
                        <p className="text-sm">Likes</p>
                    </div>
                    <div>
                        <p className="font-bold">1.4K</p>
                        <p className="text-sm">Photos</p>
                    </div>
                </div>
            </div>
       </div>
    )
}