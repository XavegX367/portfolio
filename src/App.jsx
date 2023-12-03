import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BuildUp from "./pages/BuildUp"
import Project from "./pages/Project"
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/buildup" element={ <BuildUp/> } />
        <Route path="/projects" element={ <Projects/>} />
        <Route path="/projects/:project" element={ <Project/> } />
      </Routes>
    </div>
  )
}

export default App