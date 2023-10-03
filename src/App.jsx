import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BuildUp from "./pages/BuildUp"
import LearningOutcomes from "./pages/LearningOutcomes"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/buildup" element={ <BuildUp/> } />
        <Route path="/learning-outcomes" element={ <LearningOutcomes/> } />
      </Routes>
    </div>
  )
}

export default App