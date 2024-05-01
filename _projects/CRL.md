---
layout: page
title: Score-based Causal Representation Learning
#description: a project with a background image
img: assets/img/CRL.png
importance: 1
category: work
related_publications: varici2023score, varici2023general, varici2024score
---

**AISTATS 2024 (oral): General Identifiability and Achievability for Causal representation Learning**

[Paper](https://proceedings.mlr.press/v238/varici24a.html)   [Code](https://github.com/bvarici/score-general-id-CRL) [Talk](https://neurips.cc/virtual/2023/74252)

**Preprint: Score-based Causal Representation Learning: Linear and General Transformations**: 

[Paper](https://arxiv.org/abs/2402.00849)  [Code](https://github.com/acarturk-e/score-based-crl)

=======================

Project summary:

In causal representation learning (CRL), we consider a latent space in which the latent variables $$Z$$ are causally related, and high-dimensional observations $$X$$ are generated from $$Z$$ through an unknown transformation as $$X=g(Z)$$. Inverting the data generating process to uniquely recover $$Z$$ and the latent directed acyclic graph (DAG) $$\cal{G}_{Z}$$ over $$Z$$ is known to be impossible by just using the observational data $$X$$. In this project, we focus on using interventional distributions to make this process viable. Specifically, we aim to address two central questions of CRL: 1) **Identifiability**, which refers to determining the sufficient conditions under which $$Z$$ and $$\mathcal{G}_{Z}$$ can be uniquely recovered, and 2) **Achievability**, which pertains to designing algorithms that can recover $$Z$$ and $$\mathcal{G}_{Z}$$, while maintaining identifiability guarantees. We use the term perfect identifiability to refer to the best possible identifiability results that neglect the inevitable indeterminacies (element-wise permutation and scaling/diffeomorphism). 


In our papers, we establish the connections between score functions (gradient of the log-likelihood) and interventional distributions. Specifically, we show that differences of score functions across different environment pairs contain all the information about the latent DAG. Leveraging this property, we show that the data-generating process can be inverted by finding the inverse transform that minimizes the score differences in the latent space. Using this approach, we develop constructive proofs of identifiability along with algorithms in various settings.

**Score-based Causal Representation Learning: Linear and General Transformations**: In this paper, we focus on a linear transform from latent space to observed variables without putting restrictions on the latent causal model. In this setting, our main results are as follows:

- We show that one hard intervention per node suffices to guarantee perfect identifiability. 
- We show that one soft intervention per node suffices to guarantee identifiability up to ancestors – transitive closure of the latent DAG is recovered and latent variables are recovered up to a linear function of their ancestors. Importantly, these results are tight since identifying the latent linear models beyond ancestors using soft interventions is known to be impossible.
- We further tighten the previous result and show that when the latent causal model is sufficiently nonlinear, perfect DAG recovery becomes possible using soft interventions. Furthermore, we recover a latent representation that is Markov with respect to the latent DAG, preserving the true conditional independence relationships.
- We design Linear Score-based Causal Latent Estimation via Interventions (LSCALE-I) algorithm that achieves above identifiability guarantees.

(A preliminary version of LSCALE-I and some of the identifiability results are first presented in [our manuscript](https://arxiv.org/abs/2301.08230).


**General Identifiability and Achievability for Causal Representation Learning**: This AISTATS 2024 (oral) paper is the extended version of the CRL@NeurIPS2023 Oral paper *Score-based Causal Representation Learning with Interventions: Nonparametric Identifiability*. In this paper, we focus on a general nonparametric transform from latent variables to observed variables. 

- We show that two hard intervention per node suffices for perfect identifiability. This result generalizes the recent results in the literature in two ways. First, we do not require the commonly adopted faithfulness assumption on latent causal models. Secondly, we assume the learner does not know which pair of environments intervene on the same node.
- More importantly, on achievability, we design the first provably correct algorithm that recovers $$\mathcal{G}_{Z}$$ and $$Z$$ perfectly. This algorithm is referred to as Generalized Score-based Causal Latent Estimation via Interventions (GSCALE-I).


{% include figure.html path="assets/img/Varici2023-CRL-workshop-poster.jpg" title="Poster" class="img-fluid rounded z-depth-1" %}
Poster from CRL Workshop @ NeurIPS 2023 



