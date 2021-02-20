const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
module.exports = function(app) {
    app.use('/devApi', createProxyMiddleware({ target: 'http://www.web-jshtml.cn/api/react', changeOrigin: true }));
    app.listen(3000);
    // app.use(proxy("/manage/api", {
    //     target: "http://admintest.happymmall.com:7000" ,
    //     changeOrigin: true,
    // }))
};
