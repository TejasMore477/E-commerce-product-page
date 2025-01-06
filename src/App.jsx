import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Cart from './components/Cart';
import Slider from './components/Slider';

function App() {
  const [ sideBar, setSideBar ] = useState(false);
  const [ cart, setCart ] = useState(false);
  const [ noItem, setNoItem ] = useState(false);

  return (
    <div onClick={()=>setCart(false)} className='w-full relative h-screen'>
      <NavBar setSideBar={setSideBar} setCart={setCart}/>
      {sideBar && <SideBar setSideBar={setSideBar}/>}
      {cart && <Cart noItem={noItem} setNoItem={setNoItem}/>}
      <Slider/>
    </div>
  )
}

export default App