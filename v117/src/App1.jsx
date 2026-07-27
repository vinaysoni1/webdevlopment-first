import React, { useState } from 'react'
import TodoList from './components/Tudolist'
import { createTodos } from './components/Utils'

const App1 = () => {
  const [tab, settab] = useState('all')
  const [isDark, setIsDark] = useState(false)
  const [todos] = useState(createTodos())

  return (
    <>
      <button onClick={() => settab('all')}>All</button>
      <button onClick={() => settab('active')}>Active</button>
      <button onClick={() => settab('completed')}>Completed</button>
      <br />
      <label>
        <input
          type='checkbox'
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}

export default App1