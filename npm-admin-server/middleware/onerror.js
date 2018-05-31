// // error handler 替代try...catch...
// import onerror from 'koa-onerror';
// //错误日志
// import debug from 'debug';
// const errlog = debug('err');

// export default app => {
// 	onerror(app, {
// 		all (error) {
// 			errLog(error);
// 			app.logger.error({
// 				error: error
// 			});
// 		}
// 	});
// }
const onerror = require('koa-onerror'); // error handler 替代try...catch...
const errLog = require('debug')('err'); //错误日志

module.exports = app => {
	onerror(app, {
		all (error) {
			errLog(error);
			app.logger.error({
				error: error
			});
		}
	});
}