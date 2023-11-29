module.exports = async () => {
	return {
		template: `
      <div class="icon">
        <slot></slot>
      </div>
    `,
	};
};

/**
 * const iconsPromises = iconsNames.map(async (icon) => {
		const svg = await readFile(path.join(svgFolder, `${icon}.svg`), "utf8");
		const viewBox = svg.match(/viewBox="([^"]*)"/)[1];
		const svgPath = svg.match(/<path[^>]* d="([^"]*)"/)[1];
		const iconFile = iconTemplate({ name: icon, viewBox, svgPath });
		return fs.outputFile(
			path.join(process.cwd(), "src", "components", "Icons", `Icon${icon}.tsx`),
			iconFile,
			"utf8",
		);
	});
 */
