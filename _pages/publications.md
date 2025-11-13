---
layout: page
permalink: /publications/
title: Publications
# description: publications by categories in reversed chronological order. 
nav: true
#years: [2025,2024,2023, 2022, 2021]
nav_order: 1
ordered_papers:
  - varici2025score
  - varici2023causal
  - zhai2025contextures
  - varici2024linear
  - varici2024general
---
<!-- _pages/publications.md -->
<div class="publications">

<!-- {%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %} -->

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>




