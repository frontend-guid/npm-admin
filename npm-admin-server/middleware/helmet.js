// // 安全
// import helmet from 'koa-helmet';
// export = app => {
// 	app.use(helmet());
// }
const helmet = require('koa-helmet'); // 安全

module.exports = app => {
	app.use(helmet());
}