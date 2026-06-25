import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usestate from './Usestate.jsx'
import Useeffect from './Useeffect.jsx'
import Usecontext from './Usecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Usestate/> */}
    {/* <Useeffect/>   */}
    <Usecontext/>
  </StrictMode>,
)
