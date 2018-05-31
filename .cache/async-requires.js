// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/cht/Documents/cht/blog/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/cht/Documents/cht/blog/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/cht/Documents/cht/blog/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/cht/Documents/cht/blog/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/cht/Documents/cht/blog/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/home/cht/Documents/cht/blog/.cache/json/hello-world.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/cht/Documents/cht/blog/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/cht/Documents/cht/blog/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/cht/Documents/cht/blog/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/cht/Documents/cht/blog/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/cht/Documents/cht/blog/.cache/layouts/index.js")
}