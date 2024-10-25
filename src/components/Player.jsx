
const Player = ({player, perPlayer}) => { 
    let {ball, bat, country, player_img, player_name, playing_img, playing_position, price} = player
    return (
        <div className="p-3 border-2 border-gray-200 rounded-xl">
            <img className="rounded-xl w-full h-44" src={playing_img} alt="" />
            <div className="flex mt-3 space-x-2">
                <img className="w-9 h-9 rounded-full" src={player_img} alt="" />
                <h3 className="mt-2 text-gray-700 text-sm font-bold">{player_name}</h3>
            </div>
            <div className="mt-3 mb-2 flex justify-between">
                <div className="flex space-x-1 mt-1">
                    <img className="h-3 w-3  mt-1" src="https://cdn-icons-png.flaticon.com/128/2107/2107932.png" alt="" />
                    <p className="text-sm text-stone-700 font-semibold">{country}</p>
                </div>
                <p className="text-sm py-1 px-2 bg-gray-200 rounded-lg  font-semibold">{playing_position}</p>
            </div>
            <hr className="w-11/12 mx-auto"/>
            <h4 className="text-sm mt-1 font-semibold">Rating</h4>
            <div className="mt-1 flex justify-between">
                <p className="text-xs font-semibold text-gray-700">{bat}</p>
                <p className="text-xs font-semibold text-gray-700">{ball}</p>
            </div>
            <div className="mt-2 flex justify-between">
                <p className="text-sm mt-2 font-semibold text-gray-700">Price: $ {price}k </p>
                <button onClick={()=> perPlayer(player)} className="text-sm p-2 bg-green-300 rounded-lg  font-semibold">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;

