const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-error-jsx": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/pages/error.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/pages/index.js"))),
  "component---src-pages-myfeeds-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/pages/myfeeds.js"))),
  "component---src-pages-page-base-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/pages/PageBase.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/pages/search.js"))),
  "component---src-templates-template-js": hot(preferDefault(require("/Users/huynguyen/Desktop/telescope/src/frontend/src/templates/template.js")))
}

