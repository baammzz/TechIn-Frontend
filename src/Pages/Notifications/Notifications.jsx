// Notifications.jsx
import useAutoLogout from "../useAutoLogout";
import "./Notifications.css";
import { useState } from "react";
import {
  Bell,
  AlertTriangle,
  Wrench,
  TrainFront,
  CheckCircle2,
  Info,
  ChevronRight,
  Home,
  Map,
  Settings,
  ShieldAlert,
  LogOut,
  Users,
  ScanLine,
  UserCircle,
} from "lucide-react";

import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Notifications() {
  const currentUser =
  localStorage.getItem("currentUser") || "Not logged in";
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  useAutoLogout();
  const notifications = [
    {
      type: "critical",
      title: "Critical Signal Failure",
      description:
        "Signal communication lost near London Bridge Platform 4.",
      time: "2 mins ago",
    },

    {
      type: "warning",
      title: "Missing Tool Detected",
      description:
        "Torque wrench T-204 missing from maintenance inventory.",
      time: "14 mins ago",
    },

    {
      type: "success",
      title: "Fault Successfully Resolved",
      description:
        "Brake inspection completed on Train NX-204 successfully.",
      time: "28 mins ago",
    },

    {
      type: "info",
      title: "Engineer Login",
      description:
        "Engineer Daniel Morris authenticated via secure device access.",
      time: "1 hour ago",
    },

    {
      type: "warning",
      title: "High Track Temperature",
      description:
        "Track temperature exceeded safe threshold near Waterloo.",
      time: "2 hours ago",
    },

    {
      type: "critical",
      title: "Unauthorised Access Attempt",
      description:
        "Blocked login attempt detected from unknown device.",
      time: "4 hours ago",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "critical":
        return <ShieldAlert />;
      case "warning":
        return <AlertTriangle />;
      case "success":
        return <CheckCircle2 />;
      default:
        return <Info />;
    }
  };

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
        <div>
          <div className="logo-wrap">
  <TrainFront size={64} strokeWidth={2.5} />
</div>

          <h2>
            Railway
            <br />
            Maintenance System
          </h2>

          <div className="menu">
            <Link className="menu-item" to="/dashboard">
              <Home size={22} />
              <span>Dashboard</span>
            </Link>

            <Link className="menu-item" to="/faults">
              <AlertTriangle />
              <span>Fault Dashboard</span>
            </Link>

            <Link className="menu-item" to="/tools">
              <Wrench />
              <span>Tool Tracker</span>
            </Link>

            <Link className="menu-item" to="/railmap">
              <Map />
              <span>Rail Map</span>
            </Link>

            <NavLink to="/ar" className="menu-item">
  <ScanLine size={22} />
  <span>AR Interface</span>
</NavLink>

            <Link
              className="menu-item active notification-item"
              to="/notifications"
            >
              <Bell />
              <span>Notifications</span>

              <div className="notification-badge">6</div>
            </Link>

            <Link className="menu-item" to="/settings">
              <Settings />
              <span>Settings</span>
            </Link>

          {currentUser === "Admin" && (
  <NavLink to="/admin" className="menu-item">
    <Users size={22} />
    <span>Admin Panel</span>
  </NavLink>
)}

          </div>
        </div>

        <div className="sidebar-user-card">
          <UserCircle size={38} />

          <div>
            <h3>Admin</h3>

            <p>
              <span></span>
              Online
            </p>
          </div>

          <button
  className="logout-button"
  onClick={() => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }}
>
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main className="content">
        {/* TOPBAR */}

        <div className="topbar">
          <button
  className="mobile-menu-btn"
  onClick={() => setMobileSidebarOpen(true)}
>
  ☰
</button>
          <div>
            <p className="welcome-text">
              Monitor system alerts and operational events
            </p>

            <h1>Notifications</h1>
          </div>

          <div className="operator">
            <Bell />
            <span>Administrator</span>
          </div>
        </div>

        {/* STATS */}

        <section className="notification-stats">
          <div className="notification-stat-card critical-card">
            <div className="notification-icon critical">
              <ShieldAlert />
            </div>

            <h2>2</h2>

            <p>Critical Alerts</p>
          </div>

          <div className="notification-stat-card warning-card">
            <div className="notification-icon warning">
              <AlertTriangle />
            </div>

            <h2>2</h2>

            <p>Warnings</p>
          </div>

          <div className="notification-stat-card success-card">
            <div className="notification-icon success">
              <CheckCircle2 />
            </div>

            <h2>1</h2>

            <p>Resolved</p>
          </div>

          <div className="notification-stat-card info-card">
            <div className="notification-icon info">
              <Info />
            </div>

            <h2>1</h2>

            <p>System Info</p>
          </div>
        </section>

        {/* NOTIFICATIONS */}

        <section className="notifications-section">
          <div className="notifications-header">
            <h2>Recent Notifications</h2>

            <button>Mark All as Read</button>
          </div>

          <div className="notifications-list">
            {notifications.map((item, index) => (
              <div className="notification-card" key={index}>
                <div className={`notification-type ${item.type}`}>
                  {getIcon(item.type)}
                </div>

                <div className="notification-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="notification-right">
                  <span>{item.time}</span>

                  <ChevronRight />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}