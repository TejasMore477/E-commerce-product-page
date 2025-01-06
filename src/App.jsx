import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Cart from './components/Cart';
import Slider from './components/Slider';
import Details from './components/Details';
import Counter from './components/Counter';

function App() {
  const [ sideBar, setSideBar ] = useState(false);
  const [ cart, setCart ] = useState(false);
  const [ count, setCount ] = useState(0);

  return (
    <div onClick={()=>setCart(false)} className='w-full relative h-screen overflow-hidden'>
      <NavBar setSideBar={setSideBar} setCart={setCart} count={count}/>
      {sideBar && <SideBar setSideBar={setSideBar}/>}
      {cart && <Cart count={count} setCount={setCount}/>}
      <Slider/>
      <Details/>
      <Counter count={count} setCount={setCount}/>
    </div>
  )
}

export default App