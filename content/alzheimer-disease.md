---
title: "Alzheimer's Disease"
---
# Alzheimer's Disease
`disease · neurodegeneration · dementia · synaptic dysfunction · molecular heterogeneity · amyloid-β · tau`

Last modified 2026-06-04 · 7 papers · 3 outgoing links · 15 incoming links

| | |
|---|---|
| **Type** | Neurodegenerative disease |
| **Pathology** | [[amyloid-beta|Amyloid-β]], [[tau]], synaptic loss |
| **Subtypes** | 3 distinct molecular subtypes |
| **Stage biomarkers** | [[arx|ARX]], [[mknk2|MKNK2]], [[slc25a16|SLC25A16]], [[neurl1b|NEURL1B]] |
| **Key therapies** | [[donanemab|Donanemab]], [[diminazene]], PAI-1 siRNA |
| **BBB challenge** | Major drug delivery barrier |
| **Papers** | 7 indexed |
| **Incoming links** | 15 wiki entities |

---

**Alzheimer's disease (AD)** is a progressive neurodegenerative disorder characterized by cognitive and functional decline, traditionally defined by the accumulation of [[amyloid-beta|amyloid-β]] plaques and [[tau]] tangles in the brain. Despite decades of focus on these pathological hallmarks, synaptic dysfunction and loss are now recognized as the central drivers of neurodegeneration, with current therapeutic approaches targeting amyloid-β or tau pathology having largely failed to rescue synaptic function.¹ The disease exhibits substantial molecular heterogeneity, with proteomic and transcriptomic analyses revealing at least three distinct subtypes characterized by dysregulated pathways in GABAergic, inflammatory, mitochondrial, and synaptic systems.² Stage-specific gene signatures enable molecular classification across Braak stages, with [[arx|ARX]] marking early disease, [[mknk2|MKNK2]] identifying mid-stage pathology, and [[slc25a16|SLC25A16]] and [[neurl1b|NEURL1B]] distinguishing late-stage progression.³

---

## Molecular heterogeneity and staging

Multilayer deep proteomic analysis of over 2,000 human brain samples has uncovered three molecularly distinct AD subtypes, each exhibiting unique patterns of pathway dysregulation.² Intra-disease comparisons reveal that these subtypes differ in the expression of microglial activation markers such as [[gpnmb|GPNMB]] and synaptic regulators including [[nptx2|NPTX2]], which emerge as shared hub proteins across neurodegenerative diseases. This heterogeneity complicates therapeutic development and underscores the need for personalized treatment strategies.

An explainable machine learning pipeline using multi-class [[xgboost|XGBoost]]-SHAP analysis has identified robust, stage-specific transcriptomic signatures that accurately classify early, mid, and late Braak stages with regional ROC AUCs reaching 0.76.³ The minimal signature overlap of approximately 1.7% between stages highlights the discrete molecular transitions occurring during disease progression. [[arx|ARX]], a transcription factor linked to GABAergic neuron development, emerges as the top early-stage marker, while [[mknk2|MKNK2]], involved in inflammatory signaling, characterizes mid-stage disease. Late-stage AD is distinguished by mitochondrial and synaptic pathway genes [[slc25a16|SLC25A16]] and [[neurl1b|NEURL1B]], providing validated biomarkers for molecular staging and prognostic assessment.

---

## Therapeutic approaches

[[donanemab|Donanemab]], a monoclonal antibody targeting the insoluble form of β-amyloid found in plaques, represents a significant advance in slowing cognitive and functional decline in participants with mild cognitive impairment or mild AD-related dementia.⁴ Clinical meaningfulness analyses demonstrate measurable benefits for patients and caregivers across various outcome assessments, though the therapy's inability to reverse synaptic loss highlights the persistent challenge of addressing downstream neurodegeneration.

Neuroinflammation has emerged as a critical therapeutic target. [[diminazene|Diminazene]], an agonist of the Ang-(1-7) system, suppresses astrocytic oxidative stress and ferroptosis through the miR-10b-3p/[[nox4|NOX4]] axis.⁵ [[nox4|NOX4]], abundantly expressed in astrocytes, critically mediates oxidative damage and ferroptosis in AD models, and its downregulation by diminazene attenuates neuronal loss. This intersection of neuroinflammation and regulated cell death pathways offers a complementary approach to amyloid-directed therapies.

Age-related systemic factors also contribute to AD pathology. Gene therapy targeting plasminogen activator inhibitor 1 (PAI-1) using siRNA-lipid nanoparticles achieves 90% knockdown of plasma PAI-1 in aged mice, reduces thrombotic complications, and prolongs lifespan.⁶ PAI-1 levels increase with age and contribute to cardiovascular morbidity, diabetes, and AD, suggesting that addressing systemic aging processes may yield neuroprotective benefits.

Ultrasound-driven neuromodulation using piezoelectric [[bczt-nanoparticles|Ba₀.₈₅Ca₀.₁₅Zr₀.₁Ti₀.₉O₃ (BCZT) nanoparticles]] represents a novel, non-genetic approach to restoring hippocampal function.¹ Focused ultrasound generates targeted gamma-frequency electromagnetic fields in the hippocampal CA3 subregion, effectively restoring impaired gamma oscillations, enhancing synaptic plasticity, and remodeling memory-related network connectivity. Mechanistically, NF-κB transcription factor activation regulates AMPAR trafficking by balancing synaptic internalization and delivery, with concurrent upregulation of P300-mediated histone acetylation. This strategy addresses synaptic dysfunction directly, offering a paradigm shift from molecular pathology to circuit-level repair.

---

## Drug delivery challenges

The blood-brain barrier remains a major obstacle to AD therapeutic development, severely limiting drug bioavailability in the central nervous system. Intranasal delivery has emerged as a promising alternative route. [[olmesartan|Olmesartan]], an angiotensin II receptor blocker with neuroprotective properties, has been repurposed for AD therapy through formulation in chitosan-coated bilosomes for intranasal administration.⁷ The optimized nanosized vesicles (185 nm) with positive surface charge demonstrate sustained release over 12 hours and achieve a 1.4-fold increase in brain-to-plasma AUC ratio compared to conventional routes. Behavioral assessments in lipopolysaccharide-induced AD rats reveal superior cognitive improvement, with reduced acetylcholinesterase activity and decreased oxidative stress markers confirming functional benefit.

This intranasal bilosome platform exemplifies the growing emphasis on advanced drug delivery systems, including lipid nanoparticle formulations for siRNA therapeutics and piezoelectric nanoparticles for focused neuromodulation, each designed to circumvent the blood-brain barrier and enable targeted brain intervention.

---

## References
1. PMID:41389410 — Piezoelectric nanoparticle-driven rhythmic ultrasound neuromodulation for treatment of early-stage Alzheimer's disease
2. PMID:41875888 — Pan-neurodegeneration proteomics reveals disease subtypes and molecular signatures
3. PMID:42156857 — Robust transcriptomic signatures of Alzheimer's disease progression: validated explainable AI approach
4. PMID:42128444 — Clinical meaningfulness of donanemab in early symptomatic AD
5. PMID:41698644 — Diminazene attenuates ferroptosis via miR-10b-3p/NOX4 in AD model
6. PMID:41587091 — Silencing of PAI-1 using siRNA-lipid nanoparticles reduces thrombosis and prolongs life span in murine models
7. PMID:41802492 — Intranasal delivery of chitosan-coated bilosomes for repurposing Olmesartan in Alzheimer's disease therapy