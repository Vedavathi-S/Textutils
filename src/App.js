// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// console.warn("PropTypes warning test");


function App() {
  return (
    <>
      {/* Pass wrong types intentionally */}
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container">
        <Textform heading="Enter your text to analyze below"/>
      </div>
    </>
  );
}

export default App;
