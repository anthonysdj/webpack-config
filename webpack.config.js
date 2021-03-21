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

    output: {
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
