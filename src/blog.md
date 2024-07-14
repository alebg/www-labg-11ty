---
layout: blog-post.njk
title: Blog Home
permalink: /blog/
currentPageLocation: blog
---

# Welcome to My Blog

Presentaton in English...

{% for post in collections['posts'] | reverse %}
  <a href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
  </a>
    <time>{{ post.data.date | date("MMMM dd, yyyy") }}</time>

{% endfor %}