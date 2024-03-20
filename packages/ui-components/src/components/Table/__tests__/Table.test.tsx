import { render, screen } from "@testing-library/react";

import {
	expectToHaveClasses,
	expectToHaveStyles,
} from "../../../../../../configuration/tests-helpers";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
} from "../..";

describe("Table (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Table).toBeDefined();
		expect(TableBody).toBeDefined();
		expect(TableCell).toBeDefined();
		expect(TableHead).toBeDefined();
		expect(TableRow).toBeDefined();
	});
});

describe("Table classes", () => {
	it("should render a dark table (default)", async () => {
		render(
			<Table data-testid="table" caption="the caption">
				<TableHead>
					<TableRow data-testid="table-row-head">
						<TableCell data-testid="table-cell-head">the header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow data-testid="table-row-body">
						<TableCell data-testid="table-cell-body">the body</TableCell>
					</TableRow>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		const wrapper = table.parentElement;
		const caption = table.querySelector("caption");
		const tableRowHead = await screen.findByTestId("table-row-head");
		const tableRowBody = await screen.findByTestId("table-row-body");
		const tableCellHead = await screen.findByTestId("table-cell-head");
		const tableCellBody = await screen.findByTestId("table-cell-body");

		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");

		expectToHaveClasses(table, [
			"w-full",
			"text-left",
			"text-sm",
			"text-copy-light",
		]);
		if (wrapper) {
			expectToHaveClasses(wrapper, [
				"relative",
				"w-full",
				"overflow-x-auto",
				"rounded-lg",
				"shadow-md",
				"bg-surface-darker",
				"text-copy-light",
			]);
		}
		if (caption) {
			expectToHaveClasses(caption, [
				"py-2",
				"text-sm",
				"font-bold",
				"text-copy-light",
			]);
		}
		if (tableRowHead) {
			expectToHaveClasses(tableRowHead, ["bg-table-head-dark"]);
		}
		if (tableRowBody) {
			expectToHaveClasses(tableRowBody, [
				"border-b",
				"last:border-0",
				"border-table-dark",
				"odd:bg-table-dark-odd",
				"even:bg-table-dark-even",
			]);
		}
		if (tableCellHead) {
			expectToHaveClasses(tableCellHead, ["px-4", "py-3"]);
		}
		if (tableCellBody) {
			expectToHaveClasses(tableCellBody, ["p-4"]);
		}
	});

	it("should render a light table", async () => {
		render(
			<Table data-testid="table" caption="the caption" mode="light">
				<TableHead>
					<TableRow data-testid="table-row-head">
						<TableCell data-testid="table-cell-head">the header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow data-testid="table-row-body">
						<TableCell data-testid="table-cell-body">the body</TableCell>
					</TableRow>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		const wrapper = table.parentElement;
		const caption = table.querySelector("caption");
		const tableRowHead = await screen.findByTestId("table-row-head");
		const tableRowBody = await screen.findByTestId("table-row-body");
		const tableCellHead = await screen.findByTestId("table-cell-head");
		const tableCellBody = await screen.findByTestId("table-cell-body");

		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");

		expectToHaveClasses(table, [
			"w-full",
			"text-left",
			"text-sm",
			"text-copy-dark",
		]);
		if (wrapper) {
			expectToHaveClasses(wrapper, [
				"relative",
				"w-full",
				"overflow-x-auto",
				"rounded-lg",
				"shadow-md",
				"bg-surface-light",
				"text-copy-dark",
			]);
		}
		if (caption) {
			expectToHaveClasses(caption, [
				"py-2",
				"text-sm",
				"font-bold",
				"text-copy-dark",
			]);
		}
		if (tableRowHead) {
			expectToHaveClasses(tableRowHead, ["bg-table-head-light"]);
		}
		if (tableRowBody) {
			expectToHaveClasses(tableRowBody, [
				"border-b",
				"last:border-0",
				"odd:bg-table-light-odd",
				"even:bg-table-light-even",
			]);
		}
		if (tableCellHead) {
			expectToHaveClasses(tableCellHead, ["px-4", "py-3"]);
		}
		if (tableCellBody) {
			expectToHaveClasses(tableCellBody, ["p-4"]);
		}
	});

	it("should render a table with a sticky header", async () => {
		render(
			<Table
				data-testid="table"
				caption="the caption"
				maxHeight="100px"
				stickyHeader
			>
				<TableHead data-testid="table-head">
					<TableRow data-testid="table-row-head">
						<TableCell data-testid="table-cell-head">the header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow data-testid="table-row-body">
						<TableCell data-testid="table-cell-body">the body</TableCell>
					</TableRow>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		const wrapper = table.parentElement;
		const caption = table.querySelector("caption");
		const tableHead = await screen.findByTestId("table-head");
		const tableRowHead = await screen.findByTestId("table-row-head");
		const tableRowBody = await screen.findByTestId("table-row-body");
		const tableCellHead = await screen.findByTestId("table-cell-head");
		const tableCellBody = await screen.findByTestId("table-cell-body");

		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");

		expectToHaveClasses(table, [
			"w-full",
			"text-left",
			"text-sm",
			"text-copy-light",
		]);
		if (wrapper) {
			expectToHaveClasses(wrapper, [
				"relative",
				"w-full",
				"overflow-y-scroll",
				"rounded-lg",
				"shadow-md",
				"bg-surface-darker",
				"text-copy-light",
			]);
			expectToHaveStyles(wrapper, { "max-height": "100px" });
		}
		if (caption) {
			expectToHaveClasses(caption, [
				"py-2",
				"text-sm",
				"font-bold",
				"text-copy-light",
			]);
		}
		if (tableHead) {
			expectToHaveClasses(tableHead, ["sticky", "top-0", "z-10"]);
		}
		if (tableRowHead) {
			expectToHaveClasses(tableRowHead, [
				"bg-table-head-dark",
				"dark:bg-table-head-light",
			]);
		}
		if (tableRowBody) {
			expectToHaveClasses(tableRowBody, [
				"border-b",
				"last:border-0",
				"border-table-dark",
				"odd:bg-table-dark-odd",
				"even:bg-table-dark-even",
			]);
		}
		if (tableCellHead) {
			expectToHaveClasses(tableCellHead, ["px-4", "py-3"]);
		}
		if (tableCellBody) {
			expectToHaveClasses(tableCellBody, ["p-4"]);
		}
	});

	it("should render a table with a sticky footer", async () => {
		render(
			<Table
				data-testid="table"
				caption="the caption"
				maxHeight="100px"
				stickyFooter
			>
				<TableHead data-testid="table-head">
					<TableRow data-testid="table-row-head">
						<TableCell data-testid="table-cell-head">the header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow data-testid="table-row-body">
						<TableCell data-testid="table-cell-body">the body</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter data-testid="table-footer">
					<TableRow data-testid="table-row-footer">
						<TableCell data-testid="table-cell-footer">the footer</TableCell>
					</TableRow>
				</TableFooter>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		const wrapper = table.parentElement;
		const caption = table.querySelector("caption");
		const tableFooter = await screen.findByTestId("table-footer");
		const tableRowFooter = await screen.findByTestId("table-row-footer");
		const tableRowBody = await screen.findByTestId("table-row-body");
		const tableCellFooter = await screen.findByTestId("table-cell-footer");
		const tableCellBody = await screen.findByTestId("table-cell-body");

		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");

		expectToHaveClasses(table, [
			"w-full",
			"text-left",
			"text-sm",
			"text-copy-light",
		]);
		if (wrapper) {
			expectToHaveClasses(wrapper, [
				"relative",
				"w-full",
				"overflow-y-scroll",
				"rounded-lg",
				"shadow-md",
				"bg-surface-darker",
				"text-copy-light",
			]);
			expectToHaveStyles(wrapper, { "max-height": "100px" });
		}
		if (caption) {
			expectToHaveClasses(caption, [
				"py-2",
				"text-sm",
				"font-bold",
				"text-copy-light",
			]);
		}
		if (tableFooter) {
			expectToHaveClasses(tableFooter, ["sticky", "bottom-0", "z-10"]);
		}
		if (tableRowFooter) {
			expectToHaveClasses(tableRowFooter, [
				"bg-table-head-dark",
				"dark:bg-table-head-light",
			]);
		}
		if (tableRowBody) {
			expectToHaveClasses(tableRowBody, [
				"border-b",
				"last:border-0",
				"border-table-dark",
				"odd:bg-table-dark-odd",
				"even:bg-table-dark-even",
			]);
		}
		expect(tableCellFooter).toBeInTheDocument();

		if (tableCellBody) {
			expectToHaveClasses(tableCellBody, ["p-4"]);
		}
	});

	it("should render a table with a custom wrapper class", async () => {
		render(
			<Table
				data-testid="table"
				caption="the caption"
				wrapperClassName="h-full max-h-[75vh]"
			>
				<TableHead>
					<TableRow data-testid="table-row-head">
						<TableCell data-testid="table-cell-head">the header</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow data-testid="table-row-body">
						<TableCell data-testid="table-cell-body">the body</TableCell>
					</TableRow>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		const wrapper = table.parentElement;
		const caption = table.querySelector("caption");
		const tableRowHead = await screen.findByTestId("table-row-head");
		const tableRowBody = await screen.findByTestId("table-row-body");
		const tableCellHead = await screen.findByTestId("table-cell-head");
		const tableCellBody = await screen.findByTestId("table-cell-body");

		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");

		expectToHaveClasses(table, [
			"w-full",
			"text-left",
			"text-sm",
			"text-copy-light",
		]);
		if (wrapper) {
			expectToHaveClasses(wrapper, [
				"relative",
				"w-full",
				"overflow-x-auto",
				"rounded-lg",
				"shadow-md",
				"bg-surface-darker",
				"text-copy-light",
				"h-full",
				"max-h-[75vh]",
			]);
		}
		if (caption) {
			expectToHaveClasses(caption, [
				"py-2",
				"text-sm",
				"font-bold",
				"text-copy-light",
			]);
		}
		if (tableRowHead) {
			expectToHaveClasses(tableRowHead, [
				"bg-table-head-dark",
				"dark:bg-table-head-light",
			]);
		}
		if (tableRowBody) {
			expectToHaveClasses(tableRowBody, [
				"border-b",
				"last:border-0",
				"border-table-dark",
				"odd:bg-table-dark-odd",
				"even:bg-table-dark-even",
			]);
		}
		if (tableCellHead) {
			expectToHaveClasses(tableCellHead, ["px-4", "py-3"]);
		}
		if (tableCellBody) {
			expectToHaveClasses(tableCellBody, ["p-4"]);
		}
	});
});

describe("Table components", () => {
	it("should render a table head", async () => {
		render(
			<table>
				<TableHead data-testid="table-head">
					<tr>
						<th>hello</th>
					</tr>
				</TableHead>
				<tbody>
					<tr>
						<td>the body</td>
					</tr>
				</tbody>
			</table>,
		);
		const tableHead = await screen.findByTestId("table-head");
		expect(tableHead).toBeInTheDocument();
		expect(tableHead.tagName).toBe("THEAD");
	});

	it("should render a table body", async () => {
		render(
			<table>
				<TableBody data-testid="table-body">
					<tr>
						<td>hello</td>
					</tr>
				</TableBody>
			</table>,
		);
		const tableBody = await screen.findByTestId("table-body");
		expect(tableBody).toBeInTheDocument();
		expect(tableBody.tagName).toBe("TBODY");
	});

	it("should render a default table cell (td)", async () => {
		render(
			<table>
				<tbody>
					<tr>
						<TableCell data-testid="table-cell">hello</TableCell>
					</tr>
				</tbody>
			</table>,
		);
		const tableCell = await screen.findByTestId("table-cell");
		expect(tableCell).toBeInTheDocument();
		expect(tableCell.tagName).toBe("TD");
	});

	it("should render a generated table cell (th)", async () => {
		render(
			<table>
				<TableHead>
					<tr>
						<TableCell data-testid="table-cell">hello</TableCell>
					</tr>
				</TableHead>
			</table>,
		);
		const tableCell = await screen.findByTestId("table-cell");
		expect(tableCell).toBeInTheDocument();
		expect(tableCell.tagName).toBe("TH");
	});

	it("should render a custom table cell (th)", async () => {
		render(
			<table>
				<tbody>
					<tr>
						<TableCell component="th" data-testid="table-cell">
							hello
						</TableCell>
					</tr>
				</tbody>
			</table>,
		);
		const tableCell = await screen.findByTestId("table-cell");
		expect(tableCell).toBeInTheDocument();
		expect(tableCell.tagName).toBe("TH");
	});

	it("should render a table row", async () => {
		render(
			<table>
				<tbody>
					<TableRow data-testid="table-row">
						<td>hello</td>
					</TableRow>
				</tbody>
			</table>,
		);
		const tableRow = await screen.findByTestId("table-row");
		expect(tableRow).toBeInTheDocument();
		expect(tableRow.tagName).toBe("TR");
	});

	it("should render a table", async () => {
		render(
			<Table data-testid="table">
				<TableHead>
					<tr>
						<th>hello</th>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<td>the body</td>
					</tr>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");
	});

	it("should render a table with a caption", async () => {
		render(
			<Table caption="hello" data-testid="table">
				<TableHead>
					<tr>
						<th>hello</th>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<td>the body</td>
					</tr>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");
		expect(table.querySelector("caption")).toBeInTheDocument();
	});

	it("should render a table with a summary", async () => {
		render(
			<Table summary="hello" data-testid="table">
				<TableHead>
					<tr>
						<th>hello</th>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<td>the body</td>
					</tr>
				</TableBody>
			</Table>,
		);
		const table = await screen.findByTestId("table");
		expect(table).toBeInTheDocument();
		expect(table.tagName).toBe("TABLE");
		expect(table.getAttribute("summary")).toBe("hello");
	});
});
