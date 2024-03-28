/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-28 14:06:07
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-28 14:39:53
 * @FilePath: \my-news\src\layout\UserInfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, message } from 'antd';
export default function UserInfo() {

	const onClick = (node) => {
		if (node.key === 'userInfo') {
			message.info("用户信息")
		} else if (node.key === "logout") {
			message.info("退出登录")
		}
	}

	const items = [
		{
			label: '用户信息',
			key: 'userInfo',
		},
		{
			label: '退出登录',
			key: 'logout',
		},
	];
	return (
		<Dropdown
			trigger={["click"]}
			menu={{
				items,
				onClick,
			}}
		>
			<a onClick={(e) => e.preventDefault()}>
				<Space> 周永立 <DownOutlined /> </Space>
			</a>
		</Dropdown>
	)
}
