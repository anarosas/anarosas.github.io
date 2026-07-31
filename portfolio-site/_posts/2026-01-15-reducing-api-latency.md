---
title: "Reducing our API's p99 latency by 45%"
tags: [performance, backend]
---
This is a sample post — delete it once your real posts are in `_posts/`. It's here so you can see how code blocks, quotes, and images look inside the new layout.

## The problem

Our payments API had a p99 latency of nearly 900ms during peak hours. Most of that time wasn't spent computing anything — it was spent waiting on a database round trip we didn't need.

```python
def get_user_limits(user_id):
    user = db.query(User).filter_by(id=user_id).first()
    return user.limits  # fetched on every request, rarely changes
```

## The fix

Caching `limits` in Redis with a short TTL removed almost all of that wait time, since the underlying data changes maybe once a day.

> Cache invalidation is only hard if you assume the data changes more often than it actually does.

After the change, p99 dropped to roughly 490ms — with no correctness regressions across three weeks of monitoring.
