"""Aggregated API router."""

from fastapi import APIRouter

from src.modules.enrichment import router as enrichment_router
from src.modules.evaluation import router as evaluation_router
from src.modules.evidence import router as evidence_router
from src.modules.ingestion import router as ingestion_router
from src.modules.jobs import router as jobs_router
from src.modules.knowledge import router as knowledge_router
from src.modules.products import router as products_router
from src.modules.review import router as review_router
from src.modules.taxonomy import router as taxonomy_router
from src.modules.validation import router as validation_router
from src.routers.health import router as health_router

api_router = APIRouter()

# Include health router
api_router.include_router(health_router)

# Include core pipeline module routers
api_router.include_router(ingestion_router)
api_router.include_router(products_router)
api_router.include_router(taxonomy_router)
api_router.include_router(knowledge_router)
api_router.include_router(enrichment_router)
api_router.include_router(evidence_router)
api_router.include_router(validation_router)
api_router.include_router(jobs_router)
api_router.include_router(review_router)
api_router.include_router(evaluation_router)
