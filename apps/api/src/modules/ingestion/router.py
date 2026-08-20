"""Ingestion module: handles messy raw catalog imports, batch parsing, and staging."""

from fastapi import APIRouter

router = APIRouter(prefix="/ingestion", tags=["Ingestion"])
