# postcss-strip-font-face

PostCSS plugin to completely strip `@font-face` rules from css. In other words: [koh the `@font-face` stealer][koh].

``` scss
/* Any other scss content */
@font-face {
  font-family: 'Any Font';
  font-style: normal;
  font-weight: 400;
  src: local('Any Font'), local('AnyFont'), url(https://any.cdn-provider.guru/any-font.woff2) format('woff2');
}
```

becomes

``` scss
/* Any other scss content */
```

## Usage

Simple usage can be inferred from the tests:

``` js
var postcss = require('postcss');
var stripFontFace = require('postcss-strip-font-face');

var processor = postcss([stripFontFace]);
var output = processor.process('/* Any scss content */');
console.log(output.css);
```

##### LICENSE: MIT
##### AUTHOR: [Charlie Robbins](https://github.com/indexzero)

[koh]: https://giphy.com/gifs/channelfrederator-avatar-the-last-airbender-channel-frederator-JkxzS75RQmkgw/
