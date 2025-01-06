import React, { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [ sideBar, setSideBar ] = useState(false);
  
  return (
    <div className='w-full'>
      <NavBar setSideBar={setSideBar}/>
    </div>
  )
}

export default App