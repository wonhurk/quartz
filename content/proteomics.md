---
title: "Proteomics"
---
# Proteomics
`technology · protein-analysis · mass-spectrometry · multi-omics · precision-medicine · biomarker-discovery`

Last modified 2026-06-04 · 5 papers · 0 outgoing links · 3 incoming links

| | |
|---|---|
| **Type** | Technology |
| **Method** | Mass spectrometry |
| **Key advance** | Direct infusion MS without chromatography |
| **Speed** | >1,300 proteins in <5 min |
| **Integration** | Metabolomics, lipidomics, microRNA, spectroscopy |
| **Applications** | Diagnostics, drug screening, population health |
| **Papers** | 5 indexed |
| **Incoming links** | 3 wiki entities |

---

**Proteomics** is a high-throughput technology for large-scale protein analysis that has emerged as a cornerstone of modern multi-omics platforms, enabling simultaneous characterization of thousands of biomolecules from single samples in combination with metabolomics, lipidomics, microRNA profiling, and spectroscopic methods. Recent technological advances in [[ion-mobility-mass-spectrometry|ion mobility mass spectrometry]] and direct infusion approaches have eliminated the need for liquid chromatography, reducing analysis time to under 5 minutes while quantifying over 1,300 proteins per sample.¹ These capabilities position proteomics as an essential tool for precision medicine, infectious disease research, and population-level health studies, with applications spanning biomarker discovery, drug screening, and mechanistic investigation of complex diseases.

---

## Technology and integration

The single-injection multi-omics analysis by direct infusion (SMAD) platform represents a paradigm shift in proteomic throughput. By leveraging [[ion-mobility-mass-spectrometry|ion mobility mass spectrometry]] without liquid chromatography, SMAD enables quantification of over 9,000 metabolite m/z features and over 1,300 proteins from the same sample in less than 5 minutes, dramatically reducing costs and increasing feasibility for large-scale studies.¹ The platform has been validated across multiple contexts including macrophage polarization, pilot drug screens in human cells, and high-throughput screening in 96-well plate formats.¹ Machine learning integration with SMAD data enables discovery of protein-metabolite relationships without additional sample preparation, revealing functional linkages between molecular layers that were previously inaccessible.¹

Microfluidic-enabled proteomic workflows further advance the field by addressing challenges in heterogeneous biological systems. A label-free microfluidic chip with optimized 1.4 μm filters enables reproducible separation of co-cultured bacterial and mammalian cells while preserving viability and cellular structure, reducing sample handling and cross-contamination.² This approach improves host protein identification and enriches immune-associated proteins compared to traditional scraping and supernatant collection methods.²

---

## Infectious disease mechanisms

Proteomics has illuminated previously hidden mechanisms of pathogen immune evasion and viral pathogenesis. In co-cultures of Klebsiella pneumoniae and murine macrophages, microfluidic-separated non-phagocytosed bacteria displayed distinct proteome profiles characterized by reduced metabolic enzymes and increased biosynthetic and iron-binding proteins.² Iron-associated proteins were uniquely enriched in the macrophage-evading population, and functional validation confirmed that iron promotes macrophage evasion and bacterial survival, establishing an iron-dependent mechanism of antimicrobial resistance.²

In chronic hepatitis B virus (HBV) infection, integrated proteomics and metabolomics profiling of 108 patients stratified by viral genotype revealed how specific mutations drive disease progression. Patients infected with A1762T/G1764A variants or double mutants exhibited significantly elevated ALT and AST levels correlating with disease severity.³ Proteomic analysis identified 54 to 79 differentially expressed proteins across variant groups, while metabolomics revealed 201 to 242 altered metabolites.³ Pathway integration consistently identified cholesterol metabolism as the most disrupted pathway, with six combined proteomic-metabolomic biomarkers emerging as potential diagnostic tools for distinguishing HBV variants and predicting clinical outcomes.³

---

## Population health and precision medicine

Comprehensive multi-omics profiling including proteomics across 322 healthy individuals of European, East Asian, and South Asian ancestry spanning multiple continents has revealed ethnicity- and geography-associated molecular signatures with profound implications for precision medicine. Proteomics identified ethnicity-linked features affecting host metabolism, autoimmune disease risk, drug metabolism, and neurodegenerative pathways.⁴ Geography influenced biological aging patterns, with East Asians showing lower biological age in their ancestral regions, while individuals of European ancestry exhibited lower biological age in the US and Canada compared to Europe.⁴ Diet-microbiome-metabolism interactions displayed ethnicity-specific patterns, many with direct health relevance, establishing proteomics as essential for understanding ancestry-environment interactions and enabling population-tailored therapeutic strategies.⁴ This open-access resource, which included genomics, transcriptomics, metallomics, glycomics, and microbiomics alongside proteomics, provides a foundational dataset for [[uk-biobank|large-scale population health initiatives]].⁴

---

## Cancer diagnostics

Plasma extracellular vesicle proteomics has achieved clinical-grade diagnostic performance for [[glioma]] detection through integration with machine learning. Using size exclusion chromatography to isolate small extracellular vesicles from 1 mL plasma samples, combined multi-omics (proteomics and microRNA profiling) and multi-spectral (Fourier transform infrared and Raman) approaches across 206 plasma samples from three independent cohorts identified distinct glioma biomolecular profiles.⁵ Consistent alterations in 45 key proteins and 20 microRNAs enabled development of machine learning models achieving 93–97% diagnostic accuracy (AUC 0.931–0.971) in training cohorts.⁵ External validation across independent cohorts confirmed robustness, with 100% accuracy for proteomic and multimodal signatures in longitudinal cohorts, establishing plasma extracellular vesicle proteomics as a viable liquid biopsy approach for non-invasive [[glioma]] diagnosis.⁵

---

## Novel platforms

Emerging proteomic platforms expand the technology's accessibility and application scope. High-throughput drug screening formats enable rapid assessment of cellular responses to large compound libraries using 96-well plates, reducing turnaround time while maintaining proteomic depth.¹ Microfluidic chips for label-free cell separation provide a powerful framework for studying infection biology and identifying therapeutic targets in complex host-pathogen systems.² The integration of proteomics with [[ion-mobility-mass-spectrometry|ion mobility]] dimensions enables resolution of complex samples without chromatographic separation, fundamentally changing the economics and scale of multi-omics studies.¹

---

## References
1. PMID:41906962 — Single-injection multi-omics by direct infusion mass spectrometry
2. PMID:41916300 — Microfluidics-enabled proteomic profiling of Klebsiella immune evasion
3. PMID:42111169 — Cholesterol metabolism dysregulation by HBV mutations via multi-omics
4. PMID:42134306 — Deep multiomics comparison across ethnicity, geography, and age
5. PMID:41999751 — Plasma extracellular vesicle multi-omics for glioma liquid biopsy