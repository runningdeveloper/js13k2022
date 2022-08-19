import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        target: "es2022",
        minify: "terser",
        terserOptions: {
            compress: {
                arguments: true,
                passes: 4,
                unsafe_arrows: true,
                drop_console: true,
                drop_debugger: true,
                booleans_as_integers: true,
            },
            format: {
                comments: false
            }
        }
    //   rollupOptions: {
    //     // https://rollupjs.org/guide/en/#big-list-of-options
    //   }
    }
  })