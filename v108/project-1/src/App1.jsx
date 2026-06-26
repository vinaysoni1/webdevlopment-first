import {useEffect, useState} from 'react'
import { createConnection } from './Components/Chat';
function ChatRoom({roomId}){
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect (()=>{
         const connection = createConnection(serverUrl, roomId);
         
         connection.connect();
         return ()=>{
            console.log("hee")
             connection.disconnect();
         }
    },[roomId,serverUrl])
  return (
    <>
    <label>
        Server URL:{' '}
        <input value={serverUrl} onChange={e=>setServerUrl(e.target.value)}/>
    </label>
    {roomId==='general' && <h2>Welcome to Ganeral</h2>}
    {roomId==='travel' && <h2>Welcome to travel</h2>}
    {roomId==='music' && <h2>Welcome to music</h2>}

    </>
  )
}

export default function App1() {
     const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState('');
  return (

  <>
  <label>
       Choose the chatroom:{' '}
       <select value={roomId} onChange={e=>setRoomId(e.target.value)}>
         <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
       </select>
        
    </label>
    <button onClick={()=>setShow(!show)}>
        {show ? 'closechat' : 'open chat'}
    </button>
    {show && <hr/>}
      {show && <ChatRoom roomId={roomId} />}
  </>
  );
}
