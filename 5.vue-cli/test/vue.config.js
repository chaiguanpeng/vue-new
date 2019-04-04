let path = require('path');
// 基于node写法  npm run build的时候可以查看
// 由于打包出来的html <link rel=icon href=/favicon.ico>  都是/开头的，放到服务器加全局路径
// 默认环境变量 NODE_ENV production、development
module.exports = {
    //baseUrl 生产环境用域名，开发环境用/
    publicPath:process.env.NODE_ENV === 'production'?'http://www.zhufeng.cn':'/',

    //dist目录多了一层  dist->asserts->xxx(用于生成静态目录的文件夹)
    assetsDir:'asserts',

    //outputDir 输出路径
    outputDir:'./my-dist',

    //使用模板方式，一般不适用，(false)
    runtimeCompiler:false,

    //打包不在使用sourcemap
    productionSourceMap:false,

    chainWebpack:config=>{
    //    可以获取webpack的配置  在增加一些自己的逻辑 https://github.com/neutrinojs/webpack-chain  举例子配置别名
        config.resolve.alias.set('@',path.resolve(__dirname,'src/components'));
    },

    configureWebpack:{ //就是webpack的合并 用的webpack-merge合并
    //    新增插件等
        plugins:[]
    },

    devServer:{ //webpack中devServer，配置代理
        // 访问http://localhost:8080/api/getUser 代理到http://localhost:3000/getUser
        proxy:{
            '/api/getUser':{
                target:'http://localhost:3000',
                pathRewrite:{
                    '/api':''
                }
            }
        }




        //在App.vue中，访问http://localhost:8080/getUser 代理到http://localhost:3000/getUser
        // proxy:{
        //     '/getUser':{
        //         target:'http://localhost:3000',
        //     }
        // }

    },

    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'less',
    //     patterns: [
    //         path.resolve(__dirname,'src/assets/common.less')
    //     ]
    //   }
    // }
}
