/**
 * Shared Application Constants
 */

export const APP_CONFIG = {
  APP_NAME: "AI-Powered Product Intelligence",
  VERSION: "0.1.0",
  DEFAULT_API_PORT: 8000,
  DEFAULT_WEB_PORT: 5173,
  DEFAULT_API_PREFIX: "/api/v1",
  HEALTH_ENDPOINT: "/health",
} as const;

export const PIPELINE_MODULES = [
  { id: "ingestion", label: "Ingestion", description: "Catalog ingestion & messy input parsing" },
  { id: "products", label: "Products", description: "Canonical product domain & identity resolution" },
  { id: "taxonomy", label: "Taxonomy", description: "Category tree hierarchy & classification" },
  { id: "knowledge", label: "Knowledge", description: "Controlled reference data, LOVs, & UOMs" },
  { id: "enrichment", label: "Enrichment", description: "AI attribute extraction & content generation" },
  { id: "evidence", label: "Evidence", description: "Manufacturer datasheet grounding & provenance" },
  { id: "validation", label: "Validation", description: "Deterministic business rules & schema constraints" },
  { id: "jobs", label: "Jobs", description: "Asynchronous pipeline execution & tracking" },
  { id: "review", label: "Review", description: "Human-in-the-loop validation & exception queue" },
  { id: "evaluation", label: "Evaluation", description: "Extraction precision/recall & benchmark metrics" },
] as const;
