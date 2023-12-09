---
layout: page
title: Score-based Causal Representation Learning
#description: a project with a background image
img: assets/img/CRL.png
importance: 1
category: work
related_publications: varici2023score, varici2023general
---

The manuscript with extended results and the blog post are coming soon. Below is a snapshot of the project:

In causal representation learning (CRL), we consider a latent space in which the latent variables $$Z$$ are not independent and instead are causally related, and high-dimensional observations $$X$$ are generated from $$Z$$ through a transformation as $$X=g(Z)$$. Inverting the data generating process to uniquely recover $$Z$$ and the latent directed acyclic graph (DAG) $$\cal{G}_{Z}$$ over $$Z$$ is known to be impossible by just using the observational data $$X$$. In this project, we focus on using interventional distributions to make this process viable. Specifically, we aim to address two central questions of CRL: 1) **Identifiability**, which refers to determining the sufficient conditions under which $$Z$$ and $$\mathcal{G}_{Z}$$ can be uniquely recovered, and 2) **Achievability**, which pertains to designing algorithms that can recover $$Z$$ and $$\mathcal{G}_{Z}$$, while maintaining identifiability guarantees. We use the term perfect identifiability to refer to the best possible identifiability results that neglect the inevitable indeterminacies (element-wise permutation and scaling/diffeomorphism). 

We currently have two preprints. In both papers, we establish the connections between score functions (gradient of the log-likelihood) and interventional distributions. Specifically, we show that differences of score functions across different environment pairs contain all the information about the latent DAG. Leveraging this property, we show that the data-generating process can be inverted by finding the inverse transform that minimizes the score differences in the latent space. Using this approach, we develop constructive proofs of identifiability along with algorithms in various settings.

**Score-based Causal Representation Learning with Interventions**: In this paper, we focus on a linear transform from latent space to observed variables and consider a sufficiently non-linear latent model. In this setting, we show that one hard intervention per node suffices for perfect identifiability. Furthermore, we show that one soft intervention per node suffices for identifying the latent DAG. For latent representation $$Z$$, we define a graphical condition that describes which elements are recovered uniquely and which elements have mixing with their parents. Interestingly, we show that the learned latent variables satisfy Markov property with respect to the true DAG, which implies that the learned representation is suitable to use in downstream tasks.

**General Identifiability and Achievability for Causal Representation Learning**: This paper is the extended version of the CRL@NeurIPS2023 Oral paper *Score-based Causal Representation Learning with Interventions: Nonparametric Identifiability*. In this paper, we focus on a general nonparametric transform from latent variables to observed variables.  We show that two hard intervention per node suffices for perfect identifiability. Importantly, we provide the first provably correct algorithm in a fully nonparametric setting, while also relaxing some of the assumptions in recent related work (e.g., we don’t require the latent variables to be faithful to the latent DAG).



