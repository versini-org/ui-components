import { Component } from "react";
import { getDisplayName } from "../utilities";

describe("getDisplayName", () => {
	it("returns display name for component when displayName is set", () => {
		const Simple = () => {
			return <div />;
		};
		Simple.displayName = "Simple";
		expect(getDisplayName(Simple as any)).toBe("Simple");
	});

	it("returns display name of html string component", () => {
		expect(getDisplayName("input")).toBe("input");
	});

	it("returns default display name for stateless named functions", () => {
		const Named = function Example() {};
		expect(getDisplayName(Named)).toBe("Example");
	});

	it("returns display name for component", () => {
		class Simple extends Component {
			render() {
				return <div />;
			}
		}
		expect(getDisplayName(Simple)).toBe("Simple");
	});

	it("returns display name for component when displayName is set from static initializer", () => {
		class Simple extends Component {
			static displayName = "Simple";
			render() {
				return <div />;
			}
		}
		expect(getDisplayName(Simple)).toBe("Simple");
	});

	it("returns display name for a stateless component", () => {
		const Simple = () => <div />;

		expect(getDisplayName(Simple)).toBe("Simple");
	});

	it("returns default display name for stateless assigned functions", () => {
		const Assigned = function () {};
		expect(getDisplayName(Assigned)).toBe("Assigned");
	});

	it("returns default display name for stateless anonymous functions", () => {
		expect(getDisplayName(() => {})).toBe("Component");
	});

	it("returns default display name for stateless arrow functions", () => {
		expect(getDisplayName(() => <div />)).toBe("Component");
	});

	it("should return 'Element' for invalid element", () => {
		expect(getDisplayName(null)).toBe("Element");
	});

	it("should return display name for named function with displayName", () => {
		const NotSimple = () => {
			return <div />;
		};
		NotSimple.displayName = "Simple";
		expect(getDisplayName(NotSimple)).toBe("Simple");
	});

	it("should return display name for object with displayName on type", () => {
		const NotSimple = {
			type: {},
		};
		NotSimple.type = {
			displayName: "Simple",
		};
		expect(getDisplayName(NotSimple)).toBe("Simple");
	});

	it("should return display name for object with name on type", () => {
		const NotSimple = {
			type: {},
		};
		NotSimple.type = {
			name: "Simple",
		};
		expect(getDisplayName(NotSimple)).toBe("Simple");
	});

	it("should return Component for object with no name or displayName", () => {
		const NotSimple = {
			type: {},
		};
		expect(getDisplayName(NotSimple)).toBe("Component");
	});
});
