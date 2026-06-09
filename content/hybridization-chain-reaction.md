---
title: "Hybridization Chain Reaction"
---
# Hybridization Chain Reaction
`technology · isothermal amplification · nucleic acid detection · biomarker sensing · signal amplification · cancer diagnostics`

Last modified 2026-06-06 · 2 papers · 2 incoming links

| | |
|---|---|
| **Type** | Isothermal nucleic acid amplification |
| **Mechanism** | Sequential hybridization of DNA hairpin probes |
| **Signal activation** | Proximity-triggered cascade amplification |
| **Key biomarkers** | [[pd-l1|gPD-L1]], [[pls3|PLS3 mRNA]] |
| **Detection limit** | 5.8 attomolar (aM) |
| **Amplification coupling** | [[ape1|APE1]] enzyme catalysis, nanomaterial scaffolds |
| **Papers** | 2 indexed |
| **Incoming links** | 2 wiki entities |

---

**Hybridization chain reaction (HCR)** is an isothermal, DNA-based amplification technology that enables programmable, proximity-triggered cascade amplification of nucleic acid signals for detection of disease biomarkers with attomolar sensitivity. The core mechanism involves sequential hybridization of DNA hairpin probes whose accumulation produces linear DNA polymers, dramatically amplifying detection signals in real-time without requiring thermocycling. In breast cancer diagnostics, HCR has been integrated into advanced electrochemical and imaging platforms to detect glycosylated [[pd-l1|PD-L1]] on small [[extracellular-vesicles|extracellular vesicles (sEVs)]] for predicting [[immunotherapy]] response, and [[pls3|plastin-3 (PLS3)]] mRNA to identify early metastatic lesions with single-cell resolution.¹² By coupling HCR with synergistic amplification strategies—including [[ape1|APE1]]-mediated enzyme catalysis, nanoflexible electrode scaffolds, and spatiotemporal control mechanisms—these diagnostic platforms achieve exceptional sensitivity enabling detection of clinically relevant biomarker variants that conventional immunohistochemistry cannot identify.

---

## Mechanism

HCR operates through a proximity-triggered cascade amplification principle in which a target nucleic acid (DNA or RNA) initiates hybridization of metastable DNA hairpin probes maintained in equilibrium solution. The first hairpin probe, held in a kinetically stable but thermodynamically unfavorable state, remains dormant until target-binding opens its stem and exposes the complementary region. This conformational change permits the probe to hybridize with the second hairpin, which undergoes sequential strand displacement amplification, releasing complementary binding domains that recruit additional hairpins in rapid succession.¹ The resulting chain reaction generates linear DNA polymers whose accumulation produces signal amplification without requiring exogenous energy or external heating, making HCR fundamentally isothermal and thus compatible with in situ imaging and point-of-care diagnostics.

The isothermal nature of HCR is its central advantage over polymerase chain reaction (PCR)-dependent methods, as it permits real-time detection in heterogeneous samples and within intact tissues. Importantly, HCR amplification is decoupled from enzymatic turnover, enabling precise programmable control over both amplification kinetics and spatial localization of amplified products. This property has been leveraged to develop multigated DNA cascade amplifiers incorporating intracellular triggers—such as glutathione-responsive release and UV-activated probe unfolding—that afford spatiotemporal control during biomarker detection.²

---

## Breast cancer applications

HCR has emerged as a cornerstone technology for advanced breast cancer diagnostics, particularly in addressing critical detection blind spots where conventional immunohistochemistry fails. The CAP-g bioplatform integrates HCR with dual-recognition proximity cascade amplification to detect glycosylated [[pd-l1|PD-L1]] (gPD-L1) on small [[extracellular-vesicles|extracellular vesicles (gPD-L1-sEVs)]].¹ Conventional epitope-based detection methods are confounded by glycan-mediated shielding of the PD-L1 epitope, creating a "detection blind spot" that has impeded accurate prediction of [[immune-checkpoint-blockade]] response. The CAP-g platform overcomes this limitation by co-anchoring both a PD-L1 aptamer and a carbohydrate-binding glycan probe on a three-dimensional nanoflexible carbon fiber/DPEDOT:PSS/Au scaffold. Upon simultaneous binding of both recognition elements to target gPD-L1-sEVs, the resulting proximity activates HCR, generating linear DNA polymers that undergo electrochemical detection with an ultralow limit of detection of 52 particles/mL—one to two orders of magnitude superior to existing gPD-L1-sEV detection methods.¹ This enhanced sensitivity enables stratification of breast cancer patients for immunotherapy response prediction by revealing glycan-modified [[pd-l1|PD-L1]] variants that evade conventional biomarker assays.

For metastasis detection, the multigated DNA cascade amplifier (MDCA) platform leverages HCR combined with [[ape1|APE1]]-mediated enzyme catalytic amplification to enable single-cell imaging of [[pls3|plastin-3 (PLS3)]] mRNA, a key biomarker of breast cancer metastatic potential due to its role in cytoskeletal remodeling and cell motility.² DNA hairpin probes are pre-immobilized on MnO₂ nanoflowers that facilitate intracellular delivery via endocytosis. Inside cells, glutathione-triggered reduction and external UV irradiation enable programmed, sequential release of probe hairpins, ensuring precise spatiotemporal activation. Upon hybridization with intracellular PLS3 mRNA, the probe undergoes HCR-mediated strand displacement while simultaneously activating [[ape1|APE1]]-catalyzed fluorophore generation, resulting in dual-amplification that achieves a detection limit of 5.8 attomolar (aM). This exceptional sensitivity permits visualization of PLS3 mRNA in individual cancer cells and in clinical tissue samples, with machine learning-assisted image analysis facilitating identification of small metastatic foci with >92% accuracy.² The MDCA platform thus advances early cancer detection and metastasis risk stratification in precision oncology by enabling visualization of biomarkers invisible to conventional techniques.

---

## Signal amplification strategies

HCR's power derives from its capacity for seamless integration with complementary amplification mechanisms. Enzyme-catalyzed amplification via [[ape1|APE1]]—which catalytically processes abasic sites to generate fluorogenic signals—synergizes with HCR-driven polymer accumulation to achieve dual amplification; the linear DNA products generated by HCR serve as templates for [[ape1|APE1]]-catalyzed label deposition in proximity to the target, exponentially enhancing signal-to-noise ratios.² Nanomaterial scaffolding—including carbon fiber/conducting polymer/gold three-dimensional networks—further augments signal transduction by maximizing effective surface area, minimizing charge-transfer resistance, and facilitating electron transfer kinetics during electrochemical readout.¹ Multigated activation strategies employing redox-responsive (glutathione) and light-responsive (UV) triggers enable programmable, spatially precise control of cascade initiation, permitting real-time imaging with single-cell resolution and reduced background signal in complex tissue environments.²

---

## References
1. PMID:42065221 — Flexible Dual-Apt Scaffolds Reveal gPD-L1-sEVs in Breast Cancer
2. PMID:41961955 — Multigated DNA Cascade Amplifier for Ultrasensitive Spatiotemporal Imaging of PLS3 mRNA at the Single-Cell Level for Early Detection of Breast Cancer Metastasis