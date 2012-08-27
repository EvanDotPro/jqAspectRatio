# jqAspectRatio
v0.0.1 by Evan Coury

## Introduction

jqAspectRatio solves a simple problem: it allows an element to automaticall resize within its parent element based on the original aspect ratio. It optionally supports the CSS3 scale transformation.

## Demo

[Click here](http://evandotpro.github.com/jqAspectRatio/) to see a demo of how you might use this plugin to set up a 4:3 slideshow which scales properly.

## Usage

### Basic example

This example simply resizes the element(s) to retain the original aspect ratio, but does not scale the content within.

```javascript
$('.someclass').aspectRatio();
```

#### Example with CSS3 scaling

This example will not only resize the element(s) to retain the original aspect ratio, but it will also scale the content with the element(s) to match.

```javascript
$('.someclass').aspectRatio({scale: true});
```

**Note:** If using scaling, you may want to set the `transform-origin` CSS property on the element in your stylesheet.

```css
.someclass {
    transform-origin: center 0;
    -ms-transform-origin: center 0;
    -moz-transform-origin: center 0;
    -webkit-transform-origin: center 0;
    -o-transform-origin: center 0;
}
```
