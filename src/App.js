// export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// console.warn("PropTypes warning test");


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const[smode,setSmode]=useState('light');
  const showalert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   });
   setTimeout(()=>{
    setAlert(null);
  },1500);
  };
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      showalert('Enabled Light mode','success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color = 'white';
      showalert('Enabled Dark mode','success');
    }
  }
  const toggleSmode=()=>{
    if(smode==='light')
    {
      setSmode('dark');
      document.body.style.backgroundolor='green';
      document.body.style.color='white'
    }
    else
    {
      setSmode('light');
      document.body.style.backgroundolor='white';
      document.body.style.color='black';
    }
  };
  
  return (
    <>
      {/* Pass wrong types intentionally */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} smode={smode} toggleSmode={toggleSmode}/>
      <div style={{ height: '50px' }}>
      <Alert alert={alert} />
    </div>

      <div className="container">
        <Textform heading="Enter your text to analyze below" showalert={showalert} mode={mode} />
      </div>

      {/* <div className="container my-5">
        <About />
      </div> */}
      
    </>
  );
}

export default App;
