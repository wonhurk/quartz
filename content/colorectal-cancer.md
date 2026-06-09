---
title: "Colorectal Cancer"
---
## Metabolic targeting

Inhibition of [[fasn|FASN]] with the clinical-stage inhibitor [[tvb-2640|TVB-2640]] reveals an unexpected synthetic lethal interaction with DNA-damaging chemotherapy. [[fasn|FASN]] inhibition induces DNA double-strand breaks but simultaneously impairs the DNA damage response (DDR) by reducing ATM expression, CHK2 phosphorylation, and the recruitment of BRCA1 and ATM to γH2AX foci through histone acetylation-dependent mechanisms.⁵ This dual effect — accumulating damage while disabling repair — potentiates [[irinotecan|irinotecan]]-induced apoptosis in CRC cell lines, patient-derived organoids, and xenograft models. The combination of [[tvb-2640|TVB-2640]] with [[irinotecan|irinotecan]] synergistically delays tumor relapse, and the addition of the PARP inhibitor [[olaparib|olaparib]] as maintenance therapy further exploits the DNA repair deficiency to suppress residual disease.⁵ This strategy exemplifies metabolic vulnerability as a sensitizer to genotoxic stress rather than as monotherapy.

Complementary cell cycle checkpoint targeting addresses CRC tumors with abrogated G1/S checkpoints and elevated replication stress. Dual inhibition of PKMYT1 and WEE1 — G2/M checkpoint kinases that phosphorylate CDK1 at threonine-14 and tyrosine-15 — prevents mitotic entry delay and forces premature mitosis in checkpoint-deficient cells.⁷ The naphthyridinone derivative [[compound-24|compound 24]] achieves single-digit nanomolar PKMYT1 potency and sub-micromolar WEE1 activity, outperforming the selective PKMYT1 inhibitor [[rp-6306|RP-6306]] and the WEE1 inhibitor [[azd1775|AZD1775]] in patient-derived CRC organoids while maintaining favorable kinome selectivity and early safety profiles.⁷

---

## Ferroptosis-based therapy

Ferroptosis — iron-catalyzed lipid peroxidation culminating in membrane rupture — represents a targetable vulnerability in CRC, particularly in tumors with elevated glutathione (GSH) and robust redox buffering that confer resistance to conventional oxidative stress. The copper metal-organic framework (Cu-MOF) nanocatalyst HMOI enables tumor microenvironment (TME)-activated ferroptosis through bioorthogonal chemistry: butyrate-modulated Cu(II) coordination and hyaluronic acid functionalization direct CD44-mediated tumor accumulation, where elevated intracellular GSH drives Cu(II)/Cu(I) cycling and catalyzes in situ synthesis of the [[slc7a11|xCT]] inhibitor SLZC96 via copper-catalyzed azide-alkyne cycloaddition (CuAAC).⁸ This tandem mechanism depletes GSH, blocks cystine import, and amplifies lipid peroxidation. Beyond direct cytotoxicity, HMOI-induced ferroptosis triggers immunogenic cell death, increasing CD8+ T cell infiltration and IFN-γ production in syngeneic CRC models, thereby coupling metabolic disruption with immune activation.⁸

Other ferroptosis-inducing platforms include TPGS-modified polydopamine-coated [[nano-prodrugs|nano-prodrugs]] loaded with cerium-6, which enhance tumor penetration and redox-responsive drug release,⁹ and polysaccharide-based nanocomposite hydrogels that protect orthoester-modified nanoparticles during gastric transit and achieve pH-triggered release in the small intestine and colon.¹⁰

---

## Immunotherapy approaches

### Persister tumor cell elimination

Neoadjuvant chemotherapy (NAC) reduces tumor burden in CRC but often fails to improve long-term survival due to the enrichment of quiescent [[persister-tumor-cells|persister tumor cells (PTCs)]] — a stem-like, chemoresistant subpopulation whose abundance correlates with poor prognosis even in initial responders.² PTCs express elevated CD155 (PVR), which engages the inhibitory receptor CD96 on tumor-infiltrating CD8+ T cells, driving T cell exhaustion and functional paralysis.² CD96 blockade with monoclonal antibodies or genetic deletion diverts CD8+ T cells from an exhaustion trajectory toward memory-like phenotypes with enhanced mitochondrial function, enabling eradication of PTCs in orthotopic CRC models.²¹¹ Epithelial cell adhesion molecule (EpCAM)-targeted chimeric antigen receptor (CAR)-T cells engineered to lack CD96 expression demonstrate robust cytotoxicity against PTCs, offering a cell therapy approach to residual disease.²

### Glycocalyx disruption

The tumor glycocalyx — a dense layer of O-glycosylated mucin domains — shields checkpoint proteins such as CD47 from therapeutic antibody binding, limiting phagocytosis-inducing immunotherapies. The bacterial protease StcE selectively cleaves mucin O-glycans but exhibits high immunogenicity and off-target toxicity when administered systemically. To overcome this, the biomimetic platform [[stce-ncd47-fnv|StcE-nCD47-FNV]] co-displays StcE and CD47 nanobodies (nCD47) on cell membrane fusion nanovesicles, enabling spatially controlled glycocalyx degradation and enhanced checkpoint blockade.¹² The SpyTag/SpyCatcher-mediated assembly retains mucin-hydrolyzing activity while prolonging circulation and concentrating StcE at tumor sites via nCD47-mediated targeting. In murine CRC and breast cancer models, [[stce-ncd47-fnv|StcE-nCD47-FNV]] increases M1 macrophage polarization and CD8+ T cell infiltration, suppressing tumor growth and metastasis with minimal systemic toxicity.¹²

### Checkpoint modulation

Anti-PD-1 therapy increases the abundance of dysfunctional CD8+ T cell populations in orthotopic organoid-based CRC models, reducing tumor growth in checkpoint-responsive contexts.¹³ The orthotopic AKPS (Apc⁻/⁻KrasG12D/+Trp53R172H/⁻Smad4⁻/⁻) organoid model recapitulates the immune landscape of human CRC, with CD8+ T cells comprising the predominant leukocyte population and exhibiting early signs of dysfunction.¹³ CD8+ T cell depletion increases tumor burden, confirming their antitumor role, while anti-PD-1 responsiveness validates the model for preclinical immunotherapy testing.¹³

---

## Microbiota-targeted interventions

*Fusobacterium nucleatum*, a Gram-negative anaerobe enriched in CRC tumors, promotes disease progression through biofilm formation, epithelial adhesion/invasion via FomA, and immunosuppressive signaling. Nicotinamide (NAM), a water-soluble form of vitamin B3, attenuates *F. nucleatum* virulence at sub-inhibitory concentrations (~50 mM) by inhibiting bacterial growth, biofilm formation, and CRC cell invasion.³ Transcriptomic profiling reveals that NAM modulates oxidative phosphorylation, two-component systems, and ATP synthesis pathways. Mechanistically, NAM acts as a class III histone deacetylase inhibitor, inhibiting the sirtuin homolog CobB and increasing acetylation of the FomA adhesin, which reduces its binding affinity to CRC epithelium.³ This microbiota-targeted strategy offers a safe, cost-effective adjunct to chemotherapy or immunotherapy.

Gut plasmid populations — often overlooked extrachromosomal elements — exhibit dysregulation in CRC, with decreased overall abundance in high-risk and cancer groups.⁶ Structural equation modeling reveals that trace elements (e.g., nickel), metabolites (e.g., 5-hydroxytryptophol), and bacterial hosts (e.g., *Campylobacterales*, *Enterobacterales*) exert complex effects on plasmid composition, which in turn modulates antibiotic resistance and virulence gene carriage.⁶ Twelve plasmid markers distinguish CRC risk with high accuracy in machine learning models, suggesting that plasmid profiling may complement bacterial and metabolomic biomarkers.⁶

---

## Novel delivery platforms

Oral delivery of CRISPR/Cas9 systems for CRC gene therapy has been achieved through two microbial platforms: genetically modified *Escherichia coli* BL21 and *Pichia pastoris* X33. Both strains are engineered to secrete extracellular vesicles (EVs) carrying Cas9 protein and sgRNA targeting arginine ADP-ribosyltransferase 1 (ART1), a regulator of colon cancer biology.¹⁴ Polydopamine coating and synthetic epithelial lining systems enhance microbial viability during gastric transit and promote intestinal retention, establishing localized "cell factories" for sustained CRISPR secretion. In subcutaneous tumor-bearing mice, both bacterial and yeast platforms demonstrate comparable tumor suppression with minimal systemic toxicity, validating the feasibility of microorganism-mediated oral gene therapy.¹⁴

Polysaccharide-based nanocomposite hydrogels further address the gastrointestinal barrier challenge by embedding orthoester/carboxymethyl chitosan-based nano-prodrugs in a gellan gum (GG) matrix.¹⁰ GG protects the payload from gastric acid, undergoes pH-triggered pore expansion in the small intestine and colon, and modulates gut microbiota composition. Orthoester hydrolysis restores nanoparticle size, promoting intestinal absorption and selective accumulation at CRC sites through dynamic protonation/deprotonation.¹⁰

Imaging-guided theranostics include HSP90-targeted radiotracers that enable subtype-specific tumor detection and patient stratification for HSP90 inhibitor therapy, such as pimitespib (approved in Japan for intestinal tumors), hypericin sodium (under U.S. regulatory review), and WP-1303 (Phase III).¹⁵ Optimized chemical modifications reduce off-target accumulation in kidneys and liver, achieving tumor-to-muscle ratios exceeding 16 in gastric and colorectal cancer models, with clinical validation demonstrating high-contrast imaging (SUVmax ~5).¹⁵

---

## References
1. PMID:41780681 — Bioorthogonal Cu-MOF nanocatalyst enables GSH-triggered in situ drug synthesis for xCT-driven ferroptosis in CRC
2. PMID:41895257 — Quiescent persister tumor cells resist neoadjuvant chemotherapy; CD96 targeting restores T cell surveillance
3. PMID:41910433 — Nicotinamide attenuates Fusobacterium nucleatum virulence in CRC
4. PMID:42143353 — Multi-omics dissection of INHBA+ CAF-mediated EMT and immune suppression
5. PMID:41661672 — FASN inhibition enhances chemotherapy efficacy by inhibiting DNA damage response
6. PMID:42141123 — Decoding human gut bacterial plasmids in CRC
7. PMID:42003565 — Naphthyridinone derivatives as selective PKMYT1/WEE1 dual inhibitors
8. PMID:41780681 — Butyrate-modulated Cu-MOF for xCT-driven ferroptosis
9. PMID:41832032 — Polysaccharide-based organic nanocomposite hydrogel for oral targeted therapy
10. PMID:41832032 — Dynamic polysaccharide-based hydrogel mediates oral CRC therapy
11. PMID:42127804 — CD155-CD96 axis keeps persister tumor cells in check
12. PMID:42133749 — Mucinase-engineered nanovesicles degrade glycocalyx to potentiate antitumor immunity
13. PMID:42141809 — Orthotopic organoid-based model to study CD8+ T cell dysfunction and ICI response
14. PMID:42044361 — Engineered bacteria and yeast for oral CRISPR/Cas9 delivery in CRC therapy
15. PMID:42076973 — HSP90-targeted radiotracer for tumor detection and inhibitor guidance