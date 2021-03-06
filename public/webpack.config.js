﻿/*
 * DESCRIPTION: Webpack Config for ReactJS Redux w/ NPM Install Instructions
 * Create Scripts Subfolder "React"
 * npm init ~/Scripts/React/
 * npm i --save react react-dom react-router-dom prop-types axios redux react-redux redux-saga react-bootstrap react-transition-group lodash reselect redux-form react-router-redux
 * npm i --save-dev babel-core babel-loader webpack webpack-cli babel-preset-env babel-preset-react babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-polyfill webpack-bundle-analyzer babel-plugin-syntax-dynamic-import
 * Add to package.json "scripts"=>"dev": "webpack --config webpack.config.js --mode development -w", "build": "webpack --config webpack.config.js --mode production"
 * Create react.js Entry Point
*/
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', './React.js'],
    output: {
        path: __dirname,
        filename: 'Bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            'babel-preset-react'
                        ],
                        plugins: [
                            "transform-class-properties",
                            "transform-object-rest-spread",
                            "syntax-dynamic-import"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        //new BundleAnalyzerPlugin()
    ]
};

/*
 * OPTIONAL DEPENDENCIES
 * 
 * npm i --save
 * react-tag-input (https://www.npmjs.com/package/react-tag-input - { WithContext as ReactTags })
 * react-datetime (https://github.com/YouCanBookMe/react-datetime - CSS https://github.com/YouCanBookMe/react-datetime/blob/master/css/react-datetime.css)
 * 
 * npm i --save-dev
 * 
 * 
*/