/* eslint-disable no-undef */
/*
 * @Author: zyl18 zhouyl01@eastcom-sw.com
 * @Date: 2024-03-25 15:29:29
 * @LastEditors: zyl18 zhouyl01@eastcom-sw.com
 * @LastEditTime: 2024-03-27 15:29:27
 * @FilePath: \my-news\src\App.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react"

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
