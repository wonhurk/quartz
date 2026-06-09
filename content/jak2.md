---
title: "JAK2"
---
# JAK2
`protein · kinase · jak-stat · therapeutic target · polycythaemia vera · inflammatory diseases · cancer`

Last modified 2026-06-05 · 3 papers · 8 incoming links

| | |
|---|---|
| **Type** | Protein kinase (JAK family) |
| **Mechanism** | Tyrosine kinase signaling; phosphorylates [[stat3\|STAT3]] |
| **Pathway** | [[jak-stat\|JAK-STAT]] cytokine signaling |
| **Disease targets** | [[polycythaemia-vera\|Polycythaemia vera]], inflammatory diseases, cancers, rheumatoid arthritis |
| **Lead inhibitor** | [[ruxolitinib]] (JAK1/JAK2 dual inhibitor) |
| **Clinical evidence** | 433-patient real-world PV cohort |
| **Papers** | 3 indexed |
| **Incoming links** | 8 wiki entities |

---

**JAK2** (Janus Kinase 2) is a non-receptor tyrosine kinase central to cytokine-driven signal transduction and a major therapeutic target for [[inflammatory-diseases|inflammatory diseases]], cancers, rheumatoid arthritis, and [[polycythaemia-vera|polycythaemia vera (PV)]].¹ Its catalytic activity phosphorylates downstream effectors including [[stat3|STAT3]], initiating transcriptional cascades that drive proliferation, differentiation, and inflammatory responses. [[ruxolitinib]], a potent JAK1/JAK2 dual inhibitor, achieves sustained hematocrit control and spleen volume reduction in patients with PV resistant to conventional hydroxyurea therapy, establishing JAK2 as a cornerstone of targeted kinase medicine.¹

---

## Mechanism

JAK2 operates within the classical [[jak-stat|JAK-STAT]] signaling pathway, activated when [[il-6|IL-6]] and other cytokines bind their cognate cell-surface receptors. Upon ligand engagement, JAK2 undergoes autophosphorylation and subsequently phosphorylates [[stat3|STAT3]] at critical tyrosine residues, promoting STAT3 nuclear translocation and target gene activation. This canonical pathway is essential for immune homeostasis, yet dysregulation or excessive activation drives pathological inflammation and malignant transformation. The [[il-6r|IL-6 receptor]] axis stands as a key regulator upstream of JAK2, making the kinase a convergence point for multiple inflammatory signals.

---

## Polycythaemia vera and clinical efficacy

[[ruxolitinib]] has fundamentally transformed therapy for PV patients intolerant of or resistant to hydroxyurea. In the prospective, non-interventional PaVe study enrolling 433 German PV patients, [[ruxolitinib]] achieved remarkable efficacy stratified by prior JAK inhibitor exposure and risk status.² Treatment-naive patients showed profound hematocrit decreases of −6.2% and leukocyte reductions of −4.5 × 10³/μl, substantially exceeding responses in previously JAK-inhibitor–treated cohorts (−1.6% hematocrit and −1.4 × 10³/μl leukocytes). Thrombocytopenia reversal was equally striking, with naive patients achieving platelet reductions of −80.5 × 10³/μl compared to −42.6 × 10³/μl in pre-exposed patients. High-risk PV patients derived disproportionate benefit, with hematocrit reductions of −6.3% versus −5.3% in previously treated populations.² This real-world evidence validates the sustained effectiveness and clinical utility of JAK2-targeted therapy across diverse patient populations.

---

## Computational discovery and AI-driven design

Modern drug discovery targeting JAK2 leverages machine learning and structure-based design to identify potent novel inhibitors. A synergistic computational-experimental pipeline employed CatBoost machine learning models trained on molecular descriptors including Morgan fingerprints, Molecular Access System (MACCS) keys, and PaDEL features to screen the Korean Chemical Databank.³ The CatBoost–Morgan fingerprint combination achieved 94% accuracy on held-out test data, substantially outperforming competing descriptor architectures. High-ranking virtual hits underwent rigorous validation via density functional theory, molecular docking, and molecular dynamics simulations; four candidates were selected for experimental testing, all yielding IC₅₀ values below 10 μM against JAK2 kinase activity.³

Advanced generative frameworks now extend these capabilities. The GPS-VAE (Geometry-aware Property-based Substructure Variational Autoencoder) model, trained jointly with [[transformer-selfies|Transformer-SELFIES]] molecular generation, captures complex three-dimensional active site topology that conventional graph neural networks fail to represent.¹ Applied to JAK2, GPS-VAE identified fragment-like and lead-like scaffolds with predicted ligand efficiency exceeding 0.5 under AutoDock Vina scoring; macrocyclic adaptations emerged as previously underexplored JAK2-targeting chemotypes.¹ This integration of geometry-aware latent representations with evolutionary optimization dramatically accelerates [[de-novo-drug-design|de novo discovery]] of structurally diverse JAK2 ligands.

---

## Broader therapeutic applications

JAK2 inhibition addresses a broad spectrum of pathologies where cytokine signaling predominates. In rheumatoid arthritis, blocking JAK2 within the inflammatory cascade reduces [[stat3|STAT3]] activation and cytokine production, offering an alternative to [[il-6r|IL-6 receptor]] antagonists and conventional biologics. In cancer, JAK2 inhibitors suppress tumor-associated inflammation and can enhance immunotherapy efficacy through checkpoint blockade synergy. The multi-indication therapeutic potential of JAK2-targeted drugs reflects the pathway's fundamental biology across hematopoietic, immune, and epithelial compartments, positioning JAK2 as a validated target for precision medicine across oncology and [[inflammatory-diseases|inflammatory disease]].

---

## References

1. PMID:42118199 — GPS-VAE and Transformer-SELFIES framework for structure-based de novo drug design targeting JAK2
2. PMID:42118306 — Prospective, non-interventional study of ruxolitinib therapy in patients with polycythaemia vera — German real-world data (PaVe study)
3. PMID:41593209 — AI and experimental convergence: a synergistic pathway to JAK2 inhibitor discovery