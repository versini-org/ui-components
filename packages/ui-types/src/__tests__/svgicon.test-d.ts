import { expectTypeOf, test } from "vitest";
import type { SvgIconTypes } from "../svgicon";

const requiredProps: SvgIconTypes.Props = {
	children: "test",
	defaultViewBox: "0 0 24 24",
	title: "test",
};

const allProps: SvgIconTypes.Props = {
	children: "test",
	defaultViewBox: "0 0 24 24",
	title: "test",
	className: "test",
	size: "size-1",
	fill: "red",
	semantic: true,
	viewBox: "0 0 48 48",
};

test("SvgIcon base types", () => {
	expectTypeOf(requiredProps).toMatchTypeOf<SvgIconTypes.Props>();
	expectTypeOf(allProps).toEqualTypeOf<SvgIconTypes.Props>();

	expectTypeOf({ defaultViewBox: 123 }).not.toMatchTypeOf<SvgIconTypes.Props>();
	expectTypeOf({ title: true }).not.toMatchTypeOf<SvgIconTypes.Props>();
	expectTypeOf({ fill: 666 }).not.toMatchTypeOf<SvgIconTypes.Props>();
	expectTypeOf({ semantic: "true" }).not.toMatchTypeOf<SvgIconTypes.Props>();
});
