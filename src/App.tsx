import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Projects from "./pages/Projects"
import Settings from "./pages/Settings"
import Team from "./pages/Team"
import Messages from "./pages/Messages"
import Tasks from "./pages/Tasks"
import Calendar from "./pages/Calendar"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="team" element={<Team />} />
            <Route path="messages" element={<Messages />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
