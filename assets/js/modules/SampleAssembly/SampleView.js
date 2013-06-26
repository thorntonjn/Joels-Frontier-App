/**
 * SampleView is dumb.  It's job is to display things in the DOM and to handle DOM events.
 * Generally it converts DOM events into custom events on the parent presenter object
 * so the presenter can react to the events.  Very little logic should exist in the view.
 * It's just sticking data into the DOM and pulling data out as needed.
 */

function SampleView(parent, el, bgColor) {
  var snippets = $(getSnippets()).find("#MainContent").children();
  
  this.parent = parent;
  this.el = el;
  
  $(el).prepend(snippets)
       .css("backgroundColor", bgColor)
       .click($.proxy(this.boxClicked, this));
}

/**
 * Add functions to the prototype of SampleView
 */
$.extend(SampleView.prototype, {
  boxClicked: function(evt) {
    $(this.parent).trigger("incrementValues");
  },
  
  showValues: function(sharedVar, privateVar) {
    $(".sampleAssembly .sharedVarValue").html(sharedVar);
    $(".privateVarValue", this.el).html(privateVar);
  }
});