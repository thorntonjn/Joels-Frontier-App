var path = require('path'),
    karmaDir = path.resolve(path.join(path.dirname(REQUIRE_ADAPTER), '..')),
    projectPath = path.join(path.dirname(__filename), '..'),
    testFiles = [
      //{pattern: 'assets/js/**/*.js', watched: true, included: false, served: false},

      'assets/js/modules/SampleAssembly/assembly.json',
      'assets/js/*.js',

      'assets/js/modules/SampleAssembly/test/*Test.js',
      'test/client/*Test.js'
    ],
    adapters = [
      MOCHA,
      MOCHA_ADAPTER                            //gadgetLib, scan node-modules take project and stick asset manifest, scan for controls that are static assets
    ],
    conf = require(path.join(__dirname + "../../node_modules/frontier-build-tools/test/fskarma-config.js"))(projectPath, karmaDir, adapters, testFiles, false, false),
    browserList = process.env.TARGET_BROWSER ? [process.env.TARGET_BROWSER] : ["Chrome"];   // environment variable allows using phantom

basePath = '../';
files = conf.files;
exclude = conf.exclude;
reporters = ['progress'];
port = process.env.PORT || 9876;
runnerPort = 9100;
colors = true;
globals = conf.globals;
logLevel = LOG_INFO;
autoWatch = true;
// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers= browserList;
captureTimeout = 120000;
singleRun = false;
preprocessors = conf.preprocessors;
