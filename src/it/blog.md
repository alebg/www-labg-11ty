---
layout: home.njk
title: Home
---

# Benvenuti sul mio blog

Qui troverete le mie pubblicazioni più recenti, in qualsiasi lingua.

{% for post in collections['post'] | reverse %}
  <a href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
  </a>
    <time>{{ post.data.date | date("MMMM dd, yyyy") }}</time>

{% endfor %}

