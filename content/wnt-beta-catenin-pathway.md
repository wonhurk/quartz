---
title: "Wnt/β-catenin Signaling Pathway"
---
# Wnt/β-catenin Signaling Pathway
`technology · wnt-signaling · therapeutic resistance · cancer progression · feedback regulation · β-catenin stabilization`

Last modified 2026-06-04 · 5 papers · 4 outgoing links · 5 incoming links

| | |
|---|---|
| **Type** | Canonical signaling pathway |
| **Mechanism** | β-catenin stabilization and transcriptional activation |
| **Key components** | WNT ligands, β-catenin, GSK3β, APC |
| **Resistance phenotype** | Cuproptosis, chemotherapy, ADCs, oxidative stress |
| **Disease contexts** | CRC, LUSC, TNBC, endometriosis, IPF |
| **Papers** | 5 indexed |
| **Incoming links** | 5 wiki entities |

---

**The Wnt/β-catenin signaling pathway** is a central regulatory axis in cell fate determination, proliferation, and differentiation, whose aberrant activation drives therapeutic resistance and cancer progression across multiple malignancies including [[colorectal-cancer|colorectal cancer (CRC)]], [[lung-squamous-cell-carcinoma|lung squamous cell carcinoma (LUSC)]], [[triple-negative-breast-cancer|triple-negative breast cancer (TNBC)]], and fibrotic diseases. The pathway functions through stabilization and nuclear translocation of β-catenin, enabling transcription of genes that promote cell cycle progression, suppress apoptosis, and confer stemness and drug resistance.¹ Aberrant pathway activation confers intrinsic tolerance to diverse therapeutic modalities including [[cuproptosis]]-based therapies, chemotherapy, antibody-drug conjugates (ADCs), and oxidative damage, necessitating combinatorial targeting strategies to restore therapeutic sensitivity.¹⁻³

---

## Mechanism

In the canonical Wnt/β-catenin pathway, WNT ligands — particularly WNT3 — bind to Frizzled receptors and LRP5/6 co-receptors, triggering a cascade that inhibits the β-catenin destruction complex comprising APC, AXIN, and GSK3β. This stabilizes cytoplasmic β-catenin, which accumulates and translocates to the nucleus to activate TCF/LEF-dependent transcription.² In [[colorectal-cancer|CRC]], the pathway forms a positive feedback loop with [[dkc1|DKC1]], a coordinator of RNA modification and telomerase activity, driving sustained oncogenic signaling and enrichment of the WNT-dominated Consensus Molecular Subtype 2 (CMS2), which associates with poor prognosis.⁴ This feedback architecture amplifies pathway output, promoting cell cycle progression, suppressing apoptosis, and conferring both stemness and drug resistance phenotypes.⁴

---

## Therapeutic resistance

Aberrant Wnt/β-catenin activation represents a master resistance mechanism across multiple therapeutic modalities. In [[cuproptosis]] therapy — a copper-dependent form of regulated cell death — elevated Wnt/β-catenin signaling confers intrinsic tolerance that significantly undermines therapeutic efficacy.¹ The pathway similarly drives resistance to conventional chemotherapy, particularly in [[colorectal-cancer|CRC]] where [[dkc1|DKC1]]-mediated activation enables FOLFOX resistance in patient-derived organoids.⁴ In advanced CRC, TROP2-directed ADCs such as IMMU132 (delivering SN-38 to induce TOP1-mediated DNA damage) face resistance that can be attributed in part to sustained Wnt/β-catenin activity, which supports adaptive survival pathways even under therapeutic pressure.⁵

In [[lung-squamous-cell-carcinoma|LUSC]] arising within idiopathic pulmonary fibrosis (IPF), WNT3 activation drives an antioxidant response mediated by NRF2, rendering cancer cells resistant to oxidative damage.² Notably, targeting Wnt/β-catenin signaling restores sensitivity to oxidative stress in these therapy-adapted cell lines, demonstrating the pathway's central role in resistance and its druggability.²

---

## Colorectal cancer

In [[colorectal-cancer|CRC]], Wnt/β-catenin signaling is both a driver of tumorigenesis and a mediator of therapy failure. Elevated [[dkc1|DKC1]] expression associates with poor prognosis and the WNT-enriched CMS2 gene signature, reflecting a subtype characterized by epithelial differentiation and chemoresistance.⁴ The DKC1/WNT feedback loop dysregulates sphingolipid biosynthesis through a regulatory axis involving SOX2 and SGPP2, leading to aberrant accumulation of very-long-chain fatty acid ceramides that promote chemoresistance.⁴ Importantly, FOLFOX-resistant patient-derived organoids respond effectively to combined DKC1 and WNT signaling inhibition, establishing this axis as a high-priority therapeutic target.⁴

In advanced CRC treated with TROP2-directed ADCs, concurrent suppression of the PERK-eIF2α-ATF4 pathway — a key adaptive response to therapy-induced endoplasmic reticulum (ER) stress — enhances Wnt/β-catenin pathway inhibition. Combining IMMU132 with the PERK inhibitor [[gsk2606414|GSK2606414]] yields potent synergy across preclinical models, stemming from enhanced suppression of both ER stress and oncogenic Wnt/β-catenin signaling.⁵ This co-targeting strategy overcomes ADC resistance by dismantling the adaptive survival architecture.⁵

---

## Lung squamous cell carcinoma

In [[lung-squamous-cell-carcinoma|LUSC]] arising within the context of idiopathic pulmonary fibrosis, WNT3 is aberrantly activated in both fibrotic tissue and associated tumors.² Multi-omics analysis reveals that LUSC tumors within usual interstitial pneumonia (UIP) exhibit molecular profiles suggesting derivation from metaplastic basal cells arising via transdifferentiation of alveolar type 2 (AT2) cells.² Both UIP-affected tissue and associated tumors demonstrate activation of Wnt signaling alongside enrichment of NRF2-linked antioxidant responses, conferring stress adaptation that enables resistance to oxidative damage.² Targeting Wnt/β-catenin signaling restores therapeutic sensitivity, linking fibrosis-driven carcinogenesis to a druggable molecular vulnerability.²

---

## Non-cancer contexts

Beyond oncology, Wnt/β-catenin signaling plays a pathogenic role in fibrotic diseases. In endometriosis — characterized by progressive fibrosis and limited therapeutic options — cuproptosis-related gene (CRG) activity is enriched in a distinct fibroblast subpopulation with profibrotic transcriptional features.³ Network and machine learning analyses identified [[aebp1|AEBP1]] as a fibroblast-associated hub gene linked to cuproptosis-related signatures, with in vitro studies demonstrating that CuCl₂ plus elesclomol treatment increases AEBP1 expression alongside changes in β-catenin pathway proteins.³ Knockdown of either FDX1 or AEBP1 attenuates these effects, and in vivo treatment with the copper chelator tetrathiomolybdate (TTM) modulates the pathway, suggesting that Wnt/β-catenin signaling bridges cuproptosis and fibrogenesis in endometrial stromal cells.³

---

## Therapeutic strategies

Multiple approaches have emerged to target Wnt/β-catenin signaling and overcome resistance. [[Cisplatin]] suppresses Wnt signaling via p53-mediated upregulation of RARRES3, providing mechanistic rationale for platinum-based combination strategies.¹ The twinborn metallic polymer nanoparticle NP(Pt-Cu), co-assembled from a [[cuproptosis]] inducer (TriPy-Cu) and oxidized cisplatin (Pt(IV)), acts as a type II [[immunogenic-cell-death|immunogenic cell death (ICD)]] inducer that suppresses the Wnt/β-catenin pathway via ER stress-triggered Ca²⁺ overload.¹ In orthotopic [[triple-negative-breast-cancer|TNBC]] models, NP(Pt-Cu) demonstrates superior tumor suppression and immune activation over monotherapies, addressing [[cuproptosis]] tolerance via Wnt pathway inhibition.¹

In advanced [[colorectal-cancer|CRC]], dual targeting of TROP2 and the PERK pathway with IMMU132 plus [[gsk2606414|GSK2606414]] synergistically suppresses Wnt/β-catenin signaling, overcoming ADC resistance.⁵ Direct inhibition of [[dkc1|DKC1]] and WNT signaling restores chemosensitivity in FOLFOX-resistant organoids, with complex sphingolipids emerging as candidate plasma-based biomarkers for monitoring therapeutic response.⁴

---

## References
1. PMID:42041155 — Reversing Cuproptosis Tolerance with Twinborn Metallic Polymer Nanoparticles  
2. PMID:42063567 — Wnt3-mediated fibrosis and carcinogenesis of lung squamous cell carcinoma in idiopathic pulmonary fibrosis  
3. PMID:42149287 — Single-cell profiling identifies cuproptosis-related fibroblast subpopulations and AEBP1 in endometriosis  
4. PMID:42151151 — DKC1 promotes colorectal cancer progression and therapy resistance by dysregulating sphingolipid biosynthesis  
5. PMID:42030933 — Overcoming ADC resistance in advanced colorectal cancer by dual targeting of TROP2 and PERK