import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import {
	BarChartOutlined,
	CodeOutlined,
	FolderOutlined,
	SettingOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/interface";

import NoRoute from "./pages/NoRoute/NoRoute";
import Index from "./pages/Index";
import Terminals from "./pages/Terminals/Terminals";
import Files from "./pages/Files/Files";
import Users from "./pages/Users/Users";
import Settings from "./pages/Settings/Settings";

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

const topItems = [
	getItem("Index", "/", <BarChartOutlined />),
	getItem("Terminals", "/terminals", <CodeOutlined />),
	getItem("Files", "/files", <FolderOutlined />),
	getItem("Users", "/users", <TeamOutlined />),
	getItem("Settings", "/settings", <SettingOutlined />),
];

const App: React.FC = () => {
	const rLocation = useLocation();
	const [collapsed, setCollapsed] = useState(document.body.clientWidth < 1024);

	return (
		<Layout style={{ height: "100vh", flexDirection: "row" }}>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							darkItemHoverBg: "#1677ff60",
						},
					},
				}}
			>
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
					width={150}
				>
					<div
						style={{
							width: "100%",
							padding: collapsed ? 6 : 12,
							transition: "all 0.2s, background 0s",
						}}
					>
						<img src="./icon/BCSPanel.png" alt="" style={{ width: "100%" }} />
					</div>
					<Menu
						theme="dark"
						selectedKeys={[String(/\/\w*/.exec(rLocation.pathname))]}
						mode="inline"
						items={topItems}
					/>
				</Sider>
			</ConfigProvider>
			<Layout style={{ margin: 8 }}>
				<Routes>
					<Route index element={<Index />} />
					<Route path="/terminals" element={<Terminals />} />
					<Route path="/files" element={<Files />} />
					<Route path="/users" element={<Users />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<NoRoute />} />
				</Routes>
			</Layout>
		</Layout>
	);
};

export default App;
