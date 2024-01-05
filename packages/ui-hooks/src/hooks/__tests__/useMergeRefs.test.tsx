import { render } from "@testing-library/react";
import React, { createRef, useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { useMergeRefs } from "..";

function TestComponent({
	refs,
}: {
	refs: React.ForwardedRef<HTMLButtonElement>[];
}) {
	const ref = useRef<HTMLButtonElement>(null);
	return <button ref={useMergeRefs([...refs, ref])} type="button" />;
}

function TestComponentWithNoRef({
	refs,
}: {
	refs: React.ForwardedRef<HTMLButtonElement>[];
}) {
	return <button ref={useMergeRefs([...refs])} type="button" />;
}

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

	it("assigns refs to all given arguments", () => {
		const objectRef = createRef<HTMLButtonElement | null>();
		let fnRefValue: HTMLButtonElement | null = null;
		const fnRef = (node: HTMLButtonElement | null) => {
			fnRefValue = node;
		};

		render(<TestComponent refs={[objectRef, fnRef]} />);
		expect(fnRefValue! instanceof HTMLButtonElement).toBe(true);
		expect(objectRef.current instanceof HTMLButtonElement).toBe(true);
	});

	it("does return null if no refs are passed", () => {
		const { container } = render(<TestComponentWithNoRef refs={[]} />);
		expect(container.firstChild).not.toBe(null);
	});
});
