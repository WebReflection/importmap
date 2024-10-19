# Deprecated: use [data-imports](https://github.com/WebReflection/data-imports)

<sup>**Social Media Photo by [Chris Lawton](https://unsplash.com/@chrislawton) on [Unsplash](https://unsplash.com/)**</sup>

An easy way to use modules without needing tools, published on `npm` to make it even simpler without needing *copy & paste*.

### Example
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <script
    imports="uhtml,html-escaper"
    src="https://esm.run/@webreflection/importmap"
  ></script>
  <!-- that's it -->
  <script type="module">
    import { render, html } from 'uhtml';
    render(document.body, html`It worked 🥳`);

    import { escape, unescape } from 'html-escaper';
    console.log(escape('<escaped>'));
  </script>
</head>
</html>
```

The `import` attribute accepts comma separated entries that represent the module name.

By default the generated `importmap` will use the lovely [esm.run](https://esm.run/) service.

If you need to strictly tackle some file without automatic optimizations, you can use the `https://esm.run/@webreflection/importmap/jsdelivr` variant, which accepts a specialized syntax:

```html
<script
  imports="@pyscript/core!/dist/core.js"
  src="https://esm.run/@webreflection/importmap/jsdelivr"
></script>
<script type="module">
  // will point at
  // https://cdn.jsdelivr.net/npm/@pyscript/core/dist/core.js
  import '@pyscript/core';
</script>
```

And that's it, the list can still be comma-separated but it's possible, after the `!`, to explicitly point at a specific file, the rest is still lovely solved by *jsdelivr* CDN.
