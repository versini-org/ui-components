/* global process */

import path from "node:path";
import util from "node:util";

import fs from "fs-extra";

const config = JSON.parse(
	await fs.readFile(path.join(process.cwd(), "lib", "icons", "config.json")),
);

const iconTemplate = ({
	name,
	originalName,
	title,
	viewBox,
	svgData,
	copyright,
	monotone,
}) => {
	const monotoneProp = monotone
		? ""
		: "// eslint-disable-next-line @typescript-eslint/no-unused-vars";
	const opacityLine1 = monotone ? "\n\t/* v8 ignore next 1 */" : "";
	const opacityLine2 = monotone
		? `\n\tconst opacity = monotone ? "1" : "0.4";`
		: "";

	return `/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run \`yarn build:icons\`.
 *
 * Original name: ${originalName}.svg
 *
 * ${copyright}
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const ${name} = ({
	className,
	viewBox,
	spacing,
	title,
	${monotoneProp}
	monotone,
	...rest
}: IconsProps) => {${opacityLine1}${opacityLine2}
	return (
		<SvgIcon
			defaultViewBox="${viewBox}"
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "${title}"}
			{...rest}
		>
			${svgData}
		</SvgIcon>
	);
};
`;
};

export const upperFirst = (string_) =>
	string_[0].toUpperCase() + string_.slice(1);

const generateIcons = async () => {
	const readdir = util.promisify(fs.readdir);
	const readFile = util.promisify(fs.readFile);

	const svgFolder = path.join(process.cwd(), "lib", "icons", "svg");
	const icons = await readdir(svgFolder);

	await Promise.all(
		icons.map(async (icon) => {
			const originalName = icon.replace(".svg", "");
			const title = config[originalName]?.title || originalName;
			const monotone = config[originalName]?.monotone || false;
			const iconName =
				config[originalName]?.name || "Icon" + upperFirst(originalName);

			const svg = await readFile(path.join(svgFolder, `${icon}`), "utf8");

			/** Need to extract the comments from the svg file, including the
			 * opening and closing tags
			 */
			const comments = svg.match(/<!--[^>]*-->/g).join("");

			/** Need to extract the viewBox from the svg file */
			const viewBox = svg.match(/viewBox="([^"]*)"/)[1];

			/** Need to extract the content of the svg file between the <svg> tags,
			 * remove any comments, extra white space and fix the closing tags.
			 */
			const svgData = svg
				.match(/<svg[^>]*>(.*)<\/svg>/s)[1]
				.replace(comments, "")
				.replace(/class="/g, 'className="')
				.replace(
					/opacity=".4"/g,
					monotone ? "opacity={opacity}" : 'opacity="0.4"',
				)
				.replace('"/>', '" />')
				.trimStart()
				.trimEnd();

			const iconFile = iconTemplate({
				name: iconName,
				originalName,
				title,
				viewBox,
				svgData,
				copyright: comments.replace("<!--", "").replace("-->", ""),
				monotone,
			});
			return fs.outputFile(
				path.join(
					process.cwd(),
					"src",
					"components",
					"Icons",
					`${iconName}.tsx`,
				),
				iconFile,
				"utf8",
			);
		}),
	);
};

(async () => {
	await generateIcons();
})();
