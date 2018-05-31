const { Route } = require('../decorator/router-decorator')
const { resolve } = require('path')

// export const router = app => {
//   const apiPath = resolve(__dirname, '../controller')
//   const router = new Route(app, apiPath)

//   router.init()
// }

module.exports = app => {
  const apiPath = resolve(__dirname, '../controller')
  const router = new Route(app, apiPath)

  router.init()
}