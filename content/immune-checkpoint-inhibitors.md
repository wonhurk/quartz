---
title: "Immune Checkpoint Inhibitors"
---
# Immune Checkpoint Inhibitors
`technology · immunotherapy · PD-1 · PD-L1 · CTLA-4 · cancer treatment · biomarkers · resistance mechanisms`

Last modified 2026-06-04 · 15 papers · 6 outgoing links · 14 incoming links

| | |
|---|---|
| **Type** | Immunotherapy |
| **Mechanism** | Block inhibitory immune checkpoints |
| **Primary targets** | PD-1/PD-L1, CTLA-4 |
| **Key effector** | [[cd8-t-cells\|CD8+ tumor-infiltrating lymphocytes]] |
| **Resistance drivers** | [[tumor-associated-macrophages\|TAMs]], [[cancer-associated-fibroblasts\|CAFs]], [[cd73\|CD73/adenosine axis]] |
| **Cancers** | NSCLC, CRC, melanoma, mesothelioma, ACC |
| **Papers** | 15 indexed |
| **Incoming links** | 14 wiki entities |

---

**Immune checkpoint inhibitors (ICIs)** are a class of immunotherapeutic agents that block inhibitory pathways—principally [[pdcd1|PD-1]]/PD-L1 and CTLA-4—to reactivate anti-tumor immune responses.¹ While ICIs have revolutionized outcomes in multiple malignancies including [[nsclc|non-small cell lung cancer]], colorectal cancer, and melanoma, 40–50% of patients experience primary or secondary treatment resistance.²,³ ICI efficacy is fundamentally determined by the tumor microenvironment, particularly [[cd8-t-cells|CD8+ tumor-infiltrating lymphocyte (TIL)]] abundance, activation state, and spatial proximity to tumor cells, with a specific phenotype (CD39⁺/CD103⁺/Ki-67⁺) marking functionally superior, exhaustion-resistant T cells.¹

---

## Mechanism of action

ICIs operate by releasing T cell–intrinsic brakes imposed by inhibitory receptors. Among intratumoral lymphocyte populations including Th1, regulatory T cells, and NK cells, only [[cd8-t-cells|CD8+ TILs]] consistently associate with ICI efficacy across cancer types.¹ Computational tissue segmentation has underscored that direct physical interactions between CD8+ TILs and cancer cells—not merely their presence within the tumor stroma—are critical for therapeutic response.¹,⁴ Phenotypically, CD39⁺/CD103⁺/Ki-67⁺ CD8+ TILs represent an exhausted yet functional subset that retains tumor-reactive capacity and predicts favorable outcomes.¹ The spatial organization of immune cells within the tumor microenvironment outperforms single-marker biomarkers such as PD-L1 expression in predicting immunotherapy efficacy.⁴

---

## Applications across cancer types

In [[nsclc|non-small cell lung cancer]], ICIs targeting the PD-1 axis have become standard-of-care for metastatic disease, yet treatment failure remains common.¹ Single-cell spatial proteomic profiling in a cohort of 103 patients with metastatic NSCLC identified a three-variable composite—including [[cd73|CD73]] upregulation in EGFR-mutant tumors—that substantially outperforms PD-L1 expression in stratifying ICI response.¹,⁴ Lung adenocarcinoma harboring rare actionable mutations exhibits differential ICI responsiveness stratified by consensus meta-programs, with the ICI-MP-H subgroup characterized by enrichment of the E3-[[ifi6|IFI6]] epithelial subpopulation that expresses high levels of interferon- and antigen presentation–related genes.¹³

In colorectal cancer, approximately 15–50% of patients with dMMR/MSI-H metastatic disease experience primary or secondary resistance to ICIs.¹¹ An 8-gene transcriptomic signature combined with mucinous histology predicts benefit from dual anti-CTLA-4 plus anti-PD-1 blockade, with cluster A ("StromalHIGH-ProliferationLOW") associated with the shortest progression-free survival.¹¹ An orthotopic organoid-based model established from quadruple-mutant intestinal organoids recapitulates the immune landscape of human CRC, with CD8+ T cells representing the predominant leukocyte population exhibiting early dysfunction, and demonstrates responsiveness to anti-PD-1 treatment.⁸

[[Pleural-mesothelioma|Pleural mesothelioma]] represents a challenging malignancy with poor prognosis despite standard dual CTLA-4 and PD-1 blockade.¹⁴ Multi-omics analysis identified four [[dna-methylation|DNA methylation]] subsets—demethylated, LOW, intermediate, and CpG island methylator phenotype (CIMP)—that predict ICI response and survival. The LOW methylation subset, enriched in responders with the longest overall survival, exhibits a T cell– and B cell–rich immune microenvironment, whereas the CIMP subtype correlates with a depleted immune landscape and nonresponse.¹⁴

[[Melanoma-brain-metastases|Melanoma brain metastases]] present unique challenges due to blood-brain barrier impermeability and [[cd73|CD73/adenosine axis]]–mediated immune evasion.⁷ A nose-to-brain delivery platform using glycerol as a mucosal penetration enhancer enabled codelivery of anti-IL-17 and anti-[[cd73|CD73]] antibodies, enhancing brain delivery by 19.4- and 17.1-fold respectively. Anti-IL-17 attenuated CD73-mediated immune evasion by disrupting the IL-17–driven HIF-1α/VEGF-A pathway, thereby boosting anti-CD73 efficacy and promoting CD8+ T cell activation.⁷

[[Adrenocortical-carcinoma|Adrenocortical carcinoma]], characterized by systemic cortisol excess in approximately 60% of cases, exhibits variable ICI responses.⁹ Glucocorticoid exposure polarizes macrophages toward a C1Q⁺/CD163⁺ subtype with enhanced phagocytic activity. Upon IFNγ stimulation, these glucocorticoid-primed macrophages secrete elevated levels of the T cell chemoattractant CXCL9. Combined treatment with ICIs and the glucocorticoid receptor antagonist mifepristone modulates CXCL9 expression and may influence therapeutic outcomes.⁹

---

## Resistance mechanisms

Resistance to ICIs is mediated by immunosuppressive features of the tumor microenvironment. [[Tumor-associated-macrophages|Tumor-associated macrophages (TAMs)]] and [[cancer-associated-fibroblasts|cancer-associated fibroblasts]] function as independent unfavorable adversaries for ICI efficacy, promoting immune evasion through multiple mechanisms.¹ In EGFR/ALK-oncogene–positive NSCLC, high [[cd73|CD73]] expression on cancer cells confers tolerance to ICIs, potentially through M2-TAM accumulation and aberrant angiogenesis.¹,⁴

Protein kinase C-ι (PKC-ι) has emerged as a biomarker and critical mediator of ICI resistance.¹⁰ High PKC-ι expression correlates with resistance to anti-PD-1 therapy, characterized by increased TAM infiltration and reduced CD8+ T cell numbers. Mechanistically, PKC-ι regulates YAP1-dependent transcription of CCL7, which recruits TAMs and fosters an immunosuppressive microenvironment. Pharmacological inhibition of PKC-ι with auranofin reduces TAM accumulation and promotes CD8+ T cell infiltration, synergizing with anti-PD-1 to control tumor growth.¹⁰

Loss of the proteoglycan decorin in castration-resistant prostate cancer suppresses ACSL4-dependent lipid remodeling, driving resistance to enzalutamide by evading [[ferroptosis|ferroptosis]], a form of immunogenic cell death that can potentiate ICI efficacy.

---

## Strategies to overcome resistance

Neoantigen enhancement through inhibition of nonsense-mediated mRNA decay (NMD) represents a promising strategy to overcome ICI resistance.² Reduced activity of the NMD pathway kinase SMG1 predicts improved checkpoint blockade response. NMD inhibition through SMG1 targeting stabilizes transcripts containing premature termination codons—most of non-mutational origin—reshaping the MHC class I–bound immunopeptidome and increasing neoantigen abundance to levels comparable to hypermutated tumors. Functionally, NMD inhibition drives antigen-dependent T cell–mediated tumor cell killing in vitro, promotes activation of tissue-resident T cells in patient-derived models ex vivo, and improves checkpoint blockade efficacy in vivo.²

Activated T cell–derived extracellular vesicles (ATEVs) drive a positive feedback loop that enhances antigen presentation and immune responses.⁶ ATEV-induced immunogenicity relies on extracellular vesicular double-stranded DNA (EVDNA) primarily composed of genomic DNA enriched in immune-related genes encoding antigen processing and presentation machinery. Granzyme B packaged by ATEVs disrupts the nuclear envelope of recipient cells, facilitating intranuclear transfer and transient expression of EVDNA. ATEVs hold promise as an acellular immunotherapy that restores antigen presentation and synergizes with checkpoint blockade in immunotherapy-refractory tumors.⁶

---

## Biomarkers and companion diagnostics

Beyond PD-L1 expression, multimodal biomarkers offer superior prediction of ICI outcomes. [[Dna-methylation|DNA methylation]] subtypes stratify [[pleural-mesothelioma|pleural mesothelioma]] patients, with the demethylated and LOW subsets enriched in responders exhibiting T cell– and B cell–rich microenvironments, whereas the CIMP subtype predicts nonresponse and depleted immunity.¹⁴ A methylation-based probabilistic decision-making tool has been developed to predict ICI treatment outcomes.¹⁴

[[Glycosylated-pd-l1|Glycosylated PD-L1 (gPD-L1)]] regulates tumor progression and immune suppression but remains undetectable by conventional immunohistochemistry due to glycan-mediated epitope shielding.⁵ The [[cap-g-bioplatform|CAP-g bioplatform]], featuring a CF/DPEDOT:PSS/Au nanoflexible scaffold with dual-recognition-driven proximity cascade amplification, achieves ultrasensitive detection of gPD-L1 on small extracellular vesicles with a limit of detection of 52 particles/mL—1–2 orders of magnitude lower than existing methods—and a linear dynamic range spanning 10³–10⁸ particles/mL.⁵

Near-infrared-II photoacoustic "zero-on" semiconducting polymer nanoprobes ([[spcdx|SPCDx]]) enable ultra-accurate companion diagnostics by switching from a signal-silent "zero" state to a signal-active "on" state upon biomarker exposure.¹⁵ This design eliminates probe background interference, ensuring detected signals exclusively reflect true biomarker activation. In vivo, SPCDx accurately distinguishes immune drugs of varying efficacy with 100% accuracy in blind studies and detects early immune responses more than 42 hours before clinical-standard flow cytometry biopsies.¹⁵

---

## Immune-related adverse events

[[Ici-ia|ICI-induced inflammatory arthritis (ICI-IA)]] significantly impairs cancer therapy and patient quality of life.³ Integrated single-cell multi-omics analysis identified a unique regulatory T cell population co-expressing CD137 and IL-6R (atypical proinflammatory Treg, AtpTreg). These cells exhibit reduced immunosuppressive capacity while aberrantly producing high levels of IL-17 and promoting proinflammatory responses of synoviocytes. AtpTreg frequency correlates with increased arthritis severity yet paradoxically associates with improved overall survival. Anti-IL-6R therapy reduces AtpTreg levels, corresponding with improved arthritis outcomes and quality of life without compromising anti-tumor immunity.³

[[Thyroid-immune-related-adverse-event|Thyroid immune-related adverse events]] are among the most common ICI toxicities.¹² Pretreatment thyroid autoantibody titers predict the development of thyroid dysfunction, enabling risk stratification and early intervention strategies. Baseline autoantibody measurements offer a practical biomarker for personalized monitoring protocols.¹²

---

## References
1. PMID:41805727 — Spatial single-cell proteotyping reveals immunotherapy-resistant features in metastatic NSCLC
2. PMID:41956098 — Nonsense-mediated mRNA decay inhibition reshapes the cancer immunopeptidome
3. PMID:42118587 — IL-6 receptor blockade impedes proinflammatory atypical Treg subset in ICI-induced inflammatory arthritis
4. PMID:42138084 — Understanding immune checkpoint inhibitor efficacy through spatial decoding of lung cancer TME
5. PMID:42065221 — Flexible Dual-Apt Scaffolds Reveal gPD-L1-sEVs in breast cancer
6. PMID:42066762 — Activated T cell extracellular vesicle DNA transfer enhances antigen presentation and anti-tumor immunity
7. PMID:42127192 — Glycerol-mediated nose-to-brain codelivery of anti-IL-17 and anti-CD73 antibodies for melanoma brain metastases
8. PMID:42141809 — Orthotopic organoid-based model to study early CD8+ T cell dysfunction in colorectal cancer
9. PMID:42151378 — Glucocorticoids induce a phagocytic C1Q+ macrophage phenotype primed for IFNγ-dependent CXCL9 secretion
10. PMID:41720451 — Protein kinase C-ι-driven macrophage infiltration mediates immunosuppression in NSCLC
11. PMID:41950572 — 8-gene signature combined with mucinous component stratifies anti-CTLA-4 addition benefit in dMMR/MSI-H mCRC
12. PMID:41995625 — Predictive value of baseline thyroid autoantibody titers for ICI-associated thyroid adverse events
13. PMID:42013848 — Single-cell spatial analysis stratifies lung adenocarcinoma with rare actionable mutations
14. PMID:42045690 — Tumor DNA methylation subtypes predict immunotherapy outcomes in pleural mesothelioma
15. PMID:42090271 — "Zero-On" NIR-II photoacoustic organic nanoprobes for ultra-accurate companion diagnostics