// export default App;

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//console.warn("PropTypes warning test");


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  // const[smode,setSmode]=useState('light');
  const showalert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   });
   setTimeout(()=>{
    setAlert(null);
  },1500);
  };
  const removecls=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    
  }
  const toggleMode=(cls)=>{
    removecls();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
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


  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <div style={{ height: '50px' }}>
      <Alert alert={alert} />
    </div>

    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Textform heading="Enter your text to analyze below" showalert={showalert} mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
      {/* <Textform heading="Enter your text to analyze below" showalert={showalert} mode={mode} /> */}

    </div>
    </Router>

      
    </>
  );
}

export default App;
