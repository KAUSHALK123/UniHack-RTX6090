/**
 * Health check response structure
 */
export interface HealthStatusResponse {
  status: "ok" | "degraded" | "error";
  timestamp?: string;
  version?: string;
  environment?: string;
}
