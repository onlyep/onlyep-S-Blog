module.exports = {
  title: 'onlyep\'S Blog',
  description: "onlyep的博客",
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'blog', link: '/blog/' },
      { text: '相册', link: '/photo/' },
    ],
    sidebar: {
    	'/blog/': [
    		'',
    		'git'
    	]
    }
  }
}
