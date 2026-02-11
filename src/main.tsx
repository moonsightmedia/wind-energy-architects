import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Web Awesome styles
import "@awesome.me/webawesome/dist/styles/themes/default.css";
import "@awesome.me/webawesome/dist/styles/native.css";

createRoot(document.getElementById("root")!).render(<App />);
