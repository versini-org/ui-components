import {
	autoUpdate,
	flip,
	FloatingFocusManager,
	FloatingList,
	FloatingNode,
	FloatingPortal,
	FloatingTree,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFloatingTree,
	useInteractions,
	useListItem,
	useListNavigation,
	useMergeRefs,
	useRole,
	useTypeahead,
} from "@floating-ui/react";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";

import { ButtonIcon } from "..";
import { MenuContext } from "./MenuContext";
import type { MenuProps } from "./MenuTypes";

export const Menu = forwardRef<
	HTMLButtonElement,
	MenuProps & React.HTMLProps<HTMLButtonElement>
>(({ children, label, icon, ...props }, userRef) => {
	const [isOpen, setIsOpen] = useState(false);
	const [hasFocusInside, setHasFocusInside] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
	const labelsRef = useRef<Array<string | null>>([]);
	const parent = useContext(MenuContext);

	const tree = useFloatingTree();
	const nodeId = useFloatingNodeId();
	const item = useListItem();

	const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
		nodeId,
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "bottom-start",
		middleware: [offset({ mainAxis: 4, alignmentAxis: 0 }), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context, {
		event: "mousedown",
		toggle: true,
		ignoreMouse: false,
	});
	const role = useRole(context, { role: "menu" });
	const dismiss = useDismiss(context, { bubbles: true });
	const listNavigation = useListNavigation(context, {
		listRef: elementsRef,
		activeIndex,
		nested: false,
		onNavigate: setActiveIndex,
		loop: true,
	});
	const typeahead = useTypeahead(context, {
		listRef: labelsRef,
		onMatch: isOpen ? setActiveIndex : undefined,
		activeIndex,
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
		[click, role, dismiss, listNavigation, typeahead],
	);

	// Event emitter allows you to communicate across tree components.
	// This effect closes all menus when an item gets clicked anywhere
	// in the tree.
	useEffect(() => {
		if (!tree) return;

		function handleTreeClick() {
			setIsOpen(false);
		}

		function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
			if (event.nodeId !== nodeId && event.parentId === null) {
				setIsOpen(false);
			}
		}

		tree.events.on("click", handleTreeClick);
		tree.events.on("menuopen", onSubMenuOpen);

		return () => {
			tree.events.off("click", handleTreeClick);
			tree.events.off("menuopen", onSubMenuOpen);
		};
	}, [tree, nodeId]);

	useEffect(() => {
		if (isOpen && tree) {
			tree.events.emit("menuopen", { nodeId });
		}
	}, [tree, isOpen, nodeId]);

	return (
		<FloatingTree>
			<FloatingNode id={nodeId}>
				<ButtonIcon
					noBorder
					label={label || "Open menu"}
					ref={useMergeRefs([refs.setReference, item.ref, userRef])}
					data-open={isOpen ? "" : undefined}
					data-focus-inside={hasFocusInside ? "" : undefined}
					{...getReferenceProps(
						parent.getItemProps({
							...props,
							onFocus(event: React.FocusEvent<HTMLButtonElement>) {
								props.onFocus?.(event);
								setHasFocusInside(false);
								parent.setHasFocusInside(true);
							},
						}),
					)}
				>
					{label}
					{icon}
				</ButtonIcon>

				<MenuContext.Provider
					value={{
						activeIndex,
						setActiveIndex,
						getItemProps,
						setHasFocusInside,
						isOpen,
					}}
				>
					<FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
						{isOpen && (
							<FloatingPortal>
								<FloatingFocusManager
									context={context}
									modal={false}
									initialFocus={0}
									returnFocus
								>
									<div
										ref={refs.setFloating}
										className="rounded-md bg-slate-300 p-4 outline-none sm:p-2"
										style={floatingStyles}
										{...getFloatingProps()}
									>
										{children}
									</div>
								</FloatingFocusManager>
							</FloatingPortal>
						)}
					</FloatingList>
				</MenuContext.Provider>
			</FloatingNode>
		</FloatingTree>
	);
});
