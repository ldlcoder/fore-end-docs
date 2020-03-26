const path = require('path')

module.exports = {
  title: 'YiChe Web Docs',
	base: '/cms-system/',
  description: 'documention for yiche web developer',
  dest: path.resolve(__dirname, '../../dist'),
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      '/',
      ['/tech-stack', '技术栈'],
      ['/dev-tools', '开发工具'],
      ['/pro-structure', '项目架构'],
      ['/dev-standard', '开发规范'],
      ['/work-flow', 'WEB端工作流程'],
      ['/pro-list', '项目仓库目录']
    ]
  }
}