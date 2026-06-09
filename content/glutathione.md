---
title: "Glutathione"
---
# Glutathione
`peptide · antioxidant · redox homeostasis · ferroptosis · tumor targeting · drug delivery · GSH`

Last modified 2026-06-04 · 15 papers · 1 outgoing link · 17 incoming links

| | |
|---|---|
| **Type** | Tripeptide (γ-Glu-Cys-Gly) |
| **Function** | Primary cellular reducing agent |
| **Tumor biomarker** | Elevated 2–10× in TME |
| **Key enzyme** | [[gpx4\|GPX4]] (cofactor) |
| **Transporter** | [[slc7a11\|xCT]], [[mrp1\|MRP1/ABCC1]] |
| **Metabolic role** | GST-catalyzed conjugation |
| **Cancers** | TNBC, CRC, HCC, PDAC, osteosarcoma |
| **Papers** | 15 indexed |
| **Incoming links** | 17 wiki entities |

---

**Glutathione (GSH)** is a tripeptide antioxidant (γ-glutamyl-cysteinyl-glycine) that functions as the primary cellular reducing agent, maintaining intracellular redox homeostasis and protecting cells from oxidative damage. In the tumor microenvironment, glutathione concentrations are significantly elevated—often 2- to 10-fold higher than in normal tissues—making it a distinctive biomarker for tumor-selective drug delivery and therapeutic intervention.¹⁻³ GSH depletion is a core mechanism driving [[ferroptosis]], a form of iron-dependent regulated cell death distinct from [[apoptosis]], wherein inactivation of [[gpx4|glutathione peroxidase 4 (GPX4)]], a selenoprotein that uses GSH as a cofactor to reduce lipid peroxides, unleashes uncontrolled [[lipid-peroxidation|lipid peroxidation]] leading to cell death.⁴⁻⁷

---

## Biochemical role and regulation

Glutathione is synthesized intracellularly from cysteine, glutamate, and glycine via sequential ATP-dependent ligation reactions catalyzed by glutamate-cysteine ligase and glutathione synthetase. The availability of cysteine, imported as cystine through the [[slc7a11|cystine/glutamate antiporter xCT (SLC7A11)]], is rate-limiting for GSH synthesis.⁴ Intracellular GSH pools maintain a reducing environment (typical GSH:GSSG ratio >100:1) that scavenges [[reactive-oxygen-species|reactive oxygen species (ROS)]], detoxifies electrophilic xenobiotics, and sustains the activity of redox-sensitive enzymes including [[gpx4|GPX4]].⁵ Transporter-mediated GSH efflux via [[mrp1|MRP1 (ABCC1)]] regulates extracellular redox signaling, exosome biogenesis through [[neutral-sphingomyelinase|neutral sphingomyelinase (nSMase)]] activation, and immune cell responses.⁶

---

## Tumor-selective targeting and GSH-responsive delivery

The elevated GSH concentration within solid tumors—a consequence of metabolic reprogramming and antioxidant adaptation—enables the design of GSH-responsive drug delivery systems that achieve spatiotemporally controlled therapeutic release. Disulfide-linked nanoprodrugs such as [[sor-rssf-nanoparticles|SOR@RSSF]], which co-deliver the ferroptosis inducer sorafenib with ferrocene and the chemotherapeutic rhein, exploit intracellular GSH to trigger synchronous drug release via disulfide bond reduction, resulting in synergistic [[ferroptosis]] and [[apoptosis]] in [[triple-negative-breast-cancer|triple-negative breast cancer (TNBC)]].¹ Similarly, [[u-at-hc|U@HC]] nanoparticles leverage acidic pH and elevated GSH for sequential release of cholesterol regulators, overcoming radioresistance by inhibiting lysosomal cholesterol accumulation and cellular senescence.³ Dendritic mesoporous organosilica (DMOS)-based platforms such as DCTH incorporate GSH-cleavable shells for controlled co-release of hydrogen sulfide and Cu⁺, enabling cuproptosis and photothermal synergy.¹⁴

---

## Ferroptosis applications in oncology

GSH depletion through sequestration or synthesis pathway inhibition is a cornerstone strategy in ferroptosis-based cancer therapy. In [[colorectal-cancer|colorectal cancer (CRC)]], the copper metal-organic framework [[hmoi|HMOI]] catalyzes Cu(I)-mediated azide-alkyne cycloaddition to synthesize an [[slc7a11|xCT]] inhibitor in situ, simultaneously depleting GSH, amplifying lipid peroxidation, and inducing ferroptotic death accompanied by [[cd8-t-cells|CD8+ T cell]] infiltration.⁴ In TNBC, [[thioredoxin-reductase|thioredoxin reductase (TrxR)]]-targeted Pt(IV) prodrugs inhibit TrxR1, deplete GSH, and trigger both ferroptosis and [[immunogenic-cell-death|immunogenic cell death (ICD)]] through endoplasmic reticulum stress, overcoming cisplatin resistance.⁷ In [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]], iron-coordinated [[pif-ncs|PIF nanocomposites]] disrupt redox equilibrium by depleting GSH and downregulating [[gpx4|GPX4]] and [[slc7a11|SLC7A11]], achieving synergistic ferroptosis-photochemotherapy when combined with anti-PD-L1 blockade.¹⁰

In [[pancreatic-cancer|pancreatic ductal adenocarcinoma (PDAC)]], multi-omics analysis identified a six-gene ferroptosis signature (GPX4, CTSB, NOX4, TFRC, HIF1A, TGFB1), and [[resveratrol]] was validated as a novel ferroptosis inducer that downregulates key ferroptosis-resistance proteins and enhances sensitivity to GSH depletion, which can be partially reversed by the ferroptosis inhibitor [[ferrostatin-1|ferrostatin-1 (Fer-1)]].¹² In [[osteosarcoma]], ultrasound-responsive liposomes co-delivering [[mno2-nanoparticles|MnO₂]] and indocyanine green deplete GSH while alleviating tumor hypoxia, enhancing sonodynamic ROS generation and ICD.² In [[glioblastoma]], the β₃-adrenergic receptor probe GSHP enabled high-throughput screening that identified [[baicalin]] as a natural inhibitor triggering GSH depletion and oxidative stress-mediated apoptosis via the Gαᵢ/ₒ-ERK-Nrf2-GCLc axis.¹¹

---

## Drug metabolism and GST conjugation

[[glutathione-s-transferases|Glutathione S-transferases (GSTs)]] are a superfamily of Phase II metabolic enzymes that catalyze the conjugation of GSH to electrophilic substrates, representing the primary determinant of metabolic half-life for [[electrophilic-warheads|electrophilic warheads]] used in targeted covalent inhibitors.⁹ Quantitative kinetic profiling reveals that GST-catalyzed conjugation rates correlate poorly with intrinsic warhead reactivity toward GSH but instead depend on enzyme-substrate interactions governed by both warhead structure and molecular scaffold. GST kcat/KM values correlate closely with compound half-lives in human liver cytosol, establishing GST susceptibility as a structurally tunable parameter for optimizing the pharmacokinetic properties of covalent drugs.⁹

---

## Ferroptosis-immunotherapy synergy

Ferroptotic tumor cells release damage-associated molecular patterns that trigger [[immunogenic-cell-death|immunogenic cell death (ICD)]], activating dendritic cells and promoting [[cd8-t-cells|CD8+ T cell]] infiltration. Emerging evidence demonstrates that all-trans retinoic acid released from ferroptotic cells directly targets CD38 and activates transcription factor EB (TFEB) to upregulate MHC-II expression in [[tumor-associated-macrophages|tumor-associated macrophages]], enhancing antigen presentation and synergizing with [[anti-pd-1|anti-PD-1]] therapy.¹⁵ The [[nano-redox-lever|nano-redox lever]], a drug-free nanoplatform that selectively disrupts GSH metabolism in hypoxic tumor regions by accepting electrons, potentiates ferroptosis-mediated immune stimulation and creates a positive feedback loop wherein activated macrophages further promote immune-driven tumor ferroptosis.¹⁵ Piezocatalytic nanoparticles such as [[cu-bto|Cu-BTO]], engineered with flexoelectric properties, generate ROS under ultrasound while depleting GSH through self-amplified Fenton-like catalysis, inducing severe ICD and triggering downstream T cell activation.¹³

---

## Non-cancer applications

Beyond oncology, GSH-responsive systems address diverse pathophysiological contexts. The [[fp-hydrogel|FP-hydrogel]], synthesized via aldimine condensation with stable semiclosed cyclic hemiaminal structures, degrades in response to acidic pH, ROS, and GSH, releasing formaldehyde with antibacterial efficacy against infected wounds while scavenging overexpressed ROS in chronic diabetic ulcers, accelerating healing in both acute bacterial and chronic diabetic wound models.⁶ In oral infectious diseases, the hybrid nanozyme PB@MoS₂@Au integrates peroxidase-like activity with photothermal conversion, achieving greater than 99.5% eradication of Enterococcus faecalis biofilms in ex vivo tooth infection models within minutes through combined enzymatic and thermal bactericidal mechanisms.⁸

---

## Novel platforms and inducers

Recent advances in GSH-responsive nanotechnology include butyrate-modulated copper MOFs that enable tumor-activated ferroptosis through GSH-triggered Cu(II)/Cu(I) cycling,⁴ hydrogen sulfide-releasing nanoplatforms with GSH-cleavable dendritic mesoporous shells for synchronized cuproptosis and photothermal therapy,¹⁴ and disulfide-crosslinked nanoassemblies that achieve precise spatiotemporal co-delivery of multiple therapeutic agents.¹ Natural compounds including [[resveratrol]] and [[baicalin]] have been validated as ferroptosis inducers and GSH-depleting agents through multi-omics screening and in vitro functional assays.¹¹˒¹² The development of reversible, dual-responsive probes such as GSHP enables real-time imaging of GSH fluctuations and facilitates therapeutic monitoring in brain tumors by simultaneously visualizing receptor expression and surrounding redox status.¹¹

---

## References
1. PMID:41650740 — Ferroptosis-sensitizing nanoprodrug system for TNBC synergistic therapy
2. PMID:41734864 — Ultrasound-responsive bone-targeting liposomes suppress osteosarcoma via ICD
3. PMID:41765335 — Prophylactic sequential drug administration potentiates radiotherapy
4. PMID:41780681 — Bioorthogonal Cu-MOF enables GSH-triggered drug synthesis for xCT-driven ferroptosis in CRC
5. PMID:41992775 — TrxR-targeted Pt(IV) prodrugs for TNBC chemoimmunotherapy
6. PMID:41972423 — Semiclosed cyclic hemiaminal-based multistimuli-responsive hydrogels for wound dressings
7. PMID:41992775 — Simultaneous induction of ferroptosis and ICD by TrxR-targeted Pt(IV) prodrugs
8. PMID:42045161 — Integrated peroxidase-like nanozyme for antibacterial treatment in oral diseases
9. PMID:42062179 — Structure-activity relationships of covalent warheads as GST substrates
10. PMID:42133129 — Platycodin-d-loaded iron nanocomposite for HCC immunotherapy with ferroptosis-photo-chemotherapy
11. PMID:42139343 — BBB-permeable β3-AR probe enables redox imaging and baicalin discovery in glioblastoma
12. PMID:42142137 — Multi-omics analysis identifies ferroptosis signature and validates resveratrol in pancreatic cancer
13. PMID:41260109 — Flexoelectricity-boosted nanoparticles for tumor piezocatalytic immunotherapy
14. PMID:41605106 — Cascade-responsive H₂S-releasing nanoplatform for photothermal-immunotherapy
15. PMID:42061406 — Ferroptotic tumor cells reprogram macrophage antigen presentation for immune checkpoint blockade