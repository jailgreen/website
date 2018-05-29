/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
// Rollup plugins
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import eslint from 'rollup-plugin-eslint';
import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
    // CommonJS (for Node) build for lint-vars.
    {
        input: "assets/js/main.js",
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        plugins: [
            eslint({
                exclude: [ 'assets/scss' ]
            })
        ],
        external: [
            'path',
            'process',
            'fs',
            'glob'
        ]
    },
    // iife for browsers
    {
        input: "assets/js/index.js",
        output: {
            file: pkg.browser,
            format: 'iife',
            sourcemap: true
        },
        plugins: [
            eslint({
                exclude: [ 'assets/scss' ]
            }),
            sass({
                // insert: true,
                output: true,
                options: { includePaths: ['node_modules/'] },
                processor: css => postcss([autoprefixer])
                    .process(css, { from: 'assets/scss/base.scss' })
                    .then(result => result.css)
            })
        ]
    }
];
