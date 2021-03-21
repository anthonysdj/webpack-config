const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment =
    process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "staging";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    target: isDevelopment ? "web" : "browserslist",

    entry: "./src/index.js", // only add this if you want to change default and if you are adding react refresh plugin

    output: {
        path: path.resolve(__dirname, "dist"), // build files output path needed by html webpack plugin
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", // if asset is small in size webpack will inline
                // type: "asset/resource", // normal
                // type: "asset/inline", // makes images inline
                // parser: {
                //     // used to set when images will be inlined
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     },
                // },
            },
            {
                test: /\.(s[ac]|c)ss$/i, // sass or scss or css
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(), // recommended to be in the top of array
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"], // for importing of files without specifying extension
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};
