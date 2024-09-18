import { Header } from "@versini/ui-header";
import { Main } from "@versini/ui-main";
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
