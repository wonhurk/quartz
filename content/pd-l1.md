---
title: "PD-L1"
---
# PD-L1
`protein · checkpoint-ligand · immune-evasion · cancer-biomarker · immunotherapy-target · membrane-protein`

Last modified 2026-06-04 · 17 papers · 4 outgoing links · 21 incoming links

| | |
|---|---|
| **Type** | Immune checkpoint ligand |
| **Function** | Suppresses T cell-mediated immunity |
| **Receptor** | PD-1 (programmed cell death protein 1) |
| **Therapeutic antibodies** | [[pembrolizumab]], [[durvalumab]] |
| **Cancers** | NSCLC, gastric, hepatocellular, [[melanoma]], breast |
| **Biomarker** | Combined positive score (CPS) ≥1 |
| **Papers** | 17 indexed |
| **Incoming links** | 21 wiki entities |

---

**PD-L1 (programmed cell death ligand 1)** is an immune checkpoint protein expressed on cancer cell membranes and extracellular vesicles that suppresses anti-tumor T cell responses by binding to PD-1 receptors on cytotoxic lymphocytes. Cancer cells upregulate PD-L1 as an adaptive immune evasion mechanism in response to cellular stress — including [[ferroptosis]], targeted kinase inhibitor resistance, and metastatic progression — thereby shielding tumors from immune surveillance.¹ FDA-approved [[anti-pd-l1-antibody|anti-PD-L1 monoclonal antibodies]], including [[pembrolizumab]] and [[durvalumab]], have demonstrated efficacy across multiple malignancies, often in combination with chemotherapy, targeted agents, or immunogenic cell death inducers.²³

---

## Mechanism and membrane organization

PD-L1 functions by engaging the PD-1 receptor on activated T cells, delivering inhibitory signals that suppress T cell proliferation, cytokine production, and cytotoxic activity. At the molecular level, PD-L1 exhibits density-dependent clustering on cell membranes, with distinct organizational patterns depending on the mode of therapeutic engagement. Single-molecule imaging reveals that [[small-molecule-inhibitors]] promote PD-L1 dimerization and reduce lateral mobility, whereas [[antibodies|antibody binding]] increases diffusivity and alters membrane organization.⁴ These biophysical properties have direct implications for therapeutic design, as combined small-molecule and antibody treatments exert complementary effects on PD-L1 spatial distribution and signaling capacity.

Cancer cells exploit PD-L1 upregulation in response to metabolic and oxidative stress. In non-small cell lung cancer (NSCLC) cells with acquired resistance to EGFR tyrosine kinase inhibitors, particularly [[afatinib]], PD-L1 expression is markedly elevated alongside an immunosuppressive transcriptional signature characterized by reduced MHC class I presentation and pro-inflammatory cytokine secretion.⁵ This adaptive immune evasion is further reinforced by protein kinase C iota ([[pkci|PKCι]]), which drives YAP1-dependent transcription of CCL7, recruiting tumor-associated macrophages and establishing an immunosuppressive microenvironment that confers resistance to anti-PD-1 therapy.⁶

---

## Clinical applications and FDA approval

PD-L1-targeted immunotherapy has achieved regulatory approval across multiple cancer types. [[Pembrolizumab]], a humanized anti-PD-1 monoclonal antibody that disrupts PD-L1/PD-1 interaction, received FDA accelerated approval in 2021 and full approval in 2025 for HER2-positive gastric and gastroesophageal junction carcinoma when combined with trastuzumab and platinum-based chemotherapy.³ The pivotal KEYNOTE-811 trial demonstrated a median overall survival of 20.0 months versus 16.8 months in the control arm, with treatment benefit concentrated in patients exhibiting PD-L1 combined positive score (CPS) ≥1, who comprised 85% of the study population. In the PD-L1 CPS <1 subgroup, pembrolizumab showed no survival advantage, underscoring the biomarker-dependent nature of checkpoint blockade efficacy.³

In hepatocellular carcinoma, triple-combination therapy integrating hepatic arterial infusion chemotherapy with FOLFOX, [[lenvatinib]], and [[durvalumab]] (a PD-L1 inhibitor) achieved a median progression-free survival of 15.8 months with an objective response rate of 75%, including nine complete responses.⁷ The regimen enabled R0 surgical conversion in 17.5% of patients with unresectable disease, demonstrating the potency of combining locoregional therapy, antiangiogenic agents, and immune checkpoint blockade.

---

## Biomarker value and spatial context

While PD-L1 expression has historically served as a predictive biomarker for immunotherapy response, its utility is significantly enhanced when integrated with spatial and cellular context. Retrospective multiplex immunofluorescence analysis in NSCLC patients treated with pembrolizumab and gemcitabine revealed that spatial relationships between immune cell populations — particularly the proximity of regulatory T cells to CD3+ T cells — predicted treatment outcomes more accurately than PD-L1 expression, tumor mutational burden, or gene expression profiles alone.⁸ A composite tumor inflammation score integrating T regulatory cell spatial distribution and overall T cell density correlated strongly with disease response (p < 0.002), suggesting that PD-L1 expression in isolation fails to capture the full complexity of the tumor immune microenvironment.⁸

Spatial proteomics platforms further demonstrate that three-variable composites incorporating CD73 expression — particularly in EGFR-mutant NSCLC — substantially outperform PD-L1 alone in predicting immunotherapy efficacy.⁹ This spatial decoding approach identifies mechanistically actionable therapeutic hypotheses, including the rationale for combining CD73 inhibition with PD-L1 blockade in adenosine-enriched tumor microenvironments.

---

## Glycosylated variants and resistance mechanisms

A major source of PD-L1-mediated immune evasion involves glycosylated PD-L1 ([[glycosylated-pd-l1|gPD-L1]]) on small extracellular vesicles (sEVs), which regulates immune suppression and checkpoint blockade resistance. Glycan modifications shield epitopes from conventional immunohistochemistry detection, creating a "detection blind spot" that undermines current biomarker strategies.¹⁰ An ultrasensitive electrochemical CAP-g bioplatform employing a dual-aptamer recognition strategy achieves a limit of detection of 52 particles/mL for gPD-L1-sEVs — one to two orders of magnitude below existing methods — and successfully discriminates breast cancer patients with varying immunotherapy responsiveness.¹⁰ Elevated baseline gPD-L1-sEV levels correlate with poor anti-PD-L1 efficacy and disease progression, establishing this glycosylated variant as a critical resistance biomarker.

---

## Combination with ferroptosis and immunogenic cell death

[[Ferroptosis]] induction triggers immunogenic cell death and enhances PD-L1-targeted immunotherapy, yet paradoxically, ferroptotic stress itself upregulates PD-L1 expression, enabling immune evasion.¹ The natural alkaloid [[neferine]] addresses this dual challenge by simultaneously inducing ferroptosis and suppressing PD-L1 in [[melanoma]]. Delivered via a metal-organic framework system (Nef@MOF@C) that releases both neferine and Fe³⁺ in the acidic tumor microenvironment, this platform enhances T cell-mediated immune surveillance and effectively inhibits both primary and metastatic melanoma in preclinical models.¹

In triple-negative breast cancer, biodegradable polymersomes encapsulating copper peroxide and gemcitabine generate reactive oxygen species via a copper-based Fenton-like reaction, simultaneously suppressing cytidine deaminase (enhancing gemcitabine activation), depleting glutathione, and promoting immunogenic cell death.² This converts immunologically "cold" tumors into "hot" tumors, significantly improving anti-PD-L1 immunotherapy efficacy.² Similarly, in hepatocellular carcinoma, platycodin-D-loaded iron nanocomposites trigger ferroptosis-photochemotherapy synergy, depleting [[gpx4|GPX4]] and [[slc7a11|SLC7A11]] while inducing immunogenic cell death; combined with anti-PD-L1, this strategy yields substantial tumor inhibition and durable immunological memory.¹¹

---

## Novel targeting approaches

Beyond monoclonal antibodies, multiple therapeutic modalities are emerging to target PD-L1. The UPTAB (Ultrahigh-affinity Protein pairs fused to Targeting Binders) platform employs a modular "plug-and-play" design for targeted protein degradation, leveraging lysosomal trafficking receptors to degrade membrane proteins including PD-L1.¹² Type-I UPTAB achieved near-complete PD-L1 degradation across cancer cell lines, while Type-II UPTAB enabled simultaneous degradation of PD-L1 and EGFR. Degrader-drug conjugates (DDCs) incorporating the cytotoxic payload MMAE retained degradation capacity while exhibiting enhanced anti-proliferative activity, offering a versatile tool for membrane protein targeting.¹²

RNA interference strategies have also demonstrated preclinical efficacy. Helper lipid-engineered extracellular vesicles ([[sipd-l1|siPD-L1]]) modified with cationic DOTAP lipids achieve selective lung tropism, overcoming the hepatic accumulation that typically limits systemic EV delivery.¹³ Positron emission tomography-guided biodistribution tracking confirmed enhanced lung targeting, and [[sipd-l1]] delivery effectively silenced PD-L1 in melanoma lung metastases, enhancing tumor immune responses.¹³ Combination therapies targeting upstream regulators — including [[ido1|IDO1]] inhibitors (NLG919) that disrupt tryptophan/kynurenine metabolism — further amplify anti-PD-L1 efficacy by alleviating metabolic immunosuppression.¹⁴

---

## References
1. PMID:41763265 — Neferine induces ferroptosis and reverses immune evasion in melanoma
2. PMID:41780685 — Biodegradable polymersomes for targeted chemoimmunotherapy in TNBC
3. PMID:41790455 — FDA approval: Pembrolizumab for HER2-positive gastric cancer
4. PMID:42083266 — Adaptive deep learning reveals PD-L1 membrane organization dynamics
5. PMID:41672191 — EGFR TKI resistance and immunomodulatory gene expression in NSCLC
6. PMID:41720451 — PKCι-driven macrophage infiltration mediates anti-PD-1 resistance
7. PMID:42135293 — FOLFOX-HAIC, lenvatinib, and durvalumab for hepatocellular carcinoma
8. PMID:42126144 — Multiplex immunofluorescence-based tumor inflammation score in NSCLC
9. PMID:42138084 — Spatial proteomics outperforms PD-L1 expression in predicting ICI efficacy
10. PMID:42065221 — Flexible dual-aptamer scaffolds detect gPD-L1-sEVs in breast cancer
11. PMID:42133129 — Platycodin-D iron nanocomposite for ferroptosis-photo-chemotherapy
12. PMID:42138807 — UPTAB platform for customizing multivalent PD-L1 degraders
13. PMID:42139331 — Lipid-engineered extracellular vesicles enable siPD-L1 lung delivery
14. PMID:41856326 — Carrier-free nanoreshapers disrupt CAF barriers for immunotherapy synergy