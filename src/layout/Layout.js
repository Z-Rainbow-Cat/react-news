/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-26 15:34:51
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 16:07:25
 * @FilePath: \my-news\src\layout\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import SlideMenu from "./SlideMenu"
import TopMenu from "./TopMenu"

import Style from "./layout.module.css"
import { Layout } from 'antd';
import menus from "./menu.js"

export default function LayoutSelf() {
	const [collapsed, setCollapsed] = useState(false)

	const toggleSlide = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Layout className={Style['my-layout']}>
			<TopMenu toggleSlide={toggleSlide} collapsed={collapsed}></TopMenu>
			<SlideMenu collapsed={collapsed}></SlideMenu>
		</Layout>
	)
}
