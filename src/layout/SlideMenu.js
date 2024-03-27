/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-26 15:38:11
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 16:56:02
 * @FilePath: \my-news\src\layout\SlideMenu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';
import Content from "./Content.js"
import PropTyps from "prop-types"

const { Sider } = Layout;
export default function SlideMenu(props) {
	let { collapsed } = props;
	return (
		<Layout>
			<Sider trigger={111} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <UserOutlined />,
							label: 'nav 1',
						},
						{
							key: '2',
							icon: <VideoCameraOutlined />,
							label: 'nav 2',
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'nav 3',
						},
					]}
				/>
			</Sider>
			<Content></Content>
		</Layout>
	)
}

SlideMenu.propTyps = {
	collapsed: PropTyps.bool
}
