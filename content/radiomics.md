---
title: "Radiomics"
---
# Radiomics

`technology · computational imaging · quantitative features · tumor phenotyping · precision oncology · non-invasive assessment`

Last modified 2026-06-06 · 2 papers · 1 incoming link

| | |
|---|---|
| **Type** | Computational imaging technology |
| **Function** | Extract quantitative features from medical imaging |
| **Application** | Tumor phenotyping and outcome prediction |
| **Key modalities** | MRI, CT |
| **Cancer types** | HNSCC, glioma |
| **Clinical cohorts** | HNSCC: 993 patients; Glioma: 891 patients |
| **Papers** | 2 indexed |
| **Incoming links** | 1 wiki entity |

---

**Radiomics** is a computational imaging technology that extracts quantitative features from medical imaging to characterize tumor phenotypes and predict clinical outcomes.¹ By bridging imaging phenotypes with molecular biology and clinical results, radiomics enables non-invasive assessment of critical tumor biological processes including [[intratumoral-heterogeneity|intratumoral heterogeneity]] and extracellular matrix remodeling. The approach integrates unsupervised frameworks analyzing local and global imaging patterns to generate imaging-derived biomarkers with biological interpretability, establishing radiomics as a cornerstone of precision oncology.

---

## Mechanism

Radiomics operates through systematic extraction and analysis of quantitative imaging features from tumor regions and volumes of interest. The computational framework employs unsupervised analysis integrating local variation and global distribution patterns across medical imaging modalities, most notably MRI and CT scans. These extracted features are combined into radiomics signatures—multifeature models that stratify patients into risk groups or predict clinical outcomes. The robustness of radiomics signatures is established through rigorous validation across multiple independent datasets, ensuring generalizability across patient populations and clinical centers. When integrated with genomic analysis—termed radiogenomics—radiomics signatures identify differentially expressed genes and pathways associated with imaging-derived scores, revealing the molecular basis underlying observed imaging phenotypes.

---

## HNSCC and intratumoral heterogeneity

In head and neck squamous cell carcinoma, radiomics-based quantification of [[intratumoral-heterogeneity|intratumoral heterogeneity (ITH)]] provides a robust and non-invasive imaging biomarker for tumor characterization. An unsupervised radiomics framework analyzed two-dimensional and three-dimensional imaging patterns in 993 HNSCC patients from three medical centers and public databases, generating ITH scores that stratified patients into distinct phenotypic groups.¹ The ITH score demonstrated strong prognostic value across independent patient sets, enabling effective risk stratification for patient management decisions.¹ Importantly, the radiomics-derived ITH score predicted response to immunotherapy, with patients characterized by different ITH patterns showing differential therapeutic responses.¹ The clinical generalizability of this approach across nearly 1,000 patients and three independent medical centers underscores radiomics' capacity for robust clinical translation.

Biologically, low-intratumoral heterogeneity tumors exhibited a higher proportion of inflammatory and connective cells and were enriched in immune-related pathways, whereas high-heterogeneity tumors showed increased heterogeneous tumor cell populations and upregulation of metabolic pathways.¹ This biological validation confirms that radiomics-derived imaging features directly correlate with underlying cellular composition and functional biology, bridging phenotypic imaging assessment with molecular mechanisms.

---

## Glioma, extracellular matrix remodeling, and radiogenomics

Radiogenomics—the integration of radiomics with genomic data—has revealed critical links between radiomics signatures and genes governing extracellular matrix remodeling in glioma. Extracellular matrix (ECM) remodeling is essential for glioma invasion, yet previously lacked non-invasive assessment methods.² An 11-feature MRI-based radiomics signature was developed in 891 glioma patients (area under the receiver operator characteristic curve [AUC] = 0.886) and validated across five public datasets (AUC = 0.828), demonstrating excellent discrimination for survival stratification.² Radiogenomic analysis of 572 patients revealed that radiomics scores strongly associated with differentially expressed genes enriched in ECM remodeling pathways, identifying seven functionally relevant hub genes: [[mmp2|MMP2]], [[mmp9|MMP9]], CXCL8, [[timp1|TIMP1]], IL-6, COL1A2, and [[ccl2|CCL2]].² These pathways represent critical drivers of tumor invasion, making them high-priority biological targets for glioma management.

The functional relevance of these radiogenomic associations was confirmed through orthotopic mouse models, where silencing [[mmp2|MMP2]] significantly reduced radiomics-derived scores and attenuated tumor infiltration.² This experimental validation establishes that radiomics-identified imaging features are not merely correlative but mechanistically linked to molecular drivers of tumor behavior. The approach thus enables non-invasive, imaging-based assessment of extracellular matrix remodeling biology—a capability that previously required invasive molecular profiling—offering clinically actionable insights for glioma management.

---

## Biomarker generalizability and clinical translation

The clinical validation of radiomics across large, multi-institutional cohorts demonstrates its generalizability as a biomarker platform. The HNSCC study encompassed nearly 1,000 patients across three independent medical centers and public databases, while the glioma radiomics signature was trained on 891 patients and validated across five distinct public datasets.¹² This rigorous, multi-dataset approach establishes radiomics as a clinically translatable technology capable of robust performance across diverse patient populations and imaging acquisition parameters. Furthermore, the biological validation of radiomics—through histological analysis in HNSCC and functional mouse studies in glioma—demonstrates that radiomics features are biologically grounded rather than purely statistical artifacts, strengthening confidence in their clinical utility for precision oncology applications.

---

## References
1. PMID:42153999 — Noninvasive Characterization of Tumor Heterogeneity in HNSCC: From Clinical Utility to Biological Correlates
2. PMID:42127900 — Predicting glioma survival and extracellular matrix remodeling through MRI radiogenomics