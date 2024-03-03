import type { Story } from "@ladle/react";
import { ButtonIcon, TextInputMask } from "@versini/ui-components";
import { IconHide, IconShow } from "@versini/ui-icons";
import { useState } from "react";

export default {
	title: "Form components/TextInputMask",
	meta: {
		importName: "TextInputMask",
	},
	args: {
		label: "Enter password",
		name: "password",
		disabled: false,
		helperText: "",
		raw: false,
		focusMode: "system",
		mode: "system",
		error: false,
		inputClassName: "",
		className: "",
	},
	argTypes: {
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => {
	const [masked, setMasked] = useState(true);
	return (
		<div className="min-h-10">
			<form noValidate>
				<div className="flex gap-2">
					<TextInputMask
						{...args}
						onMaskChange={setMasked}
						rightElement={
							<ButtonIcon>{masked ? <IconShow /> : <IconHide />}</ButtonIcon>
						}
					/>
				</div>
			</form>
		</div>
	);
};
