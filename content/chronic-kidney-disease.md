---
title: "Chronic Kidney Disease"
---
# Chronic Kidney Disease
`disease · renal disease · progressive · global health burden · developmental origins · perioperative complication`

Last modified 2026-06-05 · 2 papers · 3 outgoing links · clinical significance

| | |
|---|---|
| **Type** | Progressive renal disease |
| **Global burden** | Over 800 million people |
| **Developmental mechanism** | Maternal obesity → macrophage-to-myofibroblast transition |
| **Key pathway** | [[20-hete|20-HETE]] → [[ffar1|FFAR1]] signaling |
| **Regulator** | [[20-hete|20-HETE]], T3/[[trβ]], [[ffar1|FFAR1]] |
| **Perioperative risk** | 24.2% postoperative AKI in CKD patients |
| **Prediction tool** | XGBoost machine learning (AUC 0.844) |
| **Papers** | 2 indexed |

---

**Chronic kidney disease (CKD)** is a progressive loss of renal function affecting over 800 million people globally, representing a major public health burden associated with serious morbidity and mortality.¹ Beyond traditional risk factors, recent mechanistic insights have revealed that maternal metabolic dysfunction drives offspring kidney disease through a pathogenic pathway centered on proximal tubule-derived [[20-hete|20-hydroxyeicosatetraenoic acid (20-HETE)]] signaling through the free fatty acid receptor [[ffar1|FFAR1]] on macrophages.¹ This molecular cross-talk between epithelial and immune compartments results in macrophage-to-myofibroblast transition (MMT) — a cellular program that promotes renal fibrosis and accelerates CKD progression. Critically, [[20-hete|20-HETE]] and [[ffar1|FFAR1]] represent potentially actionable therapeutic targets, as their inhibition markedly reduces kidney pathology in offspring of obese mothers. In the perioperative setting, CKD patients face elevated risk of postoperative acute kidney injury (AKI), which occurs in approximately 24% of surgical patients with pre-existing CKD and further accelerates disease progression. Machine learning-based prediction models, particularly XGBoost, now enable accurate stratification of this high-risk population.²

---

## Developmental origins and maternal obesity

The intrauterine environment profoundly shapes lifelong kidney health. Maternal obesity has emerged as a critical risk factor that programs offspring toward CKD through dysregulation of immune-tubular crosstalk.¹ Multi-omics analyses in maternal obesity models revealed that proximal tubule epithelial cells abnormally produce elevated levels of [[20-hete|20-HETE]], an eicosanoid synthesized by the cytochrome P450 enzyme CYP4A. This paracrine 20-HETE signal acts on neighboring macrophages, binding to the [[ffar1|FFAR1]] receptor and triggering a pathogenic transition wherein macrophages adopt a myofibroblast phenotype — a cellular state characterized by α-smooth muscle actin expression, enhanced collagen synthesis, and pro-fibrotic signaling. This macrophage-to-myofibroblast transition (MMT) thereby transforms the kidney's immune compartment into a fibrosis-promoting milieu. Genetic depletion of [[ffar1|Ffar1]] in macrophages, or pharmacological targeting of [[20-hete|20-HETE]] synthesis, substantially attenuated kidney pathology in offspring of obese mothers, establishing this pathway as a tractable therapeutic axis.

---

## Thyroid hormone regulation of fibrogenic immunity

Hormone screening identified thyroid hormone 3,3,5-triiodo-L-thyronine (T3) as a physiologic amplifier of the [[20-hete|20-HETE]]/[[ffar1|FFAR1]] pathway.¹ T3 enhances [[ffar1|FFAR1]] expression in macrophages through a classical thyroid hormone receptor beta (TRβ)-mediated mechanism. Mechanistically, the thyroid hormone receptor beta (TRβ) binds to an evolutionarily conserved enhancer element upstream of the [[ffar1|Ffar1]] gene and recruits the coactivators P300 and BRD4 — components of the mediator complex essential for thyroid hormone-driven transcription. This TRβ-P300-BRD4 regulatory axis thus couples systemic thyroid hormone status to macrophage pro-fibrotic capacity, suggesting that thyroid dysfunction in the context of maternal obesity may synergistically exacerbate offspring kidney disease. The integration of endocrine and innate immune signaling through this mechanism highlights the multi-system nature of metabolic programming of renal disease.

---

## Perioperative acute kidney injury in CKD patients

Surgical patients with pre-existing CKD face substantially elevated perioperative risk, with postoperative acute kidney injury (AKI) occurring in 24.2% of cases and driving accelerated long-term disease progression.² The heterogeneity of risk among this population has historically complicated individualized perioperative management and prognostication. Machine learning models trained on large perioperative cohorts now enable precise risk stratification. Analysis of 3,851 surgical patients with CKD from the MIMIC-IV database identified XGBoost as the superior predictive architecture, achieving an area under the receiver-operating-characteristic curve of 0.844, accuracy of 79.1%, and sensitivity of 79%, substantially outperforming Random Forest and LightGBM models. The calibration curve demonstrated excellent agreement between predicted and observed postoperative AKI risks, indicating that the model's probability estimates are clinically actionable.

---

## Explainable prediction and clinical decision support

Interpretability of machine learning predictions is essential for clinical adoption and personalized medicine. Using SHapley Additive exPlanations (SHAP) analysis, the most influential predictors of postoperative AKI in CKD patients were identified as estimated glomerular filtration rate ([[egfr|eGFR]]), SOFA (Sequential Organ Failure Assessment) score, systolic blood pressure, serum albumin, and serum phosphorus.² These parameters collectively capture renal reserve capacity, systemic illness severity, hemodynamic stability, nutritional-metabolic status, and mineral metabolism — the critical physiologic domains governing perioperative kidney vulnerability. The integration of explainable artificial intelligence into real-time clinical decision support systems based on these XGBoost models promises to enable transparent risk stratification, support individualized perioperative optimization, and ultimately reduce preventable AKI and CKD progression in surgical populations.

---

## References

1. PMID:42135322 — Maternal obesity induces macrophage to myofibroblast transition in kidneys of male offspring through a pathway driven by 20-hydroxyeicosatetraenoic acid
2. PMID:42157597 — Machine learning-based risk prediction model for postoperative acute kidney injury in surgical patients with chronic kidney disease: development, validation, and SHAP-based explainability