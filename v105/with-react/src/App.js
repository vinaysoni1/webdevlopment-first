import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      <NavBar logo="CodeWithVinay"/>
      <div className="count">{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>Click Me</button>
      <Footer/>
    </div>
  );
}

export default App;
