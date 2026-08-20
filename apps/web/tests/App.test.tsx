import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../src/App";

describe("App Shell", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders Product Intelligence title and subtitle", async () => {
    // Mock successful health check
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: "ok" }),
    });

    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Product Intelligence" })).toBeInTheDocument();
    expect(screen.getByText(/Evidence-driven AI platform transforming industrial product data/i)).toBeInTheDocument();
  });

  it("displays System Status: Connected when backend health check succeeds", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: "ok" }),
    });

    render(<App />);

    await waitFor(() => {
      const badge = screen.getByTestId("system-status-badge");
      expect(badge).toHaveTextContent("Connected");
      expect(badge).toHaveClass("connected");
    });
  });

  it("handles backend error or disconnection gracefully", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Connection refused"));

    render(<App />);

    await waitFor(() => {
      const badge = screen.getByTestId("system-status-badge");
      expect(badge).toHaveTextContent("Disconnected");
      expect(badge).toHaveClass("disconnected");
    });
  });

  it("renders pipeline architecture modules", () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: "ok" }),
    });

    render(<App />);

    expect(screen.getByText("Core Pipeline Architecture")).toBeInTheDocument();
    expect(screen.getByText("Ingestion")).toBeInTheDocument();
    expect(screen.getByText("Validation")).toBeInTheDocument();
    expect(screen.getByText("Knowledge")).toBeInTheDocument();
  });
});
