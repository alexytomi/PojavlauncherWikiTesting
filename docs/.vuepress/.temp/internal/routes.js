export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/MODS-UNSUPPORTED.html", { loader: () => import(/* webpackChunkName: "MODS-UNSUPPORTED.html" */"/data/data/com.termux/files/home/projects/wikirefactor/docs/.vuepress/.temp/pages/MODS-UNSUPPORTED.html.js"), meta: {"title":"Unsupported Mods and Clients (+ Workarounds/Fixes)"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/data/com.termux/files/home/projects/wikirefactor/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"test"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/data/com.termux/files/home/projects/wikirefactor/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
