import "./AdminPanel.css";
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
  ClipboardList,
  ShieldCheck,
  UserPlus,
  Pencil,
  Trash2,
  Circle,
  Activity,
  ScanLine,
} from "lucide-react";


const currentUser = localStorage.getItem("currentUser");

function UserRow({ name, role, status, lastSeen }) {
  const isOnline = status === "Online";

  return (
    <tr>
      <td>{name}</td>
      <td>{role}</td>
      <td>
        <span className={`admin-status ${isOnline ? "online" : "offline"}`}>
          <Circle size={10} fill="currentColor" />
          {status}
        </span>
      </td>
      <td>{lastSeen}</td>
      <td>
        <div className="admin-actions">
          <button><Pencil size={18} /></button>
          <button><Trash2 size={18} /></button>
        </div>
      </td>
    </tr>
  );
}

function AdminStatCard({ icon, title, value, className }) {
    return (
      <div className={`admin-stat-card ${className}`}>
        <div className="admin-stat-icon">{icon}</div>
  
        <div className="admin-stat-text">
          <p>{title}</p>
          <h2>{value}</h2>
        </div>
      </div>
    );
  }

export default function AdminPanel() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  useAutoLogout();
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser") || "Admin";

  function handleLogout() {
    localStorage.removeItem("currentUser");
    navigate("/");
  }

  return (
    <div className="admin-page">
      {mobileSidebarOpen && (
  <div
    className="sidebar-overlay"
    onClick={() => setMobileSidebarOpen(false)}
  />
)}
      <aside className={`admin-sidebar ${mobileSidebarOpen ? "mobile-open" : ""}`}>
        <button
  className="close-sidebar-btn"
  onClick={() => setMobileSidebarOpen(false)}
>
  ✕
</button>

        <div className="admin-logo-wrap">
          <TrainFront size={64} strokeWidth={2.5} />
        </div>

        <h2>RAILWAY<br />MAINTENANCE SYSTEM</h2>

        <nav className="admin-menu">
          <NavLink to="/dashboard" className="admin-menu-item">
            <Home size={22} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/faults" className="admin-menu-item">
            <AlertCircle size={22} />
            <span>Fault Dashboard</span>
          </NavLink>

          <NavLink to="/tools" className="admin-menu-item">
            <Wrench size={22} />
            <span>Tool Tracker</span>
          </NavLink>

          <NavLink to="/railmap" className="admin-menu-item">
            <Map size={22} />
            <span>Rail Map</span>
          </NavLink>

          <NavLink to="/ar" className="menu-item">
  <ScanLine size={22} />
  <span>AR Interface</span>
</NavLink>

          <NavLink to="/notifications" className="admin-menu-item notification-item">
            <Bell size={22} />
            <span>Notifications</span>
            <span className="admin-notification-badge">3</span>
          </NavLink>

          <NavLink to="/settings" className="admin-menu-item">
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

        <div className="admin-user-card">
          <UserCircle size={38} />
          <div>
            <h3>{currentUser}</h3>
            <p><span></span> Online</p>
          </div>

          <button
            className="admin-logout-button"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <header className="admin-topbar">
          <button
  className="mobile-menu-btn"
  onClick={() => setMobileSidebarOpen(true)}
>
  ☰
</button>
          <div>
            <p className="admin-welcome">Admin Control</p>
            <h1>User Management Dashboard</h1>
          </div>

          <div className="admin-top-user">
            <span>{currentUser}</span>
            <UserCircle size={38} />
          </div>
        </header>

        <section className="admin-stats-grid">
          <AdminStatCard
            icon={<Users size={28} />}
            title="Total Users"
            value="4"
            className="blue"
          />

          <AdminStatCard
            icon={<ShieldCheck size={28} />}
            title="Online Users"
            value="2"
            className="green"
          />

          <AdminStatCard
            icon={<Activity size={28} />}
            title="Offline Users"
            value="2"
            className="red"
          />

          <AdminStatCard
            icon={<ClipboardList size={28} />}
            title="Admin Accounts"
            value="1"
            className="purple"
          />
        </section>

        <div className="admin-tabs">
  <button className="admin-tab active">User Management</button>
  <button className="admin-tab">Audit Logs</button>
</div>

        <section className="admin-table-card">
          <div className="admin-table-header">
            <div>
              <h2>User Accounts</h2>
              <p>Manage engineers, control room operators and administrators</p>
            </div>

            <button className="create-user-button">
              <UserPlus size={20} />
              Create New User
            </button>
          </div>

          <table className="admin-user-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Seen</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <UserRow
                name="Michael.A"
                role="Engineer"
                status="Offline"
                lastSeen="01/05/2026 17:48"
              />

              <UserRow
                name="Jasmine.H"
                role="Control Op"
                status="Online"
                lastSeen="Now"
              />

              <UserRow
                name="Monica.W"
                role="Admin"
                status="Online"
                lastSeen="Now"
              />

              <UserRow
                name="Joe.R"
                role="Engineer"
                status="Offline"
                lastSeen="29/04/2026 09:21"
              />
            </tbody>
          </table>

          <button className="admin-view-all">→ View All</button>
        </section>
      </main>
    </div>
  );
}