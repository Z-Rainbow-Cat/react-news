/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-27 17:02:18
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 14:03:18
 * @FilePath: \my-news\src\layout\menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import React from "react"
export default [
	{
		label: "系统管理",
		key: "system",
		parent: "root",
		icon: <AppstoreOutlined />,
		path: "",
		children: [
			{
				label: "基础信息管理",
				key: "base",
				parent: "system",
				icon: <AppstoreOutlined />,
				children: [
					{
						label: "用户管理",
						key: "user",
						parent: "base",
						icon: <UserOutlined />
					},
					{
						label: "角色信息",
						key: "role",
						parent: "base",
						icon: <AppstoreOutlined />
					},
					{
						label: "菜单管理",
						key: "menu",
						parent: "base",
						icon: <AppstoreOutlined />
					}
				]
			},
			{
				label: "日志管理",
				parent: "system",
				key: "log",
				icon: <AppstoreOutlined />,
				children: [
					{
						label: "登录日志",
						key: "loginlog",
						parent: "log",
						icon: <AppstoreOutlined />
					},
					{
						label: "查询日志",
						key: "searchlog",
						parent: "log",
						icon: <AppstoreOutlined />
					},
				]
			},
		]
	},
	{
		label: "项目合同管理",
		key: "ht",
		parent: "root",
		icon: <AppstoreOutlined />,
		path: "",
		children: [
			{
				label: "基础信息管理",
				parent: "ht",
				key: "baseht",
				icon: <AppstoreOutlined />,
				children: [
					{
						label: "区域管理",
						key: "area",
						parent: "baseht",
						icon: <AppstoreOutlined />
					},
					{
						label: "产品线管理",
						key: "line",
						parent: "baseht",
						icon: <AppstoreOutlined />
					},
					{
						label: "合同管理",
						key: "hetong",
						parent: "baseht",
						icon: <AppstoreOutlined />
					}
				]
			},
		]
	},
	{
		label: "任务",
		key: "task",
		parent: "root",
		icon: <AppstoreOutlined />,
		path: "",
		children: [
			{
				label: "待办",
				key: "todo",
				parent: "task",
				icon: <AppstoreOutlined />
			},
			{
				label: "已办",
				key: "done",
				parent: "tsk",
				icon: <AppstoreOutlined />
			},
		]
	},
]
