export interface HealthCheckResult {
  connected: boolean;
  status: string;
  error?: string;
  timestamp: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Check backend API health status.
 */
export async function checkBackendHealth(): Promise<HealthCheckResult> {
  const timestamp = new Date().toLocaleTimeString();
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/health` : "/health";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      return {
        connected: false,
        status: `HTTP ${response.status}`,
        error: `Backend returned status ${response.status}`,
        timestamp,
      };
    }

    const data = await response.json();
    if (data && data.status === "ok") {
      return {
        connected: true,
        status: "Connected",
        timestamp,
      };
    }

    return {
      connected: false,
      status: data.status || "Unknown",
      error: "Unexpected response payload",
      timestamp,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Network error";
    return {
      connected: false,
      status: "Disconnected",
      error: errorMessage,
      timestamp,
    };
  }
}
