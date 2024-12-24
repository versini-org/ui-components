import { render, screen } from "@testing-library/react";
import type { SpacingTypes } from "@versini/ui-spacing-types";

import * as AllIcons from "../..";

const defaultIconSize = "size-5";

const renderExpected = async ({
	dataTestId,
	fill,
	viewBox,
	className,
	spacing,
}: {
	dataTestId: string;
	className?: string;
	fill?: string;
	viewBox?: string;
} & SpacingTypes.Props) => {
	const svg = screen.getByTestId(dataTestId);
	expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
	expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
	expect(svg.getAttribute("class")).toContain(
		className ? className : defaultIconSize,
	);
	if (typeof spacing === "string") {
		expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
	}
	if (typeof spacing === "number") {
		expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
	}
	if (typeof spacing === "object") {
		expect(svg.getAttribute("class")).toContain(`mt-${spacing.t}`);
	}
};

describe("Custom IconDog prop tests", () => {
	it.each`
		fill         | viewBox          | className    | spacing       | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${undefined}  | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${undefined}  | ${"with default fill, default viewBox and default className"}
		${undefined} | ${undefined}     | ${undefined} | ${"666"}      | ${"with string spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${666}        | ${"with number spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${{ t: 666 }} | ${"with object spacing"}
	`(
		"should render IconDog $description",
		async ({ fill, viewBox, className, spacing }) => {
			render(
				<AllIcons.IconDog
					data-testid="icon-dog"
					className={className}
					fill={fill}
					viewBox={viewBox}
					spacing={spacing}
				/>,
			);

			const svg = await screen.findByTestId("icon-dog");
			expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
			expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
			expect(svg.getAttribute("class")).toContain(
				className ? className : "w-full",
			);
			if (typeof spacing === "string") {
				expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
			}
			if (typeof spacing === "number") {
				expect(svg.getAttribute("class")).toContain(`m-${spacing}`);
			}
			if (typeof spacing === "object") {
				expect(svg.getAttribute("class")).toContain(`mt-${spacing.t}`);
			}
		},
	);
});

describe("Generic Icons prop tests", () => {
	it.each`
		fill         | viewBox          | className    | spacing       | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${undefined}  | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${undefined}  | ${"with default fill, default viewBox and default className"}
		${undefined} | ${undefined}     | ${undefined} | ${"666"}      | ${"with string spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${666}        | ${"with number spacing"}
		${undefined} | ${undefined}     | ${undefined} | ${{ t: 666 }} | ${"with object spacing"}
	`(
		"should render Icons $description",
		async ({ fill, viewBox, className, spacing }) => {
			render(
				<div>
					{Object.keys(AllIcons).map((icon) => {
						const Icon = AllIcons[icon as keyof typeof AllIcons];
						return icon !== "IconDog" ? (
							<Icon
								key={icon}
								data-testid={icon}
								className={className}
								fill={fill}
								viewBox={viewBox}
								spacing={spacing}
							/>
						) : null;
					})}
				</div>,
			);

			Object.keys(AllIcons).map(async (icon) => {
				if (icon !== "IconDog") {
					await renderExpected({
						dataTestId: icon,
						fill,
						viewBox,
						className,
						spacing,
					});
				}
			});
		},
	);
});
