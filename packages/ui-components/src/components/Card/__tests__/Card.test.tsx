import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { CARD_CLASSNAME } from "../../../common/constants";
import { Card } from "../..";

const cardContent = "salut le monde";

describe("Card (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Card).toBeDefined();
	});
});

describe("Card modifiers", () => {
	it("should render a default card", async () => {
		const { container } = render(<Card>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"p-4",
			"rounded-md",
			"text-slate-200",
			"border-2",
			"border-slate-900",
			"bg-slate-900",
		]);
	});

	it("should render a card with no background color", async () => {
		const { container } = render(<Card noBackground>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [CARD_CLASSNAME, "rounded-md", "text-slate-200"]);
	});

	it("should render a default card with a custom class", async () => {
		const { container } = render(
			<Card className="toto-main">{cardContent}</Card>,
		);
		const card = container.children[0];
		expectToHaveClasses(card, ["toto-main"]);
	});

	it("should render a card with a custom header class", async () => {
		render(
			<Card header="hello" headerClassName="toto-header">
				{cardContent}
			</Card>,
		);
		const header = await screen.findByText("hello");
		expect(header).toBeDefined();
		expectToHaveClasses(header, ["toto-header"]);
	});

	it("should render a card with a custom footer class", async () => {
		render(
			<Card footer="hello" footerClassName="toto-footer">
				{cardContent}
			</Card>,
		);
		const footer = await screen.findByText("hello");
		expect(footer).toBeDefined();
		expectToHaveClasses(footer, ["toto-footer"]);
	});

	it("should render a card with a header as a string", async () => {
		render(<Card header="hello">{cardContent}</Card>);
		const header = await screen.findByText("hello");
		expect(header).toBeDefined();
		expectToHaveClasses(header, [
			`${CARD_CLASSNAME}__header`,
			"pb-2",
			"text-lg",
			"font-bold",
		]);
	});

	it("should render a card with a header as a JSX", async () => {
		render(
			<Card header={<h3 className="custom-header">hello</h3>}>
				{cardContent}
			</Card>,
		);
		const header = await screen.findByText("hello");
		expect(header).toBeDefined();
		expectToHaveClasses(header, ["custom-header"]);
	});

	it("should render a card with a footer as a string", async () => {
		render(<Card footer="hello">{cardContent}</Card>);
		const footer = await screen.findByText("hello");
		expect(footer).toBeDefined();
		expectToHaveClasses(footer, [`${CARD_CLASSNAME}__footer`, "pt-2"]);
	});

	it("should render a card with a footer as a JSX", async () => {
		render(
			<Card footer={<h3 className="custom-footer">hello</h3>}>
				{cardContent}
			</Card>,
		);
		const footer = await screen.findByText("hello");
		expect(footer).toBeDefined();
		expectToHaveClasses(footer, ["custom-footer"]);
	});
});

describe("Card accessibility", () => {
	it("should add a unique aria-labelledby and id [header is a string]", async () => {
		const { getByRole, getByText } = render(
			<Card header="Card header (string)" className="unit-tests">
				Hello World
			</Card>,
		);
		const section = getByRole("region");
		const header = getByText("Card header (string)");

		expect(section).toHaveAttribute("aria-labelledby");
		expect(header).toHaveAttribute("id");
		expect(header.id).toBe(section.getAttribute("aria-labelledby"));
	});

	it("should use the provided aria-labelledby [header is a not string]", () => {
		const { getByRole, getByText } = render(
			<Card
				aria-labelledby="123456"
				header={<h3 id="123456">This is header with its own id</h3>}
				className="unit-tests"
			>
				Hello World
			</Card>,
		);
		const section = getByRole("region");
		const header = getByText("This is header with its own id");

		expect(section).toHaveAttribute("aria-labelledby");
		expect(header).toHaveAttribute("id");
		expect(header.id).toBe(section.getAttribute("aria-labelledby"));
	});

	it("should add a unique aria-labelledby and id [header is a not string]", () => {
		const { getByRole, getByText } = render(
			<Card
				header={<h3 id="123456">This is header with its own id</h3>}
				className="unit-tests"
			>
				Hello World
			</Card>,
		);
		const section = getByRole("region");
		const header = getByText("This is header with its own id");

		expect(section).toHaveAttribute("aria-labelledby");
		expect(header).toHaveAttribute("id");
		expect(header.id).not.toBe(section.getAttribute("aria-labelledby"));
	});

	it("should add aria-labelledby if provided, and there is no header", () => {
		const { getByRole } = render(
			<Card aria-labelledby="strange-one" className="unit-tests">
				<p id="strange-one">Hello World</p>
			</Card>,
		);
		const section = getByRole("region");

		expect(section).toHaveAttribute("aria-labelledby");
		expect(section.getAttribute("aria-labelledby")).toBe("strange-one");
	});
});
