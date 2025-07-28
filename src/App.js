// export default App;

import './App.css';
import Navbar from './components/Navbar';
// console.warn("PropTypes warning test");


function App() {
  return (
    <>
      {/* Pass wrong types intentionally */}
      <Navbar title="TextUtils" aboutText="About" />
    </>
  );
}

export default App;
