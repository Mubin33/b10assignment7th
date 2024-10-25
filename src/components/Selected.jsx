import SelectPlayer from "./SelectPlayer";
import Available from './Available';

 
const Selected = ({selectPlayer, removePlayer, isActive, handelSelect}) => { 
 

    return (
        <div>
            <h1 className="text-xl font-semibold">Selected Players ({selectPlayer.length}/6)</h1> 
            {
                selectPlayer.map(player => <SelectPlayer removePlayer={removePlayer} selectPlayer={player}></SelectPlayer>)
            }

            <button onClick={()=> handelSelect("Available")} className="p-3 bg-green-300 rounded-xl mt-5 font-semibold">Available</button>
        
            {isActive.stile ? <Available isActive={isActive}></Available> : ""}
        
        </div>
    );
};

export default Selected;