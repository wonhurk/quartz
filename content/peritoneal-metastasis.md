---
title: "Peritoneal metastasis"
---
# Peritoneal metastasis
`disease · metastasis · advanced cancer · gastric cancer · peritoneal dissemination · immunotherapy · deep learning diagnosis`

Last modified 2026-06-06 · 2 papers · 2 incoming links · 12 outgoing links

| | |
|---|---|
| **Type** | Metastatic disease |
| **Anatomical site** | [[peritoneum]] (abdominal cavity serous membrane) |
| **Primary association** | [[gastric-cancer]] (T3/T4 stage) |
| **Secondary association** | [[colon-cancer]] |
| **Diagnostic method** | Deep learning ([[inception-resnetv2]]) on contrast-enhanced CT |
| **Therapeutic approach** | [[icap\|Immunogenic cell death-primed autophagosomes]] |
| **Detection accuracy** | 97.3% ROC AUC |
| **Tumor clearance** | ~90% (peritoneal models) |
| **Papers** | 2 indexed |
| **Incoming links** | 2 wiki entities |

---

**Peritoneal metastasis** is the dissemination of malignant cells to the [[peritoneum]], the serous membrane lining the abdominal cavity, representing one of the most clinically intractable manifestations of advanced cancer. In [[gastric-cancer|gastric cancer]], particularly in East Asian populations, peritoneal metastasis frequently presents at diagnosis in T3/T4 stage disease, profoundly limiting surgical options and substantially reducing overall survival.¹ The condition precludes conventional curative resection, necessitating palliative systemic approaches, yet conventional diagnostic methods demonstrate insufficient sensitivity for detecting occult peritoneal disease prior to surgical exploration, creating a critical gap in preoperative staging and treatment planning.

---

## Mechanism and clinical presentation

Peritoneal metastasis arises through intraperitoneal seeding of tumor cells, which breach the peritoneal barrier and establish multifocal deposits throughout the abdominal cavity. The process is particularly aggressive in [[gastric-cancer|gastric cancer]], where advanced T stage (T3/T4 classification) serves as a strong predictor of peritoneal involvement and poor prognosis.¹ Once peritoneal metastasis is established, the disease typically becomes unresectable, fundamentally altering the therapeutic paradigm from curative surgery to predominantly palliative systemic therapy. The diagnostic challenge is compounded by the inability of traditional imaging modalities—including preoperative computed tomography—to reliably identify microscopic peritoneal disease before surgical intervention, leading to delayed staging and unnecessary laparotomies in affected patients.

---

## Artificial intelligence-based detection

Recent advances in deep learning have substantially improved the diagnostic accuracy of peritoneal metastasis detection from preoperative imaging. An [[inception-resnetv2|SE-augmented Inception-ResNetV2]] convolutional neural network trained on contrast-enhanced CT images achieved superior predictive performance, attaining a receiver operating characteristic area under the curve of 0.973 and precision-recall area under the curve of 0.908, with an F1-Score of 0.818.¹ Integration of the Squeeze-and-Excitation (SE) attention mechanism module substantially enhanced model discrimination, enabling more accurate risk stratification than standard architectures alone. Calibration curves demonstrated excellent agreement between predicted probabilities and actual peritoneal metastasis status, while decision curve analysis confirmed the clinical utility of the model for guiding patient management. This AI-based approach enables preoperative identification of high-risk patients with T3/T4 [[gastric-cancer|gastric cancer]], permitting selective further diagnostic [[laparoscopy]] to minimize unnecessary laparotomy and optimize treatment planning.

---

## Immunotherapy for peritoneal metastasis

Therapeutic innovation targeting peritoneal metastasis has emerged through exploitation of [[immunogenic-cell-death|immunogenic cell death (ICD)]] mechanisms and [[autophagosome|autophagosomal]] engineering. [[icap|Immunogenic cell death-primed autophagosome (ICAP)]] therapy selectively concentrates tumor-associated antigens and damage-associated molecular patterns (DAMPs) within autophagosomes while depleting immunosuppressive byproducts from ICD-derived cellular debris.² The immunogenic cargo within ICAPs is recognized via F-actin exposure by [[clec9a|CLEC9A]]-expressing [[dendritic-cells|cDC1 dendritic cells]], enabling efficient internalization and cross-presentation of tumor antigens to [[cd8-t-cells|CD8+ T cells]].² 

ICAP-based immunotherapy has demonstrated remarkable efficacy in preclinical peritoneal metastasis models, achieving approximately 90% tumor clearance in [[colon-cancer|colon cancer]] peritoneal metastasis.² The mechanism is further amplified when autophagosomal cargo escapes into the lysosome, potentiating CpG-[[tlr9|TLR9]] signaling cascades and generating synergistic amplification of adaptive immune responses, substantially enhancing therapeutic durability and control of peritoneal tumors.² This endogenous vaccine strategy offers a scalable, patient-personalized approach to immunotherapy for peritoneal disease.

---

## Future directions

The convergence of AI-enabled early detection and immunotherapeutic innovation addresses two critical bottlenecks in peritoneal metastasis management: preoperative identification of occult disease and provision of effective systemic therapy for advanced presentations. The SE-augmented [[inception-resnetv2|Inception-ResNetV2]] model offers immediate clinical implementation potential for patient risk stratification in [[gastric-cancer|gastric cancer]], while [[icap|ICAP]]-based vaccines represent a next-generation immunotherapeutic avenue for patients with established peritoneal metastasis. Integration of these diagnostic and therapeutic advances may substantially improve outcomes in this historically poor-prognosis manifestation of advanced cancer.

---

## References
1. PMID:42133711 — Application of artificial intelligence based on contrast-enhanced CT imaging for predicting peritoneal metastasis in patients with T3/T4 stage gastric cancer
2. PMID:41856327 — Immunogenic cell death-primed autophagosome vaccines drive dendritic cell cross-presentation and suppress colon cancer metastasis