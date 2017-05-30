module.exports = {
    entry: ["./utils.js", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    watch: false,
    module: {
        rules: [
            {
                test: "/\.js$",
                enforce: "pre",
                exclude: "/node_modules/",
                loader: "jshint-loader"
            },
            {
                test: "/\.es6$",
                exclude: "/node_modules/",
                loader: "babel-loader"
            }
        ]
    },

    resolve:  {
        extensions: ['.js', '.es6']
    }
}