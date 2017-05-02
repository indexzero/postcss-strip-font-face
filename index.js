const postcss = require('postcss');

module.exports = postcss.plugin('postcss-strip-font-face', function () {
  return function (css) {
    css.walkAtRules('font-face', rule => {
      rule.remove();
    });
  };
});
