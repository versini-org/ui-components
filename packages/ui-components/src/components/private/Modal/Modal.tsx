import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	useMergeRefs,
} from "@floating-ui/react";
import clsx from "clsx";
import * as React from "react";

import { ButtonIcon, useUniqueId } from "../..";
import { ModalContext } from "./ModalContext";
import { useModal, useModalContext } from "./ModalHooks";
import type { ModalOptions } from "./ModalTypes";

export function Modal({
	children,
	...options
}: {
	children: React.ReactNode;
} & ModalOptions) {
	const dialog = useModal(options);
	return (
		<ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>
	);
}

type overlayBackgroundProps = {
	overlayBackground?: string;
};
export const ModalContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement> & overlayBackgroundProps
>(function ModalContent(props, propRef) {
	const { context: floatingContext, ...context } = useModalContext();
	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!floatingContext.open) return null;

	const { overlayBackground, ...rest } = props;
	const overlayClass = clsx("grid place-items-center", {
		[`${overlayBackground}`]: overlayBackground,
		"bg-black sm:bg-black/[.8]": !overlayBackground,
	});

	return (
		<FloatingPortal>
			<FloatingOverlay className={overlayClass} lockScroll>
				<FloatingFocusManager context={floatingContext}>
					<div
						ref={ref}
						aria-labelledby={context.labelId}
						aria-describedby={context.descriptionId}
						{...context.getFloatingProps(rest)}
					>
						{rest.children}
					</div>
				</FloatingFocusManager>
			</FloatingOverlay>
		</FloatingPortal>
	);
});

export const ModalHeading = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLProps<HTMLHeadingElement>
>(function ModalHeading({ children, ...props }, ref) {
	const { setLabelId } = useModalContext();
	const id = useUniqueId();

	// Only sets `aria-labelledby` on the Modal root element
	// if this component is mounted inside it.
	React.useLayoutEffect(() => {
		setLabelId(id);
		return () => setLabelId(undefined);
	}, [id, setLabelId]);

	return (
		<h1 {...props} ref={ref} id={id}>
			{children}
		</h1>
	);
});

export const ModalDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLProps<HTMLParagraphElement>
>(function ModalDescription({ children, ...props }, ref) {
	const { setDescriptionId } = useModalContext();
	const id = useUniqueId();

	// Only sets `aria-describedby` on the Modal root element
	// if this component is mounted inside it.
	React.useLayoutEffect(() => {
		setDescriptionId(id);
		return () => setDescriptionId(undefined);
	}, [id, setDescriptionId]);

	return (
		<div {...props} ref={ref} id={id}>
			{children}
		</div>
	);
});

export const ModalClose = React.forwardRef<
	HTMLButtonElement,
	{
		children?: React.ReactNode;
	}
>(function ModalClose(props, ref) {
	const { setOpen } = useModalContext();
	const { children, ...rest } = props;
	return (
		<ButtonIcon
			noBorder
			label="Close"
			type="button"
			{...rest}
			ref={ref}
			onClick={() => setOpen(false)}
		>
			{children}
		</ButtonIcon>
	);
});