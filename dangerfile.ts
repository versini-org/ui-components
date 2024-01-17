import path from "node:path";

import bytes from "bytes";
import { fail, markdown } from "danger";
import fs from "fs-extra";

type BundlesizeStats = {
	[key: string]: Array<{
		fileSize: number;
		fileSizeGzip: number;
		limit: number;
		passed: boolean;
		path: string;
	}>;
};

let limitReached = false;
const res: BundlesizeStats = fs.readJsonSync(
	"packages/ui-components/tmp/stats.json",
);
const { version } = fs.readJsonSync("packages/ui-components/package.json");

const rows = [
	"| Status | File | Size (Gzip) | Limits |",
	"| ---- | ---- | ---- | ----- |",
];

res[version].forEach((item) => {
	const name = path.basename(item.path);
	const passed = item.passed ? "✅" : "🚫";
	if (!item.passed) {
		limitReached = true;
	}

	rows.push(
		`${passed} | ${name} |${bytes(item.fileSizeGzip, {
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
