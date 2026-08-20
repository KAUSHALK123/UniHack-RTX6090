"""Cross-system integration smoke tests."""

from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)


def test_system_health_endpoint():
    """Verify that root /health endpoint responds with HTTP 200 and {'status': 'ok'}."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_api_v1_health_endpoint():
    """Verify that versioned /api/v1/health endpoint responds with HTTP 200 and {'status': 'ok'}."""
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_cors_headers():
    """Verify that CORS middleware is active and allows permitted origins."""
    response = client.options(
        "/health",
        headers={
            "Origin": "http://localhost:5173",
            "Access-Control-Request-Method": "GET",
        },
    )
    assert response.status_code == 200
    assert (
        response.headers.get("access-control-allow-origin") == "http://localhost:5173"
    )
