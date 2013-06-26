JavaScript
==========

Code can and should not be submitted that does not meet these criteria:

Leave the Javascript better than you found it
----------------------------------------------
No matter who came before you, when you come upon JS that has obvious optimization opportunities, it is your responsibility to fix them.

Coding Requirements
===================

**Recommendation index: 3** - Urged - Not following this policy may well prompt an uncomfortable conversation.

Code can and should not be submitted that does not meet these criteria:

Two "soft spaces", not tabs for indentation
-------------------------------------------
Avoids Merge Conflicts with engineers, ensures consistent spacing across multiple file editor and editor types. Incorrect spacing (especially tabs) can be easily fixed via TextMate's Text=>Convert=>Tabs to Spaces command.

### GOOD: Proper Spacing
    // this is proper indenting
    if (foo) {
      // inside of block indented with 2 spaces, no tabs
    }

Unix Line Endings (LF), not Windows Line Endings (CRLF)
-------------------------------------------------------
Again, this avoids merge conflicts with the engineers and each other. This also avoids opening up files and seeing tons of ^M symbols all over your editor.

Use a semicolon (;) for terminating all assignment statements
-------------------------------------------------------------
Code on that goes to production is minified and concatenated together. Lines missing a semicolon may cause accidental code execution.

### GOOD: Terminate all functions and control statements with a semicolon
    var foo = function() {
      // ...
    }; // note the ending semicolon

### BAD: Missing semicolons accidentally execute code
    // when minified, JavaScript will attempt to run "foo"
    // with your self-executing function as a parameter
    var foo = function() {
      // ...
    }
    (function() {
      // ...
    })();

Do not use trailing commas (,) in Arrays and Object Literals
------------------------------------------------------------
Results in broken code in IE 6/7/8. The code will appear to run fine in Firefox / Chrome, however, leading the web developer to think all is okay.

### BAD: Trailing commas that break IE 6, 7, and 8
    // this will error in IE var
    foo = [ 1, 2, 3, ];

Use {} and [] for Object Literals and Arrays
--------------------------------------------
Not only are the symbol syntaxes easier to read and use less bytes, but they're faster too.

### GOOD:
    var myObject = {};
    var myArray = [ 1, 2, 3 ];

### BAD:
    var myObject = new Object();
    var myArray = new Array(1,2,3);

Use { and } for delimiting control statements
---------------------------------------------
Control blocks that are complex and/or are written on more than a single line require braces. Adding more lines to an "if" statement shouldn't suddently break functionality. "Complex" also includes any control block that requires an "else".

### GOOD: How/When to use curly braces
```javascript
  if (condition) {
    // code inside has been wrapped with { and }
  }

  if (condition) {
    // code inside has been wrapped with { and }
  } else {
    // something else
  }

  // Single-statement, single line, no braces
  if (!condition) statement;

  // Single lines can use braces optionally.
  if (!condition) { statement; }
```
### BAD:
```javascript
  if (!condition)
    statement;

  if (condition)
    // code inside has not been wrapped
  else
    // code inside has almost not been wrapped

  // Code that requires an 'else' should be on multiple lines -- ergo with braces.
  if (condition) statement;
  else statement;

  // Code that contains more than one statement should not be on a single line.
  if (condition) { statement; statement; }
```
Optimize for() loops
--------------------

To improve overall performance, for loops should be optimized. At the very least, the "length" parameter of a collection should be precalculated and stored. Any other optimizations are left up to the individual developer.

### GOOD: A Properly Optimized Loop
    // precache the length property
    for (var i = 0, len = foo.length; i < len; i++) {
      // ...
    }

Use camelCase for Variable and Method Names, use UPPERCASE for constants
------------------------------------------------------------------------
This is just a consistency thing. Unless you are actually defining an API with private properties on the prototype, there is rarely a good reason to be using an underscore(_) in the code. Since all methods, functions, and variables are equal objects in JS, we treat their variables the same way. **Do not do hungarian notation (oThingy, sStringThingy, etc) or we'll eat you.**

Constants should be defined in ALL_CAPS with underscores separating words. Constants do not change and should never be assigned except at the top of a function / file.

Please pre-compile frequently used items (such as regex items and HTML Nodes retrieved from $() ) and store them as CONSTANTS.

### GOOD: Proper Formatting
    // proper constants
    var ITEM_ONE = 12345,
        ITEM_TWO = "abcde",
        ITEM_THREE = (/foo/);
    // this is proper camel casing
    var fooThingy = function(responseText, messages, onSuccess) {
      // ...
    };

Avoid Short Variable Names (loops excepting)
--------------------------------------------
Short variable names are hard to decipher. Code at familysearch should be minified for production, so there is no reason to prematurely shorten our own code and sacrifice readability.

Keep Ternary Operators Simple
-----------------------------
Ternary operators should only be used for variable assignment

### GOOD: Good Ternary Uses
    var myClassName = (this.isAwesome()) ? "on" : "off";
### BAD: Bad Ternary Uses
    // determine actions (use an IF instead)
    (isNotVeryAwesome) ? makeAwesome() : dontMakeAwesome();

Minimize Browser Reflow Events
------------------------------

To improve performance, changes to the DOM should be reduced as much as possible. This includes:

* Use innerHTML to write to the DOM only once
* Removing a DOM node, appending a bunch of nodes, and then putting it back
* Setting class names instead of styles via the .style property
* Using DOM fragments instead of actually altering live DOM nodes

Coding Recommendations
======================

**Recommendation Index: 2 - Recommended** - If you don't do things this way, you might be swimming up-stream or just making life harder for yourself.

Move "var" to the top of the function it's needed in (loops excepting)
----------------------------------------------------------------------
Moving your var statements to the top helps minification, helps with readability and is just in general good housekeeping. You should also combine var statements to reduce occurrences of the word "var" (hey, that's like 4 bytes per item!).  Note:  This requirement is currently under review.

### GOOD: Epic Var Usage
    function epicVar() {
    var coolItem = 1,
        coolerItem = "abcd",
        coolestItem = $("#myId"),
        coolesterItem;
    // note the var used in the loop so that everyone knows the intended scope
    // within the loop itself
      for (var i = 0, len = coolestItem.childNodes.length; i < len; i++) {
        // do something once per child node
      }
    }

Follow Convention for Naming Standard Objects
---------------------------------------------

* **ex** Exception, used in catch() statement
* **evt** Event, used in on* handlers
* **xhr** xmlHttpRequest, convention for ajax response objects
* **i**, **j** counters for use in loops
* **$** short cut to the jQuery object
* **el** Html Element, the first var usually passed to a control
* **config** Config Object, the second var usually passed to a control

Line Up Operators In Multi Line Statements
------------------------------------------
This should really just read "make your code readable". If you have a lot of var statements, line up the equal signs. If you're working with an if() that's too big for one line, line up the AND and OR operators. It just improves the overall readability of the code.
### GOOD
    var coolItem      = 1,
        coolerItem    = "abcd",
        coolestItem   = $("#my-id"),
        coolesterItem = $(".my-class");

Avoid encode URLs in JavaScript
-------------------------------
URLs should come from view templates and be passed in via the control's "config". This allows us to create URLs that will work in development, staging, and production.

Avoid hardcoded i18n strings in JavaScript, do not put default text in your JS
------------------------------------------------------------------------------
Like URLs, i18n strings should come from view templates and be passed in via a controls "config" objext
