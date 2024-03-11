/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

module.exports = twPlugin.merge({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
});
