import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    //below lines in the resolve function added because of
    // https://github.com/rollup/rollup-plugin-node-resolve/issues/107
    resolve({
      "preferBuiltins": true,
    }),
    typescript(),
    //added the content js because of
    // https://github.com/styled-components/styled-components/issues/1654
    commonjs({
        include: 'node_modules/**',
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        namedExports: {     
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef'
          ]
        }
      })
  ]
}
