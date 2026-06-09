---
title: "Proteolysis-Targeting Chimera"
---
# Proteolysis-Targeting Chimera
`technology · targeted protein degradation · PROTAC · ubiquitin-proteasome system · E3 ligase · cancer therapy · chemical knockdown`

Last modified 2026-06-04 · 6 papers · 9 incoming links

| | |
|---|---|
| **Type** | Therapeutic technology |
| **Mechanism** | Bifunctional molecule recruiting E3 ubiquitin ligase to target protein |
| **E3 ligases** | [[vhl\|VHL]], cereblon (CRBN) |
| **Degradation system** | Ubiquitin-proteasome system (UPS) |
| **Clinical milestone** | [[vepdegestrant\|Vepdegestrant]] (FDA-approved, 2023) |
| **Target diseases** | Breast cancer, AML, immunotherapy, liver injury |
| **Potency range** | DC50 = 0.25–0.6 nM (subnanomolar) |
| **Papers** | 6 indexed |
| **Incoming links** | 9 wiki entities |

---

**Proteolysis-targeting chimeras (PROTACs)** are bifunctional small molecules engineered to induce selective degradation of target proteins by simultaneously binding the target and recruiting an E3 ubiquitin ligase, thereby co-opting the ubiquitin-proteasome system (UPS) for targeted protein elimination. Unlike conventional small-molecule inhibitors that transiently block catalytic activity, PROTACs enable "chemical knockdown" by eliminating the entire target protein, thus disrupting both catalytic and scaffolding functions.⁶ The two most widely exploited E3 ligase adapters are [[vhl|von Hippel-Lindau (VHL)]] and cereblon (CRBN), which mediate ternary complex formation between the degrader, target protein, and E3 ligase machinery. The clinical approval of [[vepdegestrant]] in May 2023 for [[esr1|ESR1]]-mutant advanced breast cancer established targeted protein degradation as a validated therapeutic modality, with dozens of candidates now advancing through development pipelines.⁶

---

## Mechanism

PROTACs function by forming a ternary complex in which the degrader bridges a target protein to an E3 ubiquitin ligase. This spatial proximity enables the E3 ligase to polyubiquitinate lysine residues on the target, marking it for recognition and proteolytic degradation by the 26S proteasome. The process is concentration-, time-, and UPS-dependent, as demonstrated across multiple PROTAC programs.¹²³⁵ VHL-recruiting degraders typically incorporate a hydroxyproline-based ligand, while CRBN-recruiting compounds employ thalidomide analogs or naphtholactam derivatives.¹³⁵ The catalytic nature of PROTACs—wherein a single molecule can trigger multiple rounds of target degradation before being cleared—enables substoichiometric dosing and prolonged pharmacodynamic effects even after compound washout. Selectivity arises not only from the target-binding warhead but also from the geometry and stability of the induced ternary complex, which can favor degradation of one protein isoform over structurally similar paralogs despite using a pan-selective inhibitor as the warhead.²

---

## Therapeutic applications

PROTACs have demonstrated potent activity across malignancies and non-oncologic diseases where traditional inhibitors have failed or provided incomplete therapeutic benefit. In acute myeloid leukemia (AML), the eleven-nineteen leukemia protein (ENL)—a YEATS domain-containing acyl-lysine reader—represents a critical dependency. The VHL-recruiting degrader MS108 achieved a DC50 of 0.6 nM for ENL degradation, translating to 5.8-fold higher potency than the prior-generation MS41 and an 18-fold improvement in antiproliferative potency (GI50 = 1.19 nM) in MV4;11 cells, with robust selectivity and favorable pharmacokinetics.¹

In cancer immunotherapy, [[ptpn2|PTPN2]] degradation has emerged as an attractive strategy to enhance antitumor immunity. The CRBN-recruiting degrader PD-305, featuring a rigid linker and naphtholactam-based E3 ligand, exhibits subnanomolar potency (DC50 = 0.25 nM)—868-fold superior to earlier PTPN2 degraders—and greater than 20-fold selectivity over the closely related PTPN1 phosphatase.⁵ In IFN-γ-stimulated HT-29 cells, PD-305 demonstrated nanomolar antiproliferative potency nearly 80-fold more potent than the clinical candidate AC484, alongside robust in vivo tumor growth suppression and favorable physicochemical properties including reduced molecular weight and cLogP.⁵

The [[usp7|USP7]] [[deubiquitinases|deubiquitinase]] has been targeted with matched PROTAC and inhibitor pairs to dissect cellular functions in melanoma and pancreatic cancer. Selective USP7 degradation modulated both shared and distinct protein sets across cancer types without affecting cell growth, whereas prolonged hydroxypiperidine-based inhibitor treatment induced USP7-independent proteomic and metabolic dysregulation, underscoring the increased specificity achievable through PROTAC-mediated elimination versus pharmacological inhibition.⁴

---

## Clinical validation

[[vepdegestrant|Vepdegestrant]], an [[esr1|ESR1]] degrader, became the first PROTAC to receive FDA approval on May 1, 2023, for patients with ESR1-mutant advanced breast cancer whose disease progressed after standard hormone-based regimens.⁶ This regulatory milestone established targeted protein degradation as a clinically validated therapeutic modality and provided proof of concept for a pipeline that now numbers in the dozens. The approval signals a paradigm shift from transient inhibition to sustained elimination of disease-driving proteins, opening new avenues for addressing previously undruggable targets and overcoming resistance mechanisms inherent to reversible inhibitors.⁶

---

## Novel degraders and isoform selectivity

Despite employing a dual [[limk1|LIMK1]]/[[limk2|LIMK2]] inhibitor warhead and high structural conservation between the two human LIM kinases, optimization of linker geometry and E3 ligase recruitment yielded a highly potent and selective LIMK2 degrader with minimal LIMK1 degradation.² Cell-based assays and structural analysis indicated that isoform specificity was driven by favorable orientation bias, lysine accessibility, and enhanced ternary complex formation, offering a powerful alternative to pan-LIMK inhibitors for dissecting the roles of these cytoskeletal regulators in cancer, Fragile X syndrome, and glaucoma.² The compound demonstrated that PROTAC-mediated degradation can achieve isoform selectivity even when the warhead itself lacks selectivity—a finding with broad implications for targeting protein families with conserved active sites.²

In non-oncologic settings, the first CRBN-recruiting degrader of prolyl hydroxylase domain enzyme 1 (PHD1), designated SH-26, induced concentration-, time-, and UPS-dependent PHD1 degradation across multiple cell lines.³ In an acetaminophen-induced acute liver injury (ALI) model, SH-26 attenuated hepatic inflammation and necrosis without detectable cytotoxicity by reducing reactive oxygen species accumulation, mitochondrial dysfunction, and NLRP3 inflammasome activation, demonstrating robust in vivo protection and establishing PHD1 degradation as a viable therapeutic strategy for drug-induced liver injury.³

---

## Advantages over inhibition

The elimination of an entire protein by PROTACs provides distinct advantages over occupancy-driven inhibitors. Complete target removal disrupts not only enzymatic activity but also scaffolding interactions, protein-protein binding surfaces, and allosteric regulatory functions that remain intact under inhibitor treatment.⁶ This is particularly valuable for proteins where non-catalytic domains drive pathology or where compensatory signaling pathways bypass active-site inhibition. Additionally, the catalytic mechanism of PROTACs permits substoichiometric engagement and sustained target suppression even at low compound concentrations, potentially enabling reduced dosing and mitigating off-target toxicity. Matched-pair studies comparing USP7 degraders and inhibitors revealed that selective degradation avoids the USP7-independent proteomic dysregulation triggered by prolonged inhibitor exposure, highlighting the improved specificity profile achievable through targeted degradation.⁴

---

## References
1. PMID:42025203 — Discovery of highly potent ENL degrader MS108 for AML
2. PMID:42066056 — Potent LIMK2 isoform-specific degrader
3. PMID:42126822 — PHD1 degrader SH-26 for acetaminophen-induced liver injury
4. PMID:42129197 — USP7 degradation reveals distinct effects from inhibitors
5. PMID:42132329 — PD-305 PTPN2-selective degrader with subnanomolar potency
6. PMID:42137912 — Approval of first PROTAC vepdegestrant validates therapeutic modality