debug
=====

stability index: 3 - stable

Technology Advocate: Cameron Bytheway

Lots of the core libs in Frontier use this library for creating debug
that you can turn on and off via environment variables. You should
become familiar with it so you can debug the workings of your app as it
crosses into Frontier stack (like Woodruff and Smith).

Feel free to use liberally in your own code to add thoughful debugging
logs that you can turn on in production for short periods of time.

To use the library:

> var debug = require("debug")("appname:majorsection:minorsection");

Debug is always loaded in this way so you can search your node_modules
directory for instances of 'require("debug")' to discover the names of
debug loggers you can turn on.

To turn on the library set the DEBUG env var:

> heroku config:set DEBUG=woodruff:*

or

> heroku config:set DEBUG=identity:*,woodruff:middlewar:*

or similar.

Links:
* [Debug on GitHub](https://github.com/visionmedia/debug)