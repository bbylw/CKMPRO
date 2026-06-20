import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// https://vite.dev/config/
// base 路径通过环境变量 VITE_BASE_URL 控制：
// - GitHub Pages 默认地址：在 GitHub Actions 中设置 VITE_BASE_URL=/CKMPRO/
// - 其他平台（Cloudflare/Vercel/Netlify）或自定义域名：无需设置，默认 '/'
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }), 
    tsconfigPaths()
  ],
})
