---
title: "Immunogenic cell death"
---
# Immunogenic cell death
`technology · icd · cancer immunotherapy · regulated cell death · antigen presentation · adaptive immunity · dendritic cells`

Last modified 2026-06-04 · 9 papers · 1 outgoing link · 8 incoming links

| | |
|---|---|
| **Type** | Regulated cell death modality |
| **Mechanism** | DAMP/antigen release → DC cross-presentation → CD8+ T cell priming |
| **Key immune axis** | cDC1 dendritic cells (DNGR-1/CLEC9A) → CD8+ T cells |
| **Inducers** | Ferroptosis, cuproptosis, chemo, photo, piezo, oncolytic viruses, IRE, TTF |
| **Core pathways** | ER stress, ROS generation, GSH depletion, lipid peroxidation |
| **Cancers** | TNBC, HCC, glioblastoma, prostate, lung, colon metastasis |
| **Papers** | 9 indexed |
| **Incoming links** | 8 wiki entities |

---

**Immunogenic cell death (ICD)** is a form of regulated cell death that releases tumor-associated antigens and damage-associated molecular patterns (DAMPs), enabling adaptive antitumor immunity through dendritic cell cross-presentation and [[cd8-t-cells|CD8+ T cell]] activation.¹ Unlike apoptosis, which proceeds silently without immune recognition, ICD transforms dying tumor cells into endogenous vaccines that expose the immune system to tumor neoantigens in the context of danger signals.² The primary immune axis depends on antigen cross-presentation by cDC1 [[dendritic-cells|dendritic cells]] expressing the DNGR-1 (CLEC9A) receptor, which recognizes F-actin exposed on ICD-derived autophagosomes and licenses efficient uptake and processing for CD8+ T cell priming.¹

---

## Mechanism

ICD is characterized by the spatiotemporally coordinated release of DAMPs — including calreticulin surface exposure, ATP secretion, and high-mobility group box 1 (HMGB1) release — alongside tumor-associated antigens.¹ Endoplasmic reticulum (ER) stress serves as a central molecular trigger across diverse ICD inducers, driving calcium overload, unfolded protein accumulation, and the translocation of damage signals to the cell surface.³⁴ Reactive oxygen species (ROS) generation amplifies ER stress and oxidizes cellular macromolecules, creating a feedforward loop that culminates in membrane rupture and antigen spillage.²⁵ In [[ferroptosis]]-driven ICD, glutathione depletion and lipid peroxidation synergize with ROS accumulation to potentiate immunogenicity, while [[cuproptosis]] achieves similar outcomes through mitochondrial copper accumulation and DLAT inhibition.³⁶⁸

A key challenge in ICD-based therapy is the simultaneous generation of suppressive by-products — including anti-inflammatory lipids and metabolites — that limit vaccine efficacy.¹ To address this, the [[icap|ICD-Primed Autophagosome Engineering (ICAP)]] strategy harvests immunogenic cargo-containing autophagosomes that co-enrich tumor antigens and DAMPs while depleting inhibitory components.¹ F-actin exposure on ICAPs licenses DNGR-1-dependent recognition by cDC1 cells, promoting efficient cross-presentation and achieving approximately 90% tumor clearance in peritoneal metastasis models.¹

---

## Triggering modalities

ICD can be induced by a broad spectrum of therapeutic interventions, each converging on shared molecular pathways despite mechanistic diversity. Chemotherapy-based inducers include cisplatin derivatives that simultaneously target thioredoxin reductase and DNA, triggering ER stress and ROS accumulation in [[triple-negative-breast-cancer|triple-negative breast cancer (TNBC)]].² [[Cuproptosis]] inducers combined with cisplatin in metallic polymer nanoparticles reverse Wnt/β-catenin-mediated cuproptosis tolerance through ER stress-triggered calcium overload, acting as type II ICD inducers.³

Physical modalities represent an orthogonal approach: [[tumor-treating-fields|tumor-treating fields (TTF)]] trigger ICD through sphingolipid-metabolism-associated pathway-mediated ER stress in [[glioblastoma]], as revealed by single-cell RNA sequencing.⁴ Irreversible electroporation (IRE) induces systemic antitumor immunity in [[prostate-cancer|prostate cancer]] through non-thermal ablation that preserves neurovascular structures while releasing immunogenic cellular debris.⁵ Piezocatalytic therapy employs flexoelectric CuxBa1-xTiO3-shell BaTiO3 nanoparticles that generate ROS under ultrasonic stimulation, achieving self-amplified Fenton-like catalysis and GSH depletion.⁷

Biological inducers include oncolytic viruses, which have faced translational challenges due to biological barriers and immunosuppressive microenvironments in [[lung-cancer|lung cancer]]. An inhalable microbe-OV consortium addresses these limitations by conjugating tumor-responsive [[pegylated-adenoviruses|PEGylated adenoviruses]] to motile algae ([[synechococcus-wh8102|Synechococcus WH8102]]), enabling mucus penetration and calcium-mediated disruption of tight junctions to potentiate virus-mediated ICD.⁹

---

## Cancer applications

ICD-based strategies have demonstrated efficacy across multiple solid tumors, with particularly robust data in therapy-resistant subtypes. In [[triple-negative-breast-cancer|TNBC]], where conventional chemotherapy often fails, thioredoxin reductase-targeted Pt(IV) prodrugs simultaneously induce [[ferroptosis]] and ICD, overcoming cisplatin resistance through GSH depletion and [[gpx4|GPX4]] deactivation.² Metallic polymer nanoparticles co-delivering copper and cisplatin synergize cuproptosis with chemotherapy, suppressing the [[wnt-beta-catenin-pathway|Wnt/β-catenin pathway]] and achieving superior tumor suppression in orthotopic TNBC models.³

In [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]], platycodin-D-loaded iron nanocomposites ([[pif-ncs|PIF NCs]]) disrupt redox equilibrium to trigger ferroptosis-photochemotherapy, downregulating [[gpx4|GPX4]] and [[slc7a11|SLC7A11]] while increasing lipid peroxide production.⁶ Combined with [[anti-pd-l1-antibody|anti-PD-L1]] therapy, PIF NCs induce prolonged immunological memory in Hep3B tumor models.⁶

[[Glioblastoma]] multiforme, notorious for universal recurrence post-resection, responds to [[tumor-treating-fields|TTF]]-triggered ICD when complemented by ATP-responsive hydrogel adjuvants (Ha) that achieve spatiotemporally controlled release of antigens and CpG.⁴ The Ha-complemented TTF therapy effectively suppresses tumor growth in GBM-bearing rats, outperforming TTF monotherapy.⁴ In [[colon-cancer|colon cancer]], [[icap|ICAP]]-based immunotherapy biases toward robust CD8+ T cell responses, achieving approximately 90% tumor clearance in peritoneal metastasis models and potentiating CpG-TLR9 signaling through lysosomal escape.¹

---

## Synergy with immunotherapy

ICD transforms immunologically "cold" tumors into "hot" microenvironments primed for immune checkpoint blockade. [[Ferroptosis]]-photochemotherapy combined with [[anti-pd-l1-antibody|anti-PD-L1]] antibodies in [[hepatocellular-carcinoma|HCC]] models generates substantial tumor inhibition and sustained immunological memory, vastly outperforming monotherapy.⁶ The mechanistic basis lies in ICD-driven maturation of [[dendritic-cells|dendritic cells]] and activation of tumor-infiltrating T cells, creating a permissive environment for checkpoint blockade to unleash pre-existing antitumor immunity.⁷

Piezocatalytic therapy induces severe ICD that triggers dendritic cell maturation and T cell activation, achieving an 83.7% tumor inhibition rate and effectively preventing lung metastasis when combined with systemic immune activation.⁷ Cuproptosis-hydrogen sulfide gas therapy platforms reverse tumor microenvironment immunosuppression by promoting macrophage repolarization and vascular normalization, enhancing both local cytotoxicity and systemic immune surveillance.⁸

---

## Delivery innovations

Engineered nanoplatforms address the dual challenge of selective tumor targeting and spatiotemporal control of ICD induction. Cascade-responsive systems such as DCTH integrate mitochondrial targeting via triphenylphosphine-functionalized chitosan, GSH-responsive dendritic mesoporous organosilica shells for controlled co-release of hydrogen sulfide and Cu+, and hyaluronic acid outer shells for CD44-mediated tumor endocytosis.⁸ This architecture achieves synchronized intracellular acidification, ATP7A downregulation to inhibit Cu+ efflux, and mitochondrial copper accumulation that triggers cuproptosis through DLAT inhibition.⁸

ATP-responsive hydrogel adjuvants provide an orthogonal delivery strategy, reactivating myeloid cell interaction networks and augmenting sustained antitumor responses when paired with physical ICD inducers like [[tumor-treating-fields|TTF]].⁴ For lung cancer, inhalable microbe-oncolytic virus consortia leverage algal motility to penetrate respiratory mucus and epithelial barriers, with calcium deprivation disrupting tight junctions to facilitate deep solid tumor penetration.⁹ Flexoelectric piezoelectric materials engineered through gradient ion replacement achieve d33 values of 129.91 pm/V — a 345.93% increase — enabling self-amplified Fenton-like catalysis under ultrasonic stimulation.⁷

---

## References
1. PMID:41856327 — ICAP vaccines drive cDC1 cross-presentation and suppress colon cancer metastasis
2. PMID:41992775 — TrxR-targeted Pt(IV) prodrugs induce ferroptosis and ICD in TNBC
3. PMID:42041155 — Twinborn metallic nanoparticles reverse cuproptosis tolerance via Wnt inhibition
4. PMID:42054424 — ATP-responsive hydrogel complements TTF for glioblastoma therapy
5. PMID:42128518 — First-in-human immune atlas of IRE in prostate cancer
6. PMID:42133129 — PIF NCs enhance HCC immunotherapy with ferroptosis-photochemotherapy
7. PMID:41260109 — Flexoelectric nanoparticles for piezocatalytic immunotherapy
8. PMID:41605106 — DCTH nanoplatform for cuproptosis-H2S-PTT synergy
9. PMID:42034055 — Inhalable microbe-OV consortium for lung cancer treatment