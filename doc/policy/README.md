Web Dev Policies
================

These policies should make your life easier, or at least make everyone
else's life easier. (You know, the good of the many sometimes has to
outweigh the good of the few, or the one.)

As the Frontier Council or Web Dev Managers figure out the mechanics of
things, they should drop a brief document in this directory clueing in
the rest of us. Regular ol' dev's can also write up policy proposals and
start discussion by opening a pull request in this directory.

Recommendation Index
--------------------

Some policies are must haves, others are good ideas. Then some are
antipatterns altogether. To help sum up how strongly we recommend
something, we tag it using this recommendation index:

**0 - Antipattern.** Don't do things this way. It causes problems.

**1 - Acceptable.** If you do things this way then you won't get in trouble
for it. Follow this for what it's worth in your own eyes.

**2 - Recommended.** If you don't do things this way, you might be swimming
up-stream or just making life harder for yourself.

**3 - Urged.** Not following this policy may well prompt an uncomfortable
discussion between you and your peers or you and **-gulp-** your manager.

**4 - Mandatory.** If you fail to follow this policy your actions can be
freely countermanded. Repeated violation may place your job in jeopardy.

**5 - JIJ - Job in Jeopardy.** Failing to follow this policy, even just
once, can place your job in jeopardy or result in immediate termination.

**NOTE:** We don't mean to document every possible policy here.
But we do wish to make a good faith effort to make your job easier to
reason about. We also don't expect to write many policies at level
4 and especially not at level 5. But including those levels in the
recommendation index helps to clarify the relative priority and
flexibility of the policies we do intend to document.

You can tag an entire document or just a section using this index.

Here's an example policy

> Frobnication Policy
> -------------------
>
> Recommendation Index: 1 - Acceptable
>
> If you haven't used the term before: "Frob connotes aimless manipulation."
> See [dictionary.com](http://dictionary.reference.com/browse/frobnicate).
> "Frob" for short.
>
> Since for many of us frobbing comes naturally, feel free to frob all you
> want with your personal heroku deploy. Messing with the settings and
> seeing what changes is often a productive way to learn how it really
> works.
>
> ### Frobbing on Staging
>
> Recommendation Index: 0 - Antipattern (Don't do it.)
>
> ### No Frobbing on Production
>
> Recommendation Index: 5 - JIJ.
>
> Aimlessly frobbing values in production just to see what happens is
> not customer centric. It is not worthy of greater freedom. It is not
> principled.
>
> Never change production values without a clear understanding of what
> it will impact or at least a very urgent and important goal in mind.
>
> This doesn't mean that mistakes leading to production outtage will
> put your job in jeopardy. But displaying a calloused indifference to
> causing production outtages will put your job in jeopardy.
