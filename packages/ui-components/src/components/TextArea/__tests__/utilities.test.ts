import { adjustLabelAndHelperText } from "../utilities";

describe("adjustLabelAndHelperText", () => {
	it("should return no offsets if scrollHeight is 0", () => {
		const res = adjustLabelAndHelperText({
			scrollHeight: 0,
			currentHeight: 0,
			currentHelperTextOffset: 0,
			currentLabelOffset: 0,
		});
		expect(res).toStrictEqual({
			labelOffset: undefined,
			helperTextOffset: undefined,
			scrollHeight: 0,
		});
	});

	it("should return offsets if scrollHeight and currentHeight are different and positive", () => {
		const res = adjustLabelAndHelperText({
			scrollHeight: 200,
			currentHeight: 400,
			currentHelperTextOffset: 0,
			currentLabelOffset: 0,
		});
		expect(res).toStrictEqual({
			labelOffset: 100,
			helperTextOffset: -100,
			scrollHeight: 200,
		});
	});
});
