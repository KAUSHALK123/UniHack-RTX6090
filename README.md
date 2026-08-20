# AI-Powered Product Intelligence

An evidence-driven AI platform that transforms messy, inconsistent industrial product data into standardized, validated, and commerce-ready product intelligence.

## Core Principle

```text
AI proposes.
Controlled reference data constrains.
Manufacturer evidence supports.
Deterministic validation verifies.
Human review resolves uncertainty.
```

The system does **NOT** blindly trust LLM output.

---

## Repository Structure

```text
UniHack-RTX6090/
├── apps/
│   ├── api/                     # Python 3.11 FastAPI Backend
│   │   ├── src/
│   │   │   ├── config.py        # Environment & configuration settings
│   │   │   ├── modules/         # Pipeline feature modules (Sprint 1 foundation)
│   │   │   │   ├── ingestion/   # Source catalog parsing & staging
│   │   │   │   ├── products/    # Canonical domain & identity resolution
│   │   │   │   ├── taxonomy/    # Category hierarchy & classification
│   │   │   │   ├── knowledge/   # Reference datasets, LOVs & UOMs
│   │   │   │   ├── enrichment/  # LLM attribute extraction & content
│   │   │   │   ├── evidence/    # Manufacturer datasheet grounding
│   │   │   │   ├── validation/  # Deterministic business rules engine
│   │   │   │   ├── jobs/        # Async pipeline execution & tracking
│   │   │   │   ├── review/      # Human review & exception queue
│   │   │   │   └── evaluation/  # Precision/recall benchmark metrics
│   │   │   ├── routers/         # API routers & health checks
│   │   │   └── main.py          # FastAPI application entrypoint
│   │   ├── tests/               # Backend unit and integration tests
│   │   ├── Dockerfile
│   │   ├── pyproject.toml       # Ruff, pytest, and tool configurations
│   │   └── requirements.txt
│   └── web/                     # React + TypeScript + Vite Frontend
│       ├── src/
│       │   ├── services/        # Backend API client & health check
│       │   ├── App.tsx          # Application shell & status dashboard
│       │   └── main.tsx
│       ├── tests/               # Frontend Vitest test suite
│       ├── Dockerfile
│       └── vite.config.ts
├── packages/
│   ├── shared/                  # Shared TypeScript types & data contracts
│   └── config/                  # Shared constants & configurations
├── data/
│   └── .gitkeep                 # Reference datasets (Unilog catalogs, LOVs)
├── docs/                        # Project documentation
│   ├── ARCHITECTURE.md          # Architecture & pipeline design
│   ├── ENGINEERING_STANDARDS.md # Git workflow & coding conventions
│   └── README.md
├── tests/                       # Cross-system smoke & integration tests
├── .env.example                 # Environment variables template
├── .gitignore                   # Comprehensive ignore rules
├── docker-compose.yml           # Containerized local development
├── package.json                 # Monorepo workspace scripts
└── README.md                    # This file
```

---

## Prerequisites

- **Node.js**: `v18.0.0` or higher (tested with `v22.x`)
- **Python**: `3.11` or higher
- **NPM**: `v9.x` or higher
- **Docker & Docker Compose** *(optional for containerized workflow)*

---

## Quickstart

### 1. Clone & Setup Environment

```bash
# Clone the repository
git clone <repo-url>
cd UniHack-RTX6090

# Copy environment configuration
cp .env.example .env
```

### 2. Install Dependencies

```bash
# Install Node workspace dependencies (root, web, packages)
npm install

# Install Python backend dependencies
pip install -r apps/api/requirements-dev.txt
```

### 3. Run Locally

#### Option A: Running Services Individually

**Terminal 1 — Backend API:**
```bash
# From repository root:
npm run dev:api

# Or directly with uvicorn:
python -m uvicorn src.main:app --app-dir apps/api --reload --port 8000
```
API will start at `http://localhost:8000`.
- Health Check: `http://localhost:8000/health`
- Swagger Docs: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

**Terminal 2 — Frontend Web:**
```bash
# From repository root:
npm run dev:web
```
Web frontend will start at `http://localhost:5173`.
Open `http://localhost:5173` to see **Product Intelligence** and **System Status: Connected**.

---

#### Option B: Running with Docker Compose

```bash
docker-compose up --build
```
- Web Application: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- API Health Check: `http://localhost:8000/health`

---

## Health Check Specifications

| Endpoint | Method | Expected Status | Expected Response |
|---|---|---|---|
| `/health` | `GET` | `200 OK` | `{"status": "ok"}` |
| `/api/v1/health` | `GET` | `200 OK` | `{"status": "ok"}` |
| `/` | `GET` | `200 OK` | `{"name": "...", "version": "...", "health": "/health"}` |

---

## Testing & Quality Assurance

### Run All Tests

```bash
npm run test
```

### Run Backend Tests (Pytest)

```bash
pytest apps/api/tests
```

### Run Cross-System Integration Tests

```bash
pytest tests
```

### Run Frontend Tests (Vitest)

```bash
npm run test:web
```

### Linting & Formatting

```bash
# Check code style with Ruff and ESLint
npm run lint

# Format code with Ruff
npm run format
```

---

## Engineering Standards & Git Workflow

- **Branch format**: `<type>/issue-<issue-number>-<short-description>` (e.g. `feat/issue-1-project-foundation`)
- **Never commit**: `.env`, API keys, local databases, or credentials.
- See [docs/ENGINEERING_STANDARDS.md](./docs/ENGINEERING_STANDARDS.md) for full guidelines.
- See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for architectural details.
