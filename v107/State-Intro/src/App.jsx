// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// // import './App.css'

// // Effect Hooks

// function App() {
//   const [count, setCount] = useState(0)
//   const [Message, setMessage] = useState("")
//   useEffect(() => {
//         document.title = `Count: ${count}`;
//         setMessage(`Effect ran. Count is: ${count}`);

//         return () => {

//             document.title = "React App";
//             setMessage("Cleanup for previous effect");
//         };
//     }, [count]);
//   return (
//     <>

//      <div>This is a {count}</div>
//      <button onClick={()=>setCount(count+1)}>Update Count</button>
//      <h2>{Message}</h2>
//     </>
//   )
// }

// export default App



// context hooks
// import { createContext, useState, useContext } from 'react'

// const ThemeContext = createContext();
// function App() {
//   const [theme, settheme] = useState("light")
//   const toggletheme = () => {
//     settheme((pretheme) => (pretheme === "light" ? "gray" : "light"));
//   };


//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <h1>Current Theme: {theme}</h1>
//         <button onClick={toggletheme}>Toggle Theme</button>
//         <ThemeDisplay />
//       </ThemeContext.Provider>
//     </>
//   )
// }
// function ThemeDisplay() {
//     const theme = useContext(ThemeContext);

//     return <h2>Theme from Context: {theme}</h2>;
// }
// export default App



// perfomance hooks 

import { useMemo, useState} from 'react'


function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  const ExpensiveCalculation = useMemo (()=>{
    console.log("hey");
    return count*2;
  }, [count])
  


  return (
    <>
    <h1>Count: {count}</h1>
    <h2>ExpensiveCalculation: {ExpensiveCalculation}</h2>
    <button onClick={()=> setcount(count+1)}>Increment Count</button>
    <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />
      
    </>
  )
}

export default App