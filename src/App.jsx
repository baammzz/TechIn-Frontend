import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import FaultDashboard from "./Pages/FaultDashboard/FaultDashboard.jsx";
import ToolTracker from "./Pages/ToolTracker/ToolTracker.jsx";
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx";
import LogFault from "./Pages/LogFault/LogFault.jsx";

function App() {
  return (
    <Routes>
      {/* LOGIN PAGE FIRST */}
      <Route path="/" element={<Login />} />

      {/* MAIN PAGES */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faults" element={<FaultDashboard />} />
      <Route path="/tools" element={<ToolTracker />} />
      <Route path="/log-fault" element={<LogFault />} />
      <Route
  path="/admin"
  element={
    localStorage.getItem("currentUser") === "Admin"
      ? <AdminPanel />
      : <Navigate to="/AdminPanel" />
  }
/>
    </Routes>
  );
}

export default App;