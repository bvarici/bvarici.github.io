---
layout: page
title: Causal Representation Learning
#description: a project with a background image
img: assets/img/crl_figures/ropes3.jpg
importance: 1
category: work
related_publications: varici2025score,kulkarni2025ropes,varici2023score, varici2024general, varici2024score, varici2024linear, acarturk2024sample
---
<style>
  .button-link {
    display: inline-block;
    padding: 6px 14px; /* Smaller padding for compact buttons */
    margin: 4px;
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
    margin-top: 5px;
  }
</style>

**List of publications**
- **Tutorials**: At AAAI 2025 [slides](https://www.isg-rpi.com/_files/ugd/601e73_ccf7870865a74aa0b7f4fdc6660a168e.pdf) and NASIT 2025 [slides](https://drive.google.com/file/d/1ew-BWBPFBziI_Au52i1MtRSlrFKnSFdZ/view) [video-part1](https://mediaspace.umn.edu/media/1_thnye7es) [video-part2](https://mediaspace.umn.edu/media/1_468pa4d9)
- [Score-based Causal Representation Learning: Linear and General Transformations (JMLR)]([aa](https://www.jmlr.org/papers/volume26/24-0194/24-0194.pdf)): considers single-node interventions for linear and general transformations
- [ROPES: Robotic Pose Estimation via Score-based Causal Representation Learning (NeurIPS'25 Workshop)](https://arxiv.org/abs/2510.20884): an application on robotic pose estimation
- [General Identifiability and Achievability for Causal Representation Learning (AISTATS'24)](https://proceedings.mlr.press/v238/varici24a.html): considers general transformations with single-node interventions (JMLR paper significantly extends this preliminary version)
- [Linear Causal Representation Learning from Unknown Multi-node Interventions (NeurIPS'24)](https://openreview.net/forum?id=weemASPtzg): multi-node interventions on Linear CRL
- [Sample Complexity of Interventional Causal Representation Learning (NeurIPS'24)](https://openreview.net/forum?id=XL9aaXl0u6&noteId=0uxPDmh1nn): sample-complexity analysis of linear CRL
- [Score-based causal representation learning with interventions](https://arxiv.org/pdf/2301.08230): very first paper which establishes the foundations of score-based CRL idea, for non-linear latent causal models and linear transforms.

See below for a conceptual summary of this line of work, settings and key results of the papers mentioned above.


### Project summary:

{% include figure.html path="assets/img/crl_figures/CRL_problem.jpg" title="" class="img-fluid rounded z-depth-1 mx-auto d-block" %}


In causal representation learning (CRL), we consider a data-generating process in which the high-dimensional observations $$X$$ are generated from low-dimensional, causally-related variables $$Z$$ through an unknown transformation $$g$$ as $$X=g(Z)$$. The causal relationships among the latent variables are captured by a directed acyclic graph (DAG) $${\cal{G}}_{Z}$$ over $$Z$$.

The central goal of CRL is to use the observed data $$X$$ to recover $$Z$$ and $${\cal{G}}$$. This process is typically facilitated by learning an inverse of the data-generating process, i.e., $$g^{-1}$$ as the inverse of the unknown generative mapping $$g$$. We focus on two central questions:

1. **Identifiability**: Determining the necessary and sufficient conditions under which $${\cal{G}}$$ and $$Z$$ can be recovered. This is known to be impossible without additional supervision or sufficient statistical diversity among the samples of the observed data $$X$$ (a simple example is that Gaussians are rotation-invariant, making it difficult to identify them under a linear mapping). Thus, the scope of identifiability (e.g., node-level, perfect, partial etc.) critically depends on the extent of information available about the data and the underlying data-generation process. 

<!-- Importantly, tolerating *some* uncertainty is fundamentally needed, specifically two ambiguities are typically unavoidable: (i) permutation or relabelling of the latent variables, under which both the representation and the causal graph can be permuted without altering the measurements, and (ii) component-wise reparameterizations, reflecting the fact that each latent coordinate may be expressed in arbitrary measurement units. These can range from simple scalings to general element-wise diffeomorphisms. Moreover, in many settings, the ambiguity may be greater: variables may be recoverable only as functions of subsets of other variables, and the latent causal structure itself may be identifiable only partially. This makes identifiability the central theoretical question in existing CRL literature, as claims about ground-truth representations or generalization guarantees depend critically on what aspects of the latent variables and causal graph can be determined from available data. -->


2. **Achievability**: is the notion of designing tractable algorithms that can recover $$Z$$ and $$\mathcal{G}$$, while maintaining identifiability guarantees. Note that identifiability results can be non-constructive, without specifying feasible algorithms. Hence, we make the distinction and aim to design practical algorithms for achieving constructive identifiability results.


<!-- **Why is identifiability difficult?** Identifiability is known to be impossible without additional supervision or sufficient statistical diversity among the samples of the observed data $$X$$. For instance, for the true transform $$g$$ and another invertible function $$a$$, we have $$(g \circ g^{-1})(X)=X$$ and $$(g \circ a^{-1}) \circ (a \circ g^{-1})(X)=X$$. Hence, inverse transform $$g^{-1}$$ cannot be simply inferred by enforcing perfect reconstruction of $$X$$. As an extreme simplification, consider linear mixing of *independent* Gaussian variables (i.e., an empty graph). Since Gaussians are rotation-invariant, we cannot distinguish between $$Z$$ and $$R \circ Z$$ for any rotation matrix $$R$$.  -->

To ensure identifiability along with tractable algorithms, we need to look for a reasonable combination of (i) assumptions on the data-generation (model class we consider), and (ii) richer observations.


### Interventions / Multi-environments as Diverse Data Sources

Consider observing data from multiple related environments. Typically, differences between those environments can be explained by changes in a few key factors. In other words, taking the view that high-dimensional data lie in a low-dimensional manifold, sparse changes in the low-dimensional representation can explain the differences across environments. From CRL viewpoint, these sparse changes can be formalized by **interventions** on the latent causal space, which provide the sufficient richer observations to enable identifiability of latent variables and graph. Specifically, in addition to observational environment, we consider a set of given interventional environments, in which a subset of nodes are intervened in each. In this framework, we only use *distribution level* information, meaning that we use the interventions as a weak form of supervision via having access to only the pair of distributions before and after an intervention (as opposed to requiring pairs of observed and intervened samples). This allows us:
- model distribution shifts via changes in causal mechanisms
- contrast interventional vs. observational distributions
- if changes are sparse, gives a natural way to restrain the solution set

To harness the additional knowledge induced by the interventions, we developed **score-based CRL**. The key idea is that latent score functions (gradients of log-densities) encode intervention effects as sparse variations across environments.
By linking score functions of observed data (which can be efficiently estimated even in high-dimensional settings) to latent scores, we obtain tractable learning objectives and algorithms. In short, we develop algorithms that search for representations whose inter-environment differences are maximally sparse, aligning them with the true causal mechanisms. 

The theoretical foundations of CRL have two main axes: (i) model complexity, i.e., how expressive the true causal mechanisms and the mapping from latent to observed data are; and (ii) data richness, i.e., what diversity of environments and interventions is necessary and sufficient for identifiability. This perspective clarifies which structural assumptions and data resources are needed in different regimes.


{% include figure.html path="assets/img/crl_figures/interventional_environments.jpg" title="" class="img-fluid rounded z-depth-1 mx-auto d-block" %}

Ideally, one would prefer no restriction on intervention size, type, or knowledge. In our work, we consider a spectrum of settings to lay out the identifiability landscape and accompanying algorithms, e.g., linear vs. general transformations, single-node vs. multi-node interventions, soft vs. hard interventions. Before 

### Score-based CRL

In our papers, we establish the connections between **score functions** (gradient of the log-density) and interventional distributions. Specifically, we show that differences in score functions across different environment pairs contain all the information about the latent DAG. Leveraging this property, we show that the data-generating process can be inverted by finding the inverse transform that minimizes the score differences in the latent space. Using this approach, we develop constructive proofs of identifiability and algorithms in various settings. To give an insight, there are two key properties of score functions that make this idea work. Denote $$s(z) = \nabla \log_z p(z)$$ and $$s_X(x) = \nabla \log_x p(x)$$ for observational distributions $$p(z)$$ and $$p_X(x)$$. Use superscript $$^m$$ to denote corresponding definitions in interventional environment $${\cal E}^m$$.

**Score differences are sparse**: Consider a single-node intervention, e.g., node $i$ is intervened in $${\cal E}^m$$. Then, the score difference function $$s(z) - s^m(z)$$ will be sparse, with indices of non-zero entries exactly correspond to the parents of the intervened node. This implies that given access to all single-node interventions, changes in the score functions exactly give DAG structure!

{% include figure.html path="assets/img/crl_figures/intervention_score_connection.jpg" title="" class="img-fluid rounded z-depth-1 mx-auto d-block" width="70%" %}

How can we use this property to guide our learning of an inverse transform? Consider a candidate encoder $h$, and \let $\hat{Z} = h(X)$. Intuitively, we can use the sparsity of the *true latent score differences* to find the true encoder $$g^{-1}$$, i.e., the estimated latent score differences cannot be sparser than the true score differences.

{% include figure.html path="assets/img/crl_figures/intuition.jpg" title="" class="img-fluid rounded z-depth-1 mx-auto d-block" width="70%" %}


**Latent score differences can be computed from observed score differences**: So far, the nice sparsity properties of score functions above are for latent variables, since these properties stem from the causal relationships and interventions on the latents. However, we have only access to observed $$X$$ variables. In terms of pure identifiability objective, one can suggest computing the score functions of $\hat{Z}$ for every possible encoder $$h$$, which is infeasible. Instead, we take a constructive approach and show that latent score differences can be computed from observed score differences using the Jacobian of $$h^{-1}$$. Specifically, $$s_{\hat{Z}} ({\hat{z}}) - s_{\hat{Z}}^{m}({\hat{z}}) = J_{h^{-1}}({\hat{z}})^{\top} (s_{X} (x) - s_{X}^{m}(x)) $$.

**How to form an objective function?**: Different settings (i.e., a pair data-generation model and observed data) require different levels of algorithm design (e.g., dealing with multi-node interventions, parametric vs. nonparametric construction etc.). At their cores though, those different methods rely on the same principle of algorithmically enforcing the sparse changes on the latent mechanisms. Using the link between score functions of observed and latent variables, this principle can be summarized as learning an (encoder,decoder) pair $$(f,h)$$ that (i) minimizes score variations in the latents across environments, and (ii) ensures perfect reconstruction:

$$\mathcal{L}(h, f) = 
\underbrace{\mathbb{E}\!\left[\| f \circ h(x) - x \|^2\right]}_{\text{Reconstruction Loss}}
+ 
\lambda 
\underbrace{\left\| 
\mathbb{E}\!\left[
\textrm{Jac.}_f(\hat{z})^{\top} \cdot 
\left(\Delta s_X(x)\right)
\right]
- e_i
\right\|^2}_{\text{Sparsity Loss}}.$$


<hr>


<!-- #### AAAI 2025 Tutorial on Causal Representation Learning

<div class="button-container">
  <a href="https://www.isg-rpi.com/_files/ugd/601e73_ccf7870865a74aa0b7f4fdc6660a168e.pdf" class="button-link">Slides</a>
</div> -->

#### Score-based Causal Representation Learning: Linear and General Transformations (JMLR'25)

<!--[[Paper]](https://arxiv.org/abs/2402.00849)  [[Code]](https://github.com/acarturk-e/score-based-crl)-->

<div class="button-container">
  <a href="https://www.jmlr.org/papers/volume26/24-0194/24-0194.pdf" class="button-link">Paper</a>
  <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
</div>


TLDR: 
- Linear transform, general causal models, one single-node intervention per node.
- **Hard** interventions:  element-wise identifiability up to scaling and perfect recovery of DAG. 
- **Soft** interventions: identifiability up to parents. If the causal model is sufficiently nonlinear, then latent DAG is fully identified and latent variables are identified up to surrounding variables (shown to be a tight result)
- General transform: reorganization of the AISTATS paper, with additional experiments.

### ROPES: Robotic Pose Estimation via Score-based Causal Representation Learning (NeurIPS'25 EMW Workshop)

<div class="button-container">
  <a href="https://arxiv.org/abs/2510.20884" class="button-link">Paper</a>
</div>

{% include figure.html path="assets/img/crl_figures/ropes3.jpg" title="" class="img-fluid rounded z-depth-1 mx-auto d-block" width="70%" %}


TLDR: Taking a step towards bridging the theory-practice gap in interventional CRL by applying it to robot pose estimation problem.

- Formalization: Pose estimation as a CRL problem in which robot joint angles are treated as controllable latent causal variables embedded in a larger generative mapping
- Methodology: ROPES, an autoencoder-based architecture augmented with interventional regularizers that rely on score variations upon interventions. This relies on score-based CRL algorithms. 
- Empirical validation: Use common simulators with multi-joint robot and collect visual data. Showing a strong correlation between the angles recovered by ROPES and the ground truth values, verifying successful disentanglement
- No reliance on pose labels: Showing disentanglement by exploiting distributional changes and therefore requires no conventional supervision from pose labels. 
- Comparison with state-of-the-art: ROPES, without using labels except a final calibration step, achieves comparable performance to state-of-the-art RoboPEPP, which uses a JEPA-based self-supervised backbone followed by supervised training to predict joint angles. Specifically, our ablation study shows that RoboPEPP requires a substantial amount of labeled data to outperform our pose-label-free CRL-based method.


#### Linear Causal Representation Learning from Unknown Multi-node Interventions (NeurIPS'24)

<!--[[Paper]](https://openreview.net/forum?id=weemASPtzg)  [[Code]](https://github.com/acarturk-e/score-based-crl) [[Poster]](https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/UMN_CRL_poster_final.pdf)-->

<div class="button-container">
  <a href="https://openreview.net/forum?id=weemASPtzg" class="button-link">Paper</a>
  <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
  <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/UMN_CRL_poster_final.pdf" class="button-link">Poster</a>
</div>

TLDR: 
- Linear transform, general causal models, **unknown multi-node** interventions. Same guarantees as single-node interventions! 
- **Hard** interventions:  element-wise identifiability up to scaling and perfect recovery of DAG. 
- **Soft** interventions: identifiability up to ancestors
- Requirement: multi-node interventions are diverse enough, specified as having a full-rank intervention signature matrix.

#### Sample Complexity of Interventional Causal Representation Learning (NeurIPS'24)
<!--[[Paper]](https://openreview.net/forum?id=XL9aaXl0u6&noteId=0uxPDmh1nn) [[Poster]](https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/Finite_sample_CRL_poster.pdf)-->

<div class="button-container">
  <a href="https://openreview.net/forum?id=XL9aaXl0u6&noteId=0uxPDmh1nn" class="button-link">Paper</a>
  <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/Finite_sample_CRL_poster.pdf" class="button-link">Poster</a>
</div>

TLDR: 
- Linear transform, general causal models, one **single-node** soft intervention per node.
- First sample complexity results for interventional CRL!
- Probably approximately correct (PAC)-identifiability via generic score estimators.
- Specific sample complexity results for an RKHS-based score estimator.

#### General Identifiability and Achievability for Causal Representation Learning (AISTATS'24 oral)

<!--[Paper](https://proceedings.mlr.press/v238/varici24a.html)   [[Code]](https://github.com/acarturk-e/score-based-CRL) [[Talk]](https://neurips.cc/virtual/2023/74252) [[Poster]](https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/AISTATS_CRL_poster.pdf)-->

<div class="button-container">
  <a href="https://proceedings.mlr.press/v238/varici24a.html" class="button-link">Paper</a>
  <a href="https://github.com/acarturk-e/score-based-crl" class="button-link">Code</a>
  <a href="https://neurips.cc/virtual/2023/74252" class="button-link">Talk</a>
  <a href="https://github.com/bvarici/bvarici.github.io/blob/master/assets/pdf/AISTATS_CRL_poster.pdf" class="button-link">Poster</a>
</div>


TLDR:
- **General transform**, general causal models, two single-node hard interventions per node suffice for element-wise identifiability (up to an intervible transform)!
- First provably correct algorithm for general transforms! Experiments with images confirm the scalability. 
- Benefits: do not require faithfulness assumption of causal discovery, and do not require to know which pair of environments intervene on the same node.
