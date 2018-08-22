module.exports = {
  base: '/guluer/',
  title: '车轱辘儿~',
  description: 'Vue UI',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      {
        title: '入门',
        children: ['install/', 'get-started/']
      },
      {
        title: '组件',
        children: [
          'components/button.md',
          'components/text.md',
          'components/grid.md',
          'components/layout.md',
          'components/toast.md',
          'components/tab.md',
          'components/popover.md',
          'components/collapse.md',
        ]
      }
    ]
  }
}