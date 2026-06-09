---
title: "CRISPR-Cas9 Genome Editing"
---
# CRISPR-Cas9 Genome Editing
`technology · gene editing · functional genomics · cancer therapy · multiplex editing · therapeutic delivery · nuclease variants`

Last modified 2026-06-04 · 14 papers · 1 outgoing link · 18 incoming links

| | |
|---|---|
| **Type** | Genome editing technology |
| **Mechanism** | RNA-guided DNA cleavage |
| **Core nuclease** | Streptococcus pyogenes Cas9 (SpCas9) |
| **Variants evaluated** | 50+ RNA-guided nucleases |
| **Compact variants** | [[crispr-based-genome-editing\|Cas12f]] (~1 kb) |
| **Delivery platforms** | Bacteria, yeast, AAV, nanocarriers, EVs |
| **Cancer cytotoxicity** | ~3-fold superior to radiation-induced DSBs |
| **Applications** | Functional screening, disease modeling, direct therapy |
| **Papers** | 14 indexed |
| **Incoming links** | 18 wiki entities |

---

**CRISPR-Cas9 genome editing** is a programmable nuclease technology that enables precise manipulation of genomic DNA through RNA-guided recognition and cleavage, establishing itself as a versatile platform spanning functional genomics, target discovery, disease modeling, and direct therapeutic intervention across oncology and monogenic disorders. The technology leverages a [[guide-rna|guide RNA (gRNA)]] to direct the Cas9 endonuclease to specific genomic loci where it induces [[dna-double-strand-breaks|DNA double-strand breaks (DSBs)]], triggering cellular repair pathways that enable gene knockout, insertion, or correction. Advanced multiplex systems now permit simultaneous editing at multiple genomic sites through platforms including [[phycut|PHYCUT]] and tRNA-gRNA arrays, while comparative characterization of over 50 RNA-guided nuclease variants reveals distinct performance profiles in efficiency, specificity, size, and cytotoxicity.¹²

---

## Functional genomics and target discovery

CRISPR-Cas9 libraries enable systematic genome-wide interrogation of gene function, identifying targets conferring disease-relevant phenotypes across diverse organisms and contexts. A druggable CRISPR/Cas9 library screen in intrahepatic cholangiocarcinoma revealed [[idh1|isocitrate dehydrogenase 1 (IDH1)]] as the crucial target conferring gemcitabine chemoresistance, demonstrating that wild-type IDH1 generates α-ketoglutarate and NADPH to maintain cellular redox homeostasis under oxidative stress.³ In the silkworm *Bombyx mori*, genome-wide CRISPR/Cas9 screening identified BmM-ALP as a vital thermoregulator orchestrating antioxidant responses and metabolic adaptations for heat resistance through phosphorylation of Vitamin B1, establishing a regulatory axis linking energy homeostasis to thermal adaptation.⁴ Such functional screens extend beyond gene knockout to identify metabolic dependencies, with [[atp5i|ATP synthase subunit e (ATP5I)]] revealed as a metformin target through CRISPR knockout studies demonstrating that ATP5I disruption recapitulates biguanide-induced phenotypes including mitochondrial morphology alterations and OXPHOS inhibition.⁵

---

## Multiplex editing systems

Advanced multiplex CRISPR platforms enable simultaneous editing at multiple genomic loci in single transformation events, facilitating complex metabolic engineering and functional dissection of redundant gene families. [[phycut|PHYCUT (Phaeodactylum tricornutum Csy4-Cas9 multiplex tool)]] employs Csy4 endoribonuclease to process multigRNA arrays, achieving multiplex editing of all three FucT genes responsible for α(1,3) fucosylation in the diatom *Phaeodactylum tricornutum*, yielding strains with reduced fucosylation suitable for recombinant biopharmaceutical production.⁶ In the industrial fungus *Acremonium chrysogenum*, a tRNA-gRNA array-based system driven by endogenous tRNA promoters achieved double- and triple-site knockouts with efficiencies of 50–83.3% and 14.3% respectively, enabling one-step multilocus knockout, large-fragment DNA deletion up to 50.7 kb, and simultaneous gene overexpression.⁷ The endogenous tRNA^Val^ promoter demonstrated the highest knockout efficiency (95.5%), surpassing heterologous promoter systems and establishing the first triple-site knockout in this cephalosporin C production strain.⁷

---

## Cancer therapy applications

CRISPR-Cas9-induced double-strand breaks exhibit superior cytotoxicity to radiation therapy in preclinical oncology models, offering precision targeting of cancer-specific mutations while sparing normal tissues. In pancreatic cancer, cancer-specific multi-target sgRNAs targeting nine genomic sites achieved more than 90% tumor growth inhibition, with CRISPR/Cas9-induced DSBs requiring approximately three times fewer breaks than radiation to achieve equitoxic effects.⁸ Mechanistically, CRISPR/Cas9-induced DSBs trigger persistent chromosomal rearrangements and instability that peaks before cell death, with 87% of structural variants arising indirectly rather than directly from initial editing sites, ultimately leading to chromosome catastrophe.⁸⁹ Crucially, pancreatic cancer cells surviving initial CRISPR/Cas9 targeting retained susceptibility to subsequent targeting at different genomic sites with more than 87% growth inhibition, circumventing resistance mechanisms.⁸

Therapeutic delivery innovations extend CRISPR applicability to in vivo settings through diverse platforms. For colorectal cancer, genetically modified *Escherichia coli* BL21 and *Pichia pastoris* X33 engineered for oral delivery colonize the intestine and secrete [[extracellular-vesicles|extracellular vesicles]] carrying Cas9 protein and [[art1|ART1]]-targeting sgRNA, with polydopamine coating enhancing gastrointestinal viability and establishing on-site cell factories for sustained CRISPR secretion and tumor suppression.¹⁰

---

## Disease modeling and mechanistic studies

CRISPR-Cas9 enables rapid generation of isogenic disease models that recapitulate key pathological features, accelerating mechanistic understanding of genetic disorders. For Hereditary Multiple Osteochondromas, CRISPR/Cas9 combined with PiggyBac transposon technology introduced a second pathogenic mutation into patient-derived iPSCs carrying heterozygous [[ext1|EXT1]] mutations, generating isogenic wild-type, single-mutant, and double-mutant lines that confirmed the "two-hit" hypothesis: biallelic EXT1 inactivation led to significant upregulation of SOX9, COL2A1, and ACAN, reduced heparan sulfate, and enlarged disorganized 3D chondrogenic organoids partially recapitulating osteochondroma histopathology.¹¹ In autosomal dominant tubulointerstitial kidney disease, a [[umod|UMOD]] p.H36Y knock-in mouse generated via CRISPR/Cas9 recapitulated human phenotypes including renal dysfunction, cyst formation, and interstitial inflammation, with multi-omics analyses revealing macrophage pyroptosis driven by mutant Umod activation of the App-Cd74 axis.¹² For pediatric acute myeloid leukemia, CRISPR/Cas9-mediated [[runx1|RUNX1]] knockout in AML-M0 cell lines demonstrated that RUNX1 disruption drives stem cell-like transcriptional features, reduces oxidative phosphorylation and ribosomal gene expression, and confers reduced sensitivity to cytarabine and anthracyclines.¹³

---

## Non-cancer therapeutic applications

CRISPR-Cas9 demonstrates therapeutic potential across diverse non-malignant conditions through targeted gene silencing and functional restoration. In diabetic retinopathy, single-cell RNA sequencing identified a pericyte subpopulation enriched in diabetic retina and characterized by high [[pttg1|PTTG1]] expression; CRISPR-Cas9-mediated PTTG1 silencing restored pericyte stability and barrier-supporting function under high-glucose stress, with in vivo delivery via adeno-associated virus or spherical nucleic acid-based siPttg1 nanocarriers substantially ameliorating retinal vascular dysfunction through metabolic reprogramming that modulated glycolytic flux and attenuated oxidative stress.¹⁴ Beyond therapeutic intervention, CRISPR systems enable dynamic monitoring and control of cellular state transitions: a [[mirna|miRNA]]-sensing ribozyme-scaffolded CRISPR system detects epithelial-to-mesenchymal transition through EMT-specific miRNA signatures and directs CRISPR effectors to modulate gene expression, enabling selective elimination of cells that have undergone mesenchymal transition and providing a versatile platform for regenerative medicine applications.¹⁵

---

## Nuclease variants and delivery optimization

Systematic comparison of over 50 RNA-guided nuclease variants reveals significant performance heterogeneity across efficiency, specificity, size, and safety parameters that inform rational selection for specific applications. [[ascas12a-ultra|AsCas12a-Ultra]], [[lbcpf1|LbCpf1]], and [[ascas12a-plus|AsCas12a-Plus]] demonstrated similar or higher efficiency compared to the SpCas9 benchmark, while compact Cas12f variants including enOsCas12f1 and SpaCas12f1 achieve high efficiency despite minimal size (~1 kb), supporting superior in vivo delivery capacity.¹ Off-target risk assessment identified AsCpf1-YH and FnCpf1 as exhibiting the lowest sgRNA-dependent off-target frequencies, whereas DpFNuc showed the highest.¹ Genomic structural impact analysis revealed that enCas12f-HKRA frequently introduces chromosomal translocations, while Cas12j-SF05 poses lower translocation risk; notably, high-efficiency RGNs were associated with translocation hotspots.¹ Cytotoxicity profiling demonstrated that enRhCas12f1 and SpaCas12f1 exhibited the lowest cellular toxicity, while enAsCpf1-HF strongly inhibited cell proliferation.¹ This multidimensional performance evaluation framework enables data-driven nuclease selection balancing editing efficiency, specificity, deliverability, and safety for precision genome editing applications.

---

## References
1. PMID:41927370 — Large-scale parallel characterization of RNA-guided nuclease activity and specificity
2. PMID:41979903 — PHYCUT: Scalable multiplex CRISPR/Cas9 editing in Phaeodactylum tricornutum
3. PMID:41842958 — IDH1 inhibitor ivosidenib overcomes chemoresistance in wild-type IDH1 cholangiocarcinoma
4. PMID:41974167 — Genome-wide CRISPR/Cas9 screening reveals BmM-ALP orchestrates heat resistance in Bombyx mori
5. PMID:42138716 — ATP synthase subunit e (ATP5I) mediates metabolic effects of metformin
6. PMID:41979903 — PHYCUT multiplex CRISPR/Cas9 editing for diatom genome engineering
7. PMID:42052944 — tRNA-gRNA array-based CRISPR/Cas9 platform for multiplex editing in Acremonium chrysogenum
8. PMID:42138085 — Simultaneous CRISPR/Cas9-induced DSBs are lethal in pancreatic cancer models
9. PMID:42138081 — Chromosomal instability induced by CRISPR/Cas9 in pancreatic cancer therapy
10. PMID:42044361 — Comparative evaluation of engineered bacteria and yeast for oral CRISPR/Cas9 delivery
11. PMID:41882878 — Biallelic EXT1 inactivation in patient-derived iPSCs confirms two-hit hypothesis
12. PMID:42049740 — Uromodulin p.His36Tyr promotes macrophage pyroptosis via App-Cd74 signaling
13. PMID:42056531 — Multi-omics analysis of pediatric AML-M0 reveals RUNX1-driven chemoresistance
14. PMID:42139353 — Functional targeting of PTTG1 in pericytes restores vascular integrity in diabetic retina
15. PMID:41950922 — Cellular-state control using ribozyme-scaffolded miRNA-sensing and CRISPR actuation