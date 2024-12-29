import { render, screen } from "@testing-library/react";

import * as AllIcons from "../..";

const defaultIconSize = "size-5";

const renderExpected = async ({
	dataTestId,
	fill,
	viewBox,
	className,
}: {
	dataTestId: string;
	className?: string;
	fill?: string;
	viewBox?: string;
}) => {
	const svg = screen.getByTestId(dataTestId);
	expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
	expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
	expect(svg.getAttribute("class")).toContain(
		className ? className : defaultIconSize,
	);
};

describe("Custom IconDog prop tests", () => {
	it.each`
		fill         | viewBox          | className    | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${"with default fill, default viewBox and default className"}
	`(
		"should render IconDog $description",
		async ({ fill, viewBox, className }) => {
			render(
				<AllIcons.IconDog
					data-testid="icon-dog"
					className={className}
					fill={fill}
					viewBox={viewBox}
				/>,
			);

			const svg = await screen.findByTestId("icon-dog");
			expect(svg.getAttribute("fill")).toBe(fill ? fill : "currentColor");
			expect(svg.getAttribute("viewBox")).toContain(viewBox ? viewBox : "0 0 ");
			expect(svg.getAttribute("class")).toContain(
				className ? className : "w-full",
			);
		},
	);
});

describe("Generic Icons prop tests", () => {
	it.each`
		fill         | viewBox          | className    | description
		${"red"}     | ${"0 0 666 666"} | ${"toto"}    | ${"with fill, viewBox and className"}
		${undefined} | ${undefined}     | ${undefined} | ${"with default fill, default viewBox and default className"}
	`(
		"should render Icons $description",
		async ({ fill, viewBox, className }) => {
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
					});
				}
			});
		},
	);
});
