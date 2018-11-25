# Burger-Builder application using `nextjs`

## To support CSS

```
npm install --save @zeit/next-css
```

Create `next.config.js` on the

```
// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]__[hash:base64:5]"
  }
});
```
