---
title: "Metastasis"
---
# Metastasis
`disease · cancer progression · metabolic reprogramming · OXPHOS · fatty acid oxidation · tumor microenvironment`

Last modified 2026-06-04 · 7 papers · 8 incoming links

| | |
|---|---|
| **Type** | Cancer progression |
| **Key mechanisms** | OXPHOS, fatty acid β-oxidation, lactate signaling |
| **Metabolic drivers** | [[icam2\|ICAM2]], [[cpt1a\|CPT1A]], [[mt-5-tirna-34-glnttg\|mt-5'tiRNA-34-GlnTTG]] |
| **Tumor microenvironment** | Cancer-associated fibroblasts, endothelial cells |
| **Cancer types** | Breast, lung adenocarcinoma, lung squamous, thyroid |
| **Biomarkers** | [[pls3\|PLS3]] mRNA, ICAM2, CPT1A lactylation |
| **Papers** | 7 indexed |
| **Incoming links** | 8 wiki entities |

---

**Metastasis** is the dissemination of malignant cells from a primary tumor to distant organs and represents the principal cause of cancer-related mortality. Multi-omics and mechanistic studies across diverse malignancies have established that metastatic progression is fundamentally driven by metabolic reprogramming—specifically enhanced oxidative phosphorylation (OXPHOS) and fatty acid β-oxidation (FAO)—and by altered intercellular communication within the tumor microenvironment. Central molecular drivers include [[icam2|ICAM2]]-mediated dynein-dependent OXPHOS activation in endocrine-resistant breast cancer, tumor-derived mitochondrial tRNA fragments that remodel endothelial cells in lung adenocarcinoma, and lactate-driven [[cpt1a|CPT1A]] lactylation that amplifies FAO in papillary thyroid carcinoma.¹⁻³ These metabolic shifts confer both selective advantages for migrating tumor cells and exploitable therapeutic vulnerabilities.

---

## Metabolic mechanisms

Metastatic cancer cells exhibit characteristic metabolic reprogramming distinct from primary tumors. Enhanced OXPHOS activity provides sustained ATP production necessary for migratory and invasive behaviors, while upregulated FAO supplies acetyl-CoA and NADH to fuel the tricarboxylic acid cycle during energy-demanding metastatic colonization.¹⁻³ Lactate, traditionally viewed as a glycolytic waste product, functions as a signaling metabolite that promotes histone lactylation and post-translational modification of metabolic enzymes. In papillary thyroid carcinoma, elevated lactate drives histone H3K18 lactylation to upregulate [[cpt1a|CPT1A]] transcription while simultaneously lactylating CPT1A protein at lysine residues K180 and K285, thereby stabilizing the enzyme against ubiquitin-proteasomal degradation and amplifying FAO flux.³ This dual transcriptional and post-translational regulation creates a feed-forward metabolic circuit that sustains metastatic progression.

---

## Breast cancer metastasis

In ER-positive breast cancer, acquired endocrine resistance involves profound metabolic remodeling toward OXPHOS dependency. Multi-omics profiling of resistant tumors identified [[icam2|intercellular adhesion molecule 2 (ICAM2)]] as a biomarker and functional driver of the high-OXPHOS phenotype.¹ ICAM2-positive cells were markedly enriched in endocrine-resistant tumors and predicted poor survival across patient cohorts. Mechanistically, ICAM2 assembles a functional complex by binding both dynein light chain DYNLT3 and the mitochondrial complex I subunit MT-ND2, thereby facilitating dynein-mediated mitochondrial trafficking and modulating complex I assembly efficiency. Disruption of this interaction through [[icam2|ICAM2]] knockdown or pharmacological dynein inhibition with Ciliobrevin D effectively suppressed OXPHOS activity. Notably, estrogen receptor alpha (ERα) transcriptionally represses ICAM2 under homeostatic conditions, and therapeutic ERα inhibition paradoxically relieves this repression, driving OXPHOS upregulation and resistance. Combination therapy pairing the complex I inhibitor IACS-10759 with fulvestrant potently inhibited both tumor growth and metastasis in preclinical models, establishing a targetable metabolic axis in refractory disease.¹

Early detection of micrometastatic foci remains a critical clinical challenge in breast cancer. [[pls3|Plastin-3 (PLS3)]], a cytoskeletal protein involved in cell motility and remodeling, has emerged as a sensitive biomarker for metastatic dissemination.⁶ A multigated DNA cascade amplifier ([[mdca|MDCA]]) system was developed for ultrasensitive detection of [[pls3|PLS3]] mRNA at the single-cell level, integrating multigated activation with dual signal amplification via hybridization chain reaction and APE1-mediated catalytic cycling. This platform achieved a detection limit of 5.8 attomolar and, when combined with machine learning classifiers, enabled visualization of metastatic foci in clinical tissue samples with greater than 92% accuracy, offering promise for early diagnosis and risk stratification.⁶

---

## Lung cancer metastasis

Metastatic progression in lung adenocarcinoma (LUAD) is facilitated by intercellular mitochondrial transfer from tumor cells to vascular endothelial cells. Tumor cells transfer mitochondria enriched in the mitochondrial tRNA-derived small RNA [[mt-5-tirna-34-glnttg|mt-5'tiRNA-34-GlnTTG]], which accumulates abnormally in endothelial cells at sites of vascular invasion.² This mitochondrial tsRNA binds the RNA-binding protein FUBP3 and facilitates its nuclear translocation, ultimately enhancing ribosomal assembly efficiency and global translation rates in recipient endothelial cells. The resulting increase in endothelial cell proliferation and migration promotes tumor cell invasion and metastatic dissemination. Lipid nanoparticle delivery of [[mt-5-tirna-34-glnttg-inhibitor|mt-5'tiRNA-34-GlnTTG inhibitors]] effectively suppressed lung cancer metastasis in murine models, highlighting the therapeutic potential of targeting intercellular mitochondrial communication.²

In lung squamous cell carcinoma (LUSC), cancer-associated fibroblasts (CAFs) actively promote metastasis through secretion of pro-migratory factors including hepatocyte growth factor (HGF) and through activation of PI3K signaling in tumor cells.⁴ The selective PI3Kα inhibitor [[cyh33|CYH33]], currently in phase I/II clinical trials for advanced solid tumors, dose-dependently suppressed LUSC cell motility by blocking PI3K signaling and disrupting cytoskeletal architecture. Oral administration of [[cyh33|CYH33]] significantly attenuated metastasis of orthotopically implanted LUSC xenografts. RNA sequencing revealed that [[cyh33|CYH33]] treatment reduced CAF infiltration in primary tumors and concurrently suppressed CAF trans-differentiation and proliferation, thereby diminishing HGF secretion. Co-inoculation experiments confirmed that fibroblasts potentiated tumor metastasis in vivo, an effect robustly suppressed by [[cyh33|CYH33]], demonstrating dual targeting of intrinsic tumor cell PI3K signaling and extrinsic CAF-mediated support.⁴

---

## Thyroid cancer metastasis

Papillary thyroid carcinoma (PTC), the most prevalent thyroid malignancy, exhibits aggressive metastatic behavior in a subset of patients despite generally favorable prognosis. Metabolomic profiling of paired PTC tissues revealed elevated lactate levels and activated FAO, with corroboration in large-scale genomic datasets.³ Functional assays demonstrated that exogenous lactate enhances PTC cell migration exclusively via [[cpt1a|CPT1A]]-dependent FAO. Mechanistically, lactate promotes histone H3K18 lactylation to drive [[cpt1a|CPT1A]] transcription and directly lactylates [[cpt1a|CPT1A]] protein at K180 and K285, protecting it from ubiquitin-mediated degradation. Genetic ablation or pharmacological inhibition of [[cpt1a|CPT1A]] abolished lactate-driven migration and FAO activity. In vivo, lactylation-deficient CPT1A mutants (K180R/K285R) markedly attenuated lung metastasis and subcutaneous tumor growth, establishing [[cpt1a|CPT1A]] lactylation as both a biomarker of metastatic risk and a therapeutic vulnerability for metabolic intervention in PTC.³

---

## Novel therapeutic approaches

Emerging therapeutic strategies exploit the metabolic dependencies and microenvironmental features of metastatic tumors. Engineered bacteriotherapy has shown preclinical promise, leveraging bacterial tropism for acidic and hypoxic tumor microenvironments. Lactobacillus rhamnosus GG (LGG) demonstrated intrinsic anti-tumor activity through acidification-induced mitochondrial dysfunction and apoptosis, competitive inhibition of tumor-promoting bacteria, and activation of M1-type macrophage polarization and dendritic cell maturation.⁵ A biohybrid system conjugating paclitaxel-loaded nanoparticles to LGG (PTX-NPs-LGG) and delivered via thermo-sensitive hydrogel exhibited superior efficacy in 4T1 breast tumor lung metastasis and B16F10 postoperative recurrence models, combining targeted chemotherapy with immunotherapy.⁵

A complementary approach employs genetically programmed Escherichia coli (DacA-Bac) functionalized with copper-sulfide nanoparticles to create a biohybrid system ([[db-at-cscn|DB@CSCN]]) that synergistically induces cuproptosis and [[sting|STING]] pathway activation.⁷ Exploiting bacterial hypoxic tropism, the system selectively accumulates in tumors and releases copper ions to induce copper-overload-mediated cell death. Spatiotemporally controlled release of the STING agonist cyclic di-adenosine monophosphate (CDA) under laser irradiation ensures precise delivery to the tumor site. Notably, CDA-induced [[sting|STING]] activation amplifies cuproptosis by disrupting glycolysis in tumor cells, enhancing dendritic cell maturation and T cell immunity. This programmable platform overcomes key limitations of passive nanocarrier delivery and represents a safe, tumor-targeted approach for chemo-immunotherapy.⁷

Combination regimens targeting metabolic vulnerabilities have demonstrated potent anti-metastatic effects across cancer types. Pairing complex I inhibitors with endocrine therapy in breast cancer, [[cyh33|PI3K inhibitors]] with standard-of-care in LUSC, and [[cpt1a|CPT1A]] inhibitors in lactate-high thyroid carcinomas collectively establish metabolic inhibition as a rational therapeutic avenue in metastatic disease.¹³⁴

---

## References
1. PMID:42151122 — ICAM2 promotes endocrine resistance via dynein-mediated OXPHOS activation in ER-positive breast cancer
2. PMID:41707977 — Tumor-derived mitochondrial tsRNA drives vascular invasion of lung adenocarcinoma by promoting ribosomal assembly in endothelial cells
3. PMID:42045183 — Lactic acid promotes metastasis of papillary thyroid carcinoma by enhancing CPT1A lactylation
4. PMID:41545755 — Targeting intrinsic and CAF-mediated signaling by PI3Kα inhibitor CYH33 attenuated metastasis in lung squamous cell carcinoma
5. PMID:41237436 — Chemo-immunotherapeutic potential of Lactobacillus rhamnosus GG and its bioengineering for cancer therapy
6. PMID:41961955 — Multigated DNA cascade amplifier for ultrasensitive spatiotemporal imaging of PLS3 mRNA at the single-cell level for early detection of breast cancer metastasis
7. PMID:41401569 — Programmable bacteria-driven biohybrid triggers spatiotemporal-controlled STING activation to potentiate cuproptosis-based cancer therapy