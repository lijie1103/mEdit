var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
// var uglify = require('rollup-plugin-uglify');

export default {
    entry: 'src/index.js',
    dest: 'dist/js/index.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}