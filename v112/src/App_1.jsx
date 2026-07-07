import {useState} from 'react'

const App_1 = () => {
    const [showImage, setShowImage] = useState(false)

    const changebtn = () => {
        alert('Play Movies...')
    }
    const changebtn1 = () => {
        setShowImage(true)
        
    }
    const changebtn2 = () => {
        setShowImage(false)
    }
  return (
    <main>
     <div className="play-movies" onClick={changebtn}>
        <button>Play Movies</button>
     </div>
     
      <div className="Upload-image" onClick={changebtn1}>
        <button>Upload Image</button>
       
      </div>

       <div className="Delete Image" onClick={changebtn2}>
        <button>Delete Image</button>
       
      </div>

      {showImage && (
          <img
            src="https://placecats.com/neo/300/200"
            alt="Neo"
          />
        )}
    </main>
  )
}

export default App_1