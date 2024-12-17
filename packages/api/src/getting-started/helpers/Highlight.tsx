import { Unstyled } from "@storybook/blocks";
import { Highlight, Prism, themes } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;
await import("prismjs/components/prism-bash" as string);

export default ({
	codeBlock,
	language = "jsx",
}: { codeBlock: string; language: string }) => (
	<Unstyled>
		<Highlight theme={themes.vsDark} code={codeBlock} language={language}>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<pre style={style}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	</Unstyled>
);
