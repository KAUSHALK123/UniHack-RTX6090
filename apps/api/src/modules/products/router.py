"""Products module: canonical product domain models, catalog repository, and identity resolution."""

from fastapi import APIRouter

router = APIRouter(prefix="/products", tags=["Products"])
