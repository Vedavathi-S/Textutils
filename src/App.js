// export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
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
      // setInterval(()=>{
      //   document.title='Install now'
      // },2000);
      // setInterval(()=>{
      //   document.title='Now itself'
      // },1000);  for flashing msg in a title
    }
  }
  const toggleSmode=()=>{
    if(smode==='light')
    {
      setSmode('green');
      document.body.style.backgroundColor='green';
      document.body.style.color='white'
    }
    else
    {
      setSmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} smode={smode} toggleSmode={toggleSmode}/>
    <div style={{ height: '50px' }}>
      <Alert alert={alert} />
    </div>

    <div className="container my-3">
      {/* <Routes>
        <Route exact path="/" element={<Textform heading="Enter your text to analyze below" showalert={showalert} mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
      <Textform heading="Enter your text to analyze below" showalert={showalert} mode={mode} />

    </div>
    {/* </Router> */}

      
    </>
  );
}

export default App;
