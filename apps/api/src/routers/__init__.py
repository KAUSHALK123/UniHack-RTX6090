"""Routers package."""

from src.routers.api_router import api_router
from src.routers.health import router as health_router

__all__ = ["api_router", "health_router"]
