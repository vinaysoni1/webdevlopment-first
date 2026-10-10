import React ,{useState,useContext,createContext}from 'react';

const ThemeContext = createContext(null)
 export default function MyApp() {
    const [theme, settheme] = useState('light')
    return(
        <ThemeContext value={theme}>
            <Form/>
            <label type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}>
                Use Dark Mode
            </label>
        </ThemeContext>
    )
 }

function Form({children}){
  return (
   <Panel  title="Welcome">
    <button>Log In</button>
    <button>Sign Up</button>

   </Panel>
  )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext)
    const className ='panel-' + theme
    return(
        <section className="className">
            <h1>{title}</h1>
            {children}
        </section>

    )
}
function button({children}){
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
   return(
    
    <button className= "className">
        {children}
    </button>

    )
}

// export default Note_Box
