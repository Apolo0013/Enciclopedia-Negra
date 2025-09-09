const { createProxyMiddleware } = require("http-proxy-middleware");

const target = 'https://backend-enclopedia-negra-cont-visit.onrender.com'

module.exports = (app) => {
    app.use(
        'addvisita',
        createProxyMiddleware({
            target: target,
            changeOrigin: true,
            secure: true,
            logLevel: 'debug'
        })
    )

    app.use(
        '/getnumerovisitante',
        createProxyMiddleware({
            target: target,
            changeOrigin: true,
            secure: true,
            logLevel: 'debug'
        })
    )
}