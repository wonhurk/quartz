---
title: "Adenine Base Editor"
---
# Adenine Base Editor

`technology · gene editing · point mutation · base editor · therapeutic delivery · precision medicine`

Last modified 2026-06-06 · 2 papers · 3 outgoing links · 4 incoming links

| | |
|---|---|
| **Type** | Gene-editing technology |
| **Mechanism** | Adenine-to-guanine point mutations without double-strand breaks |
| **Key variant** | [[scn1a\|SCN1A R613X]] (Dravet syndrome) |
| **CNS delivery** | Dual-[[aav\|AAV9]] system |
| **Cardiac delivery** | [[18-1-tap10\|18:1 TAP10]] lipid nanoparticles |
| **Primary applications** | Neurological, cardiac, [[duchenne-muscular-dystrophy\|DMD]] |
| **CNS editing efficiency** | 97% mRNA editing in neocortex |
| **Cardiac transfection** | 36% cardiomyocyte efficiency (intramyocardial) |
| **Papers** | 2 indexed |
| **Incoming links** | 4 wiki entities |

---

**Adenine base editor (ABE)** is a precision gene-editing technology that catalyzes adenine-to-guanine point mutations, enabling direct correction of pathogenic variants without inducing double-strand breaks.¹ Unlike conventional CRISPR systems that create DNA damage requiring potentially mutagenic repair, ABE operates through a deaminase-catalyzed mechanism that converts adenine nucleotides to inosine (read as guanine by cellular machinery), thereby correcting loss-of-function mutations at their source. The technology has demonstrated therapeutic potential across multiple organ systems, with particular promise in [[dravet-syndrome|Dravet syndrome]], a severe drug-resistant epilepsy caused by [[scn1a|SCN1A]] deficiency, and in [[heart-disease|cardiac disorders]] including [[duchenne-muscular-dystrophy|Duchenne muscular dystrophy (DMD)]]-associated cardiomyopathy.

---

## Mechanism

Adenine base editors function through direct adenine-to-guanine conversion mediated by adenosine deaminase domains, without requiring the creation of double-strand breaks that characterize conventional gene-editing approaches. The catalytic conversion of adenine to inosine is subsequently read as guanine during DNA replication and transcription, enabling precise single-nucleotide correction. This mechanism is particularly well-suited for correcting nonsense and missense variants that lead to loss-of-function phenotypes. In engineered cell systems, ABE has demonstrated high editing efficiency: 72% correction of the [[scn1a|SCN1A R613X]] variant in human embryonic kidney 293T cells and 92% in mouse Neuro-2a cells.¹ These in vitro achievements translate to functional correction in vivo, where molecular editing at the DNA and mRNA level directly restores protein function and cellular phenotypes.

---

## Dravet Syndrome Correction

[[Dravet-syndrome|Dravet syndrome]] is a devastating neurodevelopmental disorder caused by loss-of-function variants in [[scn1a|SCN1A]], which encodes the α subunit of the voltage-gated sodium channel Nav1.1, essential for the excitability of parvalbumin-expressing inhibitory neurons. The recurrent [[scn1a|SCN1A R613X]] mutation is a principal pathogenic variant, driving drug-resistant seizures, temperature sensitivity, cognitive impairment, and sudden unexpected nocturnal death in epilepsy (SUDEP). ABE-mediated correction of this variant in a transgenic mouse model carrying the heterozygous [[scn1a|SCN1A R613X]] mutation achieved remarkable molecular and functional outcomes. When delivered via a dual-[[aav|AAV9]] system optimized for neonatal central nervous system targeting, ABE treatment achieved 59% DNA editing and 97% mRNA editing in bulk neocortices.¹ This molecular correction restored parvalbumin-expressing inhibitory neuron excitability and sodium current to wild-type levels, directly addressing the cellular pathology underlying seizure generation. The phenotypic rescue was substantial: ABE-treated neonates showed a 3.3-fold improvement in 45-day survival (90% versus 27% in vehicle-treated controls), with both spontaneous and temperature-induced seizures ameliorated.¹ Treatment efficacy persisted when initiated later, at postnatal day 12, yielding a 3.0-fold improvement in 60-day survival, suggesting a therapeutic window for intervention beyond the immediate neonatal period.

---

## Cardiac Delivery and DMD Therapeutics

[[Heart-disease|Cardiac gene editing]] has been severely limited by insufficient transfection efficiency of available delivery vehicles; however, systematic optimization of lipid nanoparticles (LNPs) has dramatically expanded ABE's therapeutic reach. A human cell-based screening platform utilizing induced pluripotent stem cell-derived cardiomyocytes identified [[18-1-tap10|18:1 TAP10]] as a lead LNP with potent human cardiac tropism.² Four distinct administration routes were evaluated—intravenous, intrathoracic, intracoronary, and intramyocardial injection—each enabling different spatial distributions and cellular tropism profiles. While all routes achieved robust transfection in non-cardiac cell populations (up to 40% in endothelial cells), intramyocardial injection notably achieved substantial cardiomyocyte transfection: 36% efficiency at the injection site and 13% at distal regions.² This localized delivery approach proved essential for achieving clinically meaningful cardiomyocyte editing.

ABE delivered via optimized [[18-1-tap10|18:1 TAP10]] LNPs has demonstrated therapeutic efficacy in [[duchenne-muscular-dystrophy|Duchenne muscular dystrophy]], a fatal disorder resulting from loss of [[dystrophin|dystrophin function]].² When ABE components were delivered to [[duchenne-muscular-dystrophy|DMD]] patient-derived induced pluripotent stem cell-derived cardiomyocytes, the system achieved 80% on-target gene correction and restored [[dystrophin|dystrophin]] expression.² In a humanized [[duchenne-muscular-dystrophy|DMD]] mouse model, intramyocardial administration of LNP-ABE resulted in [[dystrophin|dystrophin]]-positive cardiomyocytes in the injected left ventricle, establishing proof-of-concept for functional gene correction in diseased cardiac tissue.² These findings indicate that ABE represents a promising therapeutic strategy for correcting [[dystrophin|dystrophin]] deficiency in [[duchenne-muscular-dystrophy|DMD]]-associated cardiomyopathy, a leading cause of death in this population.

---

## Delivery System Optimization

The therapeutic efficacy of ABE is critically dependent on delivery system selection and optimization. For central nervous system applications, dual-[[aav|AAV9]] systems achieve high CNS penetration and robust editing efficiency in neuronal tissues, making them well-suited for disorders like [[dravet-syndrome|Dravet syndrome]]. In contrast, cardiac delivery requires intramyocardial administration of optimized LNPs to achieve therapeutically relevant cardiomyocyte transfection; systemic administration via intravenous or intracoronary routes, while reaching cardiac tissue, fails to achieve the 36% cardiomyocyte transfection efficiency achieved by direct injection. The discovery and optimization of [[18-1-tap10|18:1 TAP10]] through chemically diverse LNP screening demonstrates the importance of human cell-based platforms in identifying tissue-specific delivery vectors, particularly for organ systems where systemic administration is inefficient. This systems-level integration of editor technology with optimized delivery vehicles is likely essential for translating ABE to clinical practice across diverse therapeutic contexts.

---

## References

1. PMID:42127220 — In vivo adenine base editing ameliorates Dravet syndrome phenotypes in a mouse model
2. PMID:42150080 — A human cardiomyocyte screen identifies optimized lipid nanoparticles for in vivo cardiac gene editing