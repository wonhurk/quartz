---
title: "Adeno-Associated Vectors"
---
# Adeno-Associated Vectors
`technology · gene-delivery · AAV · gene-therapy · genome-editing · immunotherapy · neurological-disease · cancer · inherited-disease`

Last modified 2026-06-04 · 6 papers · 1 outgoing link · 9 incoming links

| | |
|---|---|
| **Type** | Gene delivery vehicle |
| **Mechanism** | Non-integrating viral vector for transgene expression |
| **Key serotype** | AAV9 (CNS penetration) |
| **Applications** | Cancer immunotherapy, neurological disorders, metabolic disease, HIV |
| **Editing platforms** | Prime editors, adenine base editors |
| **Expression duration** | >1 year sustained transgene expression |
| **Papers** | 6 indexed |
| **Incoming links** | 9 wiki entities |

---

**Adeno-associated vectors (AAVs)** are non-integrating viral gene-delivery vehicles that enable long-term therapeutic transgene expression across diverse disease contexts, from cancer and inherited neurological disorders to chronic infections and retinal degeneration. Unlike integrating vectors, AAV genomes persist as episomes within transduced cells, providing sustained transgene expression without insertional mutagenesis risk. The technology achieves tissue-specific targeting through serotype selection — [[aav9|AAV9]] enables central nervous system penetration critical for treating neurological diseases, while muscle-tropic serotypes support systemic delivery — and promoter engineering that provides spatial and temporal control of transgene expression.¹⁻⁶

---

## Mechanism and vector engineering

AAV vectors transduce target cells through receptor-mediated endocytosis, with capsid serotype determining tissue tropism and transduction efficiency. Following cellular entry, the single-stranded DNA genome undergoes second-strand synthesis and circularizes into episomal concatemers that persist long term in non-dividing cells. Recent engineering advances have expanded AAV functionality beyond simple transgene delivery. Genetic code expansion combined with click chemistry enables covalent conjugation of AAV capsids with catalytic payloads such as G-quadruplex-hemin DNAzyme ([[cog4|CoG4]]), synchronizing delivery of complementary therapeutic and protective functions.² [[Radiotherapy]] further enhances AAV tumor transduction through epigenetic modification of vector episomes, enabling efficient local delivery with minimal systemic toxicity.¹

For large therapeutic cargo exceeding the 4.7 kilobase AAV packaging limit, dual-AAV9 systems employ split-intein protein trans-splicing to reconstitute full-length gene-editing machinery in transduced cells. This approach achieves 59% DNA and 97% mRNA editing in brain tissue, enabling delivery of prime editors and base editors to the central nervous system.³⁻⁵

---

## Cancer immunotherapy

AAV vectors have emerged as platforms for sustained local immunotherapy in solid tumors. An interferon-inducible promoter driving [[il-12|IL-12]] expression (AAV-iIL12) provides spatial control of transgene activation within irradiated tumors, where [[radiotherapy]]-induced interferon-γ selectively triggers cytokine production. This inducible system achieves efficient IL-12 delivery without the systemic toxicity associated with constitutive expression, generating a highly immunostimulatory tumor microenvironment that drives robust local and systemic antitumor responses in an IFN-γ- and FAS-dependent manner.¹ The combination overcomes common immune-evasion mechanisms and demonstrates that radiation-coupled AAV immune-gene delivery constitutes an efficient and safe cancer treatment modality.

---

## Neurological disease correction

AAV-mediated genome editing has demonstrated transformative efficacy in inherited epilepsy syndromes characterized by loss-of-function mutations in voltage-gated sodium channels. In [[dravet-syndrome|Dravet syndrome]], caused by pathogenic variants in SCN1A encoding the Nav1.1 α subunit, dual-AAV9 delivery of an [[adenine-base-editor|adenine base editor (ABE)]] directly corrected the recurrent SCN1AR613X nonsense mutation. Treatment of neonatal Scn1aR613X/+ mice achieved 59% DNA and 97% mRNA editing in bulk neocortices, restoring parvalbumin-expressing inhibitory neuron excitability and sodium current to wild-type levels. This ameliorated both spontaneous and temperature-induced seizures and improved 45-day survival 3.3-fold over vehicle-treated animals.⁵

Prime editing with the [[pe7|PE7]] editor similarly corrected the pathogenic SCN1A-K1270T mutation underlying generalized epilepsy with febrile seizures plus (GEFS+). Intein-split prime editor delivery under neuron-specific promoter control achieved 34.7% correction of the mutant allele in cortical DNA and 81.2% mRNA correction, increasing survival from 80% to 100%, improving cortical inhibitory transmission, and reducing febrile seizure frequency from 78.6% to 13.3%.³ Neuron-specific and interferon-inducible promoters provide critical spatial and temporal control of transgene expression, minimizing off-target activation and toxicity in genome-edited tissues.

---

## Metabolic and infectious disease

AAV-mediated prime editing has achieved functional correction of urea cycle disorders with clinically relevant editing efficiencies. In citrullinemia type I (CTLN1), caused by pathogenic ASS1 variants, neonatal AAV-PE7 delivery with optimized [[pegrna|prime editing guide RNA (pegRNA)]] achieved 71% hepatocyte correction, while lipid nanoparticle delivery of mRNA-encoded PE7 and synthetic pegRNA resulted in 24% correction after a single dose. All treated groups showed complete normalization of survival, blood citrulline and ammonia concentrations, and natural behavior, with editing confined to the liver and minimal indel formation or off-target activity.⁴

For chronic infectious disease, AAV vectors enable sustained expression of therapeutic antibodies targeting viral entry. AAV-mediated delivery of the [[ccr5|CCR5]]-blocking antibody [[leronlimab]] achieved long-term suppression of [[shiv|simian-human immunodeficiency virus (SHIV)]] replication in rhesus macaques by interrupting viral access to the CCR5 co-receptor. Despite emergence of antidrug antibody responses in approximately half of treated animals, spontaneous transgene reemergence occurred at one year with persistent CCR5 receptor occupancy thereafter. In macaques achieving full CCR5 receptor occupancy on blood CD4+ T cells, AAV-leronlimab drove stringent or partial control of SHIV viremia long term, demonstrating proof of concept for AAV-mediated functional cure of [[hiv|HIV infection]].⁶

---

## Retinal gene therapy

Inherited retinal degenerations present challenges for gene supplementation due to oxidative stress barriers that impair therapeutic efficacy. In [[retinitis-pigmentosa|retinitis pigmentosa]] caused by [[pde6b|PDE6B]] deficiency, an engineered AAV vector covalently conjugated with catalytic [[cog4|G-quadruplex-hemin DNAzyme (CoG4)]] addresses this limitation through synchronized delivery of antioxidant and genetic correction. The CoG4 payload directly scavenges excess reactive oxygen species and restores mitochondrial homeostasis, creating a favorable microenvironment for Pde6b gene supplementation. In Pde6brd10/rd10 mice, AAV-CoG4 treatment resulted in sustained PDE6B expression, preservation of photoreceptor morphology, restoration of rod and cone function by electroretinogram, and improved visual behavior, outperforming AAV or CoG4 monotherapies.² This dual-function platform establishes oxidative stress as a major barrier to retinal gene therapy and demonstrates a broadly applicable strategy coupling microenvironment modulation with genetic correction.

---

## References
1. PMID:41875889 — Radiotherapy synergizes with inducible AAV-IL12 immunotherapy
2. PMID:42127191 — Synergistic antioxidant and gene supplementation for retinitis pigmentosa
3. PMID:42127217 — Prime editing of Scn1a ameliorates GEFS+ seizure phenotypes
4. PMID:42127219 — RNA-LNP prime editing corrects citrullinemia type I
5. PMID:42127220 — Adenine base editing ameliorates Dravet syndrome phenotypes
6. PMID:42054491 — AAV-mediated CCR5 blockade suppresses SHIV replication long term