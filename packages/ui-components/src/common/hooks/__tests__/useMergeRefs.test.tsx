import { render } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";

import { useMergeRefs } from "../../../components";

describe("useMergeRefs tests", () => {
	it("should combine multiple refs of different types", () => {
		const Dummy = React.forwardRef(function Dummy(_, ref) {
			React.useImperativeHandle(ref, () => "refValue");
			return null;
		});
		const refAsFunc = vi.fn();
		const refAsObj = { current: undefined };
		const Example: React.FC<{ visible: boolean }> = ({ visible }) => {
			const ref = useMergeRefs([refAsObj, refAsFunc]);
			return visible ? <Dummy ref={ref} /> : null;
		};
		const { rerender } = render(<Example visible />);
		expect(refAsFunc).toHaveBeenCalledTimes(1);
		expect(refAsFunc).toHaveBeenCalledWith("refValue");
		expect(refAsObj.current).toBe("refValue");

		rerender(<Example visible={false} />);
		expect(refAsFunc).toHaveBeenCalledTimes(2);
		expect(refAsFunc).toHaveBeenCalledWith(null);
		expect(refAsObj.current).toBe(null);
	});
});
