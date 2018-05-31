// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/cht/Documents/cht/blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/cht/Documents/cht/blog/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/cht/Documents/cht/blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/cht/Documents/cht/blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/cht/Documents/cht/blog/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/cht/Documents/cht/blog/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/cht/Documents/cht/blog/.cache/json/hello-world.json"),
  "dev-404-page.json": require("/home/cht/Documents/cht/blog/.cache/json/dev-404-page.json"),
  "404.json": require("/home/cht/Documents/cht/blog/.cache/json/404.json"),
  "index.json": require("/home/cht/Documents/cht/blog/.cache/json/index.json"),
  "404-html.json": require("/home/cht/Documents/cht/blog/.cache/json/404-html.json")
}