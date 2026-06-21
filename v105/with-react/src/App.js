import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import navBar from "./components/NavBar";
import NavBar from './components/NavBar';



function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      <NavBar/>
      <div className="count">{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>Click Me</button>
    </div>
  );
}

export default App;
