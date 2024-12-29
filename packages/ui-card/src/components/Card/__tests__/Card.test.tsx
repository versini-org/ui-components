import { render, screen } from "@testing-library/react";

import { Card } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { CARD_CLASSNAME } from "../../../common/constants";

const cardContent = "salut le monde";

describe("Card (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Card).toBeDefined();
	});
});

describe("Card spacing", () => {
	it("should render a card with a right margin spacing", async () => {
		const { container } = render(<Card className="mr-2">{cardContent}</Card>);
		const card = container.children[0];
		// not only it should be there, but it should be the last entry
		expect(card?.className).toContain("mr-2");
		expect(card?.className.slice(-4)).toBe("mr-2");
	});
});

describe("Card modifiers", () => {
	it("should render a dark or light (system) card", async () => {
		const { container } = render(<Card>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"rounded-md",
			"border-2",
			"p-4",
			"border-border-dark",
			"bg-surface-lighter",
			"text-copy-dark",
			"dark:border-border-accent",
			"dark:bg-surface-dark",
			"dark:text-copy-light",
		]);
	});

	it("should render a dark or light (alt-system) card", async () => {
		const { container } = render(<Card mode="alt-system">{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"bg-surface-dark",
			"border-2",
			"border-border-accent",
			"dark:bg-surface-lighter",
			"dark:border-border-dark",
			"dark:text-copy-dark",
			"p-4",
			"rounded-md",
			"text-copy-light",
		]);
	});

	it("should render a dark card", async () => {
		const { container } = render(<Card mode="dark">{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"bg-surface-dark",
			"border-2",
			"border-border-accent",
			"p-4",
			"rounded-md",
			"text-copy-light",
		]);
	});

	it("should render a light card", async () => {
		const { container } = render(<Card>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"rounded-md",
			"border-2",
			"p-4",
			"border-border-dark",
			"bg-surface-lighter",
			"text-copy-dark",
		]);
	});

	it("should render a darker card", async () => {
		const { container } = render(<Card mode="darker">{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"bg-surface-darker",
			"border-2",
			"border-border-accent",
			"p-4",
			"rounded-md",
			"text-copy-light",
		]);
	});

	it("should render a default card with no border", async () => {
		const { container } = render(<Card noBorder>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"rounded-md",
			"border-none",
			"p-4",
			"border-border-dark",
			"bg-surface-lighter",
			"text-copy-dark",
			"dark:border-border-accent",
			"dark:bg-surface-dark",
			"dark:text-copy-light",
		]);
	});

	it("should render a default compact card", async () => {
		const { container } = render(<Card compact>{cardContent}</Card>);
		const card = container.children[0];
		expectToHaveClasses(card, [
			CARD_CLASSNAME,
			"rounded-md",
			"border-2",
			"p-1",
			"sm:p-2",
			"border-border-dark",
			"bg-surface-lighter",
			"text-copy-dark",
			"dark:border-border-accent",
			"dark:bg-surface-dark",
			"dark:text-copy-light",
		]);
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

	it("should render a card with a custom body class", async () => {
		render(<Card bodyClassName="toto-body">{cardContent}</Card>);
		const body = await screen.findByText(cardContent);
		expect(body).toBeDefined();

		const parent = body.parentElement;
		if (parent) {
			expectToHaveClasses(parent, ["toto-body"]);
		}
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
			"mb-4",
			"border-b-2",
			"border-border-medium",
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
