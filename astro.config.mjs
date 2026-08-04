import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yaran.studio',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // photoswipe 只在燈箱開啟時才 dynamic import，dev server 啟動掃不到，
    // 會在第一次點開時才重新 optimize 並讓已載入的頁面拿到過期的 deps hash（504）。
    optimizeDeps: {
      include: ['photoswipe'],
    },
  },
});
