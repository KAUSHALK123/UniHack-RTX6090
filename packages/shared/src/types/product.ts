/**
 * Canonical Product and Pipeline interfaces
 */

export interface ProductAttributeValue {
  attributeName: string;
  value: string | number | boolean;
  unitOfMeasure?: string;
  isStandardized: boolean;
  confidenceScore: number;
  evidenceSource?: string;
}

export interface CanonicalProduct {
  id: string;
  sku: string;
  mpn: string;
  manufacturer: string;
  brand: string;
  title: string;
  description?: string;
  categoryCode?: string;
  categoryName?: string;
  attributes: Record<string, ProductAttributeValue>;
  validationStatus: "valid" | "invalid" | "needs_review";
  createdAt: string;
  updatedAt: string;
}

export interface PipelineModuleInfo {
  name: string;
  label: string;
  description: string;
  status: "ready" | "in_progress" | "planned";
}
