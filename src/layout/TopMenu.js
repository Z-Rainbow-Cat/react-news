import React from 'react'
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import PropTypes from "prop-types"
const { Header } = Layout;
export default function TopMenu(props) {
	let { collapsed, toggleSlide } = props
	const items1 = ['1', '2', '3'].map((key) => ({
		key,
		label: `nav ${key}`,
	}));

	return (
		<Header style={{ display: 'flex', alignItems: 'center' }}>
			{collapsed ? <MenuFoldOutlined onClick={() => toggleSlide()} /> : <MenuUnfoldOutlined onClick={toggleSlide} />}

			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={items1}
				style={{ flex: 1, minWidth: 0 }}
			/>
		</Header>
	)
}

TopMenu.propTyps = {
	collapsed: PropTypes.bool,
	toggleSlide: PropTypes.func,
}
