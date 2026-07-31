---
layout: default
title: Blog
permalink: /blog/
---
<p class="section-label">$ ls -la blog/</p>
<ul class="log log--full">
  {% for post in site.posts %}
  <li class="log__entry">
    <span class="log__hash">{{ post.date | date: "%Y%m%d" }}</span>
    <a class="log__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="log__date">{{ post.date | date: "%b %d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
