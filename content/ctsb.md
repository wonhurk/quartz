---
title: "CTSB"
---
# CTSB
`gene · lysosomal protease · ferroptosis · autophagy · pancreatic cancer · drug delivery`

Last modified 2026-06-06 · 2 papers · 3 incoming links · 2 outgoing links

| | |
|---|---|
| **Type** | Lysosomal cysteine protease |
| **Key roles** | Ferroptosis regulation, autophagy, proteolytic degradation |
| **Primary contexts** | PDAC, Parkinson's disease |
| **Clinical relevance** | PDAC prognosis, neurodegeneration therapy |
| **Inhibitors** | [[resveratrol]] |
| **Associated pathways** | Ferroptosis, HIF-1, TGF-β signaling |
| **Papers** | 2 indexed |

---

**CTSB** (cathepsin B) is a lysosomal cysteine protease that functions as a key regulator of [[ferroptosis|iron-dependent cell death]] and autophagy-mediated proteolytic degradation across cancer and neurodegenerative disease contexts. In [[pancreatic-ductal-adenocarcinoma|pancreatic ductal adenocarcinoma (PDAC)]], CTSB is identified as one of six core genes in the ferroptosis signature, with significantly elevated expression correlating with poor clinical outcomes and disease progression.¹ Beyond its endogenous proteolytic role, CTSB activity is actively exploited in engineered drug-delivery systems, where cathepsin-B-cleavable [[gflg|GFLG linkers]] trigger intracytoplasmic release of therapeutic peptides to enable [[blood-brain-barrier|blood-brain barrier]] crossing and targeted neuronal degradation of disease-associated proteins such as [[alpha-synuclein|α-synuclein]].²

---

## Mechanism

CTSB catalyzes proteolytic degradation within the lysosomal compartment, where it processes substrates in both basal autophagy cascades and ferroptosis-associated protein turnover events. The protease is functionally integrated into ferroptosis pathways through its participation in [[hif1a|HIF-1α]] and [[tgfb1|TGF-β]] signaling cascades, which regulate cellular iron homeostasis and lipid peroxidation responses.¹ [[gpx4|GPX4]], [[nox4|NOX4]], and [[tfrc|TFRC]] operate as co-regulatory ferroptosis nodes alongside CTSB, forming an interconnected proteolytic and antioxidant network that determines ferroptosis sensitivity.¹ The enzyme's lysosomal localization positions it to respond rapidly to increased iron availability and oxidative stress, making it intrinsically responsive to ferroptosis-inducing stimuli.

---

## Ferroptosis signature in pancreatic cancer

CTSB emerges as a critical node in the ferroptosis signature of PDAC, a disease characterized by aggressive growth, intrinsic treatment resistance, and an immunosuppressive, fibrotic microenvironment. Machine learning-based screening of integrated transcriptomic datasets — integrating differential expression analysis, weighted gene co-expression network analysis (WGCNA), and LASSO/SVM-RFE feature selection — identified CTSB as one of six key ferroptosis-related genes, alongside [[gpx4]], [[nox4]], [[tfrc]], [[hif1a]], and [[tgfb1|TGFB1]], all significantly enriched in ferroptosis, HIF-1, and TGF-β signaling pathways.¹ Single-cell transcriptome analysis further confirmed CTSB as a differentially expressed gene within the disease-associated microenvironment, where its expression patterns correlate with [[macrophage|M1/M2 macrophage]] infiltration dynamics and immune activation states.¹ Clinical proteomics validation using human proteome atlas (HPA) data and TCGA demonstrated that CTSB protein is highly expressed in PDAC tissue samples, with elevated levels independently associating with poor prognosis.¹ This dual role — as both a ferroptosis pathway component and an immune landscape modulator — positions CTSB as a biologically tractable therapeutic target for overcoming the immunosuppressive PDAC microenvironment.

---

## Engineered drug delivery via cathepsin B activation

CTSB proteolytic activity is engineered into advanced drug-delivery systems to enable spatiotemporal control of therapeutic peptide release in both cancer and neurodegenerative contexts. The [[gflg|GFLG linker]] — a cathepsin-B-cleavable peptide sequence — is incorporated into exosome architecture, where it couples surface-targeting ligands to luminal cargo while remaining chemically inert during extracellular transit and exosomal trafficking.² In this design, GRP94-targeting peptides guide exosome delivery to diseased neurons, while the GFLG linker maintains peptide sequestration until endosomal fusion brings the cargo into acidified compartments containing active cathepsin B.² This spatiotemporal gating mechanism ensures that therapeutic peptides are released only within target cells, eliminating premature activation and off-target proteolysis.

The translational power of this platform has been demonstrated in [[parkinsons-disease|Parkinson's disease]] models, where cathepsin-B-responsive engineered exosomes (NEXOGFLG-P1) successfully deliver [[alpha-synuclein|α-synuclein]]-degrading peptides across the [[blood-brain-barrier|blood-brain barrier]] and into substantia nigra neurons in MPTP-induced Parkinson's disease models.² Following endosomal fusion, cytoplasmic cathepsin B rapidly cleaves the GFLG linker, liberating the luminal α-synuclein-targeting peptide into the cytoplasm where it mediates direct degradation of pathogenic α-synuclein aggregates.² This proof-of-concept establishes cathepsin-B-responsive delivery as a generalizable platform for treating protein aggregation neurodegenerative diseases, with immediate applications in α-synuclein pathology.

---

## Regulation by resveratrol

[[Resveratrol]], a natural polyphenol from grape skins with antioxidant and anti-cancer properties, potently inhibits CTSB expression at the protein level in PDAC cells and suppresses its contribution to ferroptosis resistance. Multi-omics analysis integrating transcriptomics, proteomics, and molecular docking identified resveratrol as a novel ferroptosis inducer by directly targeting the core ferroptosis signature genes.¹ Experimental validation confirmed that resveratrol treatment downregulates multiple key ferroptosis pathway components including CTSB, [[gpx4|GPX4]], [[nox4|NOX4]], and [[tfrc|TFRC]].¹ This downregulation is mechanistically linked to enhanced ferroptosis sensitivity through depletion of cellular glutathione (GSH) pools.¹ Ferroptosis inhibitor (Fer-1) rescue experiments confirmed that CTSB protein downregulation contributes to resveratrol-induced ferroptosis by preventing the proteolytic recovery pathways normally engaged under iron stress.¹

---

## References
1. PMID:42142137 — Integrative multi-omics analysis identifies a core ferroptosis signature and validates resveratrol as a novel inducer in pancreatic cancer
2. PMID:41941974 — Intelligent delivery of autophagy-targeting chimeric peptides by engineered exosomes for the degradation of α-synuclein