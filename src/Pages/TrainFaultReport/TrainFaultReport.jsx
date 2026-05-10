import "./TrainFaultReport.css";
import "../Dashboard/Dashboard.css";

import useAutoLogout from "../useAutoLogout";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import {
  Home,
  AlertCircle,
  Wrench,
  Map,
  Bell,
  Settings,
  TrainFront,
  UserCircle,
  LogOut,
  Users,
  ScanLine,
  ArrowLeft,
  Camera,
  MapPin,
} from "lucide-react";

export default function TrainFaultReport() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [severity, setSeverity] = useState("Medium");

  useAutoLogout();

  const navigate = useNavigate();

  const currentUser =
    localStorage.getItem("currentUser") || "Not logged in";

  return (
    <div className="page">

      {mobileSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}

      <aside className={`sidebar ${mobileSidebarOpen ? "mobile-open" : ""}`}>

        <button
          className="close-sidebar-btn"
          onClick={() => setMobileSidebarOpen(false)}
        >
          ✕
        </button>

        <div className="logo-wrap">
          <TrainFront size={64} strokeWidth={2.5} />
        </div>

        <h2>RAILWAY<br />MAINTENANCE SYSTEM</h2>

        <nav className="menu">

          <NavLink to="/dashboard" className="menu-item">
            <Home size={22} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/faults" className="menu-item active">
            <AlertCircle size={22} />
            <span>Fault Dashboard</span>
          </NavLink>

          <NavLink to="/tools" className="menu-item">
            <Wrench size={22} />
            <span>Tool Tracker</span>
          </NavLink>

          <NavLink to="/railmap" className="menu-item">
            <Map size={22} />
            <span>Rail Map</span>
          </NavLink>

          <NavLink to="/ar" className="menu-item">
            <ScanLine size={22} />
            <span>AR Interface</span>
          </NavLink>

          <NavLink
            to="/notifications"
            className="menu-item notification-item"
          >
            <Bell size={22} />
            <span>Notifications</span>
            <span className="notification-badge">3</span>
          </NavLink>

          <NavLink to="/settings" className="menu-item">
            <Settings size={22} />
            <span>Settings</span>
          </NavLink>

          {currentUser === "Admin" && (
            <NavLink to="/admin" className="menu-item">
              <Users size={22} />
              <span>Admin Panel</span>
            </NavLink>
          )}

        </nav>

        <div className="sidebar-user-card">

          <UserCircle size={38} />

          <div>
            <h3>{currentUser}</h3>
            <p><span></span> Online</p>
          </div>

          <button
            className="logout-button"
            onClick={() => {
              localStorage.removeItem("currentUser");
              navigate("/");
            }}
          >
            <LogOut size={18} />
          </button>

        </div>

      </aside>

      {/* CONTENT */}

      <main className="report-new-content">

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileSidebarOpen(true)}
        >
          ☰
        </button>

        <div className="report-container">

          {/* TOP BAR */}

          <div className="report-top">

            <button
              className="back-btn"
              onClick={() => navigate("/faults")}
            >
              <ArrowLeft size={24} />
            </button>

            <h1>Report a New Fault</h1>

          </div>

          {/* TRAIN ICON */}

          <div className="report-train-icon">
            <TrainFront size={100} strokeWidth={1.8} />
          </div>

          {/* FORM */}

          <div className="report-form">

            {/* TYPE */}

            <div className="report-group">

              <label>Type of Fault</label>

              <select>

                <option>Electricity Outage</option>
                <option>Signal Failure</option>
                <option>Track Damage</option>
                <option>Brake System</option>
                <option>Tunnel Hazard</option>
                <option>Door Failure</option>

              </select>

            </div>

            {/* SEVERITY */}

            <div className="report-group">

              <label>Fault Severity</label>

              <div className="severity-buttons">

                <button
                  className={severity === "Low" ? "active low" : ""}
                  onClick={() => setSeverity("Low")}
                >
                  Low
                </button>

                <button
                  className={severity === "Medium" ? "active medium" : ""}
                  onClick={() => setSeverity("Medium")}
                >
                  Medium
                </button>

                <button
                  className={severity === "High" ? "active high" : ""}
                  onClick={() => setSeverity("High")}
                >
                  High
                </button>

              </div>

            </div>

            {/* LOCATION */}

            <div className="report-group">

              <label>Location</label>

              <div className="location-box">

                <MapPin size={18} />

                <input
                  placeholder="Waterloo Station, Platform 4 Track"
                />

              </div>

            </div>

            {/* DESCRIPTION */}

            <div className="report-group">

              <label>Explanation of Fault</label>

              <textarea
                rows="8"
                placeholder="Type here..."
              />

            </div>

            {/* ATTACHMENTS */}

            <div className="report-group">

              <label>Attachments</label>

              <button className="attach-btn">

                <Camera size={22} />

                Attach a photo/video

              </button>

            </div>

            {/* SUBMIT */}

            <button className="submit-btn">

              Submit Fault

            </button>

          </div>

        </div>

      </main>

    </div>
  );
}