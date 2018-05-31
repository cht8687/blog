// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/cht/Documents/cht/blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/cht/Documents/cht/blog/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/cht/Documents/cht/blog/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/home/cht/Documents/cht/blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/cht/Documents/cht/blog/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/cht/Documents/cht/blog/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/home/cht/Documents/cht/blog/.cache/json/offline-plugin-app-shell-fallback.json"),
  "hello-world.json": require("/home/cht/Documents/cht/blog/.cache/json/hello-world.json"),
  "404.json": require("/home/cht/Documents/cht/blog/.cache/json/404.json"),
  "index.json": require("/home/cht/Documents/cht/blog/.cache/json/index.json"),
  "404-html.json": require("/home/cht/Documents/cht/blog/.cache/json/404-html.json")
}