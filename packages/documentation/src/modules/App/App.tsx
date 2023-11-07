import * as UI from "@versini/ui-components";
import clsx from "clsx";
import { useEffect } from "react";

const {
	Button,
	ButtonIcon,
	ButtonLink,
	Footer,
	IconDogInShield,
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconDog,
	IconEdit,
	IconRestore,
	IconSettings,
	IconUser,
} = UI;

const Section = ({
	children,
	className,
	kind = "dark",
	raw = false,
}: {
	kind?: string;
	raw?: boolean;
	className?: string;
	children: React.ReactNode;
}) => {
	const generatedClassName = clsx(className, {
		"mb-5 flex items-center gap-x-2 p-5": !raw,
		"bg-slate-900": kind === "dark",
		"bg-slate-500": kind === "light",
	});
	return <div className={generatedClassName}>{children}</div>;
};

function App() {
	useEffect(() => {
		document.getElementById("root")?.classList.remove("app-hidden");
	});

	return (
		<>
			<main className="mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl">
				<h1 className="text-center font-bold">UI Components</h1>
				<section>
					<h2>Buttons</h2>
					<Section kind="light">
						<ButtonIcon label="Settings">
							<IconSettings />
						</ButtonIcon>
						<Button>Default Button</Button>
						<Button slim>Slim Button</Button>
						<ButtonLink link="#">Link as a Button</ButtonLink>
					</Section>

					<Section>
						<ButtonIcon label="Settings" kind="light">
							<IconSettings />
						</ButtonIcon>
						<Button kind="light">Default Button</Button>
						<Button slim kind="light">
							Slim Button
						</Button>
						<ButtonLink link="#" kind="light">
							Link as a Button
						</ButtonLink>
					</Section>
				</section>

				<section>
					<h2>Footer</h2>
					<Section raw className="grid">
						<Footer
							row1={
								<div>
									App Name v{import.meta.env.BUILDVERSION} -{" "}
									{import.meta.env.BUILDTIME}
								</div>
							}
							row2={
								<div>&copy; {new Date().getFullYear()} something something</div>
							}
						/>
					</Section>
					<Section raw className="mb-5 mt-1 grid">
						<Footer
							noPaddings
							row1={
								<div>
									App Name v{import.meta.env.BUILDVERSION} -{" "}
									{import.meta.env.BUILDTIME}
								</div>
							}
							row2={
								<div>&copy; {new Date().getFullYear()} something something</div>
							}
						/>
					</Section>
				</section>

				<section>
					<h2>Icons</h2>
					<Section kind="light">
						<IconDog className={"h-9 w-9"} />
					</Section>
					<Section kind="light">
						<IconDogInShield />
						<IconClose />
						<IconCopied />
						<IconCopy />
						<IconDelete />
						<IconEdit />
						<IconRestore />
						<IconSettings />
						<IconUser />
					</Section>
				</section>
			</main>
		</>
	);
}

export default App;
