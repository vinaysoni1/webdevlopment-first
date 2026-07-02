import {useEffect,useState} from 'react'

const App = () => {

  const [item, setitem] = useState([])
  const [DataIsLoaded, setDataIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setitem(json)
        setDataIsLoaded(false)
      })
  }, [])
  return (
    <na>
      <div className="container">
        {item.map((item)=>(
 

 <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>UserId: </strong>
                                {item.userId},
                            </div>
                            <div>Id: {item.id}</div>
                            <div>Tittle: {item.title}</div>
                            <div>Body: {item.body}</div>
                        </ol>
                    </div>
        ))}

      </div>
    </na>
  )
}

export default App