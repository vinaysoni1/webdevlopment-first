// import {useState,useEffect} from 'react'

// const App = () => {
//   const [card, setcard] = useState([])


//   const fetchdata = async () => {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let b = await a.json()
//     setcard(b)
//     console.log(b)
//   }

//   useEffect(() => {
//     fetchdata()
//   }, [])
//   return (
//     <div className="conatiner">
//       {card.map((card)=>{
//         return(
//           <div key={card.userId} className="card">
//             <h2>UserId: {card.userId}</h2>
//             <p>Id: {card.id}</p>
//             <p>Title: {card.title}</p>
//             <span>Body: {card.body}</span>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App



import {useState,useEffect} from 'react'

const App = () => {
  const [card, setcard] = useState([])


  const fetchdata = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/photos')
    let b = await a.json()
    setcard(b)
    console.log(b)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className="conatiner">
      {card.map((card)=>{
        return(
          <div key={card.userId} className="card">
            <h2>UserId: {card.albumId}</h2>
            <p>Id: {card.id}</p>
            <p>Title: {card.title}</p>
            <span>Body: {card.url}</span>
            <span>Body: {card.thumbnailUrl}</span>
          </div>
        )
      })}
    </div>
  )
}

export default App