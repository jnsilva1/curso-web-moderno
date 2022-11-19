const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const optimezeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output:{
       filename:'principal.js',
       path: __dirname + '/public'
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:'estilo.css'
        }),
    ],
    devServer:{
        contentBase: "./public",
        port: 9010
    },
    optimization:{
        minimizer:[
            new uglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new optimezeCSSAssetsPlugin({})
        ]
    },
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                miniCssExtractPlugin.loader,
                // 'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader',//interprata @impor, url()...
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}