"""Health check router."""

from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health", summary="Health Check")
async def health_check() -> dict[str, str]:
    """Check API server health status.

    Returns:
        Dict[str, str]: {"status": "ok"}
    """
    return {"status": "ok"}
