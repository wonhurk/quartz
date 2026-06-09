---
title: "mTORC1"
---
# mTORC1

`protein · kinase · nutrient sensor · amino acid sensing · metabolism · cancer · metabolic disease`

Last modified 2026-06-05 · 4 papers · 5 incoming links

| | |
|---|---|
| **Type** | Protein kinase |
| **Mechanism** | Nutrient sensing via amino acid transporter; canonical and non-canonical substrate phosphorylation |
| **Key transporter** | [[slc7a5\|SLC7A5]] |
| **Regulatory complex** | [[flcn\|FLCN]]-[[fnip1\|FNIP1]]/[[fnip2\|FNIP2]] |
| **Non-canonical target** | [[tfeb\|TFEB]] |
| **Applications** | TNBC ferroptosis, MASH |
| **Papers** | 4 indexed |

---

**mTORC1** (mechanistic target of rapamycin complex 1) is a serine/threonine protein kinase that integrates amino acid availability—particularly leucine uptake through the [[slc7a5|SLC7A5]] transporter—to regulate cellular metabolism and survival signaling.¹ The complex phosphorylates both canonical substrates and non-canonical targets such as [[tfeb|TFEB]], a transcription factor controlling [[autophagy]] and lysosomal biogenesis, whose phosphorylation is controlled by the [[flcn|FLCN]]-[[fnip1|FNIP1]]/[[fnip2|FNIP2]] regulatory complex.² Emerging evidence demonstrates that selective inhibition of the non-canonical mTORC1-[[tfeb|TFEB]] signaling axis—while preserving canonical mTORC1 functions—offers distinct clinical advantages: promoting [[ferroptosis]] in therapy-resistant [[triple-negative-breast-cancer|triple-negative breast cancer (TNBC)]] and alleviating lipotoxic liver disease, while maintaining essential metabolic homeostasis.

---

## Mechanism

mTORC1 functions as a cellular nutrient sensor by responding to amino acid availability, particularly leucine levels. The [[slc7a5|SLC7A5]] transporter mediates leucine uptake, and when leucine is available, mTORC1 translocates to the lysosomal membrane to phosphorylate downstream effectors.¹ The [[flcn|FLCN]]-[[fnip1|FNIP1]]/[[fnip2|FNIP2]] complex regulates mTORC1 substrate selectivity, controlling the cytoplasmic sequestration of [[tfeb|TFEB]] downstream of mTORC1-mediated phosphorylation.² [[tfeb|TFEB]] acts as a master transcription factor of [[autophagy]] and lysosomal biogenesis, coordinating the expression of genes controlling autophagic responses and lysosomal acidification. Suppression of mTORC1 signaling triggers [[autophagy]] and alters lysosomal pH dynamics; leucine starvation particularly sensitizes cells to this suppression, as nutrient deprivation prevents mTORC1 reactivation until amino acid sufficiency is restored.

---

## Ferroptosis induction in triple-negative breast cancer

[[triple-negative-breast-cancer|Triple-negative breast cancer (TNBC)]] lacks druggable hormone receptors and HER2, rendering it resistant to endocrine and targeted therapies. mTORC1 suppression has emerged as a mechanism to induce [[ferroptosis]]—an iron-dependent form of regulated cell death driven by lipid peroxidation—in otherwise intractable TNBC. Blocking leucine uptake through [[slc7a5|SLC7A5]] via the inhibitor [[jph203|JPH203]] suppresses mTORC1 signaling and simultaneously disrupts cellular iron and redox homeostasis, synergizing with mitochondrial reactive oxygen species to trigger ferroptotic collapse.¹ In orthotopic [[triple-negative-breast-cancer|TNBC]] models, [[jph203|JPH203]]-loaded camptothecin-peptide conjugate nanoassemblies achieved 81.2% tumor growth suppression and significantly extended overall survival. Beyond direct cytotoxic effects, ferroptotic tumor cells promote dendritic cell maturation and [[cd8-t-cells|CD8+ T cell]] activation, demonstrating synergy between ferroptotic cell death and adaptive anti-tumor immunity.¹ This dual engagement of cell death and immune activation positions mTORC1 suppression as a strategy for overcoming [[triple-negative-breast-cancer|TNBC]]'s therapeutic resistance.

---

## Selective non-canonical inhibition in metabolic disease

[[metabolic-dysfunction-associated-steatohepatitis|Metabolic dysfunction-associated steatohepatitis (MASH)]] emerges as a leading cause of chronic liver disease, yet global mTORC1 suppression carries risks of metabolic dysfunction. Selective inhibition of the non-canonical mTORC1-[[tfeb|TFEB]] signaling axis—without affecting canonical mTORC1 substrates—alleviates hepatic steatosis, inflammation, insulin resistance, and fibrosis.² The natural compound [[byakangelicin]] directly binds the [[flcn|FLCN]] regulatory protein at residues MET370 and PHE552, suppressing the [[flcn|FLCN]]-[[fnip1|FNIP1]]/[[fnip2|FNIP2]] complex and selectively blocking mTORC1-mediated [[tfeb|TFEB]] phosphorylation and cytoplasmic sequestration.² Genetic deletion of hepatic [[tfeb|TFEB]] completely abolished [[byakangelicin]]'s protective effects against steatosis, inflammation, insulin resistance, and fibrosis, establishing [[tfeb|TFEB]] as the critical mediator of therapeutic benefit. This selective targeting approach preserves mTORC1's canonical functions essential for hepatic protein synthesis and energy metabolism, while blocking the pathological TFEB-dependent lipotoxic signaling that drives [[metabolic-dysfunction-associated-steatohepatitis|MASH]] progression.

---

## Lysosomal sequestration and kinase inhibitor pharmacodynamics

Small-molecule kinase inhibitors frequently exhibit cellular effects extending beyond their primary molecular targets. The clinical-stage tyrosine kinase inhibitor [[masitinib]] undergoes pH-dependent lysosomal sequestration and preferentially accumulates in acidic, negatively charged membranes.³ This lysosomal sequestration suppresses mTORC1 signaling while paradoxically inducing [[akt|AKT]] phosphorylation through a [[vps34|VPS34]]- and rapamycin-sensitive pathway independent of class I PI3K.³ The lysosomal accumulation of [[masitinib]] impairs lysosomal acidification and disrupts [[autophagy|autophagic flux]], establishing a mechanistic link between the physicochemical properties of kinase inhibitors and their downstream signaling effects. These findings highlight lysosomal sequestration as a key determinant of kinase inhibitor pharmacodynamics, suggesting that subcellular drug distribution may explain previously enigmatic effects of mTORC1 inhibitors and inform the design of future inhibitors.

---

## Computational discovery of mTORC1 inhibitors

Modern computational approaches are accelerating the identification of mTORC1-selective inhibitors. Generative transformer models such as VeGA-SCX have been developed to controllably generate novel bioactive chemotypes while maintaining drug-like properties.⁴ Retrospective benchmarking on mTORC1 revealed superior recovery of bioactive molecules (>90% on holdout sets) compared to state-of-the-art diffusion models, with the approach leveraging topological guidance via Bemis-Murcko scaffolds to balance structural novelty with preservation of pharmacophoric features.⁴ The success of these computational strategies, combined with growing mechanistic understanding of mTORC1's substrate selectivity and the pharmacological advantages of selective non-canonical inhibition, suggests that next-generation mTORC1 inhibitors may preferentially target the [[tfeb|TFEB]]-regulatory pathway over canonical substrates.

---

## References
1. PMID:41839266 — In situ delivery of JPH203 via camptothecin-peptide conjugate nanoassemblies to trigger ferroptosis in triple-negative breast cancer
2. PMID:42152469 — Byakangelicin alleviates metabolic dysfunction-associated steatohepatitis by selective inhibition of non-canonical MTORC1 signaling pathway
3. PMID:42009094 — Lysosomal accumulation of masitinib alters autophagy via pH-dependent trapping
4. PMID:41992779 — VeGA-RX and VeGA-SCX: Controllable SMARTS-guided generative transformers for precision-driven de novo drug design