---
title: "Random Forests"
---
# Random Forests

`technology · machine learning · ensemble algorithm · biomedical classification · decision trees · predictive modeling`

Last modified 2026-06-05 · 3 papers · 1 outgoing link · 1 incoming link

| | |
|---|---|
| **Type** | Ensemble machine learning algorithm |
| **Mechanism** | Multiple decision trees with bootstrap aggregation |
| **Applications** | Bacterial classification, disease risk prediction, surgical outcome prediction |
| **Bacterial classification** | 82–100% accuracy (8 genera, 5 Streptococcus species) |
| **Colorectal cancer model** | Plasmid-based predictor, 12 key marker features |
| **AKI prediction** | AUC 0.84, accuracy 0.82 (surgical CKD patients) |
| **Interpretability** | Compatible with [[shap]] analysis |
| **Parameter source** | [[thz-snom]] (bacterial phenotyping) |
| **Papers** | 3 indexed |

---

**Random Forests** is an ensemble machine learning algorithm that leverages multiple decision trees to achieve robust classification and predictive accuracy across diverse biomedical applications. By aggregating predictions from numerous tree-based learners trained on randomly subsampled features and data, Random Forests reduces overfitting and enhances generalization, particularly in complex multiparameter datasets. The algorithm has demonstrated consistent utility in bacterial phenotyping, microbiome-based disease risk assessment, and clinical outcome prediction in surgical populations.¹²³

---

## Mechanism

Random Forests operate by constructing multiple independent decision trees, each trained on a bootstrap sample of the input data with random feature subsets. Each tree makes an individual prediction, and the final output is determined by majority voting (classification) or averaging (regression). This ensemble strategy provides natural feature importance estimation and inherent regularization without explicit hyperparameter tuning. The algorithm's flexibility enables integration with diverse data types—from morphological and spectroscopic parameters extracted by [[thz-snom|terahertz near-field nanoscopy]] to clinical laboratory measurements and metagenomic abundance profiles.

---

## Bacterial Species Classification

Random Forests achieves exceptional accuracy in single-bacterium discrimination of oral pathogens when combined with multiparameter feature extraction from [[thz-snom|terahertz near-field imaging]]. By integrating attenuation parameters (K and A1) and morphological measurements (height and area) derived from bacterial near-field images, Random Forests successfully differentiated eight bacterial genera and five Streptococcus species, with 82% of genus-level pairs and 60% of Streptococcus species pairs achieving 100% classification accuracy.¹ The algorithm consistently outperformed baseline approaches including [[svm|Support Vector Machines]] and Gaussian Process Classification on the same parameter space. The discriminative power of combined parameters—notably K and A1, which showed inverse relationships with bacterial morphology—enabled reliable genus-level and species-level classification suitable for precision microbiological diagnostics at single-cell resolution.

---

## Colorectal Cancer Risk via Gut Plasmids

In microbiome-based colorectal cancer risk assessment, Random Forests modeling of gut plasmid profiles identified key bacterial hosts and plasmid markers as discriminative features for disease prediction. A meta-analysis of 863 participants—312 with established colorectal cancer, 387 at high risk, and 164 at low risk—demonstrated that plasmid-based Random Forest models effectively stratified individuals by disease status.² Six key bacterial host orders (Enterobacterales, Bucrkholderiales, Hyphomicrobiales, Lactobacillales, Bacteroidales, Campylobacterales) and twelve plasmid markers emerged as predictive features. Concurrent structural equation modeling revealed that trace elements (notably nickel), metabolites (such as 5-Hydroxytryptophol), and host bacterial communities exerted predominantly negative or positive influences on plasmid dynamics, establishing multiomics interaction networks linking plasmid composition, bacterial functionality, and disease phenotype.

---

## Postoperative AKI Risk Prediction

Random Forests ranks as the second-best machine learning approach for predicting acute kidney injury in surgical patients with pre-existing chronic kidney disease, trailing only [[xgboost|XGBoost]]. Using data from 3,851 patients in the MIMIC-IV database, Random Forests achieved an area under the receiver operating characteristic curve (AUC) of 0.84 and accuracy of 0.82 for postoperative acute kidney injury prediction under KDIGO criteria, a complication occurring in 24.2% of this surgical population.³ When combined with [[shap|SHAP (SHapley Additive exPlanations)]] analysis for model interpretability, the most influential predictors were identified as SOFA score, estimated glomerular filtration rate (eGFR), systolic blood pressure, albumin, and phosphorus. The integration of machine learning prediction with explainable artificial intelligence enables transparent risk stratification, supporting personalized perioperative care and real-time clinical decision support systems for high-risk populations.

---

## Comparative Performance and Limitations

While Random Forests delivers strong predictive accuracy across clinical and microbiological applications, it is frequently outperformed by gradient boosting algorithms, particularly [[xgboost|XGBoost]] and LightGBM, in complex clinical datasets with high-dimensional features. In the postoperative acute kidney injury study, XGBoost achieved superior performance (AUC 0.844, accuracy 0.791) compared to Random Forests, suggesting that sequential tree-building strategies with adaptive loss weighting may better capture non-linear interactions in heterogeneous patient cohorts.³ However, Random Forests maintains advantages in computational efficiency, transparency of feature importance, and ease of implementation without extensive hyperparameter optimization. Its compatibility with explainability frameworks such as [[shap|SHAP]] further positions it as an accessible tool for translating biomedical predictions into actionable clinical insights where interpretability is paramount.

---

## References

1. PMID:41942095 — Single-bacterium screening of oral pathogens by terahertz near-field nanoscopy derived multiparameter
2. PMID:42141123 — Decoding the human gut bacterial plasmids in colorectal cancer
3. PMID:42157597 — Machine learning-based risk prediction model for postoperative acute kidney injury in surgical patients with chronic kidney disease: development, validation, and SHAP-based explainability