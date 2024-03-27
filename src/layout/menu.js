/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-27 17:02:18
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 17:07:44
 * @FilePath: \my-news\src\layout\menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
	{
		title: "系统管理",
		path: "",
		children: [
			{
				title: "基础信息管理",
				children: [
					{
						title: "用户管理"
					},
					{
						title: "角色信息",
					},
					{
						title: "菜单管理",
					}
				]
			},
			{
				title: "日志管理",
				children: [
					{
						title: "登录日志"
					},
					{
						title: "查询日志",
					},
				]
			},
		]
	},
	{
		title: "项目合同管理",
		path: "",
		children: [
			{
				title: "基础信息管理",
				children: [
					{
						title: "区域管理"
					},
					{
						title: "产品线管理",
					},
					{
						title: "合同管理",
					}
				]
			},
		]
	},
	{
		title: "任务",
		path: "",
		children: [
			{
				title: "待办"
			},
			{
				title: "已办",
			},
		]
	},
]
