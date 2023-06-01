const config = {
  title: '神奇的蓝脑壳',
  lastUpdated: true,
  base: '/magical-blue-cranium',
  head: [["link", { rel: "icon", type: "image/png", href: "duolaAmeng.png" }]],
  themeConfig: {
    logo: '/duolaAmeng.png',
    nav: [
      { text: '首页', link: '/'},
      { text: '基础', link: '/basicMenu/javascript'},
      { 
        text: '框架', 
        items: [
          { text: 'vue', link: '/vueMenu/next-tick'}
        ]
      },
      { text: '文章', link: '/articleMenu/vuepress'},
      { text: '关于我', link: '/'}
    ],
    sidebar: {
      '/basicMenu/': [
        {
          isGroup: true,
          text: "大前端",
          items: [
            {
              text: "javascript",
              link: "/basicMenu/javascript",
            }
          ]
        }
      ],
      '/vueMenu/': [
        {
          isGroup: true,
          text: "Vue",
          items: [
            {
              text: "1.nextTick",
              link: "/vueMenu/next-tick",
            }
          ]
        }
      ],
      '/articleMenu/': [
        {
          isGroup: true,
          items: [
            {
              text: "GitHub Action + VuePress 部署",
              link: "/articleMenu/vuepress",
            }
          ]
        }
      ]
    }    
  }
}

export default config