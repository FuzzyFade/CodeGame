module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://zhouyingsasa.xyz:5000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
