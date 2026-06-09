---
title: "Prime Editing"
---
# Prime Editing

`technology · gene-editing · precision-medicine · no-double-strand-breaks · pegRNA-guided · therapeutic-genome-correction`

Last modified 2026-06-05 · 4 papers · 2 outgoing links · 8 incoming links

| | |
|---|---|
| **Type** | Precision genome editing technology |
| **Mechanism** | pegRNA-guided prime editor catalyzes point mutations without DSBs |
| **Key catalytic protein** | PE7 prime editor variant |
| **Guide component** | pegRNA (prime editing guide RNA) |
| **Delivery systems** | AAV vectors, LNP-mRNA |
| **Editing efficiency** | 13–71% allele correction (tissue-dependent) |
| **Diseases targeted** | Urea cycle disorders, inherited epilepsy |
| **Functional genomics** | prime-SGE multiplex screening framework |
| **Papers** | 4 indexed |
| **Incoming links** | 8 wiki entities |

---

**Prime editing** is a precision genome editing technology that catalyzes targeted installation and correction of specific point mutations through pegRNA-guided prime editor proteins, fundamentally bypassing the requirement for double-strand breaks that characterize conventional [[crispr-based-genome-editing|CRISPR-based approaches]].¹ The system leverages optimized pegRNA design paired with engineered prime editor variants—notably PE7—to achieve efficient in vivo correction of pathogenic alleles across diverse genomic loci and tissue contexts. Unlike traditional base editors or CRISPR nucleases, prime editing operates through precise RNA-guided transesterification, enabling installation of discrete mutations without creating genotoxic DNA breaks or relying on host cell repair machinery.

---

## Mechanism

Prime editing operates through a fundamentally distinct catalytic mechanism in which pegRNA molecules guide a prime editor protein—a reverse transcriptase fused to a nickase variant of Cas9—to target genomic sites.¹ The pegRNA contains two critical elements: a CRISPR RNA-like segment that directs sequence-specific binding to the target locus, and a 3′ structured motif encoding the desired edit sequence (point mutation, insertion, or small deletion). Upon pegRNA hybridization, the prime editor catalyzes a transesterification reaction that reverses the target DNA strand at the pegRNA-DNA junction, effectively copying the edit template directly into genomic DNA without requiring creation of a double-strand break. The edited DNA flap is subsequently resolved through host cell endogenous nuclease and repair pathways, restoring the target sequence precisely as specified.² This mechanistic simplicity confers substantial advantages: the editing activity is confined spatially to the pegRNA-target junction, inherently limiting off-target mutagenesis, and the avoidance of double-strand breaks reduces genotoxic stress and chromosomal rearrangements.

---

## Therapeutic correction of monogenic disorders

Prime editing has emerged as a versatile platform for correcting pathogenic mutations in inherited genetic diseases. In [[citrullinemia-type-i|citrullinemia type I (CTLN1)]], a severe [[urea-cycle|urea cycle disorder]] caused by pathogenic variants in [[ass1|argininosuccinate synthetase 1 (ASS1)]], both AAV and LNP-mRNA delivery of PE7 prime editor achieved substantial allele correction in hepatocytes of neonatal and juvenile mouse models.¹ AAV-mediated delivery achieved 71% and 54% correction in neonates and juveniles respectively, whereas LNP-mRNA delivery yielded 13–24% correction depending on dosing strategy. Critically, all treated cohorts demonstrated complete normalization of survival, blood citrulline and ammonia concentrations, and restoration of wild-type-like [[ass1|ASS1]] protein localization in hepatocytes, with functional recovery of urea cycle activity.¹ In cellular reporter assays, six of fifteen recurrent human pathogenic [[ass1|ASS1]] mutations, including the prevalent [[ass1g390r|ASS1G390R]] variant, were corrected with efficiencies matching or exceeding those achieved in the murine fold model.

Prime editing similarly demonstrated efficacy in correcting autosomal-dominant neurological mutations. In [[gefs+|generalized epilepsy with febrile seizures plus (GEFS+)]], a genetic epilepsy syndrome linked to loss-of-function mutations in [[scn1a|sodium channel SCN1A]], AAV-mediated delivery of an intein-split prime editor under neuron-specific promoter control achieved 34.7% allele-level and 81.2% mRNA-level correction of the pathogenic [[scn1a|SCN1A-K1270T]] mutation in the murine cortex.² Treated animals exhibited 100% survival compared to 80% in controls, improved cortical inhibitory neuron transmission (inhibitory postsynaptic current frequency increased from 0.32 to 1.32 hertz), and reduced seizure susceptibility (febrile seizure frequency decreased from 78.6% to 13.3%).² These results establish prime editing as sufficient to reverse disease-relevant electrophysiological and behavioral phenotypes in a neurogenetic disorder where conventional approaches remain limited.

---

## Functional genomics at scale

Beyond therapeutic genome correction, prime editing has been adapted into the [[prime-sge|prime-SGE framework]], enabling high-throughput interrogation of point mutation function across the genome.³ This approach generates and installs libraries of specific point mutations into genes distributed throughout the genomic landscape—bypassing the single-region constraint of conventional saturation genome editing—and assesses functional effects through sequencing of pegRNA abundance rather than mutant alleles themselves. In proof-of-concept studies, prime-SGE screened thousands of point mutations across eight oncogenes for their ability to confer resistance to four tyrosine kinase inhibitors, identifying drug resistance variants at genomic scale with unprecedented multiplexing capacity.³ The framework is readily applicable to other positive selection contexts, including identifying loss-of-function variants, protein-protein interaction determinants, or cellular fitness dependencies, and benefits directly from incremental improvements in prime editing efficiency.

---

## Delivery and tissue targeting

Prime editing therapeutic efficacy depends critically on delivery route and tissue tropism engineering. For central nervous system applications, AAV vectors paired with intein-split prime editor architectures enable efficient neuronal targeting: the split prime editor components are reconstituted only in neurons expressing the complementary intein pairs, reducing off-target expression in non-neuronal tissues.² Neuron-specific promoters (such as synapsin-1 or CaMKII promoters) further restrict expression to inhibitory interneurons or excitatory neurons, as required by disease context. In contrast, systemic applications leverage lipid nanoparticle-mRNA delivery, which exhibits inherent hepatic tropism; LNP-formulated PE7 mRNA and pegRNA achieve measurable allele correction in liver hepatocytes following intravenous administration, with dosing optimization enabling single-dose therapeutic regimens in neonates or multi-dose approaches in older animals.¹ The choice of delivery vehicle thus directly shapes tissue distribution and therapeutic applicability.

---

## Safety profile and minimal off-target activity

A cardinal advantage of prime editing is its inherently constrained off-target footprint. Editing activity is mechanistically restricted to the pegRNA-target site junction, and unintended DNA cleavage is absent—in contrast to [[crispr-based-genome-editing|CRISPR-based nucleases]]—since the prime editor catalyzes transesterification rather than endonucleolytic cutting. Across both [[citrullinemia-type-i|CTLN1]] and [[gefs+|GEFS+]] therapeutic models, indel formation was minimal, and off-target activity at predicted off-target loci was negligible.¹² Editing was spatially confined to the intended tissues (liver for [[ass1|ASS1]] correction, cerebral cortex for [[scn1a|SCN1A]] correction), with absent or transient elevations in liver enzymes and no evidence of systemic toxicity. This precision positions prime editing as particularly suitable for applications in monogenic disorders where germline or somatic correction of a single pathogenic allele is the therapeutic objective, and unwanted off-target mutations would constitute an adverse outcome.

---

## References

1. PMID:42127219 — RNA-LNP prime editing for Citrullinemia type I: PE7 prime editor achieves 13–71% allele correction in neonatal and juvenile mouse models via AAV and LNP-mRNA delivery, with complete normalization of urea cycle function and survival.

2. PMID:42127217 — Prime editing of a pathogenic Scn1a allele ameliorates seizure phenotypes in a GEFS+ mouse model: AAV-intein-split prime editor corrects 34.7% of mutant alleles and 81.2% of mRNA, reversing seizure susceptibility and improving neuronal inhibitory transmission.

3. PMID:41722572 — A multiplex, prime editing framework for identifying drug resistance variants at scale: prime-SGE enables installation and functional assessment of thousands of point mutations across multiple genomic loci simultaneously to identify tyrosine kinase inhibitor resistance variants.

4. PMID:42127809 — Meet the authors: Lea Starita and Florence Abadie.