import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import FaultDashboard from "./Pages/FaultDashboard/FaultDashboard.jsx";
import ToolTracker from "./Pages/ToolTracker/ToolTracker.jsx";
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx";
import Notifications from "./Pages/Notifications/Notifications.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import RailMap from "./Pages/RailMap/RailMap.jsx";
import ARInterface from "./Pages/ARInterface/ARInterface.jsx";

function App() {
  return (
    <Routes>
      {/* LOGIN PAGE FIRST */}
      <Route path="/" element={<Login />} />

      {/* MAIN PAGES */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faults" element={<FaultDashboard />} />
      <Route path="/tools" element={<ToolTracker />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/railmap" element={<RailMap />} />
      <Route path="/ar" element={<ARInterface />} />
      <Route
  path="/admin"
  element={
    localStorage.getItem("currentUser") === "Admin"
      ? <AdminPanel />
      : <Navigate to="/" />
  }
/>
    </Routes>
  );
}

export default App;