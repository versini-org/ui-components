import { basename } from "node:path";

import bytes from "bytes";
import fs from "fs-extra";

const PR_STATS_JSON = "packages/ui-components/tmp/stats.json";
const MAIN_STATS_JSON = "packages/ui-components/stats/stats.json";
const UI_PACKAGE_JSON = "packages/ui-components/package.json";

const { readJsonSync } = fs;

const percentFormatter = new Intl.NumberFormat("en", {
	style: "percent",
	signDisplay: "exceptZero",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

let limitReached = false;
const currentStats = readJsonSync(PR_STATS_JSON);
const mainStats = readJsonSync(MAIN_STATS_JSON);
const { version } = readJsonSync(UI_PACKAGE_JSON);
const rows = [
	"| Status | File | Size (Gzip) | Limits |",
	"| ---- | ---- | ---- | ----- |",
];

Object.keys(currentStats[version]).forEach((key) => {
	const item = currentStats[version][key];
	const name = basename(key);
	const passed = item.passed ? "✅" : "🚫";
	if (!item.passed) {
		limitReached = true;
	}

	const diff = mainStats[version][key].fileSizeGzip - item.fileSizeGzip;
	const diffStr =
		diff !== 0
			? ` (${diff > 0 ? "+" : "-"}${bytes(Math.abs(diff), {
					unitSeparator: " ",
				})} ${percentFormatter.format(
					diff / mainStats[version][key].fileSizeGzip,
				)})`
			: "";

	rows.push(
		`${passed} | ${name} | ${bytes(item.fileSizeGzip, {
			unitSeparator: " ",
		})}${diffStr} | ${item.limit}`,
	);
});

const template = `
## Bundle Size
${rows.join("\n")}

Overall status: ${limitReached ? "🚫" : "✅"}
`;

const file = "tmp/pr-stats.md";
fs.outputFileSync(file, template);

if (limitReached) {
	// eslint-disable-next-line no-undef
	process.exit(1);
}
