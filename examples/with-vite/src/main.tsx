import { Header, Main } from "@versini/ui-components";
import * as React from "react";

import { CustomCard } from "./components/CustomCard";

export const App: React.FC = () => (
	<div className="prose prose-dark dark:prose-lighter">
		<Header>
			<h1>Vite + TS + TailwindCSS</h1>
		</Header>
		<Main>
			<CustomCard />
		</Main>
	</div>
);
