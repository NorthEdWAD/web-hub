<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# CSS Flexbox — One-Page Overview

CSS Flexbox (Flexible Box Layout) is a layout system designed to arrange elements in a row or column, distribute space efficiently, and align items with minimal code.

***

## Core Concept

Flexbox works with two main parts:

- **Flex container**: The parent element (`display: flex`)
- **Flex items**: The direct children inside the container

```css
.container {
  display: flex;
}
```


***

## Main vs Cross Axis

- **Main axis**: Direction items flow (row or column)
- **Cross axis**: Perpendicular to the main axis

```css
flex-direction: row;      /* horizontal (default) */
flex-direction: column;   /* vertical */
```


***

## Container Properties

### Direction \& Wrapping

```css
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
```


### Alignment (Main Axis)

```css
justify-content: flex-start | center | space-between | space-around | space-evenly;
```


### Alignment (Cross Axis)

```css
align-items: stretch | flex-start | center | flex-end | baseline;
align-content: stretch | center | space-between | space-around;
```


***

## Item Properties

### Growth \& Shrink

```css
flex-grow: 1;   /* expand to fill space */
flex-shrink: 1; /* shrink if needed */
flex-basis: auto; /* initial size */
```

Shortcut:

```css
flex: 1; /* equivalent to 1 1 0 */
```


### Alignment (Individual Item)

```css
align-self: auto | flex-start | center | flex-end | stretch;
```


### Order

```css
order: 1; /* lower = earlier */
```


***

## Common Patterns

### Centering (both axes)

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```


### Equal Columns

```css
.item {
  flex: 1;
}
```


### Responsive Row Wrap

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```


***

## Example

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box {
  flex: 1;
  margin: 10px;
}
```


***

## When to Use Flexbox

- One-dimensional layouts (row *or* column)
- Centering content
- Navigation bars, toolbars, cards

For two-dimensional layouts (rows *and* columns), consider **CSS Grid**.

***

## Mental Model

Think of Flexbox as:
> “Distribute space along a line, then align items across it.”

***

If you want, I can make a visual cheat sheet or compare Flexbox vs Grid side-by-side.

