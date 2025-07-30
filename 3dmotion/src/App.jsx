import Register from "./pages/Register";
import Login from "./pages/Login";
import Pose_detection from "./Components/pose_detection";
import UserDashboard from "./Components/UserDashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Logout from "./pages/Logout";
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/pose-detection" element={<Pose_detection />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </Router>
    </>
  )
}

export default App