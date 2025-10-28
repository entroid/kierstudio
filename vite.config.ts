import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      
      
      
      
      
      
      'figma:asset/fd8e4aea1613bb68435bfd10ef21b7adfbc54b83.png': path.resolve(__dirname, './src/assets/fd8e4aea1613bb68435bfd10ef21b7adfbc54b83.png'),
      'figma:asset/98cfbb2013f2bf7911257717ff94ae1179f8f1d7.png': path.resolve(__dirname, './src/assets/98cfbb2013f2bf7911257717ff94ae1179f8f1d7.png'),
      'figma:asset/3d0210e64046d15fed1723f11331d4a5d185f38c.png': path.resolve(__dirname, './src/assets/3d0210e64046d15fed1723f11331d4a5d185f38c.png'),
      'figma:asset/0aaa59e8bbaeb79404c18bafec335b06b695ed4a.png': path.resolve(__dirname, './src/assets/0aaa59e8bbaeb79404c18bafec335b06b695ed4a.png'),
      'figma:asset/063b1f3c69f625a366a6263d29ef2ce336bd0bbd.png': path.resolve(__dirname, './src/assets/063b1f3c69f625a366a6263d29ef2ce336bd0bbd.png'),
      
      
      
      
      
      
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    globals: true,
  },
});