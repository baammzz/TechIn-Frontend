import "./ReportToolFault.css";
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
  ClipboardList,
  TriangleAlert,
  Send,
} from "lucide-react";

export default function ReportToolFault() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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

          <NavLink to="/faults" className="menu-item">
            <AlertCircle size={22} />
            <span>Fault Dashboard</span>
          </NavLink>

          <NavLink to="/tools" className="menu-item active">
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

          <NavLink to="/notifications" className="menu-item notification-item">
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

      <main className="report-content">

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileSidebarOpen(true)}
        >
          ☰
        </button>

        {/* TOPBAR */}

        <header className="report-topbar">

          <div>
            <p className="report-small-text">
              Tool & Equipment Management
            </p>

            <h1>Report Tool Fault</h1>
          </div>

          <div className="report-status-card">

            <ScanLine size={28} />

            <div>
              <p>Scanner Status</p>
              <h3>AR Scanner Online</h3>
            </div>

          </div>

        </header>

        {/* FORM PANEL */}

        <section className="report-panel">

          <div className="report-panel-title">

            <div className="report-title-icon">
              <ClipboardList size={30} />
            </div>

            <div>
              <h2>New Tool Fault Report</h2>

              <p>
                Submit damaged, unsafe or missing equipment reports
              </p>
            </div>

          </div>

          {/* FORM */}

          <div className="report-form-grid">

            <div className="report-input-group">
              <label>Tool Name</label>
              <input placeholder="Enter tool name..." />
            </div>

            <div className="report-input-group">
              <label>Tool ID</label>
              <input placeholder="e.g. TOOL-204" />
            </div>

            <div className="report-input-group">
              <label>Fault Type</label>

              <select>
                <option>Damaged</option>
                <option>Missing</option>
                <option>Unsafe</option>
                <option>Calibration Failure</option>
              </select>
            </div>

            <div className="report-input-group">
              <label>Severity Level</label>

              <select>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            <div className="report-input-group full-width">
              <label>Location</label>

              <input placeholder="Station / tunnel / depot..." />
            </div>

            <div className="report-input-group full-width">
              <label>Fault Description</label>

              <textarea
                rows="7"
                placeholder="Describe the issue in detail..."
              />
            </div>

          </div>

          {/* WARNING */}

          <div className="report-warning-box">

            <TriangleAlert size={24} />

            <p>
              Critical reports are automatically escalated to supervisors
              and control room operators.
            </p>

          </div>

          {/* BUTTON */}

          <button className="submit-report-btn">

            <Send size={20} />

            Submit Fault Report

          </button>

        </section>

      </main>

    </div>
  );
}