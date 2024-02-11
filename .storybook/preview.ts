import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "Primary",
			values: [
				{
					name: "Primary",
					value: "rgb(var(--background-rgb))",
				},
			],
		},
	},
};

export default preview;
