import { FLEXGRID_MAX_COLUMNS } from "../../common/constants";

export const getBasis = (span?: number | "auto") => {
	const flexBasis = "auto";

	if (!span) {
		return {
			flexBasis,
		};
	}

	if (span === "auto") {
		return {
			flexBasis,
			flexGrow: 1,
			maxWidth: "100%",
		};
	}

	if (typeof span === "number") {
		const basis = `${(span * 100) / FLEXGRID_MAX_COLUMNS}%`;
		return {
			flexBasis: `${basis}`,
			maxWidth: `${basis}`,
		};
	}
};
