export type SpacingType =
	| undefined
	| string
	| number
	| {
			b?: number;
			l?: number;
			r?: number;
			t?: number;
	  };

/**
 * Custom spacing for a component.
 * @example
 * ```tsx
 * <Button spacing={{ b: 2, l: 1, r: 1, t: 2 }}>Hello World</Button>
 * <Button spacing="2">Hello World</Button>
 * <Button spacing={2}>Hello World</Button>
 * ```
 */
export type SpacingProps = {
	spacing?: SpacingType;
};
