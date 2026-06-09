---
title: "T-cell receptor"
---
# T-cell receptor
`protein · surface immune receptor · antigen recognition · tcr · immunotherapy · signal transduction`

Last modified 2026-06-05 · 4 papers · 4 outgoing links · 4 incoming links

| | |
|---|---|
| **Type** | Surface immune recognition protein |
| **Function** | Recognizes peptide-antigen complexes on APCs |
| **Key regulatory proteins** | [[dgka|DGKα]], [[dgkz|DGKζ]] |
| **Genetic engineering target** | [[trac|TRAC locus]] |
| **Prediction model** | [[tcrlm|tcrLM]] |
| **Therapeutic antibodies** | [[max-16h5|MAX.16H5]] |
| **Papers** | 4 indexed |
| **Incoming links** | 4 wiki entities |

---

**T-cell receptor (TCR)** is a surface heterodimeric protein complex that enables T cells to recognize peptide antigens presented by antigen-presenting cells, serving as the central mechanism of adaptive immune specificity.¹ The TCR displays remarkable amino acid sequence diversity across its complementarity-determining regions, most notably CDR3, which directly determines the scope of pathogenic and tumor antigen recognition. TCR signaling is tightly regulated by [[dgka|diacylglycerol kinase α (DGKα)]] and [[dgkz|DGKζ]], which function as negative regulators that can be therapeutically inhibited to enhance T-cell effector function. Recent advances enable precise introduction of tumor-antigen-specific TCR genes at the endogenous [[trac|TRAC locus]] using genome editing, while computational models now predict TCR-epitope binding specificity from sequence data alone, enabling personalized immunotherapy strategies.

---

## Structure and diversity

The TCR α/β heterodimer recognizes peptide-MHC complexes through a triangular binding interface, with recognition specificity determined primarily by the highly variable CDR3 regions of both chains.¹ The CDR3 region exhibits exceptional amino acid sequence diversity across the T-cell population, arising from V(D)J recombination and junctional nucleotide addition and deletion, enabling each T-cell clone to recognize distinct pathogenic epitopes and tumor neoantigens. This sequence diversity is both the TCR's greatest strength—allowing detection of virtually any antigen—and a fundamental challenge for therapeutic engineering, as identifying functionally relevant TCRs from the vast possible repertoire requires sophisticated computational or empirical approaches.

---

## Signaling regulation and therapeutic enhancement

TCR engagement with peptide-MHC triggers immediate signaling through phosphorylation of immunoreceptor tyrosine-based activation motifs (ITAMs) in the CD3 complex, initiating calcium flux and nuclear factor of activated T cells (NFAT) translocation. However, the pathway is actively suppressed by [[dgka|DGKα]] and [[dgkz|DGKζ]], which phosphorylate diacylglycerol, a critical signaling lipid that otherwise drives T-cell activation and proliferation.² Inhibition of both DGK isoforms with the small molecule INCB191358 enhances TCR signal intensity, promoting antigen-dependent T-cell activation and substantially improving antitumor cytotoxicity when combined with [[pd-1|PD-1]] checkpoint blockade.²

TCR signaling can also be dampened through engagement with regulatory receptors. The [[max-16h5|anti-CD4 antibody MAX.16H5]] modulates TCR signaling by impairing T-cell receptor-mediated activation, leading to reduced proliferation of both CD4+ and CD8+ T cells and promoting a shift toward interleukin-10-dependent regulatory phenotypes.³ This mechanism has been therapeutically exploited in the allogeneic hematopoietic cell transplantation setting, where ex vivo incubation of donor cell grafts with MAX.16H5 prevents graft-versus-host disease (GVHD) while preserving graft-versus-leukemia immunity, achieving outcomes comparable to systemic immunosuppression without the associated organ toxicity and opportunistic infection risk.³

---

## Engineered TCR for cellular immunotherapy

The use of genome editing to introduce tumor-antigen-specific TCR genes at the [[trac|endogenous TRAC locus]] in iPSC-derived cytotoxic T lymphocytes (CTLs) represents a major advance in precision cellular immunotherapy. Unlike viral vector approaches, which result in random genomic integration and variable transgene expression, TRAC-targeted integration places the engineered TCR under native regulatory control at the correct genomic location.⁴ The resulting iPSC-derived CTLs display robust antigen-specific expansion, produce interferon-gamma and degranulation markers in an antigen-dependent manner, and exhibit potent cytotoxic activity against cognate peptide-expressing target cells.⁴ This approach enables indefinite ex vivo expansion while maintaining stable, functional TCR expression and represents a scalable strategy for generating customized cell therapies for diverse tumor types.

---

## Computational prediction of TCR specificity

The [[tcrlm|tcrLM lightweight language model]] enables prediction of TCR-epitope binding specificity directly from CDR3 amino acid sequences without requiring structural information or experimental validation.¹ PretrainedLanguage models on large-scale TCR sequence datasets, tcrLM extracts informative biochemical features—capturing positional preferences and amino acid properties critical for antigen recognition—and achieves competitive performance on both held-out and external test datasets. Notably, in melanoma patients, predicted TCR-neoantigen binding scores derived from tcrLM correlate with clinical response to immune checkpoint blockade, suggesting that computational TCR specificity prediction may enable prospective identification of therapeutic responders.¹ This approach addresses the central challenge posed by TCR sequence diversity: converting raw sequence information into quantitative binding predictions without exhaustive experimentation.

---

## References
1. PMID:41923632 — A lightweight TcrLM model predicts T cell receptor and epitope binding specificity
2. PMID:41996127 — Discovery of INCB191358: A Potent and Selective DGKα/ζ Dual Inhibitor
3. PMID:41587074 — Anti-CD4 antibody-modulated transplants for GVHD prevention in hematopoietic cell transplantation
4. PMID:41856057 — Targeted introduction of T cell receptor genes at the TRAC locus in cytotoxic T lymphocytes regenerated from human iPSCs by genome editing