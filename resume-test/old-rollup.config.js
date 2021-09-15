import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";

import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import replace from "@rollup/plugin-replace";
import serve from 'rollup-plugin-serve'
import copy from 'rollup-plugin-copy'

import pkg from "./package.json";

import alias from "@rollup/plugin-alias";

import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';

const common = {
  input: "src/StyledResume.jsx",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "foobar",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({
      output: 'resume-styles.css',
    }),
    alias({
      entries: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom", replacement: "preact/compat" },
      ],
    }),
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      exclude: "./node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
}

const prodConfig = {
  ...common

}

const devConfig = {
   input: "src/StyledResume.jsx",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "foobar",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({
      output: 'styles.css',
    }),
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      exclude: "./node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs({
      include: "node_modules/**",
    }),
    alias({
      entries: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom", replacement: "preact/compat" },
      ],
    }),
    copy({
      targets: [
        { src: 'template/index.html', dest: 'dist/' },
      ]
    }),
    serve('dist'),
   
  ],
}

export default devConfig;
