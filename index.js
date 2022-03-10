/**
 * Strip font face plugin
 * @type {import('postcss').PluginCreator}
 */
 module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-strip-font-face',
    AtRule (atRule) {
      if (atRule.name === 'font-face') {
        atRule.remove();
      }
    }
  }
}

module.exports.postcss = true
