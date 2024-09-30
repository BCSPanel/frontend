import { createRoot } from "react-dom/client";
import App from "./main";
import { HashRouter } from "react-router-dom";

import "./index.css";

createRoot(self.root).render(
	<HashRouter>
		<App />
	</HashRouter>
);

self.loading?.remove();

// 修复切换页面时重复请求icon的bug
const linkIcon = document.querySelector("link[rel=icon]") as HTMLLinkElement;
fetch(linkIcon.href)
	.then((resp) => resp.blob())
	.then((b) => {
		linkIcon.href = URL.createObjectURL(b);
	});
linkIcon.href = "data:";
