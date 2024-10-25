import logo from "../assets/logo.png";

const Header = ({amount}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="p-3 md:ml-4">
          <img className="h-14 w-14" src={logo} alt="" />
        </div>
        {/*  */}
        <div className="flex justify-between md:font-semibold md:space-x-16 space-x-4 md:mr-4 p-6 md:p-7">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p className="flex border-b-2 border-gray-400 pb-1 px-2 rounded-lg">
            <img className="w-4 mr-1 mt-1 h-4" src="https://cdn-icons-png.flaticon.com/128/9382/9382189.png" alt="" />
             {amount}k coin
          </p>
        </div>
      </div>
        <hr  className="w-11/12 mx-auto"/>
    </>
  );
};

export default Header;
