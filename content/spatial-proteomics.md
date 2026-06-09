---
title: "Spatial Proteomics"
---
# Spatial Proteomics
`technology · spatial-omics · immunology · multiplex detection · tissue profiling · immunotherapy biomarkers`

Last modified 2026-06-05 · 2 papers · 1 incoming link

| | |
|---|---|
| **Type** | In situ profiling technology |
| **Method** | Multiplex immunohistochemistry (IHC) |
| **Key framework** | [[SOTMGF]] (self-supervised graph fusion) |
| **Integration partners** | [[spatial-transcriptomics]], spatial ATAC-seq |
| **Key innovation** | Spatial dark proteins (SDPs); mRNA-protein discordance detection |
| **Clinical application** | Tumor immune microenvironment profiling |
| **Papers** | 2 indexed |
| **Incoming links** | 1 wiki entity |

---

**Spatial proteomics** is an in situ profiling technology that enables comprehensive protein characterization within tissue samples while preserving spatial organization and molecular context.¹ Unlike conventional proteomics, which relies on tissue homogenization and sacrifices spatial information, spatial proteomics uses multiplex immunohistochemistry platforms to simultaneously detect dozens of protein markers in their native tissue microenvironments. The approach reveals spatial patterns of protein distribution that correlate directly with therapeutic response and resistance mechanisms, particularly in tumor immune microenvironments where the organization of immune markers predicts [[immune-checkpoint-inhibitor|immunotherapy efficacy]] with greater accuracy than single biomarkers alone.

---

## Technology and integration framework

Spatial proteomics achieves its analytical power through computational integration with complementary spatial multi-omics modalities, including [[spatial-transcriptomics]] and spatial ATAC-seq data. The **SOTMGF** (self-supervised multi-view graph fusion) framework exemplifies this integrative approach, jointly analyzing spatial transcriptomics and proteomics data from the same tissue section.² SOTMGF operates through five integrated modules: pre-clustering, sparse feature processing, multi-view feature extraction and fusion across molecular expression, spatial location, disease microenvironment context, and molecular associations, followed by multi-modality integration. The framework optimizes its self-training process and graph embedding iteratively within a unified computational architecture, enabling each component to benefit from mutual refinement across modalities.

The integration of spatial proteomics with spatial transcriptomics through such frameworks reveals critical mRNA-protein discordance — the phenomenon where transcript abundance and protein localization diverge spatially, indicating post-transcriptional regulation, protein trafficking, and localized translation.² Beyond traditional markers, SOTMGF computationally reconstructs spatial pseudo-expression patterns to identify **spatial dark proteins** (SDPs), which are proteins exhibiting meaningful spatial heterogeneity that conventional analysis methods typically fail to detect.² These discoveries advance understanding of molecular regulatory mechanisms and identify novel therapeutic targets that spatial proteomics alone or transcriptomics alone would have missed.

---

## Cancer immunotherapy discovery

In translational oncology, spatial proteomics using multiplex IHC has emerged as a critical platform for decoding tumor immune microenvironments and identifying predictive biomarkers of immunotherapy response. Recent profiling of the [[nsclc|non-small cell lung cancer]] tumor immune microenvironment identified spatial [[cd73|CD73]] upregulation in [[egfr|EGFR]]-mutant tumors as a superior predictor of [[immune-checkpoint-inhibitor|immune checkpoint inhibitor]] efficacy compared to [[pd-l1|PD-L1]] expression alone.¹ This discovery established a three-variable spatial composite incorporating CD73 localization that substantially outperformed conventional single-biomarker approaches in predicting immunotherapy response and resistance.

The power of spatial proteomics in this context derives from its ability to capture the geometric organization of immune populations — the spatial proximity of exhausted CD8+ T cells to tumor cells, the clustering of immunosuppressive myeloid populations, and the localization of checkpoint ligands like PD-L1 and CD73.¹ This spatial context fundamentally reshapes the interpretation of immunotherapy resistance and response, moving beyond bulk expression measurements to mechanistic understanding of how tissue organization drives therapeutic outcome. Spatial proteomics thus establishes itself as a platform for generating therapeutic hypotheses that are both actionable and mechanistically grounded in the three-dimensional organization of the tumor immune microenvironment.

---

## References

1. PMID:42138084 — Understanding immune checkpoint inhibitor efficacy through spatial decoding of the lung cancer tumor immune microenvironment
2. PMID:42109219 — Combining spatial multi-omics data to decipher spatial domains and elucidate cell heterogeneity based on self-supervised graph learning