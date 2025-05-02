import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Projects from "./pages/Projects"
import Settings from "./pages/Settings"
import Tasks from "./pages/Tasks"
import Calendar from "./pages/Calendar"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
