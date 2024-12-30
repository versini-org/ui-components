import { render, screen } from "@testing-library/react";

import { SvgIcon } from "../SvgIcon";

describe("SvgIcon prop tests", () => {
	it("should honor the prop `fill`", async () => {
		render(
			<SvgIcon
				title="toto"
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				fill="red"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("fill")).toBe("red");
	});

	it("should honor the prop `viewBox`", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				viewBox="0 0 666 666"
				title="toto"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("viewBox")).toBe("0 0 666 666");
	});

	it("should honor the prop `className`", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				className="tutu"
				title="toto"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("class")).toBe("tutu");
	});

	it("should honor the prop `defaultClassName`", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				defaultClassName="tutu"
				title="toto"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("class")).toBe("tutu");
	});

	it("should honor both props `defaultClassName` and `className`", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				defaultClassName="tutu"
				className="tata"
				title="toto"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("class")).toBe("tutu tata");
	});

	it("should render a decorative icon by default", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				viewBox="0 0 666 666"
				title="toto"
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("aria-hidden")).toBe("true");
	});

	it("should honor the `semantic` prop", async () => {
		render(
			<SvgIcon
				data-testid="svgicon-1"
				defaultViewBox="0 0 448 512"
				viewBox="0 0 666 666"
				title="toto"
				semantic
			>
				<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
			</SvgIcon>,
		);
		const svg = await screen.findByTestId("svgicon-1");
		expect(svg.getAttribute("aria-hidden")).toBe("false");
	});
});
