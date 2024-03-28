/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-27 16:11:18
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 14:59:49
 * @FilePath: \my-news\src\layout\Content.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Routes, Route, Navigate } from "react-router-dom"

import User from "../page/user/User.js"
import Role from "../page/role/Role.js"
import NotFound from '../page/not-found/NotFound.js'

const { Content } = Layout;

export default function ContentSelf(props) {
	let { subContent } = props;
	let items = subContent.split("|").map((item) => { return { title: item } })
	return (
		<Layout style={{ padding: '0 12px 12px' }}>
			<Breadcrumb style={{ margin: '16px 0' }} items={items}>

			</Breadcrumb>
			<Content
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
					background: '#f00',
					borderRadius: "10px",
				}}
			>
				<Routes>
					<Route path="/user" Component={User}></Route>
					<Route path="/role" Component={Role}></Route>
					<Route path="/" element={<Navigate to="/user"></Navigate>}></Route>
					<Route path="*" Component={NotFound}></Route>
				</Routes>
			</Content>
		</Layout>
	)
}
