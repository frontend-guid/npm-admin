import Koa from 'koa2';
import debug from 'debug'; 
// debugger的namespace是dev 命令行里DEBUG=dev或者*的时候才会输出
const devLog = debug('dev');
import logger from './util/logUtil.js';
import R from 'ramda';
import path from 'path';

import Router from 'koa-router';

let MIDDLEWARE = ['bodyparser', 'cors', 'helmet', 'onerror', 'router'];

class Server {
	constructor () {
		this.app = new Koa();
		this.app.logger = logger;

		this.UseMiddleWare(this.app)(MIDDLEWARE);
	}

	UseMiddleWare (app) {
		return R.map(R.compose(
			m => m(app),
			require,
			m => path.resolve(__dirname, './middleware', `${m}`)
			));
	}

	async Start () {
		this.app.logger.debug({
			msg: 'botting server...'
		});
		this.app.listen(3000);
	}
}

const server = new Server();
server.Start();

devLog('%o booting', 'wechat service');

devLog('server is running at 3000');
