## Boilerplate for a chrome extension in React

This is minimal code to generate a chrome extension using webpack and babel.

By default, it inserts a little "Hello" into the bottom of every page.

It also generates a [browser action popup](https://developer.chrome.com/extensions/browserAction) with just the content "Hello world" (and injects popup.js).

## Usage

To start webpack in watch mode:
```
yarn run dev
```

You can load the generated `dist/` file as an unpacked extension at [chrome://extensions](chrome://extensions), then quickly reload it whenever you make changes.

Credit to [https://ayastreb.me/chrome-extension-with-react/](https://ayastreb.me/chrome-extension-with-react/) for the basis of the webpack config.
