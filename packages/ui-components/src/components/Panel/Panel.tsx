import { useEffect, useRef } from "react";

import { IconClose } from "../";
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalHeading,
} from "../private/Modal/Modal";
import type { PanelProps } from "./PanelTypes";
import { getPanelClassName, TYPE_PANEL } from "./utilities";

export const Panel = ({
	open,
	onOpenChange,
	title,
	children,
	footer,
	borderKind = "light",
	kind = TYPE_PANEL,
}: PanelProps) => {
	const originalTitleRef = useRef("");
	const panelClassName = getPanelClassName({ kind, borderKind });

	/**
	 * If the panel is opened, set the document
	 * title to the panel's title. If it's closed,
	 * restore the original document.title.
	 */
	useEffect(() => {
		if (open) {
			originalTitleRef.current = document.title;
			document.title = `${title} | ${originalTitleRef.current}`;
		}
		return () => {
			if (open) {
				document.title = originalTitleRef.current;
			}
		};
	}, [title, open]);

	return (
		<Modal open={open} onOpenChange={onOpenChange}>
			<ModalContent className={panelClassName.main}>
				<ModalHeading className="flex flex-row-reverse justify-between p-4 text-xl font-bold">
					<ModalClose>
						<IconClose />
					</ModalClose>
					<div>{title}</div>
				</ModalHeading>

				<ModalDescription className={panelClassName.content}>
					{children}
				</ModalDescription>

				{footer && <div className={panelClassName.content}>{footer}</div>}
			</ModalContent>
		</Modal>
	);
};
