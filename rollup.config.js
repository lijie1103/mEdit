import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/index.jsx',
    output: {
        format: 'iife',
        file: 'dist/js/index.min.js',
    },
    name: 'preactWidget',
    sourceMap: false,
    treeshake: true,
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel({
            exclude: [
                'node_modules/!(' +
                'google-map-react|preact|preact-compat|react-redux' +
                ')/**',
            ]
        }),
        nodeResolve({
            jsnext: true,
            // module: false,
            // browser: true,
            main: true,
            extensions: ['.js', '.jsx'],
            // preferBuiltins: true,
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/preact/dist/preact.js': ['h', 'render', 'Component', 'cloneElement', 'options'],
            },
        }),
        // uglify({
        //     compress: {
        //         // screw_ie8: true,
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     },
        //     sourceMap: false,
        // }),
    ],
};