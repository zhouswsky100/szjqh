// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8090,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/lm': {
                target: 'http://www.szjqh.cn/', 
                changeOrigin: true,
                pathRewrite: {
                    '^/lm': '/lm'
            }
        },
        '/news': {
          target: 'http://www.szjqh.cn/', 
          changeOrigin: true,
          pathRewrite: {
              '^/news': '/news'
        }
      },
      '/loginin': {
        target: 'http://www.szjqh.cn/', 
        changeOrigin: true,
        pathRewrite: {
            '^/loginin': '/loginin'
      }
    },

    '/updateAccount': {
      target: 'http://www.szjqh.cn/', 
      changeOrigin: true,
      pathRewrite: {
          '^/updateAccount': '/updateAccount'
    }
  },
  '/doout': {
    target: 'http://www.szjqh.cn/', 
    changeOrigin: true,
    pathRewrite: {
        '^/doout': '/doout'
  }
},
'/kecheng': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/kecheng': '/kecheng'
}
},
'/teacher': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/kecheng': '/kecheng'
}
},
'/hezuo': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/hezuo': '/hezuo'
}
},
'/wqxc': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/wqxc': '/wqxc'
}
},
'/config': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/config': '/config'
}
},
'/banner': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/banner': '/banner'
}
},

'/youqing': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/youqing': '/youqing'
}
},
'/db': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/db': '/db'
}
},
'/menu': {
  target: 'http://www.szjqh.cn/', 
  changeOrigin: true,
  pathRewrite: {
      '^/menu': '/menu'
}
},
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
