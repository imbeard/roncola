import { defineConfig } from 'vite';
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  build: {
    outDir: 'app/build',
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.impiantialivelli.it/wp-json",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },  
  plugins: [
    Unocss({
      presets: [
        presetTypography(),
        presetUno(),
      ],
      transformers: [
        transformerDirective(),
      ],  
      theme: {
        colors: {
          'roncolablue': '#1F2431',
        }
      }
    }),
  ],
});
