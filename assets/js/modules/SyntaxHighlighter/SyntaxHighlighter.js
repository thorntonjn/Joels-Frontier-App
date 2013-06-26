function SyntaxHighlighter(el, config) {
  
  /* To use syntax Highlihgter
   1. Add 'data-control="SyntaxHighlighter"' to the body of your page
   2. Add a class language-css, language-html, language-js 
      to the block of code that you'd like to highlight
      - Alternatively you can add the class "highlight" instead
        which will auto detect the language
   3. HTML must be encoded. Sorry.
   */  
  
  FS.File.loadCSS( 'jquery.syntaxhighlighter.1.0.3.css' );
  $.SyntaxHighlighter.init();
  
};

module.exports = function(config) {
  return new SyntaxHighlighter(config.container, config);
};