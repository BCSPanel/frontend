import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./main";
import "./index.css";

createRoot(document.getElementById('root') as Element).render(<Main />);

document.getElementById("loading")?.remove();
