declare namespace ModalTypes {
	export type Options = {
		initialOpen?: boolean;
		onOpenChange?: (open: boolean) => void;
		open?: boolean;
	};

	export type Context =
		| (ReturnType<Options> & {
				setDescriptionId: React.Dispatch<
					React.SetStateAction<string | undefined>
				>;
				setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
		  })
		| null;
}

export { ModalTypes };
