# Responsive 3x2 Image Gallery: Three Versions

Here are three versions of a responsive 3x2 image gallery using CSS Grid, each with a different level of code quality. Each version includes captions for the images and incorporates CSS variables as requested.

---

## Version 1: Poorly Written

This version has common mistakes and poor practices:
- Hard-coded grid layout
- Inconsistent styling
- No responsive design

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Poor 3x2 Image Gallery</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    .gallery {
      display: grid;
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: 200px 200px;
      gap: 10px;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .gallery-item .caption {
      font-size: 12px;
      text-align: center;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h2>Poor 3x2 Image Gallery</h2>
  <div class="gallery">
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <div class="caption">Burning candle</div>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <div class="caption">Computer chip</div>
    </div>
    <div class="gallery-item">
      <img src="fire.png" alt="Crackling fire">
      <div class="caption">Crackling fire</div>
    </div>
    <div class="gallery-item">
      <img src="paint.png" alt="Weathered barn wood">
      <div class="caption">Weathered barn wood</div>
    </div>
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <div class="caption">Burning candle</div>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <div class="caption">Computer chip</div>
    </div>
  </div>
</body>
</html>
```

---

## Version 2: Intermediate

This version is functional but has room for improvement:
- Uses `repeat()` for columns and rows
- Basic responsive design
- Decent styling
- Incorporates a single CSS variable

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intermediate 3x2 Image Gallery</title>
  <style>
    :root {
      --gallery-gap: 15px;
    }

    body {
      font-family: 'Barlow Semi Condensed', sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 200px);
      gap: var(--gallery-gap);
      max-width: 1000px;
      margin: 0 auto;
    }

    .gallery-item {
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gallery-item figcaption {
      padding: 10px;
      font-size: 14px;
      color: #555;
      text-align: center;
    }

    @media (max-width: 768px) {
      .gallery {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 150px);
      }
    }
  </style>
</head>
<body>
  <h2>Intermediate 3x2 Image Gallery</h2>
  <div class="gallery">
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <figcaption>Burning candle</figcaption>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <figcaption>Computer chip</figcaption>
    </div>
    <div class="gallery-item">
      <img src="fire.png" alt="Crackling fire">
      <figcaption>Crackling fire</figcaption>
    </div>
    <div class="gallery-item">
      <img src="paint.png" alt="Weathered barn wood">
      <figcaption>Weathered barn wood</figcaption>
    </div>
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <figcaption>Burning candle</figcaption>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <figcaption>Computer chip</figcaption>
    </div>
  </div>
</body>
</html>
```

---

## Version 3: Best

This version is well-structured and optimized:
- Uses `repeat(auto-fit, minmax())` for responsive columns
- Clean, maintainable code
- Hover effects and transitions
- Incorporates multiple CSS variables

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best 3x2 Image Gallery</title>
  <style>
    :root {
      --gallery-gap: 20px;
      --gallery-max-width: 1000px;
      --gallery-item-radius: 8px;
      --gallery-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      --gallery-item-bg: #fff;
      --caption-font-size: 14px;
      --caption-color: #555;
      --hover-transform: translateY(-5px);
    }

    body {
      font-family: 'Barlow Semi Condensed', sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-auto-rows: 200px;
      gap: var(--gallery-gap);
      max-width: var(--gallery-max-width);
      margin: 0 auto;
      padding: 20px;
    }

    .gallery-item {
      background: var(--gallery-item-bg);
      border-radius: var(--gallery-item-radius);
      overflow: hidden;
      box-shadow: var(--gallery-shadow);
      transition: transform 0.3s ease;
    }

    .gallery-item:hover {
      transform: var(--hover-transform);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gallery-item figcaption {
      padding: 10px;
      font-size: var(--caption-font-size);
      color: var(--caption-color);
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>Best 3x2 Image Gallery</h2>
  <div class="gallery">
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <figcaption>Burning candle</figcaption>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <figcaption>Computer chip</figcaption>
    </div>
    <div class="gallery-item">
      <img src="fire.png" alt="Crackling fire">
      <figcaption>Crackling fire</figcaption>
    </div>
    <div class="gallery-item">
      <img src="paint.png" alt="Weathered barn wood">
      <figcaption>Weathered barn wood</figcaption>
    </div>
    <div class="gallery-item">
      <img src="candle.png" alt="Burning candle">
      <figcaption>Burning candle</figcaption>
    </div>
    <div class="gallery-item">
      <img src="chip.png" alt="Computer chip">
      <figcaption>Computer chip</figcaption>
    </div>
  </div>
</body>
</html>
```

---

## Discussion Points for Students

### Version 1:
- Hard-coded grid layout
- No responsive design
- Basic styling

### Version 2:
- Uses `repeat()` for columns and rows
- Basic responsive design with media queries
- Decent styling
- Incorporates a single CSS variable for the gap

### Version 3:
- Uses `repeat(auto-fit, minmax())` for responsive columns
- Hover effects and transitions
- Clean, maintainable, and responsive design
- Incorporates multiple CSS variables for easy customization and maintainability

This exercise will help your students understand the importance of writing clean, maintainable, and responsive CSS Grid code, as well as the benefits of using CSS variables.
```
