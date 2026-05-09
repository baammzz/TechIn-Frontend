import "./ARInterface.css";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  ScanLine,
  Wrench,
  ShieldAlert,
  AlertTriangle,
  HardHat,
  Mic,
} from "lucide-react";

export default function ARInterface() {
    const navigate = useNavigate();
  return (
    <div className="ar-page">

      {/* TOPBAR */}
      <header className="ar-topbar">
        <button
  className="ar-back-btn"
  onClick={() => navigate("/dashboard")}
>
          <ArrowLeft size={24} />
        </button>

        <h1>AR Interface</h1>

        <div className="ar-train-icon">🚆</div>
      </header>

      {/* ENGINEER INFO */}
      <div className="ar-engineer-bar">
        <div className="ar-engineer-left">
          <div className="ar-avatar">👷</div>
          <span>Engineer: Michael.A</span>
        </div>

        <div className="ar-role-badge">Engineer</div>
      </div>

      {/* CAMERA AREA */}
      <main className="ar-camera-container">

        {/* CAMERA IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1600&auto=format&fit=crop"
          alt="Train AR"
          className="ar-camera-feed"
        />

        {/* DARK OVERLAY */}
        <div className="ar-dark-overlay"></div>

        {/* TOP AR INFO */}
        <div className="ar-overlay-top">

          <div className="ar-info-card">
            <div className="ar-info-left">
              <ScanLine size={18} />
              <span>Mode: <strong>Inspect</strong></span>
            </div>
          </div>

          <div className="ar-info-card">
            <div className="ar-info-left">
              <MapPin size={18} />
              <span>Location: Depot 1 — Bay 3</span>
            </div>
          </div>
        </div>

        {/* FAULT DETECTION */}
        <div className="fault-marker"></div>

        <div className="fault-line"></div>

        <div className="fault-box">
          <h3>FAULT DETECTED</h3>

          <p><strong>F-1023</strong></p>

          <p>Brake System Issue</p>

          <p>
            Severity:
            <span className="high-severity"> HIGH</span>
          </p>

          <p>2.4m away</p>

          <div className="repair-box">
            <h4>Repair Guidance</h4>

            <ul>
              <li>Inspect brake assembly</li>
              <li>Replace damaged cable</li>
              <li>Run pressure diagnostics</li>
            </ul>
          </div>
        </div>

        {/* TOOL DETECTION */}
        <div className="tool-marker"></div>

        <div className="tool-line"></div>

        <div className="tool-box">
          <h3>TOOL DETECTED</h3>

          <p>Wrench (T-01)</p>

          <p>Storage: Rack B2</p>

          <p>Status:
            <span className="tool-ok"> Working</span>
          </p>

          <p>1.2m away</p>
        </div>

        {/* SAFETY ALERT */}
        <div className="hazard-popup">

          <div className="hazard-top">
            <AlertTriangle size={18} />
            <span>Nearby Hazard</span>
          </div>

          <p>Live electrical rail detected nearby.</p>
        </div>

        {/* SAFETY CHECK */}
        <div className="safety-gear-box">

          <div className="safety-title">
            <HardHat size={18} />
            <span>Safety Gear Check</span>
          </div>

          <div className="safety-items">
            <div className="gear ok">Helmet ✓</div>
            <div className="gear ok">Vest ✓</div>
            <div className="gear missing">Gloves Missing</div>
          </div>
        </div>

        {/* VOICE CONTROL */}
        <div className="voice-box">
          <Mic size={18} />
          <span>Voice: “Next Step”</span>
        </div>
      </main>

      {/* BOTTOM NAV */}
      <footer className="ar-bottom-nav">

        <button className="ar-nav-btn active">
          <ScanLine size={28} />
          <span>Scan</span>
        </button>

        <button className="ar-nav-btn">
          <ShieldAlert size={28} />
          <span>Hazards</span>
        </button>

        <button className="ar-nav-btn">
          <Wrench size={28} />
          <span>Tools</span>
        </button>
      </footer>
    </div>
  );
}