---
layout: page
title: Mixture Causal Discovery
img: assets/img/mixture_DAG.jpeg
importance: 1
category: work
permalink: /projects/mixture_causal_discovery/
description: Learning causal structure when the data comes from more than one underlying system.
---

<style>
.mixture-project { --mix-accent: #7951a3; --mix-muted: var(--global-text-color-light); }
.mixture-project .mixture-eyebrow { color: var(--mix-accent); font-size: .72rem; font-weight: 700; letter-spacing: .13em; }
.mixture-project .mixture-intro { max-width: 52rem; margin-bottom: 1.8rem; }
.mixture-project .mixture-intro h2 { font-size: clamp(1.65rem, 3vw, 2.15rem); line-height: 1.25; margin: .55rem 0 1rem; font-weight: 500; }
.mixture-project .mixture-lead { font-size: 1.1rem; line-height: 1.65; }
.mixture-project h2 { font-size: 1.5rem; margin-top: 2.2rem; }
.mixture-project .mixture-contexts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.2rem; margin: 1.4rem 0 2rem; }
.mixture-project .mixture-contexts strong { display: block; margin-bottom: .3rem; font-size: .95rem; }
.mixture-project .mixture-contexts p { font-size: .9rem; line-height: 1.55; margin: 0; }
.mixture-project .mixture-visual { background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 14px; overflow: hidden; margin: 2rem 0; }
.mixture-project .mixture-visual-header { padding: 1.4rem 1.5rem 0; }
.mixture-project .mixture-visual-header h2 { margin: .4rem 0 1.3rem; font-size: 1.45rem; }
.mixture-project .mixture-stages { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.mixture-project .mixture-stage { padding: 0 1.1rem 1.3rem; }
.mixture-project .mixture-stage + .mixture-stage { border-left: 1px solid var(--global-divider-color); }
.mixture-project .mixture-stage h3 { font-size: .94rem; font-weight: 600; margin: 0 0 .4rem; }
.mixture-project .mixture-stage h3 span { color: var(--mix-accent); margin-right: .35rem; font-size: .75rem; }
.mixture-project .mixture-stage p { font-size: .8rem; line-height: 1.5; min-height: 3.6rem; margin-bottom: .25rem; }
.mixture-project .mixture-stage svg { width: 100%; height: auto; display: block; background: #fff; border-radius: 10px; }
.mixture-project .mixture-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: .7rem 1.3rem; padding: .8rem 1rem; border-top: 1px solid var(--global-divider-color); font-size: .77rem; }
.mixture-project .mixture-legend span { display: inline-flex; align-items: center; gap: .4rem; }
.mixture-project .mixture-edge-key { width: 1.4rem; border-top: 2px solid #65508e; }
.mixture-project .mixture-edge-key.emergent { border-top: 2px dashed #b04c82; }
.mixture-project .mixture-node-key { width: .75rem; height: .75rem; border-radius: 50%; background: #fbeaf3; border: 1.5px solid #b04c82; }
.mixture-project .mixture-stage-note { font-size: .78rem; line-height: 1.5; margin-top: .7rem; }
.mixture-project figcaption { border-top: 1px solid var(--global-divider-color); padding: 1rem 1.5rem; font-size: .83rem; line-height: 1.6; color: var(--global-text-color); }
.mixture-project .mixture-takeaway { border-left: 3px solid var(--mix-accent); padding: .1rem 0 .1rem 1.2rem; margin: 1.7rem 0 2.2rem; font-size: 1.05rem; }
.mixture-project .mixture-paper { padding: 1.6rem 0; border-top: 1px solid var(--global-divider-color); }
.mixture-project .mixture-paper h3 { font-size: 1.25rem; line-height: 1.4; margin: .5rem 0 .7rem; }
.mixture-project .mixture-paper p { margin-bottom: .8rem; }
.mixture-project .mixture-paper ul { padding-left: 1.25rem; }
.mixture-project .mixture-paper li { margin-bottom: .45rem; }
.mixture-project .mixture-links { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1rem; }
.mixture-project .mixture-links a { border: 1px solid var(--mix-accent); border-radius: 5px; padding: .35rem .85rem; font-size: .83rem; font-weight: 700; color: var(--global-text-color); text-decoration: none; }
.mixture-project .mixture-links a:hover, .mixture-project .mixture-links a:focus-visible { background: var(--mix-accent); color: white; }
.mixture-project .mixture-assumptions { font-size: .86rem; line-height: 1.6; color: var(--mix-muted); margin-top: 1rem; }
.mixture-project .mixture-results { margin: 1.6rem 0; border: 1px solid var(--global-divider-color); border-radius: 10px; overflow: hidden; }
.mixture-project .mixture-results-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 1rem; }
.mixture-project .mixture-results-panel p { font-size: .9rem; margin: 0 0 .7rem; }
.mixture-project .mixture-results-panel img { width: 100%; height: auto; display: block; background: white; border-radius: 5px; }
html[data-theme="dark"] .mixture-project { --mix-accent: #c5a6e4; }
html[data-theme="dark"] .mixture-project .mixture-links a:hover, html[data-theme="dark"] .mixture-project .mixture-links a:focus-visible { color: #20162b; }
@media (max-width: 650px) {
  .mixture-project .mixture-contexts, .mixture-project .mixture-stages, .mixture-project .mixture-results-grid { grid-template-columns: 1fr; }
  .mixture-project .mixture-stage { padding: 1.1rem 1.5rem; }
  .mixture-project .mixture-stage + .mixture-stage { border-left: 0; border-top: 1px solid var(--global-divider-color); }
  .mixture-project .mixture-stage svg { max-width: 280px; margin: 0 auto; }
  .mixture-project .mixture-stage p { min-height: 0; }
}
</style>

<div class="mixture-project" markdown="1">

<div class="mixture-intro" markdown="1">
<span class="mixture-eyebrow">PROJECT SUMMARY</span>
## What if there is a mixture of causal graphs behind the data?

<p class="mixture-lead">In many applications where cause-effect relationships matter, the collected data is heterogeneous. Different observations may reflect different causal mechanisms, making a single causal graph an incomplete description of the system. Some motivating examples include:</p>
</div>

<div class="mixture-contexts">
  <div><strong>Time-varying systems</strong><p>Causal relationships can change over time, so observations collected at different times may come from different underlying causal models.</p></div>
  <div><strong>Cyclic relationships</strong><p>Feedback loops can be represented by acyclic graphs when unfolded over time, while the collective cause-effect relationships among the original variables can form a cycle.</p></div>
  <div><strong>Modeling subpopulations</strong><p>Subtypes of cancer, for example, can express different biological pathways. Pooling their data combines distinct causal mechanisms.</p></div>
</div>

When a single **directed acyclic graph (DAG)** cannot adequately describe these heterogeneous causal relationships, a **mixture of DAGs** becomes an attractive modeling approach. It allows multiple causal models over the same variables, each describing a different context or subpopulation.

The challenge is that we may not know which model generated each observation. Our work asks what can be learned from this mixture (pooled) data, what remains ambiguous, and how interventions can reveal the underlying causal edges.

<!-- Core Challenge: edit the heading, panel text, legend, and caption here. -->
<figure class="mixture-visual" aria-labelledby="mixture-visual-caption">
  <div class="mixture-visual-header"><span class="mixture-eyebrow">THE CORE CHALLENGE</span><h2>Mixing two causal systems (can) create emergent edges in their mixture.</h2></div>
  <div class="mixture-stages">
    <div class="mixture-stage">
      <h3><span>01</span> Component DAGs</h3>
      <p>Each sample comes from one of these systems, but the learner does not know which one.</p>
      {% include mixture-causal-discovery-visual.html graph='components' %}
      <div class="mixture-stage-note">Both DAGs are acyclic. The direction between X₂ and X₃ reverses.</div>
    </div>
    <div class="mixture-stage">
      <h3><span>02</span> True adjacencies</h3>
      <p>The edges that exist in at least one component DAG.</p>
      {% include mixture-causal-discovery-visual.html graph='union' %}
      <div class="mixture-stage-note">Neither <strong>X₁–X₃</strong> nor <strong>X₂–X₄</strong> is a direct edge in either DAG.</div>
    </div>
    <div class="mixture-stage">
      <h3><span>03</span> Observed mixture</h3>
      <p>Pooling creates two additional pairs that cannot be separated in the mixture.</p>
      {% include mixture-causal-discovery-visual.html graph='mixture' %}
      <div class="mixture-stage-note">These pairs become <strong>inseparable</strong> in the mixture distribution.</div>
    </div>
  </div>
  <div class="mixture-legend"><span><i class="mixture-edge-key"></i> True adjacency</span><span><i class="mixture-edge-key emergent"></i> Emergent edge</span><span><i class="mixture-node-key"></i> Changing mechanism</span></div>
  <figcaption id="mixture-visual-caption"><strong>Redrawn from Figure 1 of our <a href="https://openreview.net/forum?id=ALRWXT1RLZ">TMLR 2024 paper</a></strong> (panels a, b, c, and f). The mechanisms of X₂ and X₃ differ between components; those of X₁ and X₄ stay fixed. Under the paper's mixture-faithfulness assumption, no conditioning set separates X₁ from X₃ or X₂ from X₄ in the mixture, although both pairs are nonadjacent in every component. The middle panel shows true adjacencies without directions.</figcaption>
</figure>

**Intuition: Look at X₁ and X₃.** In DAG A, conditioning on X₂ blocks the chain X₁ → X₂ → X₃. In DAG B, that same conditioning opens the collider X₁ → X₂ ← X₃. Under the paper's assumptions, no conditioning set separates this pair in the mixture. Yet there is no direct X₁–X₃ edge in either system.

## Why mixtures change the causal discovery problem

In a single DAG, conditional independence tests can recover the graph's skeleton under standard faithfulness assumption. In a mixture, two variables may remain dependent under **every conditioning set**, even when they are not adjacent in any component DAG. We call these extra adjacencies **emergent edges**.

Therefore, even before trying to orient the *skeleton*, we must distinguish direct causal relationships from dependencies created by mixing, while allowing causal directions to conflict across components (e.g., reversed directions).

<div class="mixture-takeaway" markdown="1">
**Two complementary questions:** What can observational data tell us about a mixture, and which interventions let us recover its true directed edges?
</div>

## The research

<section class="mixture-paper" markdown="1">
<span class="mixture-eyebrow">01 / OBSERVATIONAL LIMITS · TMLR 2024</span>
### Separability Analysis for Causal Discovery in Mixture of DAGs

We establish a framework for interpreting the conditional independencies of a mixture. Its mixture graph represents **inseparable pairs**, which can include both **true** causal edges (that exist in at least one component of the mixture) and **emergent** edges (that are spurious adjacencies caused by the unknown mixing).

- **Explain emergent edges.** We give sufficient conditions for two variables to be *separable* in general DAG mixtures and characterize how changes in causal mechanisms affect these conditions. This result explains why the existing graphical representations in prior literature are inadequate to represent mixtures without further structural assumptions.
- **Obtain sharp results for trees.** For tree-structured components, we establish necessary and sufficient graphical conditions for when emergent edges arise in a mixture.
- **Learn what is identifiable.** We introduce new edge notations for inseparable node pairs to represent the above conditions and partially orient the skeleton of the mixture graph. We discuss the inference of these oriented edges from unshielded
triples and show that v-structures upon nodes with varying causal mechanisms can be recovered. Finally, we devise an algorithm built on our theoretical results to recover the learnable causal relationships.
<div class="mixture-links">
<a href="https://openreview.net/forum?id=ALRWXT1RLZ">Read the paper ↗</a>
<a href="https://github.com/bvarici/iTMLR-mixture-DAG">Code ↗</a>
</div>
</section>

<section class="mixture-paper" markdown="1">
<span class="mixture-eyebrow">02 / INTERVENTION DESIGN · NEURIPS 2024</span>
### Interventional Causal Discovery in a Mixture of DAGs

We use interventions to identify the **true directed edges: those present in at least one component DAG**. The learning target is their *union*, without assigning those edges to individual components, which typically requires additional assumptions.

- **Setting**: Assume mixture-faithfulness for all interventions. The intervention model uses stochastic hard interventions with the same intervention mechanism across components.
- **How large must an intervention be?** For a node with $$d_i$$ distinct parents across component DAGs, size $$d_i+1$$ suffices for testing a candidate parent relationship, and is necessary in the worst case. For a mixture of $$K$$ directed trees, the corresponding worst-case bound is $$K+1$$.
- **How many interventions suffice?** Our adaptive algorithm, **CADIM**, recovers the directed edge union using $$\mathcal{O}(n^2)$$ interventions on $$n$$ variables. Importantly, the maximum size of the interventions used in our algorithm is optimal if the mixture
ancestors of a node (i.e., the union of its ancestors across all DAGs) do not form a cycle.
- **What do cross-component cycles cost?**   We show that the gap between the maximum intervention size used by CADIM algorithm and the optimal size is bounded by the *cyclic complexity* which we define as the minimum intervention size needed to break cycles among the ancestors of the node.



{% comment %}
<!-- CADIM simulation figures: edit titles and caption here. -->
<figure class="mixture-results" aria-labelledby="cadim-results-caption">
  <div class="mixture-results-grid">
    <div class="mixture-results-panel">
      <p><strong>2(a) Why interventions matter</strong></p>
      <img src="{{ '/assets/img/projects/mixture-causal-discovery/cadim-figure-2a.png' | relative_url }}" width="870" height="630" loading="lazy" alt="Skeleton recovery F1 versus 5 to 10 nodes for two-component mixtures. The intervention-based method stays near 0.98 while the observation-based method falls from about 0.88 to 0.55.">
    </div>
    <div class="mixture-results-panel">
      <p><strong>2(b) Recovering true directed edges</strong></p>
      <img src="{{ '/assets/img/projects/mixture-causal-discovery/cadim-figure-2b.png' | relative_url }}" width="870" height="630" loading="lazy" alt="CADIM precision and recall for true directed edges versus 5 to 30 nodes in three-component mixtures. Both stay above 0.95 over the plotted range.">
    </div>
  </div>
  <figcaption id="cadim-results-caption"><strong>CADIM in simulation.</strong> Synthetic linear-Gaussian models on random Erdős–Rényi DAGs (edge probability 2/n), averaged over 100 random mixtures using partial-correlation tests. Panel (a) compares skeleton recovery for two-component mixtures. Panel (b) shows directed-edge precision and recall for three-component mixtures with 5,000 samples per component. Panels reproduced from <a href="https://arxiv.org/pdf/2406.08666#page=10">Figure 2(a–b), NeurIPS 2024</a>.</figcaption>
</figure>
{% endcomment %}

<div class="mixture-links">
<a href="https://arxiv.org/abs/2406.08666">Read the paper ↗</a>
<a href="https://github.com/bvarici/intervention-mixture-DAG">Code ↗</a>
<a href="{{ '/assets/pdf/Int_Mixture_DAG_poster_final.pdf' | relative_url }}">Poster ↗</a>
</div>
</section>


</div>
