---
layout: home.njk
title: Home
---

# Bienvenido/a a mi blog

Aquí encontrarás mis publicaciones más recientes, en cualquier idioma.

{% for post in collections['post'] | reverse %}
  <a href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
  </a>
    <time>{{ post.data.date | date("MMMM dd, yyyy") }}</time>

{% endfor %}

