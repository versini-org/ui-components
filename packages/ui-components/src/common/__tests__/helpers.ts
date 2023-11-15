/**
 * This function checks if the provided HTMLElement has
 * all the classes specified in the `classes` array.
 *
 * It is designed to be used in Jest tests ONLY.
 *
 * @param {HTMLElement} element - The element to check.
 * @param {string[]} classes - An array of class names that the element is expected to have.
 **/
export const expectToHaveClasses = (
	element: HTMLElement,
	classes: string[],
) => {
	const elementClasses = element.className.split(" ").sort();
	classes.forEach((expectedClass) => {
		expect(elementClasses).toContain(expectedClass);
	});
};
