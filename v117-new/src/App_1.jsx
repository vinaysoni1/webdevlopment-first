import React,{useState} from 'react'
import TudoList from './TudoList';
import { createTodos } from './Utils';

const todos = createTodos();

const App_1 = () => {
const [tab, settab] = useState('all')
const [Isdark, setIsdark] = useState(false)
  return (
    <>
    <button onClick={() => settab('all')}>
    All
    </button>

    <button onClick={() => settab('active')}>
      Active</button>


    <button onClick={() => settab('completed')}>
      Completed</button>
    <br/>

    <label>
      <input type='checkbox'checked={Isdark} onChange={e => setIsdark(e.target.checked)}/>
      Dark Mode
    </label>
    <hr/>

    <TudoList  todos={todos}
        tab={tab}
        theme={Isdark ? 'dark' : 'light'}/>

  
    
    </>
  )
}

export default App_1
