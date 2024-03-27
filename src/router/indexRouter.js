/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-25 16:22:40
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 14:14:16
 * @FilePath: \my-news\src\router\indexRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../page/login/Login.js"
import Layout from "../layout/Layout.js"
export default function IndexRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" Component={Login} />
				<Route path="/*" Component={Layout} />
			</Routes>
		</BrowserRouter>
	)
}
