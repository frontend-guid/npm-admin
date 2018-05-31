// import bodyParser from 'koa-bodyparser';

// export default app => {
// 	// 解析request.body
// 	// 诸如form,json等格式
// 	app.use(bodyParser({
// 		jsonLimit: '5mb'
// 	}));
// }

const bodyParser = require('koa-bodyparser');

module.exports = app => {
	// 解析request.body
	app.use(bodyParser({
		jsonLimit: '5mb'
	}));
}