//引入path核心模块
const path = require("path");

//引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//暴露对象
module.exports = {
    //入口
    entry: './src/index.ts',

    //出口
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname,"dist"),

        //打包的文件名
        filename: "bundle.js",

        //不使用箭头函数
        environment:{
            arrowFunction:false,
            const: false
        }
    },

    //指定webpack打包时需要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //匹配以ts结尾的文件
                test: /\.ts$/,

                //指定使用的loader
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",

                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境的插件
                                   "@babel/preset-env",

                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },

                                        //指定core-js的版本
                                        "corejs":"3",

                                        //使用corejs的方式,"usage"表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],

                //排除node_modules
                exclude: /^node_modules$/

            },
            {
                //匹配以less结尾的文件
                test: /\.less$/,

                //指定使用的loader
                use:[
                    'style-loader',
                    'css-loader',
                    //引入post-css
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    //webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            /*title: "我是一个自定义的title"*/
            template: "./src/index.html"
        }),
    ],

    //指定可以作为模块化的文件
    resolve: {
        extensions: ['.ts','.js']
    }
};