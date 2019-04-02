module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080/login/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
};
