import "./Dashboard.css";
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
  FilePlus,
  LogOut
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import railMap from "../../assets/map.png";

const currentUser = localStorage.getItem("currentUser");

function ActivityRow({ icon, iconClass, title, subtitle }) {
  return (
    <div className="activity-row">
      <div className={`activity-icon ${iconClass}`}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function StatCard({ title, value, colourClass, cardClass, icon }) {
  return (
    <div className={`stat-card ${cardClass}`}>
      <div className={`stat-icon ${cardClass}`}>{icon}</div>
      <p>{title}</p>
      <h2 className={colourClass}>{value}</h2>
      <button>→ View All</button>
    </div>
  );
}

export default function Dashboard() {
  const currentUser = localStorage.getItem("currentUser") || "Not logged in";
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* SIDEBAR */}
      <aside className="sidebar">
  <div className="logo-wrap">
    <TrainFront size={64} strokeWidth={2.5} />
  </div>

  <h2>RAILWAY<br />MAINTENANCE SYSTEM</h2>

  <nav className="menu">
  <NavLink to="/dashboard" className="menu-item active">
      <Home size={22} />
      <span>Dashboard</span>
    </NavLink>

    <NavLink to="/faults" className="menu-item">
      <AlertCircle size={22} />
      <span>Faults</span>
    </NavLink>

    <NavLink to="/log-fault" className="fault-menu-item">
  <FilePlus size={22} />
  <span>Log Fault</span>
</NavLink>

    <NavLink to="/tools" className="menu-item">
      <Wrench size={22} />
      <span>Tool Tracker</span>
    </NavLink>

    <NavLink to="/rail-map" className="menu-item">
      <Map size={22} />
      <span>Rail Map</span>
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
  <NavLink to="/admin" className="admin-menu-item">
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
  onClick={() => navigate("/")}
  title="Logout"
>
  <LogOut size={18} />
</button>
  </div>
</aside>

      {/* MAIN CONTENT */}
      <main className="content">
        {/* TOP BAR */}
        <header className="topbar">
          <div>
            <p className="welcome-text">Welcome back,</p>
            <h1>Control Room Operator 👋</h1>
          </div>

          <div className="operator">
            <span>Tuesday, 14 May 2024</span>
            <UserCircle size={38} />
          </div>
        </header>

        {/* UPPER SECTION */}
        <section className="upper-section">
          {/* ACTIVITY */}
          <div>
            <h2 className="section-heading">Latest Activity</h2>

            <div className="activity-box">
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
            </div>

            <button className="view-under">→ View All</button>
          </div>

          {/* MAP */}
          <div className="map-panel">
            <h2 className="section-heading">Rail Network Map</h2>

            <div className="rail-map">
              <img src={railMap} alt="Rail map" />
            </div>

            <button className="view-under map-view">→ View Full Map</button>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
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
      </main>
    </div>
  );
}