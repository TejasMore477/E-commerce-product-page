import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  const [ sideBar, setSideBar ] = useState(false);

  return (
    <div className='w-full relative h-screen'>
      <NavBar setSideBar={setSideBar}/>
      {sideBar && <SideBar setSideBar={setSideBar}/>}
    </div>
  )
}

export default App