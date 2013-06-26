$(function() {
  //stick the id of the element as the content so we can see which element is which
  $(".targetElement").each(function() {
    $(this).html("id=" + this.id + 
      "<br/>top=" + $(this).position().top +
      "<br/>left=" + $(this).position().left +
      "<br/>size=" + $(this).width() + "x" + $(this).height());
  });
});