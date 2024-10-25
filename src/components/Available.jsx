import { useEffect, useState } from "react";
import Player from "./Player";

const Available = ({perPlayer}) => {

    let [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <>
        <div>
            <h1 className="text-xl font-semibold">Available Players</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-12 w-10/12 mx-auto">
                {
                    players.map(player => <Player perPlayer={perPlayer} player={player}></Player>)
                }
            </div>
        </div>
        </>
    );
};

export default Available;