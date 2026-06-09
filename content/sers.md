---
title: "SERS (Surface-Enhanced Raman Spectroscopy)"
---
# SERS (Surface-Enhanced Raman Spectroscopy)

`technology · spectroscopy · diagnostics · biomarker detection · non-invasive analysis`

Last modified 2026-06-05 · 3 papers · 4 outgoing links

| | |
|---|---|
| **Type** | Analytical spectroscopy technology |
| **Mechanism** | Plasmonic enhancement of Raman scattering |
| **Key substrate** | [[au-mpa-ag|Au@MPA@Ag core-shell nanoparticles]] |
| **Integration** | [[svm|Support vector machine (SVM)]] |
| **Primary applications** | Parkinson's disease, kidney function monitoring, lupus nephritis diagnosis |
| **Key strength** | Non-invasive biofluid analysis with high sensitivity and specificity |
| **Papers** | 3 indexed |
| **Incoming links** | 4 wiki entities |

---

**Surface-Enhanced Raman Spectroscopy (SERS)** is a highly sensitive analytical technology enabling rapid molecular fingerprinting through dramatic enhancement (10⁴–10⁶-fold) of Raman scattering signals from molecules adsorbed onto [[plasmonic-nanostructures|plasmonic nanostructures]].¹²³ Unlike conventional [[raman-spectroscopy|Raman spectroscopy]], which relies on weak light scattering, SERS permits detection and characterization of biomarkers in clinically relevant biofluids—including [[serum]], [[urine]], and [[exosomes]]—without invasive biopsy or elaborate sample preparation.¹²³ The technique's clinical translation has been substantially advanced through integration with machine learning algorithms (particularly [[svm|support vector machines]]) to address spectral variability and sample heterogeneity, and through systematic optimization of nanoparticle substrate chemistry and pH conditions. SERS-based diagnostics have demonstrated competitive or superior performance relative to conventional clinical assays while maintaining the non-invasive accessibility that makes them suitable for population screening, disease confirmation, and longitudinal monitoring.

---

## Mechanism

SERS operates by positioning molecules of interest in close proximity to plasmonic nanostructures, where surface plasmon resonances dramatically enhance the Raman scattering cross-section. This enhancement arises from two principal mechanisms: electromagnetic enhancement resulting from localized surface plasmon resonance (LSPR) that concentrates electromagnetic fields at the nanostructure surface, and chemical enhancement from increased polarizability of analyte-nanoparticle complexes. The intensity of SERS signals depends critically on substrate composition, nanoparticle morphology and size, surface chemistry, and the pH and ionic conditions governing molecular adsorption onto the substrate. Optimization of these multiple parameters is essential for achieving reproducible and sensitive detection across biological samples with variable pH, ionic strength, and protein content.

---

## Parkinson's disease diagnosis

[[exosomes|Serum exosomes]] have emerged as promising biomarkers for [[parkinsons-disease|Parkinson's disease]], as they carry biomolecular cargo reflective of neurodegenerative disease pathology while remaining accessible through minimally invasive blood sampling. SERS of serum exosomes, when integrated with [[svm|support vector machine]] classification, successfully differentiated Parkinson's disease patients from normal controls with an accuracy of 85% (95% confidence interval, 0.75–1.00) and an area under the receiver operating characteristic curve (AUC) of 0.85 (95% CI, 0.67–1.00).¹ The clinical utility of this approach is substantially enhanced by systematic optimization of data preprocessing strategies; evaluation of 27 distinct preprocessing approaches demonstrated that preprocessing directly influences classification performance and that the optimized model outperforms conventional diagnostic criteria of the Movement Disorder Society.¹ A key technical challenge in SERS-based diagnostics is the "coffee-ring" effect—sample heterogeneity resulting from differential evaporation during sample preparation—which introduces spectral variability; rigorous evaluation of preprocessing strategies proved critical for achieving robust machine learning classification performance despite this heterogeneity.¹

---

## Kidney function monitoring and creatinine quantification

Serum [[creatinine]] is a critical clinical biomarker for monitoring kidney function and detecting early renal dysfunction. Current commercial detection methods, based on creatinine kinase colorimetric assays, are often hindered by matrix interference and lack the specificity necessary for reliable clinical monitoring. A pH-assisted ratiometric SERS approach using core-shell [[au-mpa-ag|Au@MPA@Ag nanoparticles]]—composed of a gold core, a 3-mercaptopropionic acid (MPA) interlayer functioning as both an internal standard and a chemical spacer, and a silver shell—overcomes these limitations by achieving sensitive and reproducible creatinine detection in serum.² Under optimized alkaline conditions (pH 9), creatinine adsorption onto the nanoparticle surface is substantially enhanced, yielding a strong and linear SERS response that is corrected by the internal standard for improved accuracy and reproducibility.² This method achieved a limit of detection of 3.3 μM for serum creatinine with recovery rates of 98–107%, demonstrating high consistency with conventional clinical assay kits.² The ratiometric approach—normalizing the analyte signal to the constant internal standard signal—provides improved measurement reliability and positions SERS as a viable point-of-care testing platform for non-invasive kidney function monitoring without the infrastructure burden of traditional clinical chemistry laboratories.

---

## Lupus nephritis diagnosis and disease activity assessment

[[lupus-nephritis|Lupus nephritis]] is one of the most severe manifestations of childhood systemic lupus erythematosus, typically requiring invasive renal biopsy for definitive diagnosis and longitudinal assessment of disease activity. Conventional serological and urinary biomarkers exhibit limited sensitivity and specificity for disease confirmation and activity assessment, limiting their utility for guiding therapy and predicting outcomes. A dual-modal SERS approach, integrating simultaneous analysis of serum and urine metabolic fingerprints, enables non-invasive characterization of both systemic immune activation and localized renal injury without the morbidity of biopsy.³ Implementation on a high-throughput SERS microspot array plate platform enabled parallel analysis of 60 lupus nephritis patients, 40 systemic lupus erythematosus patients without nephritis, and 40 healthy controls. The dual-modal fusion model—combining SERS fingerprints from both serum and urine—demonstrated substantially superior sensitivity, specificity, and overall accuracy for both lupus nephritis diagnosis and assessment of disease activity compared to single-modality approaches.³ Beyond diagnostic confirmation, dual-modal SERS profiling revealed key biomolecular alterations associated with immune activation, inflammatory responses, and renal injury in children, providing molecular-level mechanistic insights into systemic lupus erythematosus pathophysiology and offering a non-invasive alternative to repeated renal biopsy for longitudinal monitoring.

---

## Substrate design and pH optimization

The performance of SERS-based diagnostic assays is fundamentally dependent on the chemical composition, morphology, and surface properties of the nanoparticle substrate. Core-shell architectures such as [[au-mpa-ag|Au@MPA@Ag nanoparticles]] have been engineered to balance multiple demands: plasmonic activity is enhanced by the silver shell, biocompatibility is afforded by the gold core, and chemical selectivity and quantification accuracy are conferred by the MPA interlayer, which serves both as an internal standard (providing a constant Raman signal for normalization) and a spacer controlling molecular orientation and accessibility.² pH optimization represents a critical parameter for improving detection sensitivity: alkaline conditions (pH 9) significantly enhance analyte adsorption and orientation onto the MPA-functionalized surface, driving stronger and more reproducible SERS responses compared to neutral or acidic conditions.² The use of MPA as an internal standard enables ratiometric quantification that corrects for substrate batch-to-batch variability, nanoparticle aggregation, and fluctuations in laser power—sources of instrumental noise that would otherwise limit measurement accuracy. This principle of rational substrate design and internal standardization extends beyond creatinine to broader biomarker detection applications, establishing a framework that can guide development of SERS platforms targeting additional disease-specific molecular signatures.

---

## High-throughput platforms and clinical translation

Scaling SERS-based diagnostics from single-sample laboratory analysis to clinically relevant throughputs requires integration with microspot array technology. High-throughput SERS microspot array plate platforms enable simultaneous multi-sample analysis, dramatically reducing per-sample analysis time while maintaining sensitivity and specificity.³ This technological advancement is essential for clinical translation, as it facilitates rapid, non-invasive screening of large patient cohorts and supports longitudinal disease monitoring without the burden of serial invasive procedures such as renal biopsy. The combination of high-throughput capability with dual-modal analysis—simultaneous analysis of multiple biofluids—represents a significant advance toward integrating SERS into routine clinical diagnostics.³ The microspot array format also enables systematic standardization and quality control across samples, mitigating batch-to-batch variability and instrumental drift that has historically limited clinical adoption of plasmonic and nanophotonic sensors. These platforms are thus positioned as a bridge between research-scale spectroscopic analysis and clinical-scale diagnostics for population screening and disease monitoring.

---

## Machine learning integration and spectral interpretation

The spectral complexity inherent in biological samples introduces significant variability in SERS signatures that can limit sensitivity and specificity if interpreted using conventional threshold-based or univariate approaches. [[svm|Support vector machine (SVM)]] classification directly addresses this challenge by learning non-linear decision boundaries that account for sample heterogeneity and inter-individual variability while maintaining robust classification performance.¹ Systematic optimization of data preprocessing—encompassing strategies for baseline correction, normalization, smoothing, and dimensionality reduction—critically influences classification accuracy in SERS-SVM models; evaluation of 27 distinct preprocessing strategies demonstrated that appropriate preprocessing can substantially improve diagnostic accuracy.¹ This preprocessing optimization is computationally intensive but essential for achieving diagnostic performance that rivals or exceeds conventional clinical methods. Furthermore, rigorous validation protocols including permutation testing and cross-validation provide statistical assurance that reported diagnostic accuracy reflects genuine biological signal rather than overfitting or random chance.¹ The integration of SERS spectroscopy with machine learning thus represents a complementary technological pairing: plasmonic enhancement provides the molecular sensitivity required to detect clinically relevant biomarkers in accessible biofluids, while machine learning addresses the spectral complexity and individual variation that would otherwise limit diagnostic utility.

---

## Non-invasive biofluid analysis

A defining advantage of SERS-based diagnostics is their capacity to enable biomarker detection from readily accessible biofluids—[[serum]], [[urine]], and [[exosomes]]—without requiring invasive biopsy or specialized sample collection procedures.¹²³ This non-invasive approach is particularly valuable in pediatric populations, in individuals requiring longitudinal monitoring, and in disease conditions where invasive sampling introduces unacceptable morbidity. In Parkinson's disease diagnosis, SERS of serum exosomes provides access to neurodegenerative disease biomarkers through routine blood sampling rather than cerebrospinal fluid analysis or advanced brain imaging.¹ In kidney disease monitoring, serum creatinine quantification by SERS offers point-of-care testing capability without the infrastructure burden of traditional clinical chemistry laboratories.² In lupus nephritis, dual-modal serum and urine analysis enables simultaneous assessment of both systemic immune activation and localized renal injury through collection of two easily obtainable biofluids.³ This emphasis on non-invasive analysis of accessible biofluids, combined with the inherent sensitivity of SERS, positions the technology as a versatile platform for disease screening, diagnosis confirmation, disease activity assessment, and longitudinal monitoring in both research and clinical care settings.

---

## References

1. PMID:41689984 — SERS of serum exosomes integrated with support vector machine achieves 85% accuracy for Parkinson's disease diagnosis
2. PMID:41570416 — pH-assisted ratiometric SERS using Au@MPA@Ag nanoparticles achieves 3.3 μM limit of detection for serum creatinine quantification
3. PMID:42101362 — Dual-modal serum and urine SERS metabolic fingerprinting on microspot array platform for lupus nephritis diagnosis and disease activity assessment