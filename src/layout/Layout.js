/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-26 15:34:51
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 15:02:15
 * @FilePath: \my-news\src\layout\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import SlideMenu from "./SlideMenu"
import TopMenu from "./TopMenu"

import Style from "./layout.module.css"
import { Layout } from 'antd';
import menus from "./menu.js"

export default function LayoutSelf() {
	const [collapsed, setCollapsed] = useState(false);

	const [menuKey, setMenuKey] = useState("system")

	const [subMenus, setSubMenus] = useState([]);

	const [subKey, setSubKey] = useState("user")

	const [subContent, setSubContent] = useState("系统管理|基础信息管理|用户管理")

	useEffect(() => {
		let subs = menus.find(item => item.key === menuKey)?.children ?? []
		setSubMenus(subs)
	}, [menuKey])

	useEffect(() => {
		let subs = getLabel(JSON.parse(JSON.stringify(menus)), subKey, "");
		setSubContent(subs)
	}, [subKey])
	/**
	 * @description: 获取主菜单
	 * @param {*} menus
	 * @return {*}
	 */
	const topMenus = menus.map(item => {
		return {
			label: item.label,
			key: item.key
		}
	})
	/**
	 * @description: 显示隐藏
	 * @return {*}
	 */
	const toggleSlide = () => {
		setCollapsed(!collapsed)
	}
	/**
	 * @description: top主菜单点击
	 * @param {*} menu
	 * @return {*}
	 */
	const menuClick = (menu) => {
		let { key } = menu;
		setMenuKey(key)
	}
	/**
	 * @description: 付菜单  侧栏点击
	 * @param {*} sub
	 * @return {*}
	 */
	const subMenuClick = (sub) => {
		let { key } = sub;
		setSubKey(key)
	}

	const getLabel = (list, key, label) => {
		let result = "";
		const fn = (list, key, label) => {
			list.forEach(element => {
				element.parentName = `${label}`
				if (element.key === key) {
					result = element.parentName + "|" + element.label
				}
				if (element.children && element.children.length > 0) {
					fn(element.children, key, `${element.parentName ? (element.parentName + "|") : ""}${element.label}`)
				}
			});
		}
		fn(list, key, label)
		return result
	}

	return (
		<Layout className={Style['my-layout']}>
			<TopMenu toggleSlide={toggleSlide} collapsed={collapsed} topMenus={topMenus} menuClick={menuClick}></TopMenu>
			<SlideMenu collapsed={collapsed} subMenus={subMenus} subMenuClick={subMenuClick} subContent={subContent} subKey={subKey}></SlideMenu>
		</Layout>
	)
}
