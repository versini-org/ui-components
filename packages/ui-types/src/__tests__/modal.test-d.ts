import { expectTypeOf, test } from "vitest";

import type { ModalTypes } from "../modal";

const options: ModalTypes.Options = {
	initialOpen: true,
	onOpenChange: (open) => console.log(open),
	open: false,
};

const context: ModalTypes.Context = {
	...options,
	setDescriptionId: (id: any) => console.log(id),
	setLabelId: (id: any) => console.log(id),
};

test("ModalTypes.Options types", () => {
	expectTypeOf(options).toMatchTypeOf<ModalTypes.Options>();

	expectTypeOf({ initialOpen: "true" }).not.toMatchTypeOf<ModalTypes.Options>();
	expectTypeOf({
		onOpenChange: "function",
	}).not.toMatchTypeOf<ModalTypes.Options>();
	expectTypeOf({ open: "false" }).not.toMatchTypeOf<ModalTypes.Options>();
});

test("ModalTypes.Context types", () => {
	expectTypeOf(context).toMatchTypeOf<ModalTypes.Context>();
	expectTypeOf(null).toMatchTypeOf<ModalTypes.Context>();
});
