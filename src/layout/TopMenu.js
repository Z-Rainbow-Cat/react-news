/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-26 15:38:18
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 14:10:33
 * @FilePath: \my-news\src\layout\TopMenu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import PropTypes from "prop-types"
const { Header } = Layout;

import UserInfo from "./UserInfo"
export default function TopMenu(props) {
	let { collapsed, toggleSlide, topMenus, menuClick } = props;

	return (
		<Header style={{ display: 'flex', alignItems: 'center' }}>
			{!collapsed ? <MenuFoldOutlined onClick={() => toggleSlide()} style={{ color: '#fff' }} /> : <MenuUnfoldOutlined onClick={toggleSlide} style={{ color: '#fff' }} />}

			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={topMenus}
				style={{ flex: 1, minWidth: 0 }}
				onClick={menuClick}
			/>
			<UserInfo />
		</Header>
	)
}

TopMenu.propTyps = {
	collapsed: PropTypes.bool,
	toggleSlide: PropTypes.func,
}
