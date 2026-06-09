---
title: "Partial Least Squares"
---
# Partial Least Squares
`technology · statistical method · high-dimensional data · multi-omic analysis · interpretability · biomarker discovery`

Last modified 2026-06-05 · 2 papers · 3 incoming links

| | |
|---|---|
| **Type** | Multivariate statistical technique |
| **Domain** | High-dimensional and multi-block data analysis |
| **Key advantage** | Interpretability with predictive accuracy |
| **Main application** | Multi-omic biomarker discovery |
| **Variants** | sPLS-DA, DIABLO |
| **Primary use case** | Survival analysis, omics |
| **Papers** | 2 indexed |
| **Incoming links** | 3 wiki entities |

---

**Partial Least Squares (PLS)** is a multivariate statistical technique designed to analyze high-dimensional and multi-block data while maintaining interpretability—a critical advantage over conventional [[machine-learning|machine learning]] approaches.¹ By balancing predictive accuracy with model interpretability, PLS enables researchers to extract biological insights from complex genomic datasets that would otherwise remain opaque to traditional methods. The technique achieves this through dimensionality reduction that identifies latent components capturing the covariance between input variables and outcomes, making it particularly suited for [[survival-analysis|survival analysis]] and multi-omic studies where both accuracy and mechanistic understanding are essential.

---

## Mechanism

PLS operates by extracting latent variables that maximize covariance between predictors and response variables, thereby performing simultaneous dimension reduction and prediction. Unlike conventional machine learning approaches that often operate as "black boxes," PLS maintains full interpretability of the extracted components and their relationships to measured variables. The method iteratively constructs orthogonal latent variables from weighted combinations of the original features, enabling researchers to identify which specific genes, proteins, or other molecular markers drive the observed biological outcomes. This interpretability is especially valuable in biomedical research, where understanding the causal or associative mechanisms underlying predictions is as important as achieving high accuracy.

---

## Survival analysis applications

[[cox-proportional-hazards|Cox proportional hazards models]] remain widely used for [[survival-analysis|survival analysis]] but face significant limitations in high-dimensional settings characterized by multicollinearity and low events-per-variable ratios—a common challenge in genomic studies. PLS-based survival models offer an attractive methodological compromise between the interpretability constraints of traditional Cox models and the accuracy but limited explainability of black-box machine learning.¹ By implementing PLS within Cox regression frameworks, researchers can simultaneously handle hundreds or thousands of molecular features while maintaining the ability to identify which variables contribute most meaningfully to survival prediction. This approach is particularly valuable when sample sizes are limited relative to the number of variables, a frequent scenario in clinical genomics where patient cohorts are expensive to recruit and follow.

---

## Multi-omic integration and molecular signature discovery

A major strength of PLS lies in its ability to integrate and analyze multiple omics layers simultaneously. The sparse PLS-DA (sPLS-DA) variant performs supervised classification while identifying discriminative features across high-dimensional datasets, enabling researchers to determine which molecular markers distinguish between disease states or phenotypes.² The multiblock extension, designated DIABLO (Discriminant Analysis with Block Optimization), extends this capability further by integrating multiple omics data types—such as transcriptomics, miRNA expression, and proteomics—to isolate cross-layer biomarkers that exhibit coordinated changes across biological layers. This simultaneous integration of multiple data types reveals molecular signatures that would be missed by analyzing each omics layer in isolation.

In the context of radiation-exposed populations, DIABLO and sPLS-DA have proven particularly powerful for distinguishing exposure-associated molecular signatures from those directly associated with carcinogenesis itself.² Exposure to ionizing radiation leaves distinct molecular marks on exposed tissues independent of whether malignant transformation occurs; simultaneously, the carcinogenic process itself generates a separate set of molecular changes. By applying sPLS-DA to jointly analyze normal thyroid tissues and papillary thyroid carcinomas from individuals exposed to iodine-131 during childhood, researchers could identify shared multi-omic signatures associated with radiation exposure history. Subsequently, multiblock sPLS-DA (DIABLO) isolated markers specifically associated with exposure in normal tissues, and the remaining variation was searched for signatures characteristic of the carcinogenic process itself. This approach fundamentally improves the interpretation of radiation-associated cancer etiology by separating exposure markers from carcinogenesis markers.

---

## Cancer biomarker discovery

PLS-based methods have emerged as powerful tools for identifying molecular signatures associated with cancer subtypes, treatment responses, and disease etiology. In [[papillary-thyroid-carcinoma|papillary thyroid carcinoma]] arising in radiation-exposed populations, sPLS-DA has successfully distinguished tumors from high-dose versus low-dose iodine-131 exposure based on integrated transcriptomic and miRNA data.² The method's ability to simultaneously handle multi-dimensional genomic data and return interpretable feature rankings makes it ideal for the translational goal of biomarker discovery. Unlike black-box machine learning models that achieve high accuracy but provide no insight into which molecules drive classification, PLS-based approaches return an explicit ranking of discriminative features and their contribution to phenotypic distinction, directly enabling validation and mechanistic investigation of candidate biomarkers.

---

## Advantages over conventional approaches

PLS represents a methodological middle ground between classical statistical approaches and modern machine learning. While [[cox-proportional-hazards|Cox models]] offer interpretability but struggle with multicollinearity in high-dimensional settings, and conventional machine learning methods (including random forests, neural networks, and gradient boosting) handle complexity but lack transparency, PLS achieves both goals simultaneously.¹ The technique's built-in dimensionality reduction prevents overfitting without sacrificing the explainability that clinicians and basic researchers require for biomarker validation and mechanistic studies. In multi-omic research, where datasets increasingly comprise hundreds of thousands of variables across multiple measurement platforms, this balance between accuracy and interpretability has made PLS and its variants indispensable tools for translational genomics.

---

## References
1. PMID:42141472 — Coxmos: interpretable survival models for high-dimensional and multi-omic data
2. PMID:42151323 — Post-Chornobyl thyroid papillary carcinomas display distinct past 131I exposure and radiation-associated carcinogenesis molecular signatures at low and high thyroid doses