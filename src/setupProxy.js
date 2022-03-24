const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		'/login',
		createProxyMiddleware({
			target: 'https://github.com',
			changeOrigin: true,
		})
	);
	app.use(
		'/user',
		createProxyMiddleware({
			target: 'https://api.github.com',
			changeOrigin: true,
		})
	);
	app.use(
		'/repos',
		createProxyMiddleware({
			target: 'https://api.github.com',
			changeOrigin: true,
		})
	);
	app.use(
		'/rate_limit',
		createProxyMiddleware({
			target: 'https://api.github.com',
			changeOrigin: true,
		})
	);
};
