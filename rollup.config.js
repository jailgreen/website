/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
// Rollup plugins
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import cssnano from 'cssnano';
import eslint from 'rollup-plugin-eslint';
import postcss from 'postcss';
// import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const external = ['jquery'];
const plugins = [
  eslint({
    exclude: [ 'assets/scss/**' ]
  }),
  babel({
    exclude: [ 'node_modules/**', 'assets/scss/**']
  }),
  sass({
    output: true,
    options: { includePaths: ['node_modules/'] },
    processor: css => postcss(postcssPlugins)
        .process(css, { from: 'assets/scss/base.scss' })
        .then(result => result.css)
  })
];

const globals = {
  jquery: 'jQuery'  
};

const postcssPlugins = [autoprefixer()];

if (production) {
  plugins.push(uglify());
  postcssPlugins.push(cssnano());
}

export default [{
  // CommonJS (for Node) build for lint-vars.
  input: "assets/js/main.js",
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    eslint({
      exclude: [ 'assets/scss/**' ]
    })
  ],
  external: [
    'path',
    'process',
    'fs',
    'glob'
  ]
}, {
  // iife for browsers
  input: "assets/js/index.js",
  output: {
    file: pkg.browser,
    format: 'iife',
    globals,
    sourcemap: true
  },
  external,
  plugins,
  watch: {
    include: 'assets/**'
  }
}];
