import path from "node:path";
import util from "node:util";

import fs from "fs-extra";

const iconTemplate = ({
	name,
	viewBox,
	svgData,
}) => `import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import { defaultIconSize } from "./constants";
import type { IconsProps } from "./IconsTypes";

export const Icon${name} = ({
	className,
	viewBox,
	spacing,
	...rest
}: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="${viewBox}"
			defaultClassName={defaultIconSize}
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title="${name}"
			{...rest}
		>
			${svgData}
		</SvgIcon>
	);
};
`;

export const upperFirst = (string_) =>
	string_[0].toUpperCase() + string_.slice(1);

const generateIcons = async () => {
	const readdir = util.promisify(fs.readdir);
	const readFile = util.promisify(fs.readFile);

	const svgFolder = path.join(process.cwd(), "lib", "icons", "svg");
	const icons = await readdir(svgFolder);
	// const iconsNames = icons.map((icon) => upperFirst(icon.replace(".svg", "")));
	// console.log("==> ", iconsNames);

	const iconsData = await Promise.all(
		icons.map(async (icon) => {
			// need to extract the content of the svg file between the <svg> tags
			const svg = await readFile(path.join(svgFolder, `${icon}`), "utf8");
			const svgData = svg
				.match(/<svg[^>]*>(.*)<\/svg>/s)[1]
				.replace("<!--", "{/* ")
				.replace("-->", "*/}");

			const viewBox = svg.match(/viewBox="([^"]*)"/)[1];
			const iconName = upperFirst(icon.replace(".svg", ""));
			const iconFile = iconTemplate({
				name: iconName,
				viewBox,
				svgData,
			});
			return fs.outputFile(
				path.join(
					process.cwd(),
					"src",
					"components",
					"Icons",
					`Icon${iconName}.tsx`,
				),
				iconFile,
				"utf8",
			);
		}),
	);

	console.log("==> ", iconsData);
};

(async () => {
	await generateIcons();
})();
