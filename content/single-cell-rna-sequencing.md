---
title: "Single-cell RNA sequencing (scRNA-seq)"
---
# Single-cell RNA sequencing (scRNA-seq)
`technology · transcriptomics · single-cell · immune profiling · tumor microenvironment · cellular heterogeneity`

Last modified 2026-06-04 · 8 papers · 0 outgoing links · 1 incoming link

| | |
|---|---|
| **Type** | Transcriptomic technology |
| **Resolution** | Single-cell |
| **Key output** | Gene expression profiles |
| **Applications** | Immune profiling, TME mapping |
| **Cancer types** | B-NHL, breast, HCC, LUAD |
| **Analysis tools** | SingleR, CellChat, WGCNA |
| **Papers** | 8 indexed |
| **Incoming links** | 1 wiki entity |

---

**Single-cell RNA sequencing (scRNA-seq)** is a high-resolution transcriptomic technology that measures gene expression from individual cells, revealing cellular heterogeneity and identifying previously unrecognized cell subpopulations within complex tissues and tumors. The technology has become essential for characterizing immune cell states — particularly T-cell activation states ranging from naive and effector to exhausted phenotypes — which are critical determinants of immunotherapy outcomes in hematologic malignancies and solid tumors.¹ When integrated with complementary approaches such as [[spatial-transcriptomics|spatial transcriptomics]], metabolomic profiling, and bioinformatic tools including SingleR annotation and CellChat ligand-receptor analysis, scRNA-seq provides comprehensive mechanistic insights into disease biology and therapeutic resistance.

---

## Technology and cellular resolution

Single-cell RNA sequencing captures genome-wide transcriptional profiles from thousands to millions of individual cells within a tissue specimen, resolving functional states that are masked in bulk tissue analysis. Unsupervised clustering algorithms such as t-distributed stochastic neighbor embedding (t-SNE) delineate cellular heterogeneity by grouping transcriptionally similar cells, while reference-based annotation tools like SingleR assign cell type identities to discovered clusters.² Differential expression analysis between disease and control specimens identifies cell-type-specific gene signatures, while weighted gene co-expression network analysis (WGCNA) reconstructs regulatory modules associated with pathological states.⁶ The technology's single-cell resolution enables discovery of rare or transitional cell populations that drive disease progression but constitute only a small fraction of the tissue.⁷

---

## Immune profiling in hematologic malignancies

The characterization of T-cell functional states by scRNA-seq has transformed understanding of immunotherapy response in [[b-cell-non-hodgkin-lymphoma|B-cell non-Hodgkin lymphoma (B-NHL)]]. In patients treated with [[glofitamab]] — a bispecific T-cell engager targeting CD20 and CD3 — longitudinal scRNA-seq of peripheral blood mononuclear cells revealed that maintenance of naive-like "fresher" T-cell states, particularly fresher cytotoxic T cells, at early treatment time points is strongly associated with complete metabolic response.¹ T cells from responders exhibited enhanced functional activity compared with nonresponders, and consecutive glofitamab treatments sustained functional activity in both patient samples and preclinical tumor models, demonstrating durable immunological engagement without progressive exhaustion.¹ These findings establish T-cell state profiling as a predictive biomarker for [[t-cell-engager|T-cell engager]] efficacy in relapsed or refractory B-NHL.

---

## Solid tumor applications

In [[breast-cancer|breast cancer]], scRNA-seq has illuminated mechanisms of endocrine therapy resistance and metastatic progression. Analysis of [[estrogen-receptor|estrogen receptor-positive (ER+)]] breast cancer cells that develop resistance to endocrine therapy revealed transcriptional reprogramming that upregulates [[p-rex1|P-Rex1]] and activates [[rac1|Rac1]] signaling, facilitating metastatic escape despite slow proliferation.³ Single-cell profiling of invasive ductal carcinoma and paired [[axillary-lymph-node-metastasis|axillary lymph node metastasis]] specimens identified ALNM-specific expansion of monocytes, pre-B cells, and CD34+ hematopoietic stem cells, while epithelial compartments exhibited 2,421 differentially expressed genes between primary and metastatic sites.⁵

In [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]], integration of bulk transcriptomics with single-cell and spatial transcriptomic analyses identified [[kcmf1|KCMF1]] — a ubiquitination-associated gene — as an immune-metabolic driver of progression. Single-cell analysis revealed KCMF1-positive malignant cells as hubs of intercellular communication within the tumor microenvironment, while functional enrichment highlighted involvement in [[vegf|VEGF]] and [[tgf-beta|TGF-β]] signaling pathways that promote angiogenesis and immune suppression.⁴ In [[lung-adenocarcinoma|lung adenocarcinoma (LUAD)]], scRNA-seq combined with spatial transcriptomics mapped an [[arachidonic-acid|arachidonic acid]]-related cellular atlas, revealing lipid metabolism reprogramming as a key determinant of the tumor microenvironment.⁸

---

## Non-cancer diseases

Beyond oncology, scRNA-seq has elucidated cell-type-specific pathogenic mechanisms in organ-specific diseases. In [[acute-kidney-injury|acute kidney injury (AKI)]], differential gene expression combined with WGCNA identified hub genes — ACO2, FBP1, and PFKL — whose expression patterns and cellular specificity were characterized using single-cell data from AKI renal tissues, implicating inflammation, oxidative stress, and energy metabolism as convergent pathways.⁶ In [[diabetic-retinopathy|diabetic retinopathy]], scRNA-seq of 37,982 retinal cells from diabetic and nondiabetic mice identified a previously unrecognized pericyte subpopulation defined by high [[pttg1|PTTG1]] expression, enriched in diabetic retina. Integrated transcriptomic and metabolomic profiling revealed that PTTG1 silencing reprogrammed pericyte metabolism, modulating glycolytic flux and attenuating oxidative stress to restore vascular integrity.⁷

---

## Integration with complementary technologies

The power of scRNA-seq is amplified when integrated with spatial, genetic, and functional platforms. [[spatial-transcriptomics|Spatial transcriptomics sequencing]] preserves tissue architecture while profiling transcriptomes, enabling co-localization of scRNA-seq-defined cell states within anatomical niches.⁴⁸ Metabolomic profiling complements transcriptional data by measuring pathway flux and identifying functional outputs of gene expression changes.⁷ [[crispr-based-genome-editing|CRISPR-based genome editing]] leverages scRNA-seq as a high-dimensional readout for pooled knockout screens, necessitating compact library designs that balance on-target efficacy with off-target avoidance to enable genome-scale functional interrogation.² Network analysis tools such as CellChat reconstruct ligand-receptor communication networks across annotated cell types, revealing signaling dependencies and intercellular crosstalk within complex tissues.⁵

---

## References
1. PMID:41569641 — T-cell states predict glofitamab response in B-cell lymphoma
2. PMID:41887225 — CRISPR library design for scRNA-seq screens
3. PMID:42115169 — P-Rex1/Rac1 signaling drives endocrine therapy resistance and metastasis
4. PMID:42118414 — KCMF1 as immune-metabolic driver in hepatocellular carcinoma
5. PMID:42121358 — Axillary lymph node metastasis biomarkers in breast cancer
6. PMID:42133161 — Hub gene identification in acute kidney injury
7. PMID:42139353 — PTTG1 regulates pericyte function in diabetic retinopathy
8. PMID:42151495 — Arachidonic acid cellular atlas in lung adenocarcinoma