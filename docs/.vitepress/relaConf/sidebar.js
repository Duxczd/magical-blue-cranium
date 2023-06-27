export const sidebar = {
  '/column/choicenessMenu/': [
    {
      text: '前端三件套',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'HTML篇',
          link: '/column/choicenessMenu/Html',
        },
        {
          text: 'CSS篇',
          link: '/column/choicenessMenu/CSS',
        },
        {
          text: 'JavaScript篇',
          link: '/column/choicenessMenu/JavaScript',
        }
      ]
    },
    {
      text: '计算机基础知识',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '计算机网络',
          link: '/column/choicenessMenu/Network',
        },
        {
          text: '浏览器原理',
          link: '/column/choicenessMenu/Browser',
        },
        {
          text: '计算机操作系统',
          link: '/column/choicenessMenu/OperatingSystem',
        }
      ]
    },
    {
      text: '框架和项目',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'vue.js篇',
          link: '/column/choicenessMenu/Vue',
        },
        {
          text: '性能优化篇',
          link: '/column/choicenessMenu/Performance',
        },
        {
          text: '开发环境篇',
          link: '/column/choicenessMenu/Development',
        }
      ]
    }
  ],
  '/column/developmentMenu/': [
    {
      text: '目录',
      items: [
        {
          text: '1.Web技术',
          link: '/column/developmentMenu/Web/',
        },
        {
          text: '2.Npm笔记',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '3.Markdown',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '4.Git笔记',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '5.Nginx文档',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '6.Linux文档',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '7.Linux文档',
          link: '/column/developmentMenu/Web',
        },
        {
          text: '8.其他文档',
          link: '/column/developmentMenu/Web',
        },
      ]
    }
  ],
  '/column/developmentMenu/Web/': [
    {
      text: 'Web技术',
      items: [
        {
          text: 'JavaScript',
          link: '/column/developmentMenu/Web/JavaScript',
        },
        {
          text: 'HTML',
          link: '/column/developmentMenu/Web',
        },
        {
          text: 'CSS',
          link: '/column/developmentMenu/Web',
        },
        {
          text: 'Vue',
          link: '/column/developmentMenu/Web',
        }
      ]
    }
  ],
  '/column/developmentMenu/Web/JavaScript/': [
    {
      text: 'JavaScript笔记',
      items: [
        {
          text: 'js 实现 iframe通信',
          link: '/column/developmentMenu/Web/JavaScript/004',
        }
      ]
    }
  ],
  '/column/articleMenu/': [
    {
      text: '工具',
      items: [
        {
          text: 'VsCode',
          link: '/column/articleMenu/vscode',
        }
      ]
    },
    {
      text: '日常',
      items: [
        {
          text: '001-vitepress 从0到1 搭建技术博客',
          link: '/column/articleMenu/vitepress',
        },
        {
          text: '002-Element-Upload 附件上传',
          link: '/column/articleMenu/element-upload',
        }
      ]
    }
  ]
};