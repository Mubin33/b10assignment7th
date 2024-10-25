import logo from "../assets/logo-footer.png";

const Footer = () => {
    return (
        <div>
            <div className='bg-black lg:px-28 pt-32 pb-8 lg:pt-60'>
                <div className="flex justify-center">
                    <img className="w-24" src={logo} alt="" />
                </div>
                <div className="lg:flex mt-16 justify-between ml-10 lg:ml0 space-y-14 lg:space-y-0 lg:space-x-20">
                    <div className="w-60 space-y-2">
                        <h2 className="text-white text-lg font-bold">About Us</h2>
                        <p className="text-gray-400 text-sm">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-white text-lg font-bold">Quick Links</h2>
                        <p className="text-gray-400 text-sm">Home</p>
                        <p className="text-gray-400 text-sm">Services</p>
                        <p className="text-gray-400 text-sm">About</p>
                        <p className="text-gray-400 text-sm">Contact</p>
                    </div>
                    <div>
                        <div className="space-y-2 ">
                            <h2 className="text-white text-lg font-bold">Subscribe</h2>
                            <p className="text-gray-400 w-48 text-sm">Subscribe to our newsletter for the latest updates.</p>
                            <div>
                                <input className=" font-semibold rounded-sm px-2 py-1" type="text" placeholder="Enter your email"/>
                                <button className="bg-green-300 font-semibold rounded-sm px-2 py-1">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7 border-t-2 border-gray-600">
                    <p className="pt-4 text-sm text-gray-400 text-center">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;