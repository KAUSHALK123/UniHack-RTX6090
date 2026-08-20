"""Jobs module: asynchronous pipeline orchestration, batch execution, and task progress tracking."""

from fastapi import APIRouter

router = APIRouter(prefix="/jobs", tags=["Jobs"])
