/* eslint-disable no-undef */
/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-25 15:59:17
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 15:30:14
 * @FilePath: \my-news\src\setupProxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://i.maoyan.com',
			changeOrigin: true,
		})
		// https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%83%91%E5%B7%9E&ci=73&channelId=4
	)
}
