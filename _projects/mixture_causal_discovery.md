---
layout: page
title: Mixture Causal Discovery
#description: a project with a background image
img: assets/img/mixture_DAG.jpeg
importance: 1
category: work
related_publications: varici2024separability, varici2024interventional
---

**NeurIPS 2024: Interventional Causal Discovery in a Mixture of DAGs**

[Paper](https://arxiv.org/abs/2406.08666)   [Code](https://github.com/bvarici/intervention-mixture-DAG) 

**TMLR 2024: Separability Analysis for Causal Discovery in Mixture of DAGs**: 

[Paper](https://openreview.net/forum?id=ALRWXT1RLZ)  [Code](https://github.com/bvarici/TMLR-mixture-DAG)

=======================

Project summary:

In various applications, the observed data is heterogeneous, and most causal systems are complex. 
- Time-varying systems: causal relationships can change over time.
- Cyclic relationships: causal effects can form a cycle, e.g., feedback loops.
- Modeling subpopulations: e.g., subtypes of cancers do not share the same exact biological pathways

Since all causal relationships cannot be explained via a Directed Acyclic Graph (DAG), these complex systems are better modeled by a *mixture of DAGs*.

Causal discovery of mixture models is fundamentally more challenging than the causal discovery of a single DAG. Two major difficulties stem from (i) an inherent uncertainty about the skeletons of the
component DAGs that constitute the mixture and (ii) possibly cyclic relationships across these component DAGs. Despite the practical relevance, these problems are underexplored in existing literature. 
In this project, we aim to advance our understanding of causal discovery of mixture models.

**Separability Analysis for Causal Discovery in Mixture of DAGs**: 
In this paper, we formalize a framework for addressing the causal discovery objectives in a mixture of DAGs.
First, we identify the causal relationships that can possibly be learned from those that are impossible to learn. It can be readily verified that some natural choices
generally investigated in single DAGs are impossible when working with mixture models.
We formalize the separability framework in which the inferential decisions are centered around separability analysis,
which refers to identifying the pair of random variables that cannot be made conditionally independent in the mixture
distribution. Accordingly, we refer to the node pairs associated with inseparable random variables as inseparable pairs.
We introduce proper edge notations to visualize such edges graphically. Given this framework, we investigate what can
be learned about the underlying DAGs in a mixture model. We adopt a constraint-based approach and use conditional
independence (CI) tests on the mixture distribution to identify inseparable node pairs.

Our main contributions are as follows.
- We introduce a mixture graph to represent the inseparable pairs of nodes in the mixture distribution. To
interpret the edges of the mixture graph, we present a sufficient condition for two nodes to be separable. This
result sheds light on the inadequacy of an existing graphical representation in the literature.
- We strengthen the results for a mixture of tree-structured DAGs and establish necessary and sufficient conditions
for two nodes to form an emergent edge in the mixture.
- We introduce new edge notations for inseparable node pairs to represent the above conditions and partially
orient the skeleton of the mixture graph. We discuss the inference of these oriented edges from unshielded
triples and show that v-structures upon nodes with varying causal mechanisms can be recovered. Finally, we devise an algorithm
built on our theoretical results to recover the learnable causal relationships.


**Inteventional Causal Discovery in a Mixture of DAGs**: 
As discussed in our previous paper, observational data is not sufficient to distinguish true causal relationships (*true edges*) from spurious ones (*emergent edges*).
In this paper, our objective is to identify true edges via interventions on the mixture model. 
- First, we establish matching necessary and sufficient intervention sizes for identifying the mixture parents of a node (union of parent sets of a node in the mixture).
We show that interventions $$I$$ with size at most $$|{\rm pa}_{\rm m}(i)|+1$$ are sufficient to identify mixture parents $$|{\rm pa}_{\rm m}(i)|$$ of the node $$i$$. 
We also show that interventions with size $$|{\rm pa}_{\rm m}(i)|+1$$ are necessary at the worst-case.
- We specialize this result for a mixture of trees, and show the necessary and sufficient intervention size becomes $$K+1$$ for a mixture of $$K$$ trees.
- Next, we design an adaptive algorithm that identifies all directed edges of the individual
DAGs in the mixture by using $$\mathcal{O}(n^2)$$, where $$n$$ is the number of variables. Remarkably,
the maximum size of the interventions used in our algorithm is optimal if the mixture
ancestors of a node (i.e., the union of its ancestors across all DAGs) do not form a cycle.
- Finally, we show that the gap between the maximum intervention size used by the
proposed algorithm for a given node and the optimal size is bounded by the cyclic complexity
number of the node, which is defined as the number of nodes needing intervention to break
cycles among the ancestors of the node, and is upper bounded by the number of such cycles.


