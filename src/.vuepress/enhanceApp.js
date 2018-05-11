export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  router.beforeEach((to, from, next) => {
    const topath = to.path
    // 跳到外站的主页
    // vuepress 做了服务器渲染，window.location不被支持，得在组件里面处理
    // if (topath === '' || topath === '/' || topath === '/zh/') {
    //   return location.href = 'https://muijs.github.io'
    // }

    // /components/ -> /components/icon
    // 如果在 .vuepress/config.js 中配置nav link指向具体的组件页面，
    // 那么在进入其它组件页面时，导航样式是未激活的，所以放到这里处理
    if (topath === '/components/') {
      next({ path: '/components/icon.html' })
    } else if(topath === '/zh/components/') {
      next({ path: '/zh/components/icon.html' })
    }

    next()
  })
}