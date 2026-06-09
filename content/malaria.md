---
title: "Malaria"
---
# Malaria
`disease · parasitic · infectious · Plasmodium species · transmission-blocking vaccines · genomic surveillance`

Last modified 2026-06-05 · 4 papers · 13 incoming links

| | |
|---|---|
| **Type** | Parasitic infectious disease |
| **Pathogen** | [[plasmodium-falciparum|Plasmodium falciparum]] and other Plasmodium species |
| **Vector** | Mosquitoes (Anopheles) |
| **Key vaccine targets** | [[csp|CSP]], [[pfs230]], [[pfs48-45]], [[ama1]] |
| **Surveillance markers** | Drug resistance genes, [[hrp2]]/[[hrp3]] deletions, vaccine-target polymorphisms |
| **Drug targets** | [[fructose-1-6-bisphosphate-aldolase|Aldolase]], [[triosephosphate-isomerase]], [[phosphoglycerate-mutase]] (allosteric sites) |
| **Control strategies** | Multistage vaccines, transmission-blocking vaccines, genomic surveillance, novel antimalarials |
| **Papers** | 4 indexed |

---

**Malaria** is a parasitic disease caused by [[plasmodium-falciparum|Plasmodium falciparum]] and related Plasmodium species, transmitted by Anopheles mosquitoes and responsible for hundreds of millions of infections annually, predominantly in sub-Saharan Africa. Malaria control has evolved from monolithic vaccination approaches toward integrated strategies combining multistage vaccines that prevent infection and block transmission, continental-scale genomic surveillance to monitor drug and vaccine-escape mutations in real-time, and novel antimalarial agents exploiting parasite-specific metabolic vulnerabilities. The disease represents both an ongoing public health crisis and a model system for understanding how molecular surveillance, rational drug design, and transmission-blocking immunology converge to achieve elimination.

---

## Parasitic life cycle and transmission

The malaria parasite progresses through distinct developmental stages in both the human host and the mosquito vector, creating two therapeutic intervention points: blocking the parasite in the human blood (erythrocytic stage) and preventing its development within the mosquito. [[plasmodium-falciparum|Plasmodium falciparum]] invades red blood cells and replicates asexually, causing fever and anemia, while a fraction of parasites differentiate into gametocytes—the sexual stage essential for mosquito infection. During a blood meal, female Anopheles mosquitoes ingest gametocytes, which mature and fuse to form zygotes, undergo meiosis, and develop into sporozoites that migrate to the salivary glands. Subsequent inoculation deposits sporozoites into humans, where they seed the liver, undergo amplification, and release merozoites that reinitiate the erythrocytic cycle. This multistage architecture has become central to contemporary vaccine design, as blocking transmission at the gametocyte-to-zygote step within mosquitoes offers a path to community-wide malaria elimination even when incomplete.

---

## Transmission-blocking vaccines

Transmission-blocking vaccines (TBVs) targeting the parasite's sexual stages within mosquitoes represent a paradigm shift in malaria control from individual protection toward herd immunity. [[pfs230]], a surface protein expressed in gametocytes and gametes, plays an essential role in gamete fertilization and is a premier TBV target. Prior work advanced the N-terminal pro-domain (Pro) and domain 1 as TBV candidates, but newer analyses demonstrate that domains 7–10 of [[pfs230]], when encoded by DNA vaccine platforms, induce potent complement-independent transmission-blocking antibodies capable of preventing parasite development within mosquitoes.¹ These newly identified domains expand the immunogenic landscape of Pfs230 and suggest that multi-domain targeting may overcome antigenic escape and improve population-level protection. [[pfs48-45]], a parasite protein similarly restricted to the sexual stage, synergizes with [[pfs230]] as a dual TBV target, recognizing that simultaneous disruption of multiple fertilization pathways may achieve near-complete transmission blockade.

---

## Multistage vaccination

The emergence of multistage vaccine constructs addresses a fundamental tension in malaria immunization: preventing parasite infection in the human host while simultaneously blocking transmission. ProC6C represents this integrated approach, combining epitopes from the sporozoite-stage [[csp|circumsporozoite protein (CSP)]]—which targets parasites during liver infection and establishes sterile immunity—with transmission-stage antigens [[pfs230]] and [[pfs48-45]].² When formulated with aluminium hydroxide (AlOH) and adjuvanted with Matrix-M, ProC6C-AlOH/Matrix-M has demonstrated safety and immunogenicity in phase 1 studies and advanced to phase 2 evaluation in African adults with lifelong malaria exposure. In this controlled human malaria infection trial, the vaccine is evaluated for both sterile protection against parasite challenge and for its capacity to reduce gametocytemia and mosquito infectivity, directly assessing its transmission-blocking potential in a natural immunity background. This dual-endpoint strategy reflects the evolving understanding that effective malaria elimination requires vaccines that simultaneously reduce disease incidence and interrupt onward transmission.

---

## Genomic surveillance and resistance monitoring

Malaria elimination at continental scale demands real-time monitoring of parasite evolutionary responses to vaccines and antimalarial drugs. Traditional genomic surveillance has been impractical in resource-limited African laboratories due to the sequencing infrastructure and expertise required. Recent advances in nanopore-based sequencing have transformed this landscape, enabling rapid and cost-effective surveillance of [[plasmodium-falciparum]] populations across sub-Saharan Africa. A continental-scale deployment achieved sequencing of over 1,000 parasite samples from six African countries within a single year, using a nanopore protocol requiring only five hours and costing less than $25 USD per sample.³ This approach simultaneously interrogates antimalarial drug-resistance genes, [[hrp2]] and [[hrp3]] deletion variants that render rapid diagnostics unreliable, vaccine-target polymorphisms in [[csp]] and [[ama1]], and mutations in parasites carried by minor clonal populations that might otherwise escape detection by conventional variant calling. Coupled to laptop-based bioinformatics dashboards that operate entirely offline, the infrastructure enables decentralized monitoring at African field laboratories, providing real-time visualization of parasite evolution under vaccine and drug selection pressure. This surveillance layer is essential for detecting vaccine-escape variants early and informing adaptive vaccination strategies before population-wide efficacy erodes.

---

## Novel antimalarial agents

While transmission-blocking and multistage vaccines address herd immunity and transmission interruption, chemotherapeutic innovations target the parasite's fundamental metabolic dependencies. [[plasmodium-vivax]] and [[plasmodium-falciparum]] exhibit pronounced reliance on glycolysis for energy production, and their glycolytic enzymes contain species-specific allosteric regulatory sites evolutionarily divergent from human homologs. Computational mapping combined with experimental validation identified high-confidence allosteric sites in parasite [[fructose-1-6-bisphosphate-aldolase]], [[triosephosphate-isomerase]], and [[phosphoglycerate-mutase]], revealing diverse regulatory architectures ranging from interfacial network hubs to hinge-mediated dynamic control.⁴ These allosteric sites—functionally distinct from the conserved catalytic cores—enable selective inhibition of parasite glycolysis without the host toxicity that plagues inhibitors targeting catalytic sites shared between parasites and human cells. Virtual screening of FDA-approved compounds across all ten glycolytic enzymes identified multi-target ligands with amphiphilic, interface-stabilizing architectures capable of coordinated inhibition across multiple parasite glycolytic steps, suggesting a repurposing pathway for antimalarials with enhanced selectivity and reduced potential for rapid resistance development through single-target escape mutations.

---

## References
1. PMID:41172338 — Pfs230 domains 7–10 encoded by DNA vaccines induce potent transmission-blocking antibody against Plasmodium falciparum
2. PMID:41418800 — Efficacy of ProC6C-AlOH/Matrix-M against Plasmodium falciparum infection and mosquito transmission: a phase 2 randomised controlled human malaria infection study
3. PMID:42115168 — Continental-scale genomic surveillance of Plasmodium falciparum malaria across sub-Saharan Africa with rapid nanopore sequencing
4. PMID:42142286 — Breaking glycolysis: allosteric hotspots for multi-target drug repurposing