module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'zhouyingsasa.xyz:5000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
};
