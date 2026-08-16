# Overlay

A lightweight overlay component for Vanilla JavaScript and TypeScript.

## Installation

```bash
npm install @yanny63/overlay
```

## Usage

Import the library once to register the custom elements, then import the default styles:

```ts
import "@yanny63/overlay"
import "@yanny63/overlay/styles.css"
```

Use the components in HTML:

```html
<overlay-root id="login-modal">
  <overlay-overlay>
    <overlay-title>Log in</overlay-title>

    <overlay-content>
      Your content goes here.
    </overlay-content>

    <overlay-close>
      ×
    </overlay-close>
  </overlay-overlay>
</overlay-root>

<overlay-trigger for="login-modal">
  Open overlay
</overlay-trigger>
```

## Components

### `<overlay-root>`

The root element of an overlay.

| Attribute | Description |
| --- | --- |
| `id` | A unique identifier used by `<overlay-trigger for="...">`. |

### `<overlay-trigger>`

Opens an overlay root after a click.

| Attribute | Description |
| --- | --- |
| `for` | The `id` of the target `<overlay-root>`. |

```html
<overlay-trigger for="login-modal">
  Open
</overlay-trigger>
```

### `<overlay-close>`

Closes its parent overlay after a click.

```html
<overlay-close>
  ×
</overlay-close>
```

## Events

### `overlay-close`

`<overlay-close>` emits this event after a click.

```ts
document.addEventListener("overlay-close", (event) => {
  console.log(event)
})
```

## Styling

The package provides default styles:

```ts
import "@yanny63/overlay/styles.css";
```

You can override them in your own CSS:

```css
.overlay-overlay {
  background: rgb(0 0 0 / 60%);
}

.overlay-title {
  color: gold;
}
```

## Development

```bash
npm install
npm run build
```

Check the files that will be published:

```bash
npm pack --dry-run
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.