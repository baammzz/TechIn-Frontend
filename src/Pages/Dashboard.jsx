import React from "react";
import {
  Home,
  AlertCircle,
  Wrench,
  Map,
  Bell,
  Settings,
  UserCircle,
  TrainFront,
} from "lucide-react";
import "./Dashboard.css";

const latestActivity = [
  { title: "Engineer signed out", detail: "Michael.A 14:47", color: "blue" },
  { title: "Fault Resolved", detail: "Waterloo Station 14:13", color: "green" },
  { title: "New Fault Report", detail: "Victoria Station, Platform C", color: "red" },
  { title: "Tool Fault Report", detail: "Missing Equipment Depot 12", color: "yellow" },
];

const stats = [
  { label: "Engineers Online", value: "3", color: "blue" },
  { label: "New Faults Today", value: "15", color: "red" },
  { label: "Active Faults", value: "8", color: "yellow" },
  { label: "Resolved Faults\nToday", value: "12", color: "green" },
];

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: AlertCircle, label: "Faults" },
  { icon: Wrench, label: "Tool Tracker" },
  { icon: Map, label: "Rail Map" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

function ActivityBox() {
  return (
    <div className="activity-box">
      {latestActivity.map((item, index) => (
        <div className="activity-row" key={index}>
          <span className={`status-dot ${item.color}`}></span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
      <div className="empty-row"></div>
      <div className="empty-row small"></div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="stat-card">
      <p>{label}</p>
      <h2 className={color}>{value}</h2>
      <button>→ View All</button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="page">
      <aside className="sidebar">
        <div className="logo-wrap">
          <TrainFront size={105} strokeWidth={2.2} />
        </div>

        <h2>
          Maintenance AR
          <br />
          Software
        </h2>

        <nav className="menu">
          {menuItems.map(({ icon: Icon, label }) => (
            <div className="menu-item" key={label}>
              <Icon size={24} strokeWidth={2.4} />
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Home</h1>
          <div className="operator">
            <span>Control Room Operator</span>
            <UserCircle size={42} strokeWidth={1.9} />
          </div>
        </header>

        <section className="upper-section">
          <div className="latest-panel">
            <h2 className="section-heading">Latest Activity</h2>
            <ActivityBox />
            <button className="view-under">→ View All</button>
          </div>

          <div className="map-panel">
            <h2 className="section-heading">Rail Network Map</h2>
            <div className="rail-map">
            <img src="/map.png" alt="Rail network map" />
            </div>
            <button className="view-under map-view">→ View All</button>
          </div>
        </section>

        <section className="stats-section">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>
      </main>
    </div>
  );
}
