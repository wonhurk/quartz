---
title: "The Cancer Genome Atlas (TCGA)"
---
# The Cancer Genome Atlas (TCGA)

`institution · multi-omics database · cancer genomics · biomarker discovery · comprehensive catalog · 24+ cancer types`

Last modified 2026-05-29 · 2 papers · 2 outgoing links · 2 incoming links

| | |
|---|---|
| **Type** | Multi-omics database & institution |
| **Data modalities** | Somatic mutations, gene expression, methylation, proteins, [[tumor-microbiota]] |
| **Cancer types** | 24+ |
| **Key application** | Treatment response prediction |
| **Biomarker discovery** | Machine learning frameworks + network integration |
| **Quality tool** | [[momac2\|MOMAC2 portal]] |
| **Papers** | 2 indexed |
| **Incoming links** | [[momac2]], [[subnetdl]] |

---

**The Cancer Genome Atlas (TCGA)** is a landmark multi-omics database integrating somatic mutations, gene expression, methylation, protein abundance, and [[tumor-microbiota]] data across 24 or more cancer types, serving as a foundational resource for cancer genomics research, biomarker discovery, and computational model development.¹ Originally constructed to enable comprehensive molecular characterization of human cancers, TCGA has evolved into a critical infrastructure for machine learning frameworks that predict treatment response and stratify patients, though recent systematic evaluation has revealed context-dependent reliability across its constituent data modalities that warrants careful interpretation.

---

## Multi-omics integration

TCGA's principal strength lies in its integration of complementary molecular layers across the same patient cohorts. Genomic somatic mutation data, transcriptomic gene expression profiles, epigenomic DNA methylation patterns, and proteomics measurements coexist within individual patient samples, enabling multi-modal biomarker discovery and cross-modality validation. This comprehensiveness has proven particularly valuable for interrogating treatment response mechanisms, as mutations drive protein-protein interaction rewiring and coordinate transcriptional state changes that collectively govern therapeutic vulnerability.¹ The addition of [[tumor-microbiota]] profiling further extended TCGA's scope, offering the capacity to study host-microbe associations as determinants of immunotherapy efficacy and intrinsic cancer biology.

---

## Treatment response prediction

[[SubNetDL]], a network-based deep learning framework, demonstrates TCGA's utility for predicting patient-level therapeutic outcomes across diverse cancer types. By integrating subclonal mutation profiles with protein-protein interaction networks via network propagation, SubNetDL achieved median area under the receiver operating characteristic curve (AUROC) of 0.74 across ten TCGA cancer-drug combinations.¹ Critically, mutations alone — without condition-specific retraining — enabled generalization to independent [[immunotherapy]] cohorts, achieving median AUROC of 0.77, indicating that TCGA's genomic architecture captures principles of response that transfer across treatment modalities.¹ SubNetDL further identified candidate biomarker genes with treatment-specific relevance, prioritizing genes positioned peripherally in the protein-interaction network rather than those serving as network hubs, thereby capturing context-specific patterns that traditional network centrality metrics miss.¹

---

## Data quality and microbiota reliability

A systematic re-evaluation of TCGA's [[tumor-microbiota]] profiles has revealed substantial context-dependent variation in data reliability across cancer types and downstream association modalities. While the two major TCGA microbial profile versions demonstrated strong agreement in microbial composition, their accuracy in detecting known oncomicrobes varied dramatically: [[hpv|human papillomavirus (HPV)]] detection proved excellent, whereas [[helicobacter-pylori|Helicobacter pylori]] detection was poor.² The concordance of downstream host-microbe associations was moderate for gene expression but nearly absent for methylation and protein data, suggesting that TCGA's non-genomic layers exhibit lower reliability in microbe-host association contexts.² Permutation-based analysis revealed that while most individual associations were statistically significant, those involving cell type composition and patient survival were statistically spurious and lacked biological validity.²

---

## Quality assessment through MOMAC2

To address these reliability concerns, [[momac2|Multi-Omics and Microbiome Associations in Cancer 2 (MOMAC2)]] was developed as an interactive web portal that stratifies all multi-omics and [[tumor-microbiota]] associations by confidence level.² MOMAC2 enables researchers to distinguish high-confidence associations suitable for functional investigation from spurious correlations arising from statistical noise or batch effects, thereby guiding more reliable biomarker discovery and hypothesis generation. By using MOMAC2's high-confidence associations, researchers confirmed known [[hpv]]-driven methylation-gene expression axes and successfully directed experimental validation studies, demonstrating the portal's utility in translating TCGA associations into actionable biological insights.²

---

## Cross-cancer applicability

A defining feature of TCGA is the applicability of biomarker models across diverse cancer types without cancer-specific retraining, a property that enables efficient development of broadly applicable therapeutic response prediction systems. This cross-cancer utility hinges on TCGA's comprehensive coverage of multiple tumor lineages, allowing machine learning frameworks to learn generalizable principles of response that transcend tissue-specific biology. The success of [[subnetdl]] across ten cancer-drug combinations exemplifies this capability, suggesting that somatic mutation architecture and network context contain sufficient information to predict outcomes across phenotypically distinct cancers treated with mechanistically diverse agents.¹

---

## References

1. PMID:41999762 — A network-based deep learning model integrating subclonal architecture for therapy response prediction in cancer
2. PMID:42017663 — Systematic evaluation of TCGA tumor microbiota reveals context-dependent reliability