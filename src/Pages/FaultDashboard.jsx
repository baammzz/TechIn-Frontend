import React from "react";
import "./FaultDashboard.css";

const stats = [
  { label: "Engineers Online", value: "3", color: "blue" },
  { label: "New Faults Today", value: "15", color: "red" },
  { label: "Active Faults", value: "8", color: "yellow" },
  { label: "Resolved Faults Today", value: "12", color: "green" },
];

const latestFaults = [
  {
    title: "Engineer signed out",
    detail: "Michael.A 14:47",
    color: "blue",
  },
  {
    title: "Fault Resolved",
    detail: "Waterloo Station 14:13",
    color: "green",
  },
  {
    title: "New Fault Report",
    detail: "Victoria Station, Platform C",
    color: "red",
  },
  {
    title: "Tool Fault Report",
    detail: "Missing Equipment Depot 12",
    color: "yellow",
  },
];

const criticalFaults = [
  {
    title: "Train Engine Failure",
    detail: "Victoria Station, Platform B",
  },
  {
    title: "Electricity Outage",
    detail: "Waterloo Station",
  },
  {
    title: "Train Oil Leak",
    detail: "Westminster Station, Platform D",
  },
  {
    title: "Train Brake Issue",
    detail: "Epsom Station, Platform A",
  },
];

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Fault Dashboard", icon: AlertCircle },
  { label: "Tool Tracker", icon: Wrench },
  { label: "Rail Map", icon: Map },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
];
function StatCard({ label, value, color }) {
  return (
    <div className="stat-card">
      <p className="stat-title">{label}</p>
      <h1 className={`stat-number ${color}`}>{value}</h1>
      <button className="view-btn">→ View All</button>
    </div>
  );
}

function ActivityList({ items, critical = false }) {
  return (
    <div className={`activity-box ${critical ? "critical-border" : ""}`}>
      {items.map((item, index) => (
        <div key={index} className="activity-item">
          <span className={`dot ${item.color || "red"}`}></span>

          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FaultDashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-section">
          <TrainFront size={100} />
          <h2>
            Maintenance AR
            <br />
            Software
          </h2>
        </div>

        <nav>
          {navItems.map(({ label, icon: Icon }) => (
            <div className="nav-item" key={label}>
              <Icon size={22} />
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h1>Fault Dashboard</h1>

          <div className="user-section">
            <span>Control Room Operator</span>
            <UserCircle size={40} />
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="activity-section">
          <div>
            <h2 className="section-title">Latest Fault Activity</h2>
            <ActivityList items={latestFaults} />
            <button className="view-btn lower-btn">→ View All</button>
          </div>

          <div>
            <h2 className="section-title">
              Latest Critical Fault Activity
            </h2>
            <ActivityList items={criticalFaults} critical />
          </div>

          <div className="critical-card">
            <p>
              Active CRITICAL
              <br />
              Faults
            </p>

            <h1 className="red">4</h1>

            <button className="view-btn">→ View All</button>
          </div>
        </section>
      </main>
    </div>
  );
}