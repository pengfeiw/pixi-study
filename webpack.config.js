const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.ts") },
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/i,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ]
};
