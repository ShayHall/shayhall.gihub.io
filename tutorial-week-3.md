# CSS is like Calvin Ball
![Calvin Ball](http://teecraze.com/images/fury/calvinball.jpg)
  ### _The rules seem to be made up as we go along... but they aren't!!!_

CSS is a complicated way of adding style to a webpage, but that doesn't mean it has to be difficult.  Here are a few key points to keep you on track as you pretty up some MF'g websites.

#### Basic syntax of CSS

```
selector {
  property:value;
}
```
####  3 Rules of Cascade
CSS selectors can trump one another.  This can be troublesome if you don't know how or why certain values are overriding others.
  1. **Inheritance:** Some properties are inherited by the children of the element affected.
  - **Specificity:** Using more selectors or different selectors can target more specific elements.  
  - **Order:** The rule of the cascade in the stylesheet says that if inheritance and specificity are equal, the selectors defined lower in the rule will take priority.

####  Selectors
There are many ways to identify which element to target.  Here are just a few highlights to get you started.

Element- This is the least specific way of identifying what to target.  
```
ex.
 li {
  background-color:tomato;
}
```

Class- This allows a group of elements that have been given the same class name to be targeted as a group.
```
ex.
.group-think {
  background-color:tomato;
}
```

ID- This is the most specific single selector.  Each ID tag can only be used on one element tag per page.
```
ex.
#unique {
  background-color:tomato;
}
```
Combining selectors- Selectors can be combined in numerous ways to produce varying degrees of specificity.  Here are a couple examples of simple ways to combine selectors.

`*`-The 'wildcard' will select every element in the page.  This is not often very useful and should be done cautiously and intentionally.

`X Y`- targets all `Y` descendants of `X` including grandkids

`X > Y`- targets all `Y` elements that are direct children of `X`

`X ~ Y`- targets all `Y` element siblings of `X` element

`X:first-child`- targets only the first child of `X` element

`X:first-of-type`-Targets first sibling of `X` element type

####  Properties
Here are a few of the most basic CSS properties.

`border-radius`- rounds off corners of boxes

`box-shadow`- adds depth by putting shadow on box.  Can take `x-axis` `y-axis` `blur` and color.


###### BOXES!
Boxes are the primary way websites are laid out.  Here are the primary means of manipulating boxes.
