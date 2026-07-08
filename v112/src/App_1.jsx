import { useState } from 'react'

const App_1 = () => {
  const [showImage, setShowImage] = useState(false)
  const [Video, setVideo] = useState(false)

  const changebtn = () => {
    setVideo(true)
  }

  const changebtn5 = () => {
    setVideo(false)
  }
  const changebtn1 = () => {
    setShowImage(true)

  }
  const changebtn2 = () => {
    setShowImage(false)
  }
  return (
    <main className="App">

      <div className="box">

        <div className="btn1">


          <div className="play-movies" onClick={changebtn}>
            <button>Upload Movies</button>
          </div>


          <div className="play-movies" onClick={changebtn5}>
            <button>Delete Movies</button>
          </div>

        </div>
        <div className="vdo">
          {Video && (
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
            />
          )}
        </div>
      </div>


<div className="boxx">
      <div className="btn2">
        <div className="Upload-image" onClick={changebtn1}>
          <button>Upload Image</button>

        </div>

        <div className="Delete Image" onClick={changebtn2}>
          <button>Delete Image</button>

        </div>
      </div>
      <div className="post">

        {showImage && (
          <img
            src="https://placecats.com/neo/300/200"
            alt="Neo"
          />
        )}
      </div>
      </div>


    </main>
  )
}

export default App_1