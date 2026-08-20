"""Validation module: deterministic rule engine, LOV check, UOM verification, schema compliance."""

from fastapi import APIRouter

router = APIRouter(prefix="/validation", tags=["Validation"])
