import { basename } from "node:path";

import { fail, markdown } from "danger";
import { readJsonSync } from "fs-extra";

const PR_STATS_JSON = "packages/ui-components/tmp/stats.json";
const MAIN_STATS_JSON = "packages/ui-components/stats/stats.json";
const UI_PACKAGE_JSON = "packages/ui-components/package.json";

type BundlesizeStats = {
	[key: string]: Array<{
		fileSize: number;
		fileSizeGzip: number;
		limit: number;
		passed: boolean;
		path: string;
	}>;
};

const map = {
	b: 1,
	kb: 1 << 10,
	mb: 1 << 20,
	gb: 1 << 30,
	tb: Math.pow(1024, 4),
	pb: Math.pow(1024, 5),
};
const formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
const formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

const percentFormatter = new Intl.NumberFormat("en", {
	style: "percent",
	signDisplay: "exceptZero",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

function format(value, options) {
	if (!Number.isFinite(value)) {
		return null;
	}

	const mag = Math.abs(value);
	const thousandsSeparator = (options && options.thousandsSeparator) || "";
	const unitSeparator = (options && options.unitSeparator) || "";
	const decimalPlaces =
		options && options.decimalPlaces !== undefined ? options.decimalPlaces : 2;
	const fixedDecimals = Boolean(options && options.fixedDecimals);
	let unit = (options && options.unit) || "";

	if (!unit || !map[unit.toLowerCase()]) {
		if (mag >= map.pb) {
			unit = "PB";
		} else if (mag >= map.tb) {
			unit = "TB";
		} else if (mag >= map.gb) {
			unit = "GB";
		} else if (mag >= map.mb) {
			unit = "MB";
		} else if (mag >= map.kb) {
			unit = "KB";
		} else {
			unit = "B";
		}
	}

	const val = value / map[unit.toLowerCase()];
	let str = val.toFixed(decimalPlaces);

	if (!fixedDecimals) {
		str = str.replace(formatDecimalsRegExp, "$1");
	}

	if (thousandsSeparator) {
		str = str
			.split(".")
			.map(function (s, i) {
				return i === 0
					? s.replace(formatThousandsRegExp, thousandsSeparator)
					: s;
			})
			.join(".");
	}

	return str + unitSeparator + unit;
}

let limitReached = false;
const currentStats: BundlesizeStats = readJsonSync(PR_STATS_JSON);
const mainStats: BundlesizeStats = readJsonSync(MAIN_STATS_JSON);
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
			? ` (${diff > 0 ? "+" : "-"}${format(Math.abs(diff), {
					unitSeparator: " ",
				})} ${percentFormatter.format(
					diff / mainStats[version][key].fileSizeGzip,
				)})`
			: "";

	rows.push(
		`${passed} | ${name} | ${format(item.fileSizeGzip, {
			unitSeparator: " ",
		})}${diffStr} | ${item.limit}`,
	);
});

markdown(
	`
## Bundle Size
` + rows.join("\n"),
);

if (limitReached) {
	fail("Bundle size limit exceeded");
}
