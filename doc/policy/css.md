## Hey, this <insert pattern/thought here> isn't in the style guide!? 

Then we do not have a guide for it, and you may do whatever makes you work happiest, and best, as long as it doens't conflict with something in the style guide and follows industry best practices and standards.

## Leave the CSS better than you found it

No matter who came before you, when you come upon CSS that has obvious optimization opportunities, grab them by the horns.

## Each Rule is written on multiple lines
DO:

```css
.family-tree {
  color: #333;
  font-size: 13px;
}
```

DONT:

```css
.family-tree { color: #333; font-size: 13px; }
```
In the case of multiple selectors, place each selector within a comma delimited list on its own line.

```css
.selector a,
.selector a .b,
.selector a .b .c {
.family-tree {
  color: #333;
  font-size: 13px;
}
```

## Each rule should include a trailing semicolon

Rules should be written with a space following each, opening brace and colon

```css
family-tree { color: #333; }
```

## Do not use inline styles

Inline styles should never be used.

```html
<h1 style="font-color: red; font-weight: normal; text-decoration: underline">My Famliy Tree</h1>
```

## All id and class names must be lower-case, dash- separated values

DO:  
```css
.family-tree { }
```

Do not use camel case, underscores or upper case

```css
familyTree { }
.family_tree { }
.FTREE { }
```

## Do not use presentational class and id names

Use class and id attribute vales to add more semantic value to the content that the containing element is encapsulating. 
For example, if we needed to create a box for content related to network status. And the UI spec calls for a 250px wide container with a blue background, 
a 2px black border, and 9px text, it would be inappropriate to refer to what this box looks like anywhere in the class name. So instead of naming the class:

Presentational Class Name

```css
mediumBlueBox2pxBorderBlack { }
```

Semantic Class Name

```css
.family-tree {}
```

## Use pixels for font-size

Within consideration for the product requirements, please just use pixels.

## Use shorthand whenever possible

Separate declarations are usually unnecessary for properties like margin.

```css
.selector { margin-top: 5px; margin-right: 10px; margin-bottom: 15px; margin-left: 20px }
```

Shorthand to the rescue.

```css
.selector { margin: 5px 10px 15px 20px; }
```

## Do not use browser targeting hacks. Instead use the class name supplied on the <html> tag.

DO:

```css
.family-tree { margin: 10px; }
.ie7 .family-tree { margin: 5px; }
.ie8 .family-tree { margin: 0; }
```

DO NOT:

```css
.family-tree { margin: 10px; *margin: 5px; _margin: 0; }
```

## Floats

Preferred: Apply the overflow: hidden property (and a trigger for hasLayout for IE7 and below) to the parent container of the floated elements you wish to clear.

```css
.parent { overflow: hidden; zoom: 1; }
.parent .child { float: left; }
```

In the event you actually need content to overflow, use clearfix instead.

Acceptable: add "clearfix"

```html
<div class="parent clearfix">
  <div class="child"></div>
  <div class="child"></div>
</div>
```

## The id selector should be avoided whenever possible

DO NOT:

```css
#my-container .my-list { font-weight: normal; }
```

DO:

Try using a class name instead of this id

```css
.my-container .my-list { font-weight: normal; }
```

## Avoid the use of the !important declaration

Any rule with an !important declaration creates a specificity nightmare and interferes with user-specified stylesheets. [See here](http://www.stuffandnonsense.co.uk/archives/images/specificitywars-05v2.jpg)

## Use double quotes when referencing URLs such as background-images.
DO:

```css
.selector { background-images: ("img/icon_arrow_12x12.gif"); }
```

DO NOT:

```css
.selector { background-images: (img/icon_arrow_12x12.gif); }
```

## Use comments to identify various components, sections, etc

Comments are stripped from the production version, so don't be shy about using them.

```css
/* Person Actions */
.selector { color: #D50000; }
.selector a { color: #000; }
```

## Avoid the use of the universal selector

This has performance issues on large pages

```css
h3 * { font-size: 12px }
* { margin: 0; padding: 0; }
```

## Be aware of the performance implications of the selectors you use

Read Steve Souder's article [http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/](http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/) for more information.

## Make sure to follow any vendor prefixed property with the proposed standard property for future proofing

```css
.selector { 
  -moz-border-radius: 3px; 
  -webkit-border-radius: 3px; 
  -ms-border-radius: 3px; 
  border-radius: 3px; 
}
```
