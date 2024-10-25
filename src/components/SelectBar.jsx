import { useState } from "react";
import Available from "./Available";
import Selected from "./Selected";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SelectBar = ({handelSelect, isActive, amount, setAmount}) => {

    let [selectPlayer , setSelectPlayer] = useState([])

    const perPlayer=(play)=>{
        const alreadyHave = selectPlayer.find(prevItem => prevItem.id === play.id)
        if(alreadyHave){
            alreadySelect()
        }
        else{
            if(selectPlayer.length < 6){
                // let newPlayer = [...selectPlayer, play]
                // setSelectPlayer(newPlayer) 
                if(amount > play.price){
                    let newPlayer = [...selectPlayer, play]
                    setSelectPlayer(newPlayer) 

                    let newAmount = amount - play.price
                    setAmount(newAmount)

                    playerAdded()
                }  
                else{
                    priceShort()
                }
            }
            else{
                teamFull()
            }
        }
    }


    const playerAdded=()=>{
        toast.success('Player Successfully added...!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }



    const alreadySelect=()=>{
        toast.warn('You Already select this player', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }




    const priceShort = () => {
        toast.error("You don't have sufficient Balance", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    };




    const teamFull =()=>{
        toast.info('Sorry! You already select 6 players', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }




    const release=(player)=>{
        toast.info(`You release ${player.player_name} and get back ${player.price}k coin`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light" 
            });
    }






    const removePlayer=(item)=>{
        let haveItem = selectPlayer.filter(have => have.id !== item.id)
        setSelectPlayer(haveItem)

        let playerRelease = amount + item.price
        setAmount(playerRelease)
        release(item)
    }


    return (
        <>
        <div className="flex justify-between px-5 mt-12">
            <div>
                
            </div>
            <div className="space-x-2">
                <button className={`${isActive.stile ? "bg-green-300 p-2 rounded-xl font-semibold" : 'p-2 rounded-xl font-semibold'}`}   onClick={()=> handelSelect("Available")}>Available</button>
                <button className={`${isActive.stile ? 'p-2 rounded-xl font-semibold' :  "p-2 rounded-xl font-semibold bg-green-300" }`} onClick={()=>  handelSelect("Selected")}>Selected ({selectPlayer.length})</button>

                <ToastContainer />
            </div>

        </div>

            {isActive.stile ? <Available perPlayer={perPlayer}></Available> : <Selected handelSelect={handelSelect} isActive={isActive} removePlayer={removePlayer} selectPlayer={selectPlayer}></Selected>}

        </>
    );
};

export default SelectBar;