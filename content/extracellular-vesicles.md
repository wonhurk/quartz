---
title: "Extracellular Vesicles"
---
# Extracellular Vesicles
`technology · nanoparticle · drug delivery · liquid biopsy · immunotherapy · gene therapy · biomarker · CRISPR delivery`

Last modified 2026-06-04 · 8 papers · 2 outgoing links · 24 incoming links

| | |
|---|---|
| **Type** | Cell-derived nanoparticle |
| **Size range** | 30–1000 nm (sEV: 30–150 nm) |
| **Source cells** | Tumor, bacterial, yeast, renal progenitor |
| **Cargo** | Proteins, RNA, lipids, CRISPR/Cas9 |
| **Applications** | Drug delivery, vaccines, diagnostics |
| **Detection** | Multi-omics, FTIR/Raman spectroscopy |
| **Papers** | 8 indexed |
| **Incoming links** | 24 wiki entities |

---

**Extracellular vesicles (EVs)** are naturally occurring membrane-bound nanoparticles secreted by virtually all cell types that function as both programmable therapeutic delivery vehicles and minimally invasive diagnostic biomarkers. These cell-free vectors carry diverse molecular cargo including proteins, microRNAs, and gene-editing machinery, enabling applications spanning cancer immunotherapy, precision gene editing, and infectious disease prevention.¹ The clinical utility of EVs is governed by tissue tropism—their inherent distribution pattern favoring hepatic accumulation—which can be rationally redirected through lipid engineering, surface modification, and metabolic programming.²

---

## Engineering and targeting mechanisms

The therapeutic deployment of EVs hinges on overcoming their default hepatic tropism through rational bioengineering. Modulation with cationic [[dotap|DOTAP]] lipids alters the internal charge distribution of tumor-derived medium vesicles, fundamentally redirecting biodistribution from liver to lung with specificity validated by positron emission tomography imaging.² This charge-based tropism switch is mechanistically driven by protein corona composition—the layer of plasma proteins that adsorbs onto EV surfaces upon entering circulation and determines cellular uptake patterns across tissues. In the intestinal environment, [[polydopamine]] coating of microbial EV-secreting platforms enhances viability and retention, establishing sustained in situ cell factories for oral therapeutic delivery.¹ For urinary diagnostics, in vivo metabolic engineering uses tumor-targeting reactive oxygen species-responsive micelle probes that release [[azide-choline]] specifically within the oxidative bladder tumor microenvironment, covalently tagging nascent EVs with azide moieties for selective enrichment via bioorthogonal click chemistry.³

---

## Therapeutic gene delivery

EVs have emerged as privileged carriers for [[crispr-cas9|CRISPR/Cas9]] systems, addressing the translational gap between gene-editing potential and safe oral delivery. Genetically modified *Escherichia coli* BL21 and *Pichia pastoris* X33 strains were engineered to secrete EVs encapsulating Cas9 protein and sgRNA targeting arginine ADP-ribosyltransferase 1 (ART1), a regulator of colorectal cancer biology.¹ Upon oral administration, these microbial factories colonize the intestine and release therapeutic EVs that achieve tumor-specific gene disruption with comparable efficacy between bacterial and yeast platforms. Polydopamine coating and synthetic gastrointestinal epithelial lining systems further enhance microbial survival through gastric transit and intestinal retention, sustaining CRISPR secretion over therapeutic timescales.

For metastatic melanoma, DOTAP-modified EVs loaded with [[sipd-l1|siPD-L1]] exploit lung-specific tropism to silence PD-L1 expression in pulmonary metastases, triggering enhanced tumor immune responses.² The lipid modification strategy enables precise nucleic acid delivery to diseased pulmonary tissue while avoiding off-target hepatic accumulation, establishing a rational design framework for organ-targeted EV therapeutics.

---

## Vaccine immunogenicity

Pathogen-derived EVs constitute a next-generation vaccine platform that harnesses natural immunostimulatory architecture. *Streptococcus pyogenes* (Group A Streptococcus)-derived EVs administered intranasally induce robust humoral immunity including pathogen-specific [[immunoglobulin-g|IgG]] and IgA antibodies, alongside vigorous Th17 and Th1 cellular responses.⁴ Immunoprecipitation coupled with mass spectrometry identified seven conserved immunogenic lipoproteins—[[mts-a|MtsA]], BMP, [[prs-a1|PrsA1]], [[prs-a2|PrsA2]], [[met-q|MetQ]], [[mal-x|MalX]], and the glutamine transporter [[gln-p|GlnP]]—that are recognized by sera from both healthy individuals and necrotizing soft tissue infection patients. The high conservation of these antigens across diverse GAS M-types and their capacity to stimulate IL-17A secretion from lung cells and splenocytes position pathogen-derived EVs as broadly protective vaccine candidates capable of inducing both mucosal and systemic immunity.

---

## Non-cancer therapeutic applications

Beyond oncology, EVs address critical unmet needs in regenerative medicine and chronic organ disease. In [[kidney-disease|kidney disease]], EVs isolated from human [[renal-progenitor-cells|renal progenitor cells (RPCs)]] were integrated into a decellularized kidney extracellular matrix ([[dkecm|DKECM]])-based bioink for three-dimensional bioprinting.⁵ This formulation—composed entirely of DKECM without supplemental biomaterials—preserves renal-specific bioactivity while exhibiting shear-thinning rheology and high shape fidelity for precise layer stacking. RPC-derived EVs are readily internalized by tubular epithelial cells, where they modulate oxidative stress, proliferation, and injury responses under hypoxic conditions. The bioprinted constructs achieve sustained EV release over two weeks, recreating key features of the native renal microenvironment and providing spatially controlled delivery for tissue repair applications.

---

## Liquid biopsy diagnostics

Plasma-derived small EVs (sEVs) have established themselves as powerful liquid biopsy tools through multi-modal profiling strategies. For glioma diagnosis, size exclusion chromatography-isolated sEVs subjected to combined Fourier transform infrared/Raman spectroscopy and orthogonal proteomics/[[microrna|microRNA]] analysis revealed disease-specific biomolecular signatures encompassing 45 dysregulated proteins and 20 altered microRNAs.⁶ Machine learning models trained on this multimodal data achieved diagnostic areas under the curve of 0.931–0.971, with external validation across independent cohorts confirming 100% accuracy for proteomic and multimodal signatures in longitudinal cohorts. The integration of spectral and molecular data captures complementary information about sEV composition—spectroscopy probing global chemical structure while omics resolves individual biomarker identities.

In metastatic castration-resistant prostate cancer, shotgun proteomics of plasma EVs identified 5,137 proteins including the cell-surface targets PSMA, B7-H3, Trop-2, and STEAP1, whose elevated levels associate with worse overall survival following ¹⁷⁷Lu-PSMA-617 radioligand therapy.⁷ These EV protein levels positively correlate with molecular tumor volume on PSMA-PET imaging, serum PSA, and alkaline phosphatase, establishing EVs as surrogate biomarkers for disease burden. Pathway analysis revealed that p53 upregulation portends poor outcomes, while an activated E2F pathway unexpectedly predicts better progression-free and overall survival, highlighting the capacity of EV proteomics to nominate mechanistic biomarkers beyond conventional imaging.

For breast cancer immunotherapy stratification, [[glycosylated-pd-l1|glycosylated PD-L1 (gPD-L1)]] on sEVs was detected using a dual-aptamer electrochemical biosensor (CAP-g) built on a flexible CF/DPEDOT:PSS/Au nanonetwork scaffold.⁸ This platform integrates proximity cascade amplification with [[hybridization-chain-reaction|hybridization chain reaction]] to overcome glycan-mediated epitope shielding that renders gPD-L1 undetectable by conventional immunohistochemistry. The CAP-g system achieves an ultralow detection limit of 52 particles/mL—1–2 orders of magnitude below existing methods—enabling identification of patients likely to benefit from PD-1/PD-L1 checkpoint blockade through a liquid biopsy approach that circumvents the "detection blind spot" of tissue-based assays.

---

## Novel engineering strategies

[[metabolic-engineering|Metabolic engineering]] of source cells enables in vivo chemical tagging of EVs for diagnostic applications. Tumor-targeting ROS-responsive micelle probes deliver azide-choline specifically to bladder tumors, where the oxidative microenvironment triggers azide incorporation into nascent EV membranes.³ Upon secretion into urine, these chemically tagged EVs are selectively enriched via bioorthogonal click chemistry, eliminating interference from abundant nontumor EVs. This platform distinguishes [[nonmuscle-invasive-bladder-cancer|nonmuscle-invasive bladder cancer]] from [[muscle-invasive-bladder-cancer|muscle-invasive disease]] based on profiled biomarkers, demonstrating that metabolic programming can confer disease-specific molecular barcodes onto EVs. The strategy's modularity—achieved by simply changing targeting and recognition moieties—enables extension to diverse pathologies beyond bladder cancer.

---

## References
1. PMID:42044361 — Engineered bacteria and yeast for oral CRISPR/Cas9 delivery in colorectal cancer
2. PMID:42139331 — DOTAP-modified EVs enable PET-guided pulmonary siRNA delivery
3. PMID:42090295 — In vivo metabolic engineering of bladder cancer EVs for urinary detection
4. PMID:42118829 — Immunostimulatory antigens in *Streptococcus pyogenes*-derived vesicles
5. PMID:41253102 — 3D bioprinting with DKECM for sustained EV delivery in kidney disease
6. PMID:41999751 — Multi-omics and multi-spectral profiling of plasma EVs for glioma diagnosis
7. PMID:42013849 — Plasma EV proteomics nominates biomarkers of ¹⁷⁷Lu-PSMA-617 outcomes
8. PMID:42065221 — Dual-aptamer biosensor reveals gPD-L1 on sEVs in breast cancer