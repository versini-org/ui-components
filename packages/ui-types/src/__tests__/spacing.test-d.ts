import { expectTypeOf, test } from "vitest";
import type { SpacingTypes } from "../spacing";

const validSpacingProps: SpacingTypes.Props = {
	spacing: {
		b: 10,
		l: 5,
		r: 5,
		t: 10,
	},
};

const validSpacingPropsString: SpacingTypes.Props = {
	spacing: "10px",
};

const validSpacingPropsNumber: SpacingTypes.Props = {
	spacing: 10,
};

test("SpacingTypes base types", () => {
	expectTypeOf(validSpacingProps).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: { t: 1 } }).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: { b: 1 } }).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: { l: 1 } }).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: { r: 1 } }).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf(validSpacingPropsString).toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf(validSpacingPropsNumber).toMatchTypeOf<SpacingTypes.Props>();

	expectTypeOf({
		spacing: {
			bottom: 10,
			left: 5,
			right: 5,
			top: 10,
		},
	}).not.toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: true }).not.toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({ spacing: null }).not.toMatchTypeOf<SpacingTypes.Props>();
	expectTypeOf({
		spacing: { b: "10px" },
	}).not.toMatchTypeOf<SpacingTypes.Props>();
});
