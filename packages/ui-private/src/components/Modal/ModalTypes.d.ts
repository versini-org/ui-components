export interface ModalOptions {
	initialOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	open?: boolean;
}

export type ContextType =
	| (ReturnType<ModalOptions> & {
			setDescriptionId: React.Dispatch<
				React.SetStateAction<string | undefined>
			>;
			setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
	  })
	| null;
