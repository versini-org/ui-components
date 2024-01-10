# Tailwind CSS Plugin

This plugin adds support for [Tailwind CSS](https://tailwindcss.com/) to the UI-component project.

## Installation

```bash
yarn add @versini/ui-plugins
```

## Usage

### Basic usage

```js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-plugins";

export default twPlugin.merge({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
```

### With custom configuration

```js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-plugins";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ...twPlugin.content],
	plugins: [...twPlugin.plugins],
	safelist: [...twPlugin.safelist],
};
```
