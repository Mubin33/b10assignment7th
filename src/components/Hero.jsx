import bg from "../assets/bg-shadow.png";
import banner from "../assets/banner-main.png";

const Hero = ({freeAmount}) => {
    return (
        <>
            <div className="  mt-3 rounded-xl bg-black ">
                <img className="rounded-xl h-72 w-full md:h-auto" src={bg} alt="" />
                <div className="text-white text-center space-y-3 md:space-y-4 lg:w-8/12 mx-auto absolute top-28 lg:top-48 left-0 lg:left-[16%] ">
                    <img className="lg:w-48 w-28 mx-auto" src={banner} alt="" />
                    <h1 className="md:text-3xl text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-gray-400 font-semibold">Beyond Boundaries Beyond Limits</p>
                    <button onClick={freeAmount} className="md:font-semibold bg-green-300 md:p-2 p-1 rounded-lg text-black">Claim Free Credit</button>
                </div>
            </div>
        </>
    );
};

export default Hero; 
