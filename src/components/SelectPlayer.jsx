
const SelectPlayer = ({selectPlayer, removePlayer}) => {
    let {ball, bat, player_name, playing_img, price} = selectPlayer
    return (
        <div className="flex border-2 p-4 mt-3 rounded-xl border-gray-300 justify-between">
            <div className=" flex space-x-2">
                <img className="h-10 w-16 rounded-lg" src={playing_img} alt="" />
                <div>
                    <h1 className="text-sm font-bold ">{player_name}</h1>
                    <p className="text-sm font-semibold text-gray-500 "> {bat}, {ball} ---  Price: $ {price}k </p>
                </div>
            </div>
            <div>
                <button onClick={()=> removePlayer(selectPlayer)}>
                    <img className="h-5 w-5 mt-3 mr-5" src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SelectPlayer;