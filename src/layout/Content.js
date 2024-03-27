import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Routes, Route, Navigate } from "react-router-dom"

import User from "../page/user/User.js"
import Role from "../page/role/Role.js"
import NotFound from '../page/not-found/NotFound.js'

const { Content } = Layout;

export default function ContentSelf() {
	return (
		<Layout style={{ padding: '0 12px 12px' }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
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
