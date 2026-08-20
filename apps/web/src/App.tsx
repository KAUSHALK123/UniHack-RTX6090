import React, { useEffect, useState } from "react";
import { checkBackendHealth, HealthCheckResult } from "./services/api";
import "./App.css";

const PIPELINE_MODULES = [
  { id: "ingestion", label: "Ingestion", desc: "Catalog parsing & staging" },
  { id: "products", label: "Products", desc: "Canonical domain & resolution" },
  { id: "taxonomy", label: "Taxonomy", desc: "Hierarchy & classification" },
  { id: "knowledge", label: "Knowledge", desc: "Controlled data, LOVs & UOMs" },
  { id: "enrichment", label: "Enrichment", desc: "LLM extraction & normalization" },
  { id: "evidence", label: "Evidence", desc: "Datasheet grounding & provenance" },
  { id: "validation", label: "Validation", desc: "Deterministic business rules" },
  { id: "jobs", label: "Jobs", desc: "Batch orchestration & async tasks" },
  { id: "review", label: "Review", desc: "Human review & resolution queue" },
  { id: "evaluation", label: "Evaluation", desc: "Precision/recall benchmark metrics" },
];

export const App: React.FC = () => {
  const [health, setHealth] = useState<HealthCheckResult>({
    connected: false,
    status: "Checking...",
    timestamp: new Date().toLocaleTimeString(),
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchHealth = async () => {
    setLoading(true);
    const result = await checkBackendHealth();
    setHealth(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-badge">AI Platform Foundation</div>
        <h1 className="app-title">Product Intelligence</h1>
        <p className="app-subtitle">
          Evidence-driven AI platform transforming industrial product data into standardized,
          validated, commerce-ready intelligence.
        </p>
      </header>

      <main className="app-main">
        <section className="status-card" data-testid="status-section">
          <div className="status-header">
            <span className="status-label">System Status:</span>
            <span
              className={`status-badge ${
                loading ? "loading" : health.connected ? "connected" : "disconnected"
              }`}
              data-testid="system-status-badge"
            >
              {health.connected ? "Connected" : health.status}
            </span>
          </div>

          <p className="status-detail">
            Backend Endpoint: <code>/health</code> — Status Response:{" "}
            <strong>{health.connected ? '{"status": "ok"}' : health.error || health.status}</strong>
          </p>

          <div className="status-actions">
            <button
              onClick={fetchHealth}
              className="refresh-btn"
              disabled={loading}
              data-testid="refresh-btn"
            >
              {loading ? "Checking..." : "Recheck Connection"}
            </button>
            <span className="last-checked">Last checked: {health.timestamp}</span>
          </div>
        </section>

        <section className="modules-section">
          <h2>Core Pipeline Architecture</h2>
          <p className="section-desc">
            The foundation is configured with modular boundaries for Sprint 1 development:
          </p>
          <div className="modules-grid">
            {PIPELINE_MODULES.map((m) => (
              <div key={m.id} className="module-pill">
                <div className="module-tag">{m.label}</div>
                <div className="module-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>AI Product Intelligence Platform &bull; Core Principle: AI Proposes &bull; Controlled Reference Data Constrains &bull; Deterministic Validation Verifies</p>
      </footer>
    </div>
  );
};

export default App;
