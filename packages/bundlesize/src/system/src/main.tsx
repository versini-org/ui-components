import "@versini/ui-system/dist/style.css";

import * as System from "@versini/ui-system";
import React from "react";
import ReactDOM from "react-dom/client";

Object.keys(System).forEach(() => {
	/**
	 * This is simply to loop through all system components
	 * and trick rollup into bundling them (instead of
	 * simply tree-shaking anything that is imported but
	 * not used...)
	 */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>hello</React.StrictMode>,
);
