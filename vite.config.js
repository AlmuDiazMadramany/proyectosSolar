import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'proyectosSolar'; // 👈 pon el nombre de tu repo aquí

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
