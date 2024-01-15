import { fail, markdown } from "danger";
import { readFileSync } from "fs";

let limitReached = false;
const res = JSON.parse(String(readFileSync("packages/bundlesize/stats.json")));

const rows = [
	"| Status | File | Size | Limit |",
	"| ---- | ---- | ---- | ----- |",
];

res.forEach((item: any) => {
	if (item.passed) {
		rows.push(`✅ | ${item.name} |(${item.size}B)| ${item.sizeLimit}B`);
	} else {
		limitReached = true;
		rows.push(`🚫 | ${item.name} |(${item.size}B)| ${item.sizeLimit}B`);
	}
});

markdown(
	`
## Bundle Size
` + rows.join("\n"),
);

if (limitReached) {
	fail("Bundle size limit exceeded");
}
