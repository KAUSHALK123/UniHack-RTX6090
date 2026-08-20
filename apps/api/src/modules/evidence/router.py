"""Evidence module: manufacturer datasheet retrieval, PDF text extraction, and snippet provenance."""

from fastapi import APIRouter

router = APIRouter(prefix="/evidence", tags=["Evidence"])
