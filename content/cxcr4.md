---
title: "C-X-C motif chemokine receptor 4 (CXCR4)"
---
# C-X-C motif chemokine receptor 4 (CXCR4)
`protein · chemokine receptor · therapeutic target · drug discovery · cancer metastasis · lymphatic dissemination`

Last modified 2026-06-06 · 2 papers · 2 incoming links

| | |
|---|---|
| **Type** | Chemokine receptor (G protein-coupled receptor) |
| **Function** | Ligand-binding chemotactic signaling |
| **Applications** | Small-molecule drug discovery; cancer therapeutics |
| **Drug design role** | Benchmark target for QSAR-guided optimization |
| **Cancer association** | Axillary lymph node metastasis in breast cancer |
| **Papers** | 2 indexed |
| **Incoming links** | 2 wiki entities |

---

**C-X-C motif chemokine receptor 4 (CXCR4)** is a chemokine receptor serving as a key therapeutic target in both computational drug discovery and cancer biology. As a G protein-coupled receptor, CXCR4 mediates ligand-induced cell migration and chemotactic signaling, functions that have been exploited in molecular optimization workflows and implicated in metastatic progression.¹ The receptor has emerged as a benchmark target for advancing generative modeling and structure-activity relationship (QSAR) methods in small-molecule drug design, while simultaneously serving as a molecular driver of lymphatic dissemination and axillary lymph node metastasis in invasive breast cancers.²

---

## Mechanism

CXCR4 functions as a chemokine receptor capable of binding soluble chemokine ligands and transmitting intracellular signals through heterotrimeric G proteins. Its role in cell migration and chemotaxis positions it as an ideal target for chemometric optimization and structure-activity profiling in molecular design workflows.

---

## Drug discovery applications

CXCR4 has been validated as a benchmark target for advancing computational methods in drug discovery, particularly in the integration of chemical reaction pathways with deep generative models. The [[trace-gfn|TRACE-GFN]] method — which combines transformer-based learning of chemical reactions with generative flow networks (GFlowNets) — has successfully identified novel compounds targeting CXCR4 with high QSAR-predicted binding affinity and substantial chemical diversity.¹ This approach outperforms conventional molecular generation techniques by explicitly accounting for synthetic feasibility while exploring the chemical space, demonstrating that compounds identified through transformer-aware reaction pathways maintain both biological activity and real-world synthetic tractability. The method has been benchmarked against classical targets including [[dopamine-receptor-d2|dopamine receptor D2]] and [[akt1|AKT1]], positioning CXCR4 as a critical validation point for next-generation QSAR-guided optimization pipelines.

---

## Cancer metastasis

Beyond molecular optimization, CXCR4 is implicated as a key molecular driver of cancer progression, particularly in axillary lymph node metastasis (ALNM) in breast cancer. Single-cell transcriptomic analysis of invasive ductal carcinoma tissues and paired axillary lymph node specimens reveals that CXCR4 is among the genes whose genetically predicted expression shows significant causal associations with breast cancer risk in Mendelian randomization studies.² Lymphatic dissemination from the primary tumor to regional lymph nodes involves distinct molecular programs in epithelial and immune compartments, with CXCR4 expression patterns linked to the migration and homing of disseminated cancer cells. The integration of single-cell RNA sequencing data with genome-wide association study findings through causal inference methods has identified CXCR4 as one of the metastasis-associated genes whose expression shifts between primary and metastatic lesions, contributing to the molecular characterization of ALNM progression in breast cancer.

---

## References
1. PMID:42033344 — A Transformer for Reaction-Aware Compound Explorations with GFlowNet in QSAR-Guided Molecular Design
2. PMID:42121358 — Exploring key biomarkers associated with axillary lymph node metastasis in breast cancer using single-cell RNA sequencing and Mendelian randomization