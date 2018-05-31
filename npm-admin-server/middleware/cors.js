// // 跨域
// import cors from 'koa2-cors';

// export default app => {
// 	app.use(cors());
// }
const cors = require('koa-cors'); // 跨域

module.exports = app => {
	app.use(cors());
}