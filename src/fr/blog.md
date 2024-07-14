---
layout: home.njk
title: Home
---

# Bienvenue sur mon blog

Ici vous trouverez mes publications les plus récentes, dans n'importe quelle langue.

{% for post in collections['post'] | reverse %}
  <a href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
  </a>
    <time>{{ post.data.date | date("MMMM dd, yyyy") }}</time>

{% endfor %}

