/** @type {import('@ladle/react').UserConfig} */

export default {
	port: 8080,
	defaultStory: "getting-started--installation",
	storyOrder: ["getting-started*", "Components*", "Form-components*"],
	appendToHead: `<style>
    :root {
      --ladle-bg-color-primary: rgb(100 116 139);
    }
  </style>`,

	hotkeys: {
		search: ["/", "meta+p"],
		nextStory: [],
		previousStory: [],
		nextComponent: [],
		previousComponent: [],
		control: [],
		darkMode: [],
		fullscreen: [],
		width: [],
		rtl: [],
		source: [],
		a11y: [],
	},
	addons: {
		a11y: {
			enabled: true,
		},
		action: {
			enabled: false,
			defaultState: [],
		},
		control: {
			enabled: true,
			defaultState: {},
		},
		ladle: {
			enabled: false,
		},
		mode: {
			enabled: false,
			defaultState: "full",
		},
		msw: {
			enabled: false,
		},
		rtl: {
			enabled: false,
			defaultState: false,
		},
		source: {
			enabled: true,
			defaultState: false,
		},
		theme: {
			enabled: false,
			defaultState: "light",
		},
		width: {
			enabled: false,
			options: {
				xsmall: 414,
				small: 640,
				medium: 768,
				large: 1024,
			},
			defaultState: 0,
		},
	},
};
