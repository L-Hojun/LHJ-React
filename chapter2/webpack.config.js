const path = require('path');

module.exports = {
    name: 'WordRelay-Setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']                          // 파일 확장자 생략가능
    },
    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react', ],
                plugins: ['@babel/plugin-proposal-class-properties',]
            },
        }],
    },
    plugins: [
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname,'dist'),
        publicPath: `/dist`,
    },
};