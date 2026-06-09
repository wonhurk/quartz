---
title: "NADPH"
---
# NADPH

`drug · coenzyme · neuroprotectant · metabolic cofactor · nicotinamide adenine dinucleotide phosphate · ischemic stroke · microbial biosynthesis`

Last modified 2026-06-05 · 3 papers · 16 incoming links

| | |
|---|---|
| **Type** | Coenzyme / neuroprotective drug |
| **Full name** | Nicotinamide adenine dinucleotide phosphate |
| **Key role (stroke)** | [[blood-brain-barrier\|BBB]] preservation, angiogenesis |
| **Key role (biosynthesis)** | Rate-limiting metabolic cofactor |
| **Molecular targets** | [[hif-1a]], [[src]], [[nlrp3]], [[casp3]], [[akt1]] |
| **Therapeutic dose** | 7.5 mg/kg (ischemic stroke) |
| **Infarct reduction** | ~50% |
| **Papers** | 3 indexed |
| **Incoming links** | 16 wiki entities |

---

**NADPH** (nicotinamide adenine dinucleotide phosphate) is a versatile coenzyme with dual roles as both an acute neuroprotectant in [[ischemic-stroke|ischemic stroke]] and a critical metabolic bottleneck in microbial biosynthesis. In stroke models, NADPH confers robust protection through reinforcement of [[blood-brain-barrier|blood-brain barrier]] integrity by upregulating tight junction proteins and suppressing inflammasome-mediated inflammation, while simultaneously promoting angiogenesis through activation of five key molecular targets: [[hif-1a|HIF-1α]], [[src|SRC]], [[nlrp3|NLRP3]], [[casp3|CASP3]], and [[akt1|AKT1]].¹ Beyond neuroprotection, NADPH availability emerges as a limiting factor in sustainable biomanufacturing; engineering endogenous NADPH-generating pathways in *Escherichia coli* has enabled economically viable production of platform chemicals including [[1-4-butanediol|1,4-butanediol]] and [[octanoic-acid|medium-chain fatty acids]], with 2–3 fold improvements in titers.²³

---

## Mechanism

NADPH exerts its neuroprotective effects through a multi-pronged mechanism targeting both barrier preservation and inflammatory suppression. Network pharmacology and molecular docking studies identified five critical targets of NADPH action in stroke: [[hif-1a|HIF-1α]], which drives pro-angiogenic signaling; [[src|SRC]], a kinase involved in endothelial function; [[nlrp3|NLRP3]], the inflammasome scaffold; [[casp3|CASP3]], an apoptotic caspase; and [[akt1|AKT1]], a key survival kinase.¹ The [[blood-brain-barrier|blood-brain barrier]] is protected through upregulation of tight junction proteins, particularly a 29% increase in [[zo-1|ZO-1]] expression, with electron microscopy confirming structural reinforcement of tight junctions.¹ Simultaneously, NADPH reduces protein levels of [[mmp9|matrix metalloproteinase-9]] (~23% reduction) and [[caveolin-1|caveolin-1]] (~50% reduction), both of which otherwise contribute to barrier disruption during ischemia.¹ 

NADPH simultaneously suppresses NLRP3 inflammasome activation—a major driver of post-stroke inflammation—by decreasing expression of [[nlrp3|NLRP3]] (~14% reduction), [[asc|ASC]] (~24% reduction), [[caspase-1|Caspase-1]] (~30% reduction), and [[il-1b|interleukin-1β]] (~16% reduction).¹ The coenzyme also enhances angiogenesis: NADPH elevation increases [[hif-1a|HIF-1α]] protein expression by ~77.1% at day 7 post-stroke, which in turn elevates [[vegf|VEGF]] expression by ~44.8%, driving new vessel formation and metabolic recovery.¹

---

## Ischemic stroke neuroprotection

In transient middle cerebral artery occlusion (tMCAO) models, NADPH demonstrates potent dose-dependent neuroprotection. At the optimal dose of 7.5 mg/kg, NADPH reduces infarct volume by approximately 50%, decreases cerebral edema from 81% to 76%, and improves neurological function by approximately 58% compared to vehicle controls.¹ These functional improvements correlate with preserved [[blood-brain-barrier|blood-brain barrier]] integrity: [[zo-1|tight junction protein ZO-1]] upregulation strengthens the barrier against infiltration of peripheral immune cells and inflammatory mediators, while suppression of [[mmp9|MMP9]] and [[caveolin-1|caveolin-1]] prevents matrix degradation and transcytosis.¹ The mechanistic network is reinforced through NLRP3 inflammasome suppression, which prevents caspase-1-mediated maturation of interleukin-1β and downstream inflammatory cascades that amplify ischemic injury.¹ In vitro, NADPH enhances endothelial cell proliferation and supports the formation of capillary-like structures, confirming the angiogenic pathway identified through network pharmacology.¹

---

## Metabolic cofactor in microbial biosynthesis

Beyond neuroprotection, NADPH functions as a critical rate-limiting cofactor in microbial biosynthesis of platform chemicals. The coenzyme is essential for reductive biosynthetic reactions but is often depleted in engineered production strains due to competing metabolic demands. Engineering endogenous NADPH-generating pathways—including enhanced pentose phosphate pathway flux and development of [[intracellular-biohybrid-system|intracellular biohybrid systems]]—increases intracellular NADPH pools by 73% in *E. coli*.² This metabolic bottleneck is particularly acute in production of reduced compounds such as diols and fatty acids, where each molecule synthesized consumes multiple NADPH equivalents.

---

## 1,4-Butanediol production

[[1-4-butanediol|1,4-Butanediol]] is a non-natural platform chemical used in biodegradable plastics, yet its microbial production has been severely constrained by inadequate NADPH availability. Introduction of five heterologous enzymes established a minimal 1,4-butanediol biosynthetic pathway in *E. coli*, yielding 0.93 g/L from glucose. Precursor engineering to boost succinyl-CoA availability increased the titer to 1.87 g/L, and strengthening endogenous NADPH-generating pathways combined with development of an [[intracellular-biohybrid-system|intracellular biohybrid system]] increased intracellular NADPH levels by 73%, resulting in a 1,4-butanediol titer of 2.54 g/L (35.8% improvement).² After optimization of fermentation conditions, the engineered strain BDO-25 achieved 3.1 g/L in shake-flask fermentation and 7.5 g/L in 5-L bioreactor scale-up, achieved without antibiotics or chemical inducers, offering a scalable strategy for NADPH-dependent diol biosynthesis.²

---

## Medium-chain fatty acid production

[[octanoic-acid|Medium-chain fatty acids]] (MCFAs) are valuable precursors for biofuels and commodity chemicals, but their biosynthesis in *E. coli* is severely limited by cytotoxic effects on cell membranes and metabolism. A genome-scale CRISPR interference (CRISPRi) screening library systematically identified genes whose repression enhanced tolerance to [[octanoic-acid|octanoic acid]] (C8). Repression of *ygaM*, *gluQ*, *gatY*, and *talA* individually conferred 1.1- to 1.7-fold increases in C8 production and enhanced stress tolerance through improved membrane properties, reduced reactive oxygen species accumulation, and altered cell morphology.³ Critically, further metabolic engineering to optimize NADPH availability increased [[octanoic-acid|octanoic acid]] production to 1083 mg/L, representing a 2.3-fold increase compared to the parental strain, establishing NADPH optimization as a key metabolic engineering lever for MCFA biosynthesis.³

---

## References

1. PMID:41638470 — NADPH exerts neuroprotection in ischemic stroke by reinforcing blood-brain barrier integrity and stimulating angiogenesis
2. PMID:41981749 — Engineering precursor and NADPH supply to enhance 1,4-butanediol production in plasmid-free *Escherichia coli*
3. PMID:42084552 — Genome-scale CRISPRi screening identifies gene targets for enhanced octanoic acid tolerance and production in *Escherichia coli*