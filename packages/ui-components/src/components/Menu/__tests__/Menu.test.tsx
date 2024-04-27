import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconSettings } from "@versini/ui-icons";

import { Button, ButtonIcon, Menu, MenuItem, MenuSeparator } from "../..";

const MENU_TRIGGER_LABEL = "Click Me";
const FIRST_MENU_ITEM = "Menu 1";
const SECOND_MENU_ITEM = "Menu 2";
const THIRD_MENU_ITEM = "Menu 3";
const FOURTH_MENU_ITEM = "Menu 4";
const FIFTH_MENU_ITEM = "Menu 5";

const SimpleMenu = ({ ...props }) => (
	<Menu trigger={<Button>Click Me</Button>} {...props}>
		<MenuItem label={FIRST_MENU_ITEM} />
		<MenuItem label={SECOND_MENU_ITEM} />
		<MenuItem label={THIRD_MENU_ITEM} disabled />
		<MenuItem label={FOURTH_MENU_ITEM} />
		<MenuSeparator data-testid="menu-separator" />
		<MenuItem label={FIFTH_MENU_ITEM} />
	</Menu>
);

const SimpleMenuIcon = ({ ...props }) => (
	<Menu
		trigger={
			<ButtonIcon>
				<IconSettings />
			</ButtonIcon>
		}
		{...props}
	>
		<MenuItem label={FIRST_MENU_ITEM} />
		<MenuItem label={SECOND_MENU_ITEM} />
		<MenuItem label={THIRD_MENU_ITEM} disabled />
		<MenuItem label={FOURTH_MENU_ITEM} />
		<MenuSeparator data-testid="menu-separator" />
		<MenuItem label={FIFTH_MENU_ITEM} />
	</Menu>
);

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
		expect(MenuSeparator).toBeDefined();
	});
});

describe("Menu rendering", () => {
	it("should render a menu with a trigger", async () => {
		render(<SimpleMenu />);
		const trigger = await screen.findByLabelText("Open menu");
		expect(trigger).toBeInTheDocument();
	});
	it("should render a menu with a icon-only trigger", async () => {
		render(<SimpleMenuIcon />);
		const trigger = await screen.findByLabelText("Open menu");
		expect(trigger).toBeInTheDocument();
	});
});

describe("Menu behaviors", () => {
	it("should move focus on the first menuitem when menu is opened", async () => {
		const { user } = renderWithUserEvent(
			<SimpleMenu label={MENU_TRIGGER_LABEL} />,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
	});

	it("should move focus on the next menuitem when tab is pressed", async () => {
		const { user } = renderWithUserEvent(
			<SimpleMenu label={MENU_TRIGGER_LABEL} />,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});
		const secondMenuItem = screen.getByRole("menuitem", {
			name: SECOND_MENU_ITEM,
		});
		const fourthMenuItem = screen.getByRole("menuitem", {
			name: FOURTH_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		await user.tab();
		expect(secondMenuItem).toHaveFocus();
		await user.tab();
		expect(fourthMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(fourthMenuItem);
	});

	it("should move focus on the previous menuitem when shirt+tab is pressed", async () => {
		const { user } = renderWithUserEvent(
			<SimpleMenu label={MENU_TRIGGER_LABEL} />,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});
		const secondMenuItem = screen.getByRole("menuitem", {
			name: SECOND_MENU_ITEM,
		});
		const fourthMenuItem = screen.getByRole("menuitem", {
			name: FOURTH_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		await user.tab();
		expect(secondMenuItem).toHaveFocus();
		await user.tab();
		expect(fourthMenuItem).toHaveFocus();

		await user.tab({ shift: true });
		expect(secondMenuItem).toHaveFocus();
		await user.tab({ shift: true });
		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
	});

	it("should close the menu when a menuitem is selected", async () => {
		const { user } = renderWithUserEvent(
			<SimpleMenu label={MENU_TRIGGER_LABEL} />,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
		await user.click(firstMenuItem);
		await waitFor(() => {
			expect(screen.queryByText(FIRST_MENU_ITEM)).not.toBeInTheDocument();
		});
	});

	it("should trigger the Menu onOpenChange callback when opened and closed", async () => {
		const onOpenChange = vi.fn();
		const { user } = renderWithUserEvent(
			<Menu
				trigger={<Button>Click Me</Button>}
				label={MENU_TRIGGER_LABEL}
				onOpenChange={onOpenChange}
			>
				<MenuItem label={FIRST_MENU_ITEM} />
				<MenuItem label={SECOND_MENU_ITEM} />
				<MenuItem label={THIRD_MENU_ITEM} disabled />
				<MenuItem label={FOURTH_MENU_ITEM} />
			</Menu>,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		expect(onOpenChange).toHaveBeenCalledWith(true);

		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
		await user.click(firstMenuItem);

		expect(onOpenChange).toHaveBeenCalledWith(false);
	});

	it("should trigger the MenuItem onClick callback when a menuitem is selected", async () => {
		const onClick = vi.fn();
		const { user } = renderWithUserEvent(
			<Menu trigger={<Button>Click Me</Button>} label={MENU_TRIGGER_LABEL}>
				<MenuItem label={FIRST_MENU_ITEM} onClick={onClick} />
				<MenuItem label={SECOND_MENU_ITEM} />
				<MenuItem label={THIRD_MENU_ITEM} disabled />
				<MenuItem label={FOURTH_MENU_ITEM} />
			</Menu>,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
		await user.click(firstMenuItem);
		expect(onClick).toHaveBeenCalled();
	});

	it("should trigger the MenuItem onFocus callback when a menuitem is selected", async () => {
		const onFocus = vi.fn();
		const { user } = renderWithUserEvent(
			<Menu trigger={<Button>Click Me</Button>} label={MENU_TRIGGER_LABEL}>
				<MenuItem label={FIRST_MENU_ITEM} onFocus={onFocus} />
				<MenuItem label={SECOND_MENU_ITEM} />
				<MenuItem label={THIRD_MENU_ITEM} disabled />
				<MenuItem label={FOURTH_MENU_ITEM} />
			</Menu>,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);
		await user.click(firstMenuItem);
		expect(onFocus).toHaveBeenCalled();
	});

	it("should have a menu separator when menu is opened", async () => {
		const { user } = renderWithUserEvent(
			<SimpleMenu label={MENU_TRIGGER_LABEL} />,
		);
		const trigger = screen.getByLabelText(MENU_TRIGGER_LABEL);
		await user.click(trigger);
		const firstMenuItem = screen.getByRole("menuitem", {
			name: FIRST_MENU_ITEM,
		});

		expect(firstMenuItem).toHaveFocus();
		expect(document.activeElement).toBe(firstMenuItem);

		const separator = screen.getByTestId("menu-separator");
		expect(separator).toBeInTheDocument();
	});
});
