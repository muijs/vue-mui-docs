module.exports = {
  base: '/vue-mui-docs/',
  dest: 'dist',
  port: 7000,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue MUI',
      description: 'Moblie UI elements for Vue 2.x'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue MUI',
      description: 'Moblie UI elements for Vue 2.x'
    }
  },
  head: [
    ['style', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    repo: 'muijs/vue-mui-docs',
    editLinks: true,
    docsDir: 'src',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Components',
            link: '/components/'
          }
        ],
        sidebar: {
          '/guide/': genGuideSidebarConfig('Guide'),
          '/components/': genComponentSidebarConfig('Components')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: '组件',
            link: '/zh/components/'
          }
        ],
        sidebar: {
          '/zh/guide/': genGuideSidebarConfig('指南'),
          '/zh/components/': genComponentSidebarConfig('组件')
        }
      }
    }
  }
}

function genGuideSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    }
  ]
}

function genComponentSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false
    },
    {
      title: 'Basic',
      collapsable: false,
      children: [
        'icon', 
        'button'
      ]
    },
    {
      title: 'Navigation',
      collapsable: false,
      children: [
        'header',
        'tabs',
        'tabbar'
      ]
    },
    {
      title: 'View',
      collapsable: false,
      children: [
        'list',
        'modal',
        'messagebox',
        'toast',
        'indicator',
        'action-sheet',
        'infinite-scroll',
        'loadmore',
        'spinner',
        'badge'
      ]
    },
    {
      title: 'Form',
      collapsable: false,
      children: [
        'input',
        'switch',
        'picker'
      ]
    }
  ]
}
