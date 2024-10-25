import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectBar from './components/SelectBar'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MiniFooter from './components/MiniFooter'
import Footer from './components/Footer'

function App() {

  let [amount, setAmount] = useState(0)

  const freeAmount=()=>{
    let added = amount + 10
    setAmount(added)
    tkAdd()
  }

  const [isActive, setIsActive] = useState({
    stile:true
  })

  const handelSelect=(s)=>{
    if(s === "Available"){
      setIsActive({stile:true})
    }
    else{
      setIsActive({stile:false})
    }
  }


  const tkAdd=()=>{
    toast.success('You get 10k coin for buy player...!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
}

  return (
    <>
    <div className='container mx-auto'>
      <div className='sticky top-0  bg-white z-10'>
        <Header amount={amount}></Header>
      </div>
      <Hero freeAmount={freeAmount}></Hero>
      <SelectBar amount={amount} setAmount={setAmount} isActive={isActive} handelSelect={handelSelect}></SelectBar>
    </div>
    <MiniFooter></MiniFooter>
    <Footer></Footer>
    </>
  )
}

export default App
