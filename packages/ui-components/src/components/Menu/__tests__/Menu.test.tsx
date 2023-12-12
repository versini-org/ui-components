// import { render, screen } from "@testing-library/react";

// import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { Menu, MenuItem } from "../..";

// const SimpleMenu = ({ ...props }) => (
// 	<Menu icon={<IconSettings />}>
// 		<MenuItem label="Profile" />
// 		<MenuItem label="Chat details" disabled />
// 		<MenuItem label="History" />
// 		<MenuItem label="About" />
// 	</Menu>
// );

describe("Menu (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Menu).toBeDefined();
		expect(MenuItem).toBeDefined();
	});
});
