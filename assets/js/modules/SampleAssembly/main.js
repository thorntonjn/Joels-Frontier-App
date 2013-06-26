/**
 * Variables set here are global to all instances of this Control but 
 * cannot be seen outside the scope of a Control instance.
 */
var sharedVarAcrossControlInstances = 0;

//Load the associated css file for this Control
FS.File.loadCSS('modules/SampleAssembly.css');

/**
 * This is the sole requirement to be called a Control.  You must export a function that takes
 * as config parameter.
 */
module.exports = function(config) {
  return new SamplePresenter(config.container, config);
};