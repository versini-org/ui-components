/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context: __dirname, // to automatically find tsconfig.json
	entry: {
		main: "./src/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		extensionAlias: {
			".ts": [".js", ".ts"],
			".cts": [".cjs", ".cts"],
			".mts": [".mjs", ".mts"],
		},
	},
	module: {
		rules: [
			{
				test: /.([cm]?ts|tsx)$/,
				loader: "ts-loader",
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "src/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
