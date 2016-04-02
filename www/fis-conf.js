/**
 * Created by Julien on 2015/7/9.
 */


//图片压缩
//fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
//fis.config.set('modules.optimizer', 'img-min');
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


//部署设置
fis.config.set('roadmap.path', [

    //css目录下css文件
    {
        reg: /^\/css\/(.+\.(?:css|scss|less))$/i,
        release: 'styles/app/$1',
        url: '/styles/app/$1',
        useDomain: true,
        useSprite: true,
        useHash: false
    }

]);

//使用fis release --dest local来使用这个配置
fis.config.merge({
    deploy: {
        local: {
            to: '../publish',
            exclude: /(?:\/_[^/]+\.\w+)|(?:\.cmd)$/i
        }
    }
});
