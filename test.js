const postcss = require('postcss');
const stripFontFace = require('./');
const assume = require('assume');

async function check(input, output) {
  const processor = await postcss([stripFontFace({})]).process(input, {from: undefined})
  const actual = processor.css;

  assume(actual).to.include(output);
  assume(actual).to.not.include('@font-face');
};

describe('postcss-strip-font-face', () => {
  it('injects variables correctly', async () => {
    const css = '.whatever { font-weight: normal; }'
    const fontFace = `
      @font-face {
        font-family: 'Any Font';
        font-style: normal;
        font-weight: 400;
        src: local('Any Font'), local('AnyFont'), url(https://any.cdn-provider.guru/any-font.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
      }
    `;

    await check(`${css}\n${fontFace}`, css);
  });
});
