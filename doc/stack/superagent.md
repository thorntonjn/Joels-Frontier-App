superagent
==========

stability index: 3 - stable

We use superagent for making http requests from node. This library supersedes [request](request.md).

NPM Note
--------

On May 20, 2013, at 11:22 AM, Dan Crews wrote:

> There has been a change in some of the libraries we use. We are fans
> of "visionmedia/superagent" (github project), and we use it often.
> The problem is that it uses the git:// protocol, which our firewall
> blocks (big surprise there). That means that for your Frontier apps,
> you won't be able to npm install. There's a simple fix. You just need
> to run this from your terminal. It'll add some git configuration for
> you.
>
> git config --global url."https://".insteadOf git://
>
> Or just manually add this to your ~/.gitconfig file:
>
> [url "https://"]
>         insteadOf = git://
>
> And you'll be able to build your apps again.