import { basename } from "node:path";

import { fail, markdown } from "danger";
import { readJsonSync } from "fs-extra";

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
const res: BundlesizeStats = readJsonSync(
	"packages/ui-components/tmp/stats.json",
);
const { version } = readJsonSync("packages/ui-components/package.json");
const rows = [
	"| Status | File | Size (Gzip) | Limits |",
	"| ---- | ---- | ---- | ----- |",
];

res[version].forEach((item) => {
	const name = basename(item.path);
	const passed = item.passed ? "✅" : "🚫";
	if (!item.passed) {
		limitReached = true;
	}

	rows.push(
		`${passed} | ${name} |${format(item.fileSizeGzip, {
			unitSeparator: " ",
		})}| ${item.limit}`,
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
