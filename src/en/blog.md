---
layout: home.njk
title: Home
---

# Welcome to My Blog

Presentaton in English...

{% for post in collections['post'] | reverse %}
  <a href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
  </a>
    <time>{{ post.data.date | date("MMMM dd, yyyy") }}</time>

{% endfor %}

