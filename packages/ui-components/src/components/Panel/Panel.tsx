import clsx from "clsx";
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

export const Panel = ({
	open,
	onOpenChange,
	title,
	children,
	borderKind = "light",
}: PanelProps) => {
	const originalTitleRef = useRef("");
	const mainClass = clsx(
		"flex h-full min-h-[95%] w-full flex-col bg-surface-light sm:h-auto sm:min-h-[10rem] sm:w-[95%] sm:rounded-lg md:max-w-2xl",
		{
			"sm:border-2 sm:border-border-dark": borderKind === "dark",
			"sm:border-2 sm:border-border-light": borderKind === "light",
		},
	);

	/**
	 * If the panel is opened, set the document
	 * title to the panel's title. If it's closed,
	 * restore the original document.title.
	 */
	useEffect(() => {
		if (open) {
			originalTitleRef.current = document.title;
			document.title = title;
		}
		return () => {
			if (open) {
				document.title = originalTitleRef.current;
			}
		};
	}, [title, open]);

	return (
		<Modal open={open} onOpenChange={onOpenChange}>
			<ModalContent className={mainClass}>
				<ModalHeading className="flex flex-row-reverse justify-between p-4 text-xl font-bold">
					<ModalClose>
						<IconClose />
					</ModalClose>
					<div>{title}</div>
				</ModalHeading>

				<ModalDescription className="flex flex-grow flex-col p-2 sm:p-4">
					{children}
				</ModalDescription>
			</ModalContent>
		</Modal>
	);
};
