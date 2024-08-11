import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import PinkLashes from "./views/PinkLashes"

function App() {
  return (
    <Router basename="/git-app">
      <Routes>
        <Route path="/" element={<Navigate to="/PinkLashes" />} />
        <Route path="/PinkLashes" element={<PinkLashes />} />
      </Routes>
    </Router>
  )
}

export default App
