/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-26 15:38:11
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 14:38:43
 * @FilePath: \my-news\src\layout\SlideMenu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Layout, Menu } from 'antd';
import Content from "./Content.js"
import PropTyps from "prop-types"

const { Sider } = Layout;
export default function SlideMenu(props) {
	let { collapsed, subMenus, subMenuClick, subContent, subKey } = props;
	return (
		<Layout>
			<Sider trigger={111} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[subKey]}
					defaultOpenKeys={['base']}
					items={[
						...subMenus,
					]}
					onClick={subMenuClick}
				/>
			</Sider>
			<Content subContent={subContent}></Content>
		</Layout>
	)
}

SlideMenu.propTyps = {
	collapsed: PropTyps.bool
}
