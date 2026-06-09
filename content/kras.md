---
title: "KRAS"
---
# KRAS
`gene · oncogene · ras-family · pancreatic-cancer · mapk-signaling · therapeutic-target`

Last modified 2026-06-04 · 7 papers · 2 outgoing links · 5 incoming links

| | |
|---|---|
| **Type** | Oncogene |
| **Gene family** | RAS family GTPase |
| **Most common mutation** | KRASG12D |
| **Key pathway** | [[mapk-erk-signaling\|MAPK/ERK]] |
| **Primary cancer** | [[pancreatic-ductal-adenocarcinoma\|PDAC]] |
| **Selective inhibitor** | [[mrtx-1133\|MRTX-1133]] |
| **Papers** | 7 indexed |
| **Incoming links** | 5 wiki entities |

---

**KRAS** is an oncogenic member of the RAS family of small GTPases that drives tumorigenesis across multiple cancer types through constitutive activation of downstream [[mapk-erk-signaling|MAPK/ERK signaling]].¹ Mutations in KRAS are a hallmark of [[pancreatic-ductal-adenocaremia|pancreatic ductal adenocarcinoma (PDAC)]], where they drive tumor initiation and progression in the vast majority of cases, with KRASG12D representing the most prevalent variant.² Despite decades of effort, KRAS has remained a challenging therapeutic target, with recently developed mutation-specific KRAS inhibitors showing initial promise but rapidly succumbing to adaptive resistance mechanisms involving [[fra-2|Fra-2]]-mediated [[mtor|mTOR pathway]] upregulation and feedback reactivation of [[erk|ERK signaling]].²⁻³

---

## Mechanism and signaling

KRAS mutations lock the protein in its active, GTP-bound state, leading to constitutive activation of multiple downstream effector pathways, most prominently the [[mapk-erk-signaling|MAPK/ERK cascade]].⁴ This hyperactive signaling upregulates [[il-8|IL-8]] and establishes an immunosuppressive tumor microenvironment characterized by recruitment of [[tumor-associated-neutrophils|tumor-associated neutrophils (TANs)]] via the [[cxcr2|CXCR2]] receptor.⁴ Beyond signaling cascades, KRAS mutations drive post-translational modifications that alter the tumor phenotype — notably, KRAS-mutant [[pancreatic-ductal-adenocarcinoma|PDAC]] cells exhibit elevated O-GlcNAcylation of [[cldn18.2|CLDN18.2]], a modification that reduces the efficacy of CLDN18.2-targeted immunotherapies.¹ The pathway's complexity is underscored by compensatory mechanisms: in RAS-mutant tumors subjected to targeted inhibition, feedback reactivation of ERK signaling and upregulation of wild-type RAS isoforms sustain proliferation and impair therapeutic response.³

---

## Pancreatic cancer

KRAS mutations are nearly ubiquitous in [[pancreatic-ductal-adenocarcinoma|PDAC]], where KRASG12D accounts for the majority of variants and serves as the primary oncogenic driver.² The development of [[mrtx-1133|MRTX-1133]], a KRASG12D-selective inhibitor, represented a breakthrough in directly targeting this historically "undruggable" protein.² However, clinical efficacy is limited by rapid onset of adaptive resistance mediated by [[fra-2|Fos-related antigen-2 (Fra-2)]], a stress-responsive transcription factor of the AP-1 family.² Following MRTX-1133 treatment, Fra-2 expression is consistently upregulated in PDAC cell lines, xenograft models, and patient-derived organoids, where it reprograms the transcriptional landscape to directly enhance [[mtor|mTOR]] expression and signaling — a correlation strongly evident in PDAC patient samples.²

---

## Resistance mechanisms

Adaptive resistance to KRAS pathway inhibition emerges through multiple convergent mechanisms. In KRAS-mutant [[pancreatic-ductal-adenocarcinoma|PDAC]], the combination of [[mek-inhibitors|MEK inhibitors]] with [[anti-pd-1-antibody|anti-PD-1 antibodies]] initially demonstrates antitumor activity in preclinical models harboring Kras mutations, but larger tumors develop resistance through hypoxia- and necrosis-induced [[netosis|NETosis]], a process that reduces [[cd8-t-cells|CD8+ T cell]] infiltration.⁴ Similarly, in RAS-mutant [[rhabdomyosarcoma|rhabdomyosarcoma]], inhibition of [[hras|HRAS]] with [[farnesyltransferase-inhibitors|farnesyltransferase inhibitors (FTIs)]] such as [[tipifarnib]] triggers feedback reactivation of [[erk|ERK signaling]] and compensatory upregulation of wild-type RAS, limiting durable responses.³ A risk score based on the NETosis-MAPK signaling interaction is significantly associated with poorer survival in human PDAC.⁴

---

## Combination therapies

Overcoming KRAS-driven resistance requires multi-targeted combinatorial strategies. In [[pancreatic-ductal-adenocarcinoma|PDAC]], sequential blockade of [[cxcr2|CXCR2]] on top of [[mek-inhibitors|MEK inhibition]] and [[anti-pd-1-antibody|anti-PD-1 therapy]] overcomes NETosis-mediated resistance by preventing [[tumor-associated-neutrophils|TAN]] infiltration into hypoxic and necrotic tumor regions, thereby restoring [[cd8-t-cells|CD8+ T cell]] recruitment and [[ifn-gamma|IFN-γ]] production.⁴ This triple-combination strategy displays antitumor activity specifically in Kras-mutant tumors but not in wild-type Kras models, highlighting the mutation-specific therapeutic window.⁴ In [[rhabdomyosarcoma|RAS-mutant rhabdomyosarcoma]], cotargeting [[ftase|farnesyltransferase]] and [[mek|MEK]] impairs ERK reactivation, restrains tumor progression, and induces terminal myogenic differentiation.³ These findings underscore the necessity of blocking both primary oncogenic drivers and compensatory feedback loops to achieve durable responses.

---

## Novel therapeutic approaches

Emerging strategies extend beyond direct pathway inhibition to target the tumor ecosystem and transcriptional dependencies. [[car-t-cells|CAR T cells]] directed against [[upar|urokinase plasminogen activator receptor (uPAR)]] demonstrate robust antitumor activity across diverse solid tumor models enriched for [[tp53|TP53]] and RAS pathway mutations, eliminating both tumor cells and their uPAR-positive senescent stromal support while eradicating systemic metastases.⁵ In KRAS-driven [[pancreatic-ductal-adenocarcinoma|PDAC]], targeting the [[ddx3|DDX3]]/[[paf1|PAF1]] transcriptional axis with the small-molecule inhibitor [[rk-33]] enhances the therapeutic efficacy of [[gemcitabine]] and [[5-fluorouracil|5-FU]] in xenograft and organoid models by mitigating stemness phenotypes, extracellular matrix remodeling, and angiogenesis via downstream effectors including [[mxra5|MXRA5]], [[edil3|EDIL3]], [[col13a1|COL13A1]], and [[slc16a2|SLC16A2]].⁶ For EGFR-driven tumors that develop resistance through [[egfr|EGFR]] extracellular domain mutations — a mechanism distinct from KRAS mutation but functionally convergent — novel [[bispecific-t-cell-engagers|EGFR×CD3 bispecific T-cell engagers]] retain high affinity for escape variants and induce T cell-mediated cytotoxicity against wild-type KRAS, EGFR-expressing tumors resistant to [[cetuximab]].⁷

---

## References
1. PMID:41513443 — KRAS mutation-driven O-GlcNAcylation of CLDN18.2 in pancreatic cancer
2. PMID:42054368 — Fra-2 controls response to KRAS inhibitor MRTX-1133 in PDAC
3. PMID:41671396 — HRAS and MEK inhibition induces regression in RAS-mutant rhabdomyosarcoma
4. PMID:41855192 — CXCR2 blockade overcomes NETosis-mediated MEK resistance in PDAC
5. PMID:41916312 — uPAR CAR T cells target RAS pathway-mutant tumor ecosystem
6. PMID:41581643 — DDX3/PAF1 targeting enhances chemotherapy in KRAS-driven PDAC
7. PMID:42152476 — Bispecific T-cell engagers overcome EGFR resistance in KRAS wild-type tumors