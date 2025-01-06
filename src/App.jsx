import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Cart from './components/Cart';

function App() {
  const [ sideBar, setSideBar ] = useState(false);
  const [ cart, setCart ] = useState(false);
  const [ noItem, setNoItem ] = useState(false);

  return (
    <div onClick={()=>setCart(false)} className='w-full relative h-screen'>
      <NavBar setSideBar={setSideBar} setCart={setCart}/>
      {sideBar && <SideBar setSideBar={setSideBar}/>}
      {cart && <Cart noItem={noItem} setNoItem={setNoItem}/>}
    </div>
  )
}

export default App