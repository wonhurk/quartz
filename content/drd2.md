---
title: "Dopamine Receptor D2"
---
# Dopamine Receptor D2

`protein · g-protein-coupled-receptor · computational-target · drug-discovery · molecular-generation · benchmark-target`

Last modified 2026-06-05 · 2 papers · 1 incoming link

| | |
|---|---|
| **Type** | G protein-coupled receptor |
| **Target class** | Computational drug discovery benchmark |
| **Key methods** | TRACE-GFN, GPS-VAE, Transformer-SELFIES |
| **Key metrics** | Ligand efficiency > 0.5, QSAR optimization |
| **Binding pocket** | Complex geometric topology |
| **Papers** | 2 indexed |
| **Incoming links** | 1 wiki entity |

---

**Dopamine receptor D2 (DRD2)** is a [[dopamine-receptor|G protein-coupled receptor]] that has emerged as a benchmark target in computational [[molecular-generation|molecular generation]] and [[structure-based-drug-design|structure-based drug design]]. DRD2's well-characterized binding pocket and established pharmacological literature make it an ideal testbed for validating advanced machine learning approaches that seek to balance biological activity, chemical diversity, and synthetic feasibility in de novo drug design.¹²

---

## Computational Benchmarking with TRACE-GFN

The [[trace-gfn|TRACE-GFN]] framework represents a significant advance in reaction-aware molecular optimization by explicitly incorporating chemical reaction pathways and quantitative structure-activity relationship (QSAR) scoring into a generative flow network conditioned on transformer-learned chemical transformations.¹ When benchmarked on DRD2 alongside AKT1 and CXCR4 targets, TRACE-GFN successfully identified compounds with high predicted QSAR values while maintaining strong chemical diversity.¹ Critically, the integration of real-world synthetic route knowledge ensures that designed compounds are synthetically accessible through established organic chemistry transformations — a feature absent in most existing deep learning-based molecular generation models.¹ These results establish DRD2 as an effective benchmark for validating methods that overcome the traditional dichotomy between computational activity prediction and synthetic practicality.

---

## Geometry-Aware Binding Pocket Modeling

The DRD2 binding pocket presents substantial geometric complexity that standard deep generative models struggle to capture. [[gps-vae|GPS-VAE]], a geometry-aware variational autoencoder, was designed to overcome this limitation by learning global pocket topology rather than relying on local graph representations alone.² When combined with [[transformer-selfies|Transformer-SELFIES]] for molecular sequence generation, the framework successfully identified fragment-like and lead-like scaffolds predicted to bind DRD2 with ligand efficiency exceeding 0.5 under [[autodock-vina|AutoDock Vina]] scoring.² This approach demonstrates that capturing three-dimensional binding pocket geometry through advanced machine learning representations significantly enhances the efficiency of structure-based de novo design, enabling discovery of chemically valid compounds with robust activity predictions.

---

## Comparative Advantages of Advanced Methods

DRD2 benchmarking has revealed distinct advantages of modern computational approaches over classical molecular generation methods. TRACE-GFN outperforms existing models by maintaining a critical balance between three competing objectives: high predicted biological activity, structural diversity, and synthetic feasibility.¹ Concurrently, GPS-VAE addresses fundamental limitations in prior approaches, including the failure of standard graph neural networks to capture global pocket topology and the propensity of SMILES-based generative models to produce chemically invalid structures.² Together, these advances position DRD2 as a demonstrative benchmark validating next-generation molecular design platforms, with methodologies applicable across a broader spectrum of drug discovery targets.

---

## References
1. PMID:42033344 — A Transformer for Reaction-Aware Compound Explorations with GFlowNet in QSAR-Guided Molecular Design
2. PMID:42118199 — A geometry-aware generative framework integrating GPS-VAE and Transformer-SELFIES for structure-based de novo drug design