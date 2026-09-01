import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: Number(process.env.PORT) || 5173 },
  /* Las fotos de ejemplo (datos/simulados.js, NuevaCampana.jsx) pueden pesar
     varios MB. Sin esto, Vite las deja como archivos aparte en dist/assets
     y el HTML de una sola pieza que publicamos como Artifact no puede
     cargarlas — quedan rotas. Subimos el límite para que se incrusten
     como base64 directo en el bundle. */
  build: { assetsInlineLimit: 3_000_000 },
})
