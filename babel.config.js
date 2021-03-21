module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }], // so that react import only needs to be imported if you need to use react.Methods
    ],
};
