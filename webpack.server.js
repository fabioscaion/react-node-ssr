const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;

module.exports = {
    entry: path.resolve(__dirname, './server.js'),
    output: { 
        filename: 'bundle_server.js'
    },
    target: 'node',
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        "options": {
                            publicPath: "./public"
                        }
                        
                    },
                    "css-loader", 
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../public/bundle.css"
        }),
    ],
}