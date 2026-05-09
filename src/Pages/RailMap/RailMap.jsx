// RailMap.jsx

import "./RailMap.css";
import useAutoLogout from "../useAutoLogout";
import railMapImage from "../../assets/RailMap.png";
import { useState } from "react";

import {
  Bell,
  Map,
  LayoutDashboard,
  AlertTriangle,
  Wrench,
  Settings,
  UserCog,
  LogOut,
  ShieldAlert,
  Train,
  Triangle,
  MapPinned,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";


export default function RailMap() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  useAutoLogout();
  const alerts = [
    {
      id: 1,
      title: "Signal Failure",
      location: "London Bridge",
      severity: "Critical",
      color: "critical",
      top: "38%",
      left: "68%",
    },

    {
      id: 2,
      title: "Track Damage",
      location: "Waterloo",
      severity: "High",
      color: "warning",
      top: "52%",
      left: "45%",
    },

    {
      id: 3,
      title: "Oil Leak",
      location: "Victoria",
      severity: "Medium",
      color: "medium",
      top: "62%",
      left: "28%",
    },

    {
      id: 4,
      title: "Restricted Zone",
      location: "Paddington",
      severity: "Safety",
      color: "safe",
      top: "24%",
      left: "18%",
    },
  ];

  return (
    <div className="page rail-page">
      {/* SIDEBAR */}

      <aside className="sidebar">
        <div>
          <div className="logo-wrap">
            <Map />
          </div>

          <h2>
            Railway
            <br />
            Maintenance System
          </h2>

          <div className="menu">
            <Link className="menu-item" to="/dashboard">
              <LayoutDashboard />
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

            <Link className="menu-item active" to="/railmap">
              <Map />
              <span>Rail Map</span>
            </Link>

            <Link className="menu-item" to="/notifications">
              <Bell />
              <span>Notifications</span>

              <div className="notification-badge">4</div>
            </Link>

            <Link className="menu-item" to="/settings">
              <Settings />
              <span>Settings</span>
            </Link>
          </div>
        </div>

        <div className="sidebar-user-card">
          <UserCog />

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

      {/* MAIN */}

      <main className="content">
        <div className="topbar">
          <div>
            <p className="welcome-text">
              Live railway monitoring and maintenance activity tracking
            </p>

            <h1>Rail Network Map</h1>
          </div>

          <div className="operator">
            <MapPinned />
            <span>Control Room Operator</span>
          </div>
        </div>

        {/* SUMMARY */}

        <section className="rail-summary-grid">
          <div className="rail-summary-card">
            <div className="rail-summary-icon rail-red">
              <ShieldAlert />
            </div>

            <h2>2</h2>

            <p>Critical Alerts</p>
          </div>

          <div className="rail-summary-card">
            <div className="rail-summary-icon rail-yellow">
              <Triangle />
            </div>

            <h2>5</h2>

            <p>Track Warnings</p>
          </div>

          <div className="rail-summary-card">
            <div className="rail-summary-icon rail-green">
              <Train />
            </div>

            <h2>12</h2>

            <p>Active Trains</p>
          </div>

          <div className="rail-summary-card">
            <div className="rail-summary-icon rail-blue">
              <Activity />
            </div>

            <h2>98%</h2>

            <p>Rail Status</p>
          </div>
        </section>

        {/* MAP + ALERTS */}

        <section className="rail-layout">
          {/* MAP */}

          <div className="rail-map-panel">
            <div className="rail-map-header">
              <div>
                <h2>London Rail Network</h2>

                <p>Real-time operational overview</p>
              </div>

              <button>Live Monitoring</button>
            </div>

            <div className="rail-map-container">
              <img
                src={railMapImage}
                alt="Rail Map"
                className="rail-map-image"
              />

              {/* ALERT PINS */}

              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`map-alert-pin ${alert.color}`}
                  style={{
                    top: alert.top,
                    left: alert.left,
                  }}
                >
                  <div className="map-pulse"></div>

                  <div className="map-alert-popup">
                    <h3>{alert.title}</h3>

                    <p>{alert.location}</p>

                    <span>{alert.severity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LIVE ALERTS */}

          <div className="rail-alerts-card">
            <div className="panel-title">
              <h2>Live Alerts</h2>

              <span>4 Active</span>
            </div>

            <div className="rail-alert-item critical-border">
              <div className="alert-dot red-dot"></div>

              <div>
                <h3>Signal Failure</h3>

                <p>London Bridge Platform 4</p>
              </div>
            </div>

            <div className="rail-alert-item warning-border">
              <div className="alert-dot yellow-dot"></div>

              <div>
                <h3>Track Damage</h3>

                <p>Waterloo Underground Section</p>
              </div>
            </div>

            <div className="rail-alert-item medium-border">
              <div className="alert-dot orange-dot"></div>

              <div>
                <h3>Oil Leak Detected</h3>

                <p>Victoria Line Maintenance Area</p>
              </div>
            </div>

            <div className="rail-alert-item safe-border">
              <div className="alert-dot green-dot"></div>

              <div>
                <h3>Restricted Safety Zone</h3>

                <p>Paddington Rail Yard</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}