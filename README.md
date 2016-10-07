fis-optimizer-img-min（因为fis3插件不支持异步，所以这个插件并没有完成，请勿使用）
=====

一个fis插件，用于自动压缩图片。依赖"imagemin": "^4.0.0".
相关配置详见依赖[https://github.com/imagemin/imagemin](https://github.com/imagemin/imagemin).

##安装
```
npm install -g fis-optimizer-img-min
```

##fis-confi.js
```
fis.config.merge({
    modules : {
        optimizer : {
            'gif':'img-min',
            'jpg':'img-min',
            'png':'img-min',
            'image':'img-min'
        }
    }
});
```



