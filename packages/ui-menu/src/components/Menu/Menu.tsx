import {
	FloatingFocusManager,
	FloatingList,
	FloatingNode,
	FloatingPortal,
	FloatingTree,
	autoUpdate,
	flip,
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
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import { MenuContext } from "./MenuContext";
import type { MenuProps } from "./MenuTypes";
import { getDisplayName } from "./utilities";

export const MenuComponent = forwardRef<
	HTMLButtonElement,
	MenuProps & React.HTMLProps<HTMLButtonElement>
>(
	(
		{
			trigger,
			children,
			label = "Open menu",
			defaultPlacement = "bottom-start",
			onOpenChange,
			spacing,
			mode = "system",
			focusMode = "system",
			...props
		},
		userRef,
	) => {
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
			onOpenChange: (args) => {
				setIsOpen(args);
				onOpenChange?.(args);
			},
			placement: defaultPlacement,
			strategy: "fixed",
			middleware: [offset({ mainAxis: 10 }), flip(), shift()],
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

		const { getReferenceProps, getFloatingProps, getItemProps } =
			useInteractions([click, role, dismiss, listNavigation, typeahead]);

		const noInternalClick =
			getDisplayName(trigger) === "Button" ||
			getDisplayName(trigger) === "ButtonIcon";

		const uiButtonsExtraProps = noInternalClick
			? {
					noInternalClick,
					focusMode,
					mode,
					spacing,
				}
			: {};

		const triggerElement = React.cloneElement(trigger as React.ReactElement, {
			...uiButtonsExtraProps,
			"aria-label": label,
			"data-open": isOpen ? "" : undefined,
			"data-focus-inside": hasFocusInside ? "" : undefined,
			ref: useMergeRefs([refs.setReference, item.ref, userRef]),
			...getReferenceProps(
				parent.getItemProps({
					...props,
				}),
			),
		});

		// Event emitter allows you to communicate across tree components.
		// This effect closes all menus when an item gets clicked anywhere
		// in the tree.
		useEffect(() => {
			/* v8 ignore next 3 */
			if (!tree) {
				return;
			}

			function handleTreeClick() {
				setIsOpen(false);
				onOpenChange?.(false);
			}

			tree.events.on("click", handleTreeClick);

			return () => {
				tree.events.off("click", handleTreeClick);
			};
		}, [tree, onOpenChange]);

		useEffect(() => {
			if (isOpen && tree) {
				tree.events.emit("menuopen", { nodeId });
			}
		}, [tree, isOpen, nodeId]);

		return (
			<FloatingNode id={nodeId}>
				{triggerElement}

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
										className="rounded-md bg-surface-light p-4 shadow-sm shadow-border-dark outline-none sm:p-2"
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
		);
	},
);

export const Menu = forwardRef<
	HTMLButtonElement,
	MenuProps & React.HTMLProps<HTMLButtonElement>
>((props, ref) => {
	return (
		<FloatingTree>
			<MenuComponent {...props} ref={ref} />
		</FloatingTree>
	);
});

Menu.displayName = "Menu";
MenuComponent.displayName = "MenuComponent";
