import bg from "../assets/bg-shadow.png";

const MiniFooter = () => {
    return (
        <div className="mt-10  ">
            <div className="relative bg-white border-2 border-dashed border-gray-300 lg:w-9/12 w-11/12 top-20 lg:top-40 mx-auto rounded-2xl">
                <img className="rounded-2xl" src={bg} alt="" />
                <div className="absolute top-4 lg:top-28 space-y-2 lg:space-y-4  w-full mx-auto">
                    <h1 className="text-center text-2xl lg:text-3xl  font-semibold">Subscribe to our Newsletter</h1>
                    <p className="text-center text-xs lg:text-sm text-gray-500 font-semibold">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center space-x-2">
                        <input className="lg:p-2 px-2 py-1 border-2 rounded-lg text-black" type="text" placeholder="Enter your email"/>
                        <button className="lg:px-3 lg:py-2 px-2 py-1 font-semibold bg-green-300 rounded-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniFooter;