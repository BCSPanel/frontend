import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import {
	BarChartOutlined,
	CodeOutlined,
	FolderOutlined,
	SettingOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { MenuItemType } from "antd/es/menu/interface";

import "./main.css";

import NoRoute from "./pages/NoRoute/NoRoute";

const { Sider } = Layout;

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItemType[]
) {
	return {
		key,
		icon,
		children,
		label: <Link to={String(key)}>{label}</Link>,
	} as MenuItemType;
}

const items = [
	getItem("Index", "/", <BarChartOutlined />),
	getItem("Terminals", "/terminals", <CodeOutlined />),
	getItem("Files", "/files", <FolderOutlined />),
	getItem("Users", "/users", <TeamOutlined />),
	getItem("Settings", "/settings", <SettingOutlined />),
];

const App: React.FC = () => {
	const rLocation = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const { token } = theme.useToken();

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div
					style={{
						width: "100%",
						padding: collapsed ? 6 : 16,
						transition: "all 0.2s, background 0s",
					}}
				>
					<img src="/icon/BCSPanel.png" alt="" style={{ width: "100%" }} />
				</div>
				<Menu
					theme="dark"
					selectedKeys={[String(/\/\w*/.exec(rLocation.pathname))]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout style={{ margin: 8 }}>
				<Routes>
					<Route index element={"index"} />
					<Route path="/terminals" element={"terminals"} />
					<Route path="/files" element={"files"} />
					<Route path="/users" element={"users"} />
					<Route path="/settings" element={"settings"} />
					<Route path="*" element={<NoRoute />} />
				</Routes>
			</Layout>
		</Layout>
	);
};

export default App;
