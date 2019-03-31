module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.readhub.cn/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
};
