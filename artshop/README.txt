ART SHOP PAGE SETUP

Files included:
- artshop.html
- artshop.css
- artshop.js

How to connect it to your original site:

1. Put these files in the same folder as index.html, styles.css, and script.js.

2. In your index.html, change the Art Shop link/button to this:

<a href="artshop.html" class="tagline-link">Art Shop</a>

Instead of:

<button class="tagline-link" onclick="showPage('artshop')">Art Shop</button>

3. Keep this inside artshop.html:

<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="artshop.css">

That means artshop.css loads after your main styles.css, so it acts like the child/page-specific CSS.

4. Image paths used:
media/ornament.png
media/art-1.jpg
media/art-2.jpg
media/art-3.jpg
media/art-4.jpg
media/art-5.jpg
media/art-6.jpg

Put your images in a folder called media, or change the src paths in artshop.html.
