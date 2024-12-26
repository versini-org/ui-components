import { Button } from "@versini/ui-button";
import { TextInput } from "@versini/ui-textinput";

export const CustomForm = () => {
	return (
		<form>
			<div className="flex gap-2">
				<TextInput
					spacing={{ t: 4 }}
					name="question"
					label="Type your question here"
					helperText="Powered by the sun"
					rightElement={
						<Button mode="light" focusMode="system" noBorder>
							Send
						</Button>
					}
				/>
			</div>
		</form>
	);
};
