import { defineConfig } from 'vitepress';
import { nav, sidebar } from './relaConf';

export default defineConfig({
  title: '神奇的蓝脑壳',
  lastUpdated: true,
  base: '/magical-blue-cranium',
  // 移动端搜索框优化
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', type: 'image/png', href: 'duolaAmeng.png' }]
  ],
  themeConfig: {
    logo: '/duolaAmeng.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Duxczd' }],
    // 导航栏
    nav,
    // 各菜单页面侧边栏
    sidebar,
    // 支持一级标题的时候再说
    outline: {
      level: [1, 6],
      label: '目录'
    },
    // 首页页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 蓝脑壳'
    }
  }
});
