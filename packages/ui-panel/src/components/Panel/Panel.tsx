import { ButtonIcon } from "@versini/ui-button";
import { IconClose } from "@versini/ui-icons";
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalHeading,
} from "@versini/ui-modal";
import { useEffect, useRef } from "react";

import type { PanelProps } from "./PanelTypes";
import { TYPE_PANEL, getPanelClassName } from "./utilities";

export const Panel = ({
	open,
	onOpenChange,
	title,
	children,
	footer,
	borderMode = "light",
	kind = TYPE_PANEL,
	className,
}: PanelProps) => {
	const originalTitleRef = useRef("");
	const panelClassName = getPanelClassName({ className, kind, borderMode });

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
		<>
			{open && (
				<Modal open={open} onOpenChange={onOpenChange}>
					<ModalContent className={panelClassName.main}>
						<div className="flex flex-row-reverse items-center justify-between">
							<ModalClose
								className={panelClassName.close}
								trigger={
									<ButtonIcon
										mode="dark"
										focusMode="light"
										noBorder
										label="Close"
									>
										<IconClose />
									</ButtonIcon>
								}
							/>
							<ModalHeading className={panelClassName.header}>
								{title}
							</ModalHeading>
						</div>

						<ModalDescription className={panelClassName.content}>
							{children}
						</ModalDescription>

						{footer && <div className={panelClassName.footer}>{footer}</div>}
					</ModalContent>
				</Modal>
			)}
		</>
	);
};
