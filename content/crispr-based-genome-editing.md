---
title: "CRISPR-based genome editing"
---
# CRISPR-based genome editing
`technology · functional genomics · genome screening · prime editing · guide design · high-throughput`

Last modified 2026-06-05 · 2 papers · 2 incoming links

| | |
|---|---|
| **Type** | Functional genomics technology |
| **Key innovation** | [[prime-editing\|Prime editing-based saturation genome editing]] |
| **Core capability** | Concurrent multiplex perturbations |
| **Guide optimization** | On-target/off-target balancing framework |
| **Applications** | Drug resistance discovery, positive selection screening |
| **Libraries** | [[jacquere\|Jacquere]] (human), Julianna (mouse) |
| **Compatible readouts** | [[single-cell-rna-sequencing\|Single-cell RNA sequencing]], [[high-content-imaging\|High-content imaging]] |
| **Papers** | 2 indexed |

---

**CRISPR-based genome editing** is a transformative [[functional-genomics|functional genomics]] technology that enables thousands of genetic perturbations to be simultaneously assayed in single experiments, fundamentally revolutionizing the systematic discovery of gene function across entire genomes.¹ The technology's power lies in its ability to install and functionally assess large libraries of defined genetic variants, particularly through [[prime-editing|prime editing-based saturation genome editing]] (prime-SGE), which allows point mutation libraries to be installed and evaluated across multiple genomic regions in parallel.¹ A critical framework innovation balances [[crispr-cas9|CRISPR-Cas9]] guide RNA design against both on-target editing efficacy and off-target effects, enabling the creation of compact yet comprehensive genome-scale knockout libraries compatible with high-dimensional readouts including [[single-cell-rna-sequencing|single-cell RNA sequencing]] and [[high-content-imaging|high-content imaging]].²

---

## Mechanism

CRISPR-based genome editing functions by directing molecular machinery to precise genomic locations to introduce defined genetic changes. The core approach involves designing guide RNAs that direct [[cas9|Cas9]] nuclease to target sequences, enabling systematic disruption or modification of genes of interest. Prime-SGE represents a significant methodological advance in which libraries of specific point mutations are installed into genes throughout the genome using prime editing machinery, and the installed mutations are subsequently assessed functionally not by sequencing the mutations themselves but by sequencing the prime editing guide RNAs (pegRNAs) that directed their installation.¹ This innovation overcomes a fundamental limitation of traditional saturation genome editing: whereas prior methods could only study one genomic region per experiment, prime-SGE multiplexes analysis across multiple genes simultaneously, enabling functional screening of thousands of point mutations distributed across the genome in a single experiment.

Guide RNA design optimization requires simultaneously balancing competing priorities. An updated design framework identifies guides with sufficient off-target activity to justify their omission from screening libraries, thereby avoiding unnecessary exclusion of guides with high on-target activity.² This balanced approach generates more compact libraries without sacrificing coverage or discovery potential, and becomes increasingly important given the continuous evolution of genome annotations and the growing adoption of high-dimensional readouts that require manageable library sizes.

---

## Drug resistance discovery

The prime-SGE framework has proven especially powerful for systematic functional interrogation of drug resistance mechanisms. By assaying thousands of point mutations in multiple oncogenes simultaneously, researchers can identify specific variants that confer resistance to [[tyrosine-kinase-inhibitor|tyrosine kinase inhibitors]] across several drugs and cellular contexts.¹ This approach enables rapid positive selection screening of large numbers of point mutations at locations throughout the genome, revealing resistance mechanisms that would be inaccessible through lower-throughput methods. The ability to perform functional assessment by sequencing pegRNAs rather than genomic DNA mutations further streamlines workflow and enables scalability to genome-wide studies.

---

## Genome-scale community resources

The development of optimized guide design frameworks has enabled the creation of community-accessible genome-scale knockout libraries. The [[jacquere|Jacquere library]] provides comprehensive coverage of the human genome with guides optimized for both on-target activity and off-target avoidance, while its mouse counterpart, Julianna, enables similar functional interrogation in model organisms.² These resources are designed to facilitate gene function discovery at scale and are compatible with the latest high-dimensional readout technologies. Integration with [[single-cell-rna-sequencing|single-cell RNA sequencing]] and [[high-content-imaging|high-content imaging]] allows researchers to assess the functional consequences of genetic perturbations in unprecedented detail, capturing cell-type-specific effects and phenotypic diversity within single experiments.

---

## References
1. PMID:41722572 — A multiplex, prime editing framework for identifying drug resistance variants at scale
2. PMID:41887225 — Balancing off-target and on-target considerations for optimized CRISPR-Cas9 knockout library design