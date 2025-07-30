// export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// console.warn("PropTypes warning test");


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color = 'white';
    }
  }

  return (
    <>
      {/* Pass wrong types intentionally */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform heading="Enter your text to analyze below"  mode={mode} />
      </div>
      {/* <div className="container my-5">
        <About />
      </div> */}
    </>
  );
}

export default App;
