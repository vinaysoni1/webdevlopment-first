import Card from "./components/Card"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
function App() {
  return (
    <>
    <NavBar/>
    <div className="cards">
      <Card  tittle="Hacker-1" Des="Des-1" />
      <Card  tittle="Hacker-2" Des="Des-2" />
      <Card  tittle="Hacker-3" Des="Des-3" />
      <Card  tittle="Hacker-4" Des="Des-4" />
    </div>
    <Footer/>

    </>
  )
}

export default App
