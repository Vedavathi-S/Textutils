// export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// console.warn("PropTypes warning test");


function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <>
      {/* Pass wrong types intentionally */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform heading="Enter your text to analyze below"/>
      </div>
      {/* <div className="container my-5">
        <About />
      </div> */}
    </>
  );
}

export default App;
