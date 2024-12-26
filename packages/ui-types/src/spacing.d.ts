declare namespace SpacingTypes {
	export type Types =
		| undefined
		| string
		| number
		| {
				b?: number;
				l?: number;
				r?: number;
				t?: number;
		  };

	export type Props = {
		spacing?: Types;
	};
}

export { SpacingTypes };
