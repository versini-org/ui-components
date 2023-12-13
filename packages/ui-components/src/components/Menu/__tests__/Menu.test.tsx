// import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Menu, MenuItem } from "../..";

// const SimpleMenu = ({ ...props }) => (
// 	<Menu icon={<IconSettings />}>
// 		<MenuItem label="Profile" />
// 		<MenuItem label="Chat details" disabled />
// 		<MenuItem label="History" />
// 		<MenuItem label="About" />
// 	</Menu>
// );

function renderWithUserEvent(jsx: JSX.Element) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

describe("Menu (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Menu).toBeDefined();
		expect(MenuItem).toBeDefined();
	});
});

describe("MenuButton behaviors", () => {
	it("should focus next MenuItem when Down key pressed", async () => {
		// vi.useFakeTimers();
		const { user } = renderWithUserEvent(
			<Menu label="Click Me">
				<MenuItem label="Profile" />
				<MenuItem label="Chat details" disabled />
				<MenuItem label="History" />
				<MenuItem label="About" />
			</Menu>,
		);

		const trigger = screen.getByLabelText("Click Me");
		// open the menu
		// await act(async () => {
		await user.click(trigger);

		// screen.debug();
		// });
		// fireEvent.click(trigger);
		// make sure the menu is indeed opened
		// await screen.findByRole("menu");
		// await user.keyboard("ArrowDown");
		// await user.keyboard("ArrowDown");
		// await user.tab();

		// act(() => {
		// vi.advanceTimersByTime(1000);
		// });

		// await user.tab();

		const firstMenuItem = screen.getByRole("menuitem", {
			name: "Profile",
		});
		const secondMenuItem = screen.getByRole("menuitem", {
			name: "History",
		});
		expect(firstMenuItem).toHaveFocus();
		// expect(secondMenuItem).toHaveFocus();

		// screen.debug(firstMenuItem);
		// expect(document.activeElement).toBe(firstMenuItem);

		// await act(() => {
		//   fireEvent.click(trigger);
		// });
		// const menuBalloon = await getMenuBalloon();
		// await act(() => {
		//   fireEvent.keyDown(
		//     menuBalloon.querySelectorAll(".pnr-menu-item button")[0],
		//     {
		//       key: KEYBOARD_KEYS.DOWN,
		//     }
		//   );
		// });
		// const secondMenuItem = menuBalloon.querySelectorAll(
		//   ".pnr-menu-item button"
		// )[1];
		// expect(document.activeElement).toBe(secondMenuItem);
	});
});
