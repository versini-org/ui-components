import {
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
} from "@floating-ui/react";
import * as React from "react";

import type { ModalTypes } from "@versini/ui-types";
import { ModalContext } from "./ModalContext";

export function useModal({
	initialOpen = false,
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: ModalTypes.Options = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
	const [labelId, setLabelId] = React.useState<string | undefined>();
	const [descriptionId, setDescriptionId] = React.useState<
		string | undefined
	>();

	/* v8 ignore next 2 */
	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		open,
		onOpenChange: setOpen,
	});

	const context = data.context;

	const click = useClick(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context, {
		outsidePress: false,
		outsidePressEvent: "mousedown",
	});
	const role = useRole(context);

	const interactions: any = useInteractions([click, dismiss, role]);

	return React.useMemo(
		() => ({
			open,
			setOpen,
			...interactions,
			...data,
			labelId,
			descriptionId,
			setLabelId,
			setDescriptionId,
		}),
		[open, setOpen, interactions, data, labelId, descriptionId],
	);
}

export const useModalContext = () => {
	const context = React.useContext(ModalContext);

	/* v8 ignore next 3 */
	if (context == null) {
		throw new Error("Modal components must be wrapped in <Modal />");
	}

	return context;
};
