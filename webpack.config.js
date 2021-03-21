const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i, // sass or scss or css
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx", ".tsx"], // for importing of files without specifying extension
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};
