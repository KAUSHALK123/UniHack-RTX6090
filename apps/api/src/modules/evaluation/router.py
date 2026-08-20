"""Evaluation module: precision/recall benchmarks, extraction accuracy, and audit metrics."""

from fastapi import APIRouter

router = APIRouter(prefix="/evaluation", tags=["Evaluation"])
