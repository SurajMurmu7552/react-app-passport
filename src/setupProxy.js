const  createProxyMiddleware  =require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        '/api/logout',
        createProxyMiddleware({
            target:'http://localhost:4000',
            // changeOrigin : true
        })
    
    )
    app.use(
        '/api/user',
        createProxyMiddleware({
            target:'http://localhost:4000',
            // changeOrigin : true
        })
    
    )

    app.use(
        '/facebook',
        createProxyMiddleware({
            target:'http://localhost:4000',
            // changeOrigin : true
        })
    
    )


};