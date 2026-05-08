import "./FaultDashboard.css";
import {
  Home,
  AlertCircle,
  Wrench,
  Map,
  Bell,
  Settings,
  UserCircle,
  TrainFront,
  Users,
  ClipboardList,
  Zap,
  ShieldCheck,
  Shield,
  AlertTriangle,
  LogOut
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const currentUser = localStorage.getItem("currentUser");

function StatCard({ title, value, colourClass, cardClass, icon }) {
  return (
    <div className={`fault-stat-card ${cardClass}`}>
      <div className={`fault-stat-icon ${cardClass}`}>{icon}</div>
      <p>{title}</p>
      <h2 className={colourClass}>{value}</h2>
      <button>→ View All</button>
    </div>
  );
}

function ActivityRow({ icon, iconClass, title, subtitle }) {
  return (
    <div className="fault-activity-row">
      <div className={`fault-activity-icon ${iconClass}`}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function CriticalRow({ title, subtitle }) {
  return (
    <div className="critical-row">
      <span className="table-dot"></span>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default function FaultDashboard() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser") || "Engineer";
  return (
    <div className="fault-page">
   <aside className="fault-sidebar">
  <div className="fault-logo-wrap">
    <TrainFront size={64} strokeWidth={2.5} />
  </div>

  <h2>RAILWAY<br />MAINTENANCE SYSTEM</h2>

  <nav className="fault-menu">
    <NavLink to="/dashboard" className="fault-menu-item">
      <Home size={22} />
      <span>Dashboard</span>
    </NavLink>

    <NavLink to="/faults" className="fault-menu-item active">
      <AlertCircle size={22} />
      <span>Fault Dashboard</span>
    </NavLink>

    <NavLink to="/tools" className="fault-menu-item">
      <Wrench size={22} />
      <span>Tool Tracker</span>
    </NavLink>

    <NavLink to="/rail-map" className="fault-menu-item">
      <Map size={22} />
      <span>Rail Map</span>
    </NavLink>

    <NavLink
      to="/notifications"
      className="fault-menu-item notification-item"
    >
      <Bell size={22} />
      <span>Notifications</span>
      <span className="notification-badge">3</span>
    </NavLink>

    <NavLink to="/settings" className="fault-menu-item">
      <Settings size={22} />
      <span>Settings</span>
    </NavLink>
    {currentUser === "Admin" && (
  <NavLink to="/admin" className="admin-menu-item">
    <Users size={22} />
    <span>Admin Panel</span>
  </NavLink>
)}
  </nav>

  <div className="fault-user-card">
    <UserCircle size={38} />
    <div>
    <h3>{currentUser}</h3>
      <p><span></span> Online</p>
    </div>
    <button
  className="fault-logout-button"
  onClick={() => navigate("/")}
  title="Logout"
>
  <LogOut size={18} />
</button>
  </div>
</aside>

      <main className="fault-content">
        <header className="fault-topbar">
          <h1>Fault Dashboard <span>⚠️</span></h1>

          <div className="fault-operator">
            <span>Control Room Operator</span>
            <UserCircle size={38} />
          </div>
        </header>

        <section className="fault-stats-section">
          <StatCard
            title="Engineers Online"
            value="3"
            colourClass="blue"
            cardClass="blue-card"
            icon={<Users size={28} />}
          />

          <StatCard
            title="New Faults Today"
            value="15"
            colourClass="red"
            cardClass="red-card"
            icon={<ClipboardList size={28} />}
          />

          <StatCard
            title="Active Faults"
            value="8"
            colourClass="yellow"
            cardClass="yellow-card"
            icon={<Zap size={28} />}
          />

          <StatCard
            title="Resolved Faults Today"
            value="12"
            colourClass="green"
            cardClass="green-card"
            icon={<ShieldCheck size={28} />}
          />
        </section>

        <section className="fault-main-grid">
          <div className="fault-panel">
            <h2>Latest Fault Activity</h2>

            <ActivityRow
              icon="✓"
              iconClass="success"
              title="Engineer signed out"
              subtitle="Michael.A • 14:47"
            />

            <ActivityRow
              icon="✓"
              iconClass="success"
              title="Fault Resolved"
              subtitle="Waterloo Station • 14:13"
            />

            <ActivityRow
              icon="!"
              iconClass="warning"
              title="New Fault Report"
              subtitle="Victoria Station, Platform C"
            />

            <ActivityRow
              icon="⚒"
              iconClass="danger"
              title="Tool Fault Report"
              subtitle="Missing Equipment Depot 12"
            />

            <button className="fault-view-button blue-link">→ View All</button>
          </div>

          <div className="fault-panel critical-panel">
            <h2>Latest Critical Fault Activity</h2>

            <div className="critical-list">
              <CriticalRow
                title="Train Engine Failure"
                subtitle="Victoria Station, Platform C"
              />

              <CriticalRow
                title="Electricity Outage"
                subtitle="Waterloo Station"
              />

              <CriticalRow
                title="Train Oil Leak"
                subtitle="Westminster Station, Platform D"
              />

              <CriticalRow
                title="Train Brake Issue"
                subtitle="Epsom Station, Platform A"
              />

              <button className="fault-view-button red-link">→ View All</button>
            </div>
          </div>

          <div className="severity-column">
            <div className="severity-card low">
              <div>
                <p>Low Severity Faults</p>
                <h2>2</h2>
                <button>→ View All</button>
              </div>
              <div className="severity-icon green-bg">
                <ShieldCheck size={44} />
              </div>
            </div>

            <div className="severity-card medium">
              <div>
                <p>Medium Severity Faults</p>
                <h2>1</h2>
                <button>→ View All</button>
              </div>
              <div className="severity-icon yellow-bg">
                <Shield size={44} />
              </div>
            </div>
          </div>
        </section>

        <section className="critical-table-card">
          <div className="critical-table-header">
            <div className="critical-title-wrap">
              <div className="critical-alert-icon">
                <AlertTriangle size={30} />
              </div>
              <h2>Active <span>CRITICAL</span> Faults</h2>
            </div>

            <div className="critical-summary">
              <strong>4</strong>
              <span>Total Active Critical Faults</span>
              <button>→ View All</button>
            </div>
          </div>

          <table className="critical-table">
            <thead>
              <tr>
                <th>Fault</th>
                <th>Location</th>
                <th>Platform</th>
                <th>Reported By</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
  <tr>
    <td>
      <span className="table-fault-name">
        <span className="table-dot"></span>
        Train Engine Failure
      </span>
    </td>
    <td>Victoria Station</td>
    <td>Platform C</td>
    <td>Engineer A</td>
    <td>14:47</td>
    <td><span className="active-pill">ACTIVE</span></td>
    <td><button>View Details</button></td>
  </tr>

  <tr>
    <td>
      <span className="table-fault-name">
        <span className="table-dot"></span>
        Electricity Outage
      </span>
    </td>
    <td>Waterloo Station</td>
    <td>-</td>
    <td>Engineer B</td>
    <td>14:41</td>
    <td><span className="active-pill">ACTIVE</span></td>
    <td><button>View Details</button></td>
  </tr>

  <tr>
    <td>
      <span className="table-fault-name">
        <span className="table-dot"></span>
        Train Oil Leak
      </span>
    </td>
    <td>Westminster Station</td>
    <td>Platform D</td>
    <td>Engineer C</td>
    <td>14:35</td>
    <td><span className="active-pill">ACTIVE</span></td>
    <td><button>View Details</button></td>
  </tr>

  <tr>
    <td>
      <span className="table-fault-name">
        <span className="table-dot"></span>
        Train Brake Issue
      </span>
    </td>
    <td>Epsom Station</td>
    <td>Platform A</td>
    <td>Engineer D</td>
    <td>14:28</td>
    <td><span className="active-pill">ACTIVE</span></td>
    <td><button>View Details</button></td>
  </tr>
</tbody>
          </table>
        </section>
      </main>
    </div>
  );
}