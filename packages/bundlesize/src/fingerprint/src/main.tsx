import * as UI from "@versini/ui-fingerprint";
import React from "react";
import ReactDOM from "react-dom/client";

Object.keys(UI).forEach(() => {
	/**
	 * This is simply to loop through all components
	 * and trick rollup into bundling them (instead of
	 * simply tree-shaking anything that is imported but
	 * not used...)
	 */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>hello</React.StrictMode>,
);
