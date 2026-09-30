import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yaran.studio',
  integrations: [
    icon(),
    // 只讓主要頁面進 sitemap；款式詳細頁與付款轉址頁在 Layout 設了 noindex
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !/^\/plans\/.+/.test(pathname) && !['/payment/', '/prepaid/'].includes(pathname);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // photoswipe 只在燈箱開啟時才 dynamic import，dev server 啟動掃不到，
    // 會在第一次點開時才重新 optimize 並讓已載入的頁面拿到過期的 deps hash（504）。
    optimizeDeps: {
      include: ['photoswipe'],
    },
  },
});
