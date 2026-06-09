---
title: "Spatial Transcriptomics"
---
# Spatial Transcriptomics

`technology · molecular profiling · spatial gene expression · in situ sequencing · cancer discovery · multi-omics integration`


Last modified 2026-06-05 · 4 papers · 1 incoming link

| | |
|---|---|
| **Type** | Molecular profiling technology |
| **Mechanism** | In situ sequencing preserving tissue spatial organization |
| **Key application** | Spatial gene expression mapping and biomarker discovery |
| **Integration partners** | [[single-cell-rna-seq\|single-cell RNA-seq]], [[spatial-proteomics\|spatial proteomics]], [[lipidomics]] |
| **Cancer applications** | [[hepatocellular-carcinoma\|HCC]], [[b-cell-lymphoma\|B-cell NHL]], [[lung-adenocarcinoma\|LUAD]] |
| **Key discoveries** | KCMF1 in HCC; arachidonic acid metabolism in LUAD |
| **Papers** | 4 indexed |
| **Related** | [[spatial-proteomics]] |

---

**Spatial transcriptomics** is a molecular profiling technology that captures genome-wide gene expression patterns while preserving the spatial organization of tissue, enabling in situ characterization of molecular landscapes within their native anatomical context.¹ By simultaneously measuring transcript abundance and physical tissue coordinates, spatial transcriptomics reveals how disease drivers, immune regulators, and metabolic effectors are spatially distributed relative to tissue architecture and the [[tumor-microenvironment|tumor microenvironment]].² The technology has emerged as a critical tool for precision oncology, uniquely capable of mapping functionally distinct cellular populations, discovering therapeutic targets, and elucidating mechanisms of treatment resistance—all while maintaining the spatial relationships essential for understanding cell-cell interactions and microenvironmental effects on disease progression.

---

## Mechanism

Spatial transcriptomics preserves in situ gene expression information by performing mRNA capture and sequencing within intact tissue sections, with transcript signals mapped back to spatial coordinates via high-resolution imaging or position-encoded capture arrays. This spatial anchoring fundamentally distinguishes spatial transcriptomics from bulk or dissociated [[single-cell-rna-seq|single-cell RNA-seq]], permitting direct correlation between transcript abundance and native tissue microenvironments—including immune infiltration patterns, stromal organization, and vascular architecture. The technology reaches peak analytical power when integrated with complementary omics modalities within unified computational frameworks; joint analysis of [[spatial-proteomics|spatial transcriptomics and proteomics]] from the same tissue section reveals mRNA-protein discordance, identifies post-translational regulatory mechanisms, and highlights cellular decisions that cannot be inferred from transcriptomics alone.¹

---

## Multi-Omics Integration and Spatial Domain Discovery

Unified computational integration of spatial transcriptomics with [[single-cell-rna-seq|single-cell RNA sequencing]], [[spatial-proteomics|spatial proteomics]], and [[lipidomics]] within self-supervised frameworks enables comprehensive dissection of spatial heterogeneity. SOTMGF, a self-supervised multi-view graph fusion approach, exemplifies this paradigm by simultaneously processing molecular expression, spatial coordinates, microenvironment features, and inter-molecular associations to iteratively refine spatial domain detection and characterize cell heterogeneity.¹ These integrated frameworks also computationally infer spatial ATAC-seq data and reconstruct "spatial dark genes"—transcripts with extremely low or undetectable expression in bulk measurements but present in spatially resolved analyses—and corresponding spatial dark proteins, revealing functionally important but previously hidden regulatory elements within tissue architecture.¹

---

## Cancer Applications

### Hepatocellular Carcinoma: KCMF1 as an Immune-Metabolic Driver

Spatial transcriptomics has illuminated KCMF1 as a critical immune-metabolic driver of [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]] progression. KCMF1 is significantly overexpressed in HCC tissues and independently associated with poor overall and disease-specific survival.² Single-cell and spatial transcriptomic analyses reveal that KCMF1-positive malignant cells function as intercellular communication hubs, orchestrating recruitment and polarization of pro-tumoral immune populations including M0 macrophages—naive precursor cells that differentiate into immunosuppressive tumor-associated macrophages.² Functional pathway enrichment implicates KCMF1 in [[vegf|VEGF]] and [[tgf-beta|TGF-β]] signaling, pathways that synergistically promote angiogenesis and immune suppression within the tumor microenvironment.²

### B-Cell Lymphoma and CAR-T Therapy Response

In relapsed or refractory [[b-cell-lymphoma|B-cell non-Hodgkin's lymphoma (B-NHL)]], spatially resolved single-cell transcriptomics has been integrated with clinical outcomes to dissect both tumor-intrinsic and microenvironmental factors governing response to bispecific CD19/20 CAR-T cell therapies.³ Spatial analysis reveals how antigen-escape mechanisms—driven by selective loss of CD19 or CD20—are distributed within tumor architecture, and identifies microenvironmental barriers including fibroblast-rich regions, immune-cold domains, and metabolic constraints that limit CAR-T persistence and cytotoxic function. This spatial perspective demonstrates how therapeutic escape is architecturally encoded, guiding strategies to overcome microenvironmental resistance through spatially informed combination therapies.³

### Lung Adenocarcinoma and Arachidonic Acid Metabolism

Spatial transcriptomics combined with spatial [[lipidomics]] has revealed arachidonic acid (AA) metabolism as a central, spatially heterogeneous driver of the [[lung-adenocarcinoma|lung adenocarcinoma (LUAD)]] tumor microenvironment.⁴ AA, liberated from membrane phospholipids by phospholipase A2 (PLA2), is metabolized into bioactive eicosanoids that regulate vascular tone, immune cell activation, and inflammatory signaling. Single-cell and spatial transcriptomic analyses identify cell type-specific, spatially segregated expression of AA-metabolizing enzymes and eicosanoid receptors, thereby mapping lipid metabolism as a spatially heterogeneous therapeutic axis amenable to pharmacological or immunological intervention.⁴

---

## References

1. PMID:42109219 — Combining spatial multi-omics data to decipher spatial domains and elucidate cell heterogeneity based on self-supervised graph learning
2. PMID:42118414 — Multi-omics and spatial transcriptomics identify KCMF1 as an immune-metabolic driver of hepatocellular carcinoma progression
3. PMID:42144261 — Clinical outcomes and spatial transcriptomic profiles of CD19/20 CAR-T therapy in relapsed or refractory B-cell non-Hodgkin's lymphoma
4. PMID:42151495 — Single-cell and spatial transcriptomics reveal an arachidonic acid-related cellular atlas in lung adenocarcinoma