import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="px-15">
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
