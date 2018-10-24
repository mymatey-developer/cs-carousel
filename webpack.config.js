const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'assets/js/script.js': path.resolve(__dirname, 'src/js/script.js'),
        'assets/css/style.css': path.resolve(__dirname, 'src/scss/style.scss')
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name]',
    },
    devServer: {
        contentBase: './dist/',
        port: 4000,
        historyApiFallback: {
          index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?url=false', 'sass-loader'],
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=/assets/img/[name].[ext]',
                        options: {}  
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name]', {
            allChunks: true,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/src/html',to:''}
        ]),
        new CopyWebpackPlugin([
            {from: __dirname + '/src/img',to:'assets/img'}
        ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    ]
};