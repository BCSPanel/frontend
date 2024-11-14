console.log("index.tsx");

import { createRoot } from "react-dom/client";
import App from "./main";
import { HashRouter } from "react-router-dom";

import "./index.css";

createRoot(self.root).render(
	<HashRouter>
		<App />
	</HashRouter>
);

self.root.style.display = "";
