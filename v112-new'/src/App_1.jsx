import React ,{useState} from 'react'

const App_1 = () => {
    const [color, setcolor] = useState("red")

     const changecolor = (event) =>{
        event.stopPropagation();
        const randomcolor = "#" +Math.floor(Math.random()*16777215).toString(16);
        setcolor(randomcolor)
        //
        // setcolor("blue")
    
  }
  return (
    <div className="changecolor" style={{backgroundColor: color}}>
        <button onClick={changecolor}> Change Color</button>
    </div>
  )
}

export default App_1