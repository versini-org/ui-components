import { Story, linkTo } from "@ladle/react";
import { Button, ButtonIcon, Card } from "@versini/ui-components";
import { IconNext, IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";
import { Highlight, themes } from "prism-react-renderer";

export default {
	title: "Getting Started",
};

const codeBlock = `// App.tsx
import { Button, Card } from "@versini/ui-components";

/**
 * Now that the required components are
 * available in the scope, you can use them
 * in your return method in JSX:
 */
function App() {
  return (
    <Card
      header="Welcome to UI Components"
      footer={
        <Button mode="light" noBorder>
          Hooray
        </Button>
      }
    >
      <p>Hello World</p>
    </Card>
  );
}`;

export const Usage: Story<any> = () => (
	<>
		<h1>Usage</h1>

		<h2>Example</h2>

		<Highlight theme={themes.vsDark} code={codeBlock} language="jsx">
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

		<p className="mb-4">
			{"If everything works well, this is what you should see in your page:"}
		</p>
		<Card
			header="Welcome to UI Components"
			footer={
				<Button mode="light" noBorder>
					Hooray
				</Button>
			}
		>
			<p>Hello World</p>
		</Card>

		<div className="mt-8">
			<Flexgrid alignHorizontal="space-between">
				<FlexgridItem>
					<ButtonIcon
						labelRight="Configuration"
						onClick={linkTo("getting-started--configuration")}
					>
						<IconPrevious monotone />
					</ButtonIcon>
				</FlexgridItem>
				<FlexgridItem>
					<ButtonIcon
						labelLeft="Release tags"
						onClick={linkTo("getting-started--release-tags")}
					>
						<IconNext monotone />
					</ButtonIcon>
				</FlexgridItem>
			</Flexgrid>
		</div>
	</>
);
