const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entryPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "..", "library-backend", "dist");

module.exports = {
    entry: entryPath,
    output: {
        filename: "bundle.js",
        path: distPath,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
};