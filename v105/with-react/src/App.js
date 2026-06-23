import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      {/* <NavBar logo="CodeWithVinay"/> */}
      <Footer className="heading"/>
      <div className="count">{value}</div>
      <div className="box">
      <button onClick={()=>{setvalue(value+1)}}>+</button>
      <button onClick={()=>{setvalue(value-1)}}>-</button>
      <button onClick={()=>{setvalue(0)}}> <img src="refresh_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" /> 

      </button>
      
      </div>
    </div>
  );
}

export default App;
