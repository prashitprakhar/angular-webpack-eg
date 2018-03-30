var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        //path: './dist',
        path: '/Users/prashitprakhar/Desktop/angular-webpack-eg/angular-webpack-eg/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.ts']
    }
}