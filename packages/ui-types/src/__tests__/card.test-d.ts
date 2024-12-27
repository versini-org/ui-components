import { expectTypeOf, test } from "vitest";

import type { CardTypes } from "../card";

const requiredProps: CardTypes.Props = {
	children: "test",
};

const allProps: CardTypes.Props = {
	children: "test",
	"aria-labelledby": "test",
	bodyClassName: "test",
	className: "test",
	compact: true,
	footer: "test",
	footerClassName: "test",
	header: "test",
	headerClassName: "test",
	mode: "darker",
	noBorder: true,
};

const requiredHeaderProps: CardTypes.HeaderProps = {
	className: "test",
	content: "test",
};

const allHeaderProps: CardTypes.HeaderProps = {
	className: "test",
	content: "test",
	id: "test",
	userAriaLabelledby: "test",
};

test("Card base types", () => {
	expectTypeOf(requiredProps).toMatchTypeOf<CardTypes.Props>();
	expectTypeOf(allProps).toEqualTypeOf<CardTypes.Props>();

	expectTypeOf({ modes: "test" }).not.toMatchTypeOf<CardTypes.Props>();
	expectTypeOf({ mode: "test" }).not.toMatchTypeOf<CardTypes.Props>();
	expectTypeOf({ mode: true }).not.toMatchTypeOf<CardTypes.Props>();
	expectTypeOf({ mode: 666 }).not.toMatchTypeOf<CardTypes.Props>();
});

test("Card extra types", () => {
	expectTypeOf(requiredHeaderProps).toMatchTypeOf<CardTypes.HeaderProps>();
	expectTypeOf(allHeaderProps).toEqualTypeOf<CardTypes.HeaderProps>();

	expectTypeOf({ id: 666 }).not.toMatchTypeOf<CardTypes.HeaderProps>();
	expectTypeOf({ ids: 666 }).not.toMatchTypeOf<CardTypes.HeaderProps>();
});
