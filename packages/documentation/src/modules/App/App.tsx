import { Button, ButtonLink, Footer } from "@versini/ui-components";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.getElementById("root")?.classList.remove("app-hidden");
	});

	return (
		<>
			<main className="mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl">
				<h1>UI Components</h1>
				<section>
					<h2>Buttons</h2>
					<div className="my-5 bg-slate-500 p-5">
						<Button className="mr-2">Default Button</Button>
						<Button className="mr-2" slim>
							Slim Button
						</Button>
						<ButtonLink className="mr-2" link="#">
							Link as a Button
						</ButtonLink>
						<ButtonLink className="mr-2" slim link="#">
							Link as a Slim Button
						</ButtonLink>
					</div>

					<div className="my-5 bg-slate-900 p-5">
						<Button className="mr-2" kind="light">
							Default Button
						</Button>
						<Button className="mr-2" slim kind="light">
							Slim Button
						</Button>
						<ButtonLink className="mr-2" link="#" kind="light">
							Link as a Button
						</ButtonLink>
						<ButtonLink className="mr-2" slim link="#" kind="light">
							Link as a Slim Button
						</ButtonLink>
					</div>
				</section>

				<section>
					<h2>Footer</h2>
					<div className="my-5 bg-slate-500 p-5">
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
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
