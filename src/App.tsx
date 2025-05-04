import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Projects from "./pages/Projects"
import Calendar from "./pages/Calendar"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="tutorial" element={<Projects />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
