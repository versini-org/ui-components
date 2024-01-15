import { markdown } from "danger";
import { readFileSync } from "fs";

const res = JSON.parse(String(readFileSync("packages/bundlesize/stats.json")));

const rows = [
	"| Status | File | Size | Limit |",
	"| ---- | ---- | ---- | ----- |",
];

res.forEach((item: any) => {
	if (item.passed) {
		rows.push(`✅ | ${item.name} |(${item.size}B)| ${item.sizeLimit}B`);
	} else {
		rows.push(`🚫 | ${item.name} |(${item.size}B)| ${item.sizeLimit}B`);
	}
});

markdown(
	`
## Bundle Size
` + rows.join("\n"),
);
