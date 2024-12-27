import { expectTypeOf, test } from "vitest";

import type { ButtonTypes } from "../button";

const requiredProps: ButtonTypes.Props = {
	children: "test",
};

const allProps: ButtonTypes.Props = {
	children: "test",
	className: "test",
	focusMode: "dark",
	fullWidth: true,
	mode: "light",
	noBorder: true,
	noInternalClick: true,
	raw: true,
	size: "small",
	disabled: true,
	noTruncate: true,
	onClick: () => {},
	variant: "primary",
};

test("Button base types", () => {
	expectTypeOf(requiredProps).toMatchTypeOf<ButtonTypes.Props>();
	expectTypeOf(allProps).toEqualTypeOf<ButtonTypes.Props>();

	expectTypeOf({ modes: "test" }).not.toMatchTypeOf<ButtonTypes.Props>();
	expectTypeOf({ mode: "test" }).not.toMatchTypeOf<ButtonTypes.Props>();
	expectTypeOf({ mode: true }).not.toMatchTypeOf<ButtonTypes.Props>();
	expectTypeOf({ mode: 666 }).not.toMatchTypeOf<ButtonTypes.Props>();
});
