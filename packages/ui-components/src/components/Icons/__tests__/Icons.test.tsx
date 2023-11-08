import { render, screen } from "@testing-library/react";

import { defaultIconSize } from "../constants";
import { IconClose } from "../IconClose";
import { IconCopied } from "../IconCopied";
import { IconCopy } from "../IconCopy";
import { IconDelete } from "../IconDelete";
import { IconDog } from "../IconDog";
import { IconDogInShield } from "../IconDogInShield";
import { IconEdit } from "../IconEdit";
import { IconRestore } from "../IconRestore";
import { IconSettings } from "../IconSettings";
import { IconUser } from "../IconUser";

const renderExpected = async ({
	dataTestId,
	fill,
	viewBox,
	className,
	spacing,
}: {
	dataTestId: string;
	fill?: string;
	viewBox?: string;
	className?: string;
	spacing?: string | number | { t: string | number };
}) => {
	const svg = await screen.findByTestId(dataTestId);
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
				<>
					<IconClose
						data-testid="icon-close"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconCopied
						data-testid="icon-copied"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconCopy
						data-testid="icon-copy"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconDelete
						data-testid="icon-delete"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconDogInShield
						data-testid="icon-dog"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconEdit
						data-testid="icon-edit"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconRestore
						data-testid="icon-restore"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconSettings
						data-testid="icon-settings"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
					<IconUser
						data-testid="icon-user"
						className={className}
						fill={fill}
						viewBox={viewBox}
						spacing={spacing}
					/>
				</>,
			);

			[
				"icon-close",
				"icon-copied",
				"icon-copy",
				"icon-delete",
				"icon-dog-in-shield",
				"icon-edit",
				"icon-restore",
				"icon-settings",
				"icon-user",
			].forEach(async (dataTestId) => {
				await renderExpected({
					dataTestId,
					fill,
					viewBox,
					className,
					spacing,
				});
			});
		},
	);
});

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
				<IconDog
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
