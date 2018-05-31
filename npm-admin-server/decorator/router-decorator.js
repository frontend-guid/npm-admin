import path from 'path';
import Router from 'koa-router';
import glob from 'glob';
import R from 'ramda';

const pathPrefix = Symbol('pathPrefix')

let routeMap = new Map();

const _normalizePath = path => path.startsWith('/') ? path : `${path}`;

const _setRouter = config => (target, name, descriptor) => {
	const {path, method} = config;
	routeMap.set({
		target,
		...config
	}, target[name]);
};

export const controller = prefix => target=> {
	prefix = _normalizePath(prefix);
	target.prototype[pathPrefix] = prefix;
};

export const get = path => _setRouter({
	method: 'get',
	path: _normalizePath(path)
});


export class Route {
	constructor (app, routeFolderPath) {
		this.app = app;
		this.router = new Router();
		this.folder = routeFolderPath;
	}

	init ()  {
		glob.sync(path.resolve(this.folder, './**/*.js')).forEach(require);

		for (let [config, controller] of routeMap) {
			const prefixPath = config.target[pathPrefix];
			const routerPath = prefixPath + config.path;
			this.router[config.method](routerPath, controller);
		}

		this.app
		.use(this.router.routes())
		.use(this.router.allowedMethods());
	}
};