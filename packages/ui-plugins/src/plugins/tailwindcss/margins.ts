const dynamicMargins = () => {
	const allowed = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44,
		48, 52, 56, 60, 64, 72, 80, 96,
	];
	const margins: string[] = [];
	allowed.forEach((num) => {
		margins.push(`mt-${num}`);
		margins.push(`mr-${num}`);
		margins.push(`mb-${num}`);
		margins.push(`ml-${num}`);
	});
	return margins;
};

export default dynamicMargins();
