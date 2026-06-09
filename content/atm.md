---
title: "ATM"
---
# ATM

`protein · kinase · dna-damage-response · colorectal-cancer · prostate-cancer · therapeutic-resistance`

Last modified 2026-06-05 · 2 papers · 4 outgoing links · 4 incoming links

| | |
|---|---|
| **Type** | Serine/threonine protein kinase |
| **Function** | Master regulator of DNA damage response |
| **Key substrate** | [[chk2\|CHK2]] |
| **Recruitment target** | [[brca1\|BRCA1]] |
| **Regulated by** | [[fasn\|FASN]], [[m1c\|M1C]] |
| **Papers** | 2 indexed |
| **Incoming links** | 4 wiki entities |

---

**ATM** (Ataxia Telangiectasia Mutated) is a serine/threonine protein kinase and master regulator of the DNA damage response (DDR), serving as the critical surveillance hub that detects double-strand breaks and orchestrates genome protection through the recruitment of repair proteins including [[brca1|BRCA1]].¹ As the principal kinase node in DDR signaling, ATM phosphorylates downstream effectors such as [[chk2|CHK2]], propagating damage signals throughout the cell to trigger checkpoint arrest and coordinate DNA repair. The expression and activity of ATM are subject to strikingly context-dependent regulation: in colorectal cancer, suppression of ATM confers potent therapeutic advantage by impairing DNA repair capacity and sensitizing tumors to genotoxic stress and [[parp-inhibitors|PARP inhibition]], whereas in castration-resistant prostate cancer, compensatory ATM induction drives retrotransposon activation and resistance to PARP inhibitors. This duality—where the same protein suppression is beneficial in one cancer type yet harmful to target in another—underscores the necessity of tissue-specific and cancer-specific ATM regulation strategies in precision oncology.

---

## Mechanism and role in DSB repair

ATM is recruited to sites of double-strand breaks (DSBs) and undergoes autophosphorylation-mediated activation, becoming a kinase hub that phosphorylates multiple substrates including [[chk2|CHK2]], p53, and BRCA1.¹ The critical function of ATM in homologous recombination (HR) involves its role in recruiting [[brca1|BRCA1]] and other HR machinery components to γH2AX foci at break sites, enabling the assembly of the DNA repair apparatus.¹ This recruitment is exquisitely sensitive to chromatin acetylation status: histone acetylation patterns dictate chromatin accessibility and determine the efficiency with which ATM and its downstream targets can bind and function at damaged DNA.¹ The balance between ATM-mediated DDR activation and ATM expression levels thus becomes a critical control point for determining cellular sensitivity to DNA-damaging agents.

---

## Colorectal cancer: ATM suppression enhances therapeutic response

In colorectal cancer, pharmacological inhibition of [[fasn|FASN]] (Fatty Acid Synthase) by the agent TVB-2640 emerges as a rational strategy to suppress ATM expression and thereby create a state of impaired DNA repair capacity despite ongoing genotoxic stress.¹ FASN inhibition decreases both ATM protein levels and [[chk2|CHK2]] phosphorylation through acetylation-dependent mechanisms, directly attenuating histone acetylation patterns critical for chromatin accessibility at damage sites.¹ By suppressing ATM and [[brca1|BRCA1]] recruitment to DSBs, FASN inhibition creates a synthetic vulnerability: tumor cells become hypersensitive to chemotherapy-induced DNA damage because the normal DDR checkpoint and HR repair pathways are compromised.¹ This deficiency is further exploited by [[parp-inhibitors|PARP inhibitors]], which prevent the repair of single-strand breaks that normally depend on HR. In preclinical models, the combination of FASN inhibition with the chemotherapeutic irinotecan synergistically enhances apoptotic cell death, and subsequent maintenance with the PARP inhibitor olaparib significantly delays tumor relapse and reduces xenograft burden.¹

---

## Prostate cancer: ATM induction driving PARP inhibitor resistance

In castration-resistant prostate cancer (CRPC) treated with [[parp-inhibitors|PARP inhibitors]], ATM expression undergoes a dramatic compensatory upregulation driven by the [[m1c|M1C]] oncogene, representing a resistance mechanism that paradoxically leverages the DDR machinery to promote genomic instability and drug escape.² PARP inhibitor treatment triggers M1C expression, which in turn drives ATM upregulation as part of an integrated signaling program that simultaneously activates [[kap1|KAP1]] phosphorylation at serine 824 and engages the [[sting|STING]] pathway.² This convergence of ATM induction, KAP1 phosphorylation, and STING activation—molecular events normally associated with genome surveillance—paradoxically unleashes derepression of normally silenced transposable elements, particularly [[line-1|LINE-1]] and [[herv-k|HERV-K]] retrotransposons.² The resulting transcriptional activation produces L1-5'UTR, L1-ORF1, and L1-ORF2 transcripts along with HERV-K gag, pol, and env gene products, leading to massive genomic instability through retrotransposition and insertional mutagenesis.² Remarkably, M1C simultaneously induces [[apobec3|APOBEC3]] genes, which have evolved to restrict retrotransposon activity, suggesting a coordinated but ultimately pathogenic adaptive response where cells accept a burden of transposon-driven mutations as the price of escaping PARP inhibitor-dependent HR deficiency.² This ATM-dependent rewiring of the DDR toward retrotransposon activation and genomic chaos represents a novel and clinically consequential resistance mechanism in CRPC.

---

## Context-dependent therapeutic implications

The contrasting roles of ATM across tumor contexts—suppression conferring therapeutic benefit in colorectal cancer versus induction promoting resistance in CRPC—reveal the fundamental importance of understanding cancer-specific and lineage-specific ATM regulation in the design of effective combination therapies. In colorectal cancer, the [[fasn|FASN]]/ATM axis offers a pharmacologically tractable opportunity for therapeutic exploitation through ATM suppression, whereas in CRPC, the [[m1c|M1C]]/ATM/[[line-1|LINE-1]] axis represents a bona fide resistance mechanism requiring direct targeting of M1C or its downstream effectors such as [[sting|STING]] to overcome PARP inhibitor resistance. Clinical translation of these findings will require development of predictive biomarkers of ATM status, M1C expression, and FASN activity to stratify patients and select the most appropriate combination regimen for each cancer type.

---

## References

1. PMID:41661672 — FASN inhibition reduces ATM expression, impairing DDR in colorectal cancer
2. PMID:41690451 — M1C mediates ATM induction and LINE-1 transcription in PARP inhibitor-treated prostate cancer cells