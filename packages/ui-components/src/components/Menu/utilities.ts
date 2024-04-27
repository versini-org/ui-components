export const getDisplayName = (element: any): string => {
	if (typeof element === "string") {
		return element;
	}
	if (typeof element === "function") {
		return element.displayName || element.name || "Component";
	}
	if (typeof element === "object" && element !== null && "type" in element) {
		const type = element.type as any;
		if (typeof type === "function" || typeof type === "object") {
			return type.displayName || type.name || "Component";
		}
	}
	return "Element";
};
