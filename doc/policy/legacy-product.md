Legacy Product
==============

Recommendation Index: 3 - Urged

In the time before time Web stuff wasn't written by any particular group. In addition, best practices is a moving target. So, there is code out there that doesn't match current stack or policy recommendations. Some of it is nothing like the tools we use today.

For this document, we call any code that is strikingly dissimilar to what we would write today, "Legacy." Sometimes, legacy code uses extremely different technologies than we now use, like Scala, Play, Java, and Struts. Our policy around Legacy Products seeks to meet two requirements:

1. Efficiently deliver value, even in legacy systems: in other words, even Legacy systems and products need developer love from time to time.
2. Reduce coupling between developers and their code: in other words, do things in consistent ways across the web-dev group so that people can move around and be immediately effective as they do

Our Default Stance on Maintaining Legacy Product
------------------------------------------------

For products considered Stability Index 5 - Locked we do NOT upgrade the product by default. Critical bug fixes and possibly tiny-but-highly-strategic features are implemented in a way sympathetic to the existing code.

For products less stable than 5 - Locked we deprecate the existing code base and aggresively pursue a gradual transition into current techniques. That is, we behave as if the project's code were marked with deprecation policy 2 - Tolerated.

To be clear, wholesale rewriting is often tempting but seldom the best choice. It is expensive and error prone.  A full rewrite may become feasible after serious investigation; but the impulse must be at least initially checked by a sober eye toward customer value.

Particular Legacy Products
==========================

Classic or new.familysearch.org
-------------------------------

Stability Index: 5 - Locked

Maintenance Style: Sympathetic - Don't upgrade. Just get in, fix it, and get out.

Maintainers: Jared Green and Kent Olsen

Uses Java, XMLC, Struts. Has been frozen for a long time. Plan to retire around 2014. Kent Olsen was team lead when the product was made and he is still proficient at maintaining it.
