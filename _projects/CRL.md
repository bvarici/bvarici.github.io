---
layout: page
title: Score-based Causal Representation Learning
#description: a project with a background image
img: assets/img/crl_figures/CRL.png
importance: 1
category: work
related_publications: varici2023score, varici2024general, varici2025score, varici2024linear, acarturk2024sample
---
<style>
  .button-link {
    display: inline-block;
    padding: 8px 16px; /* Smaller padding for compact buttons */
    margin: 6px;
    font-size: 14px; /* Smaller font size */
    font-weight: bold;
    color: #6A0DAD; /* Purple text and border */
    text-decoration: none;
    background: transparent; /* Transparent background */
    border: 2px solid #6A0DAD; /* Purple border */
    border-radius: 6px; /* Slightly rounded corners */
    transition: all 0.3s ease;
  }

  .button-link:hover {
    background: #6A0DAD; /* Purple fill on hover */
    color: white; /* White text on hover */
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow on hover */
    transform: translateY(-1px); /* Slight lift on hover */
  }

  .button-container {
    text-align: center; /* Center buttons horizontally */
    margin-top: 20px;
  }
</style>

- <span style="font-size: 24px;">**(AAAI 2025 Tutorial)** Causal Representation Learning</span>

  <div class="button-container">
    <a href="https://www.isg-rpi.com/_files/ugd/601e73_ccf7870865a74aa0b7f4fdc6660a168e.pdf" class="button-link">Slides</a>
  </div>

  **TLDR**
  - Tutorial overview of Causal Representation Learning principles.
  - Connections to identifiability, interventions, and score-based methods.
  - Includes new results and case studies unifying the 2023–2025 CRL papers.

- <span style="font-size: 24px;">**(North American School of Information Theory (NASIT) 2025 Tutorial)** Causal Representation Learning</span>

  <div class="button-container">
    <a href="https://drive.google.com/file/d/1ew-BWBPFBziI_Au52i1MtRSlrFKnSFdZ/view" class="button-link">Slides</a>
    <a href="https://mediaspace.umn.edu/media/1_thnye7es" class="button-link">Video Part 1</a>
    <a href="https://mediaspace.umn.edu/media/1_468pa4d9" class="button-link">Video Part 2</a>
  </div>

  **TLDR**
  - Comprehensive tutorial on CRL foundations and recent advances.
  - Covers identifiability, interventions, and score-based learning.
  - Hands-on walkthrough of key algorithms with visual examples.

- <span style="font-size: 24px;">**(JMLR 2025)** Score-based Causal Representation Learning: Linear and General Transformations</span>

  <div class="button-container" style="margin-top: 4px;">
    <a href="https://www.jmlr.org/papers/volume26/24-0194/24-0194.pdf" class="button-link">Paper</a>
    <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
  </div>

  **TLDR**
  - **Linear transform**, general causal models, one single-node intervention per node.
  - *Hard* interventions: element-wise identifiability up to scaling and perfect recovery of DAG.
  - *Soft* interventions: identifiability up to ancestors. If the causal model is sufficiently nonlinear, the latent DAG is fully identified and variables are identified up to surrounding variables (tight result).
  - **General transform**: extended results upon the AISTATS paper; two single-node hard interventions per node suffice for element-wise identifiability (up to an invertible transform).
  - First provably correct algorithm for general transforms; image experiments confirm scalability.
  - Benefits: no faithfulness assumption; no need to know which environments intervene on the same node.
  - **Partial Identifiability:** can recover a single latent variable given interventions on that variable.
  - **Intervention extrapolation:** score-matching enables extrapolation to *unseen* interventions.

- <span style="font-size: 24px;">**(NeurIPS 2024)** Linear Causal Representation Learning from Unknown Multi-node Interventions</span>

  <div class="button-container">
    <a href="https://openreview.net/forum?id=weemASPtzg" class="button-link">Paper</a>
    <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
    <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/UMN_CRL_poster_final.pdf" class="button-link">Poster</a>
  </div>

  **TLDR**
  - Linear transform, general causal models, **unknown multi-node** interventions.
  - Same guarantees as single-node interventions!
  - **Hard** interventions: element-wise identifiability up to scaling and perfect DAG recovery.
  - **Soft** interventions: identifiability up to ancestors.
  - Key requirement: intervention diversity, expressed via a full-rank intervention signature matrix.

- <span style="font-size: 24px;">**(NeurIPS 2024)** Sample Complexity of Interventional Causal Representation Learning</span>

  <div class="button-container">
    <a href="https://openreview.net/forum?id=XL9aaXl0u6&noteId=0uxPDmh1nn" class="button-link">Paper</a>
    <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/Finite_sample_CRL_poster.pdf" class="button-link">Poster</a>
  </div>

  **TLDR**
  - Linear transform, general causal models, one **single-node** soft intervention per node.
  - First *sample complexity* results for interventional CRL.
  - PAC-identifiability via generic score estimators.
  - Explicit sample complexity results for RKHS-based score estimators.

- <span style="font-size: 24px;">**(AISTATS 2024 – oral)** General Identifiability and Achievability for Causal Representation Learning</span>

  <div class="button-container">
    <a href="https://proceedings.mlr.press/v238/varici24a.html" class="button-link">Paper</a>
    <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
    <a href="https://neurips.cc/virtual/2023/74252" class="button-link">Talk</a>
    <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/AISTATS_CRL_poster.pdf" class="button-link">Poster</a>
  </div>

  **TLDR**
  - **General transform**, general causal models.
  - Two single-node hard interventions per node suffice for element-wise identifiability (up to an invertible transform).
  - First provably correct algorithm for general transforms; validated on image experiments.
  - Removes need for faithfulness and knowledge of which environments intervene on the same node.

- <span style="font-size: 24px;">**(ArXiv 2023)** Score-based Causal Representation Learning with Interventions</span>

  <div class="button-container">
    <a href="https://arxiv.org/abs/2301.08230" class="button-link">Paper</a>
    <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
  </div>

  **TLDR**
  - Foundational version introducing the *score-based CRL* framework.
  - Connects interventional distributions to score differences.
  - Establishes sparsity–causality correspondence: nonzero score differences ↔ parent set of intervened node.
  - Lays groundwork for later identifiability and algorithmic results.

=======================

### Project summary:

{% include figure.html path="assets/img/crl_figures/CRL_problem.jpg" title="" class="img-fluid rounded z-depth-1" %}


In causal representation learning (CRL), we consider a data-generating process in which the high-dimensional observations $$X$$ are generated from low-dimensional, causaly-related variables $$Z$$ through an unknown transformation $$g$$ as $$X=g(Z)$$. The causal relationships among the latent variables are captured by a directed acyclic graph (DAG) $${\cal{G}}_{Z}$$ over $$Z$$.

CRL is the process of inverting the data generation-process for using the observed data $$X$$ and recovering (i) the causal structure $$\cal{G}_{Z}$$ and (ii) the latent causal variables $$Z$$. We focus on two central questions: 

1. **Identifiability**: Determining the necessary and sufficient conditions under which $${\cal{G}}_{Z}$$ and $$Z$$ can be recovered. The scope of identifiability (e.g., perfect or partial) critically depends on the extent of information available about the data and the underlying data-generation process.

2. **Achievability**: Designing algorithms that can recover $$Z$$ and $$\mathcal{G}_{Z}$$, while maintaining identifiability guarantees. Note that identifiability results can be non-constructive as well, without specifying feasible algorithms. Hence, we make the distinction and aim to design practical algorithms for achieving constructive identifiability results.


**Why is identifiability difficult?** Identifiability is known to be impossible without additional supervision or sufficient statistical diversity among the samples of the observed data $$X$$. For instance, for the true transform $$g$$ and another invertible function $$a$$, we have $$(g \circ g^{-1})(X)=X$$ and $$(g \circ a^{-1}) \circ (a \circ g^{-1})(X)=X$$. Hence, inverse transform $$g^{-1}$$ cannot via ensuring reconstruction of $$X$$. As an extreme simplification, linear mixing of *independent* Gaussian variables (i.e., a graph with no edge). Since Gaussians are rotation-invariant, we cannot distinguish between $$Z$$ and $$R \circ Z$$ for any rotation matrix $$R$$. 

Therefore, to ensure identifiability, we need to look for a reasonable combination of (i) assumptions on the data-generation (model class we consider), and (ii) richer observations.

### Interventional CRL

In our work, we rely on *interventions* on the latent causal space to provide richer observations and sufficient statistical diversity to enable identifiability. Specifically, in addition to observational environment, we consider a set of given interventional environments, in which a subset of nodes are intervened in each. In this framework, we only use *distribution level* information, meaning that we use the interventions as a weak form of supervision via having access to only the pair of distributions before and after an intervention (as opposed to requiring pairs of observed and intervened samples). This allows us:
- model distribution shifts via changes in causal mechanisms
- contrast interventional vs. observational distributions
- if changes are sparse, gives a natural way to restrain the solution set


{% include figure.html path="assets/img/crl_figures/interventional_environments.jpg" title="" class="img-fluid rounded z-depth-1" %}

Ideally, one would prefer no restriction on intervention size, type, or knowledge. In our papers, we consider different settings, e.g. single-node vs. multi-node interventions and soft vs. hard interventions.


### Score-based methodology

In our papers, we establish the connections between **score functions** (gradient of the log-density) and interventional distributions. Specifically, we show that differences in score functions across different environment pairs contain all the information about the latent DAG. Leveraging this property, we show that the data-generating process can be inverted by finding the inverse transform that minimizes the score differences in the latent space. Using this approach, we develop constructive proofs of identifiability and algorithms in various settings. To give an insight, there are two key properties of score functions that make this idea work. Denote $$s(z) = \nabla \log_z p(z)$$ and $$s_X(x) = \nabla \log_x p(x)$$ for observational distributions $$p(z)$$ and $$p_X(x)$$. Use superscript $$^m$$ to denote corresponding definitions in interventional environment $${\cal E}^m$$.

- **Score differences are sparse**: Consider a single-node intervention, e.g., node $i$ is intervened in $${\cal E}^m$$. Then, the score difference function $$s(z) - s^m(z)$$ will be sparse, with indices of non-zero entries exactly correspond to the parents of the intervened node. This implies that given access to all single-node interventions, changes in the score functions exactly give DAG structure!

{% include figure.html path="assets/img/crl_figures/intervention_score_connection.jpg" title="" class="img-fluid rounded z-depth-1" %}

How we use this property to guide our learning of an inverse transform? Consider a candidate encoder $h$, and \let $\hat{Z} = h(X)$. Intuitively, we can use the sparsity of the *true latent score differences* to find the true encoder $$g^{-1}$$, i.e., the estimated latent score differences cannot be sparser than the true score differences.

{% include figure.html path="assets/img/crl_figures/intuition.jpg" title="" class="img-fluid rounded z-depth-1" %}

- **Latent score differences can be computed from observed score differences**: So far, all the nice properties of score functions above are for latent variables, since these properties stem from the causal relationships among the latents and the interventions. However, we have only access to observed $$X$$ variables. In terms of pure identifiability objective, one can suggest computing the score functions of $\hat{Z}$ for every possible encoder $$h$$, which is infeasible. Instead, we take a constructive approach and show that latent score differences can be computed from observed score differences using the Jacobian of $$h^{-1}$$. Specifically, $$s_{\hat{Z}} ({\hat{z}}) - s_{\hat{Z}}^{m}({\hat{z}}) = J_{h^{-1}}({\hat{z}})^{\top} (s_{X} (x) - s_{X}^{m}(x)) $$.




