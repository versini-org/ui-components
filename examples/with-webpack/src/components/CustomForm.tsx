import { Button } from "@versini/ui-components";
import { TextInput } from "@versini/ui-form";

export const CustomForm = () => {
	return (
		<form>
			<div className="flex gap-2">
				<TextInput
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
