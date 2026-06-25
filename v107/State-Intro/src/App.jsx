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

// import { useMemo, useState} from 'react'


// function App() {
//   const [count, setcount] = useState(0);
//   const [text, settext] = useState("");
//    const [Message, setMessage] = useState("")
//   const ExpensiveCalculation = useMemo (()=>{
//       console.log("hiii")
//     return count*2;
//   }, [count])
  


//   return (
//     <>
//     <h1>Count: {count}</h1>
//     <h2>ExpensiveCalculation: {ExpensiveCalculation}</h2>
//     <button onClick={()=> setcount(count+1)}>Increment Count</button>
//     <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Type something"
//             />
      
//     </>
//   )
// }
// export default App



import { useState} from 'react'


function App() {
  const [color, setcolor] = useState("red");
 
  


  return (
    <>
    <h1>My Faverate color is {color}</h1>
    <button type="button" onClick={()=> setcolor("bluue")}>blue</button>
    <button  type="button"  onClick={()=> setcolor("gray")}>gray</button>
    <button  type="button" onClick={()=> setcolor("green")}>green</button>
    <button  type="button" onClick={()=> setcolor("aqua")}>aqua</button>
    <button  type="button" onClick={()=> setcolor("pink")}>pink</button>
    <button  type="button" onClick={()=> setcolor("black")}>black</button>
    <button  type="button" onClick={()=> setcolor("yellow")}>yellow</button>
    
    </>
   
  );
}
export default App
