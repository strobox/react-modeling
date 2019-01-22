import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// https://github.com/rollup/rollup/wiki/pkg.module
export default {
  input: 'src/main.js',
  external: ['react','lodash','dagre','mermaid'],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
        extensions: [ '.js', '.jsx'],
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'mermaid': [ 'mermaidAPI' ]
      }
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};