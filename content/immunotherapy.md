---
title: "Immunotherapy"
---
# Immunotherapy
`technology · cancer treatment · immune checkpoint inhibition · personalized medicine · tumor microenvironment · multi-omics biomarkers`

Last modified 2026-06-04 · 9 papers · 1 outgoing link · 5 incoming links

| | |
|---|---|
| **Type** | Cancer treatment technology |
| **Mechanism** | Immune system activation via checkpoint blockade |
| **Key targets** | PD-1, PD-L1, CTLA-4 |
| **Cancer indications** | NSCLC, melanoma, CRC, gastric, ccRCC |
| **Predictive biomarkers** | Spatial immune features, TCR-neoantigen binding, CD73, IRF4 |
| **Papers** | 9 indexed |
| **Incoming links** | 5 wiki entities |

---

**Immunotherapy** is a cancer treatment modality that harnesses the immune system to recognize and eliminate malignant cells, primarily through immune checkpoint inhibitor (ICI) blockade of regulatory axes including PD-1/PD-L1 and CTLA-4.¹ This approach has demonstrated substantial clinical efficacy across multiple cancer types including non-small cell lung cancer (NSCLC), melanoma, colorectal cancer (CRC), gastric cancer, and clear cell renal cell carcinoma (ccRCC), transforming the treatment landscape for patients with advanced disease.² The therapeutic success of immunotherapy depends critically on the composition and spatial organization of the tumor immune microenvironment, with response prediction requiring comprehensive biomarker assessment that extends beyond conventional metrics.³

---

## Predictive biomarkers and spatial profiling

Conventional PD-L1 expression has proven insufficient as a standalone predictive biomarker for immunotherapy efficacy. In NSCLC, multiplex immunohistochemistry-based spatial profiling reveals that a three-variable composite feature — incorporating spatial immune cell organization and CD73 upregulation particularly in EGFR-mutant disease — substantially outperforms PD-L1 expression in predicting ICI response.⁴ These spatial immune features capture the architectural relationships between tumor cells, cytotoxic lymphocytes, and suppressive cell populations that determine treatment sensitivity.

Machine learning models trained on T cell receptor (TCR) sequences have enabled prediction of TCR-neoantigen binding specificity, a key determinant of immune recognition. The lightweight tcrLM masked language model, pretrained on large-scale TCR CDR3 sequence datasets, achieves robust generalization across unseen antigen sets and demonstrates clinical relevance in melanoma cohorts, where predicted TCR-neoantigen binding scores correlate with immunotherapy response and clinical outcomes.² Such computational approaches transform the vast diversity of the TCR repertoire from a prediction challenge into a quantifiable biomarker.

---

## Multi-omics integration for precision oncology

Multi-omics profiling has emerged as essential for decoding immunotherapy response mechanisms and identifying treatment-specific vulnerabilities. In gastric cancer, a 15-layer atlas integrating genomics, epigenomics, transcriptomics, proteomics, post-translational modifications, metabolomics, and microbiome profiles defines tumor ecotypes that refine histological classifications by capturing distinct microenvironment architectures linked to immunotherapy response potential.⁷ These ecotype-specific molecular programs reveal targetable proteins and resistance pathways invisible to single-layer analyses.

Network-based deep learning frameworks further enhance predictive power by integrating subclonal mutation profiles with protein-protein interaction networks. SubNetDL, applied across 10 [[tcga|TCGA]] cancer-drug combinations and independent immunotherapy datasets, achieves consistent performance (median AUROC 0.74-0.77) by capturing context-specific patterns through network propagation, prioritizing non-central genes with treatment-specific relevance that traditional centrality metrics overlook.³ This approach underscores the value of network context in translating somatic mutations into predictive biomarkers applicable across diverse therapeutic modalities.

---

## Resistance mechanisms

Resistance to immunotherapy arises through multiple interconnected mechanisms rooted in tumor cell intrinsic programs and microenvironment remodeling. Cellular senescence represents a key resistance pathway: in ccRCC, elevated senescence levels correlate with suppressed immune infiltration and poor prognosis, with [[flt1|FLT1]]-mediated epithelial-endothelial crosstalk driving malignancy through VEGFA and AKT1 signaling networks.⁶ Multi-omics interrogation identified FLT1 as the central node in this resistance network, where endothelial cells expressing FLT1 and AKT1 promote tumor progression while proximal tubular epithelial cells contribute through VEGFA expression.

Epithelial-mesenchymal transition (EMT) constitutes another critical resistance mechanism. In CRC, integrated multi-omics analysis identified IRF4 as a causal transcription factor in monocytes that suppresses progression by remodeling the immune microenvironment and inhibiting EMT.⁵ Loss of such tumor-suppressive immune programs enables immune evasion and reduces immunotherapy efficacy. The convergence of senescence, EMT, and immune suppression highlights the multifactorial nature of resistance and the necessity of combination strategies.

---

## Combination and triple-modal therapies

Integration of immunotherapy with complementary modalities addresses resistance and enhances anticancer efficacy. Heterostructured [[bi2se3-bise|Bi₂Se₃@BiSe]] nanosheets exemplify this approach by enabling simultaneous photothermal therapy (PTT), photodynamic therapy (PDT), and immunotherapy through a single nanoplatform.¹ The interfacial contact within these heterostructures facilitates charge carrier separation for concurrent photothermal conversion and reactive oxygen species generation under near-infrared irradiation, while the nanosheets polarize M0 macrophages toward the tumor-suppressive M1 phenotype and promote immunogenic cell death. This triple-modal strategy overcomes limitations of cocktail-based approaches through structurally simple, inherently multifunctional nanomaterials that integrate photophysical and immunological mechanisms.

---

## Adjuvant treatment in early-stage melanoma

Beyond advanced disease, immunotherapy has established efficacy in the adjuvant setting for early-stage melanoma. Real-world evidence from US community oncology practices demonstrates concordance with KEYNOTE-716 trial estimates for recurrence-free survival (rwRFS) and distant metastasis-free survival (rwDMFS) in stage IIB-IIC cutaneous melanoma patients following resection with clear margins.⁸ Adjusted hazard ratios comparing real-world cohorts to trial control arms validate the effectiveness of adjuvant immune checkpoint blockade in preventing recurrence and distant metastasis, supporting broader adoption of this strategy in high-risk early-stage disease where surgical resection alone carries substantial recurrence risk.

---

## Companion diagnostics for personalized treatment selection

Accurate prediction of immunotherapy response enables personalized treatment selection and avoids exposing non-responding patients to ineffective therapy and immune-related toxicities. [[spcdx|Semiconducting polymer nanoprobes]] employing a "zero-on" design principle address the critical limitation of conventional "off-on" probes, whose residual background signals compromise diagnostic accuracy.⁹ The SPCDx platform transitions from a nonconjugated, near-infrared-II-signal-silent state to a π-conjugated signal-active state exclusively upon exposure to immunoreactive biomarkers, achieving true zero background (p > 0.05 versus water). This design eliminates probe background interference after intratumoral accumulation, ensuring detected signals exclusively reflect genuine biomarker activation. In blinded studies, SPCDx identified low-efficacy immune response with 100% accuracy versus 56.3% for conventional probes, and detected early immune responses more than 42 hours before flow cytometry biopsies and 6 days before observable tumor shrinkage, establishing a new standard for ultra-accurate companion diagnostics.

---

## References
1. PMID:41653819 — Bi₂Se₃@BiSe heterostructures for triple-modal anticancer therapy
2. PMID:41923632 — TcrLM model predicts T cell receptor and epitope binding specificity
3. PMID:41999762 — SubNetDL integrating subclonal architecture for therapy response prediction
4. PMID:42138084 — Spatial decoding of the lung cancer tumor immune microenvironment
5. PMID:42140033 — IRF4 as causal transcription factor suppressing colorectal cancer progression
6. PMID:41999263 — FLT1-mediated crosstalk in cellular senescence driving ccRCC malignancy
7. PMID:42013851 — 15-layer multi-omics analysis of gastric cancer ecotypes
8. PMID:42047230 — Real-world survival in early-stage melanoma concordant with KEYNOTE-716
9. PMID:42090271 — Zero-on NIR-II photoacoustic probes for companion diagnostics