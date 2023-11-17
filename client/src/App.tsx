import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="px-15">

      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<About />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
