Figuring Stuff Out in Frontier
==============================

There are three top-level starting points:

1. The production [Reference App](http://fs-reference-prod.herokuapp.com)
2. The [code for Reference App](https://github.com/fs-webdev/reference)
3. The [group page in Confluence](https://almtools.ldschurch.org/fhconfluence/display/Product/Front-end+Engineering+Group)

One way or another you ought to be able to find your answer by starting
in one of these places. If you can't then think about linking in your
answer somehow once you find it.

### Which stuff goes in the reference app?

Code-documentation goes in reference because then every developer that
clones it has a complete copy of the most important standards and
techniques for Frontier. Project stuff like schedules goes in confluence
or version one.

Documentation in the reference app answers the question, "How do I ...
with code." So, "How do I make a request of a third party api in my node
controller?" is a good question to answer in reference. But, "How do I
schedule an appointment with my manager?" is not.

Stability Index
---------------

We reuse the Node.js [stability index](http://nodejs.org/api/documentation.html#documentation_stability_index).
(As implemented [here](https://github.com/joyent/node/tree/master/tools/doc#stability-ratings-0-5))
It works particularly well when documenting code we've written:

> 0 - Deprecated. This feature is known to be problematic, and changes
> are planned. Do not rely on it. Use of the feature may cause warnings.
> Backwards compatibility should not be expected.
>
> 1 - Experimental. This feature was introduced recently, and may change
> or be removed in future versions. Please try it out and provide
> feedback. If it addresses a use-case that is important to you, tell the
> node core team.
>
> 2 - Unstable. The API is in the process of settling, but has not
> yet had sufficient real-world testing to be considered stable.
> Backwards-compatibility will be maintained if reasonable.
>
> 3 - Stable. The API has proven satisfactory, but cleanup in the
> underlying code may cause minor changes. Backwards-compatibility is
> guaranteed.
>
> 4 - API Frozen. This API has been tested extensively in production and
> is unlikely to ever have to change.
>
> 5 - Locked. Unless serious bugs are found, this code will not ever
> change. Please do not suggest changes in this area, they will be
> refused.

When documenting code, the stability index refers to that code. However,
sometimes we are documenting a recommendation to _use_ something -- a
third-party library, or technique. In those instance, the stability
index refers to the stability of that recommendation.

For example, the stability of a doc on CoffeeScript might be "0 -
Deprecated," while the doc on Stylus is "3 - Stable." That isn't to say
that Stylus is more stable than CoffeeScript as a technology, only that
we don't use CoffeeScript, and new code can use Stylus with confidence.

Deprecation Policy
------------------

When a technique is deprecated, we know we don't want to use it anymore.
But we've probably got dozens or hundreds of existing usages of it.
Should we just stop making more, or go through the code and delete the
existing usages? Of course, the answer is, "It depends." So, when we
deprecate something, we will also decide how aggressively we want to
phase it out of existing code.

1 - Soft - You may continue use in existing projects where the technique
is already employed. Even new code may use the technique, though this is
discouraged.

2 - Tolerated — You should not write new code using it, and old code
should be upgraded the next time it is changed.

3 - Kill - Use of this deprecated item hinders team progress, or is
known to be dangerous. All instances of use should be sought out and
removed by given date, or ASAP.
