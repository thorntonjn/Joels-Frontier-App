/**
 * SamplePresenter contains all of the business logic for my control.
 * Manages the data, works with external services, and sends data to the view
 * for display.
 * 
 * The presenter should have no knowledge of the DOM or anything about how
 * to display things.  It's just the glue that ties everything together.
 */
function SamplePresenter(el, config) {
  var defaultConfig = { 
        bgColor: "#0f0"
      };
  
  this.config = $.extend(defaultConfig, config);
  this.privateVarToThisControlInstance = 0;
  
  this.view = new SampleView(this, el, this.config.bgColor);
}

/**
 * Add functions to the prototype of SamplePresenter
 */
$.extend(SamplePresenter.prototype, {
  incrementValues: function() {
    sharedVarAcrossControlInstances++;
    this.privateVarToThisControlInstance++;
    
    this.view.showValues(sharedVarAcrossControlInstances, this.privateVarToThisControlInstance);
  }
});