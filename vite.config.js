import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import VitePluginLinaria from 'vite-plugin-linaria'
import ssr from 'vite-plugin-ssr/plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginLinaria(),
    preact(),
    ssr()
]
})
