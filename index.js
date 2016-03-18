/**
 * Created by Julien on 2016/3/18.
 */

'use strict';

var fs = require('fs');
var util = require("util");
var path = require('path');
var Imagemin = require('imagemin');


module.exports = function(content, file, conf){

    conf = fis.util.merge(conf, {
        interlaced: true,
        progressive: true,
        optimizationLevel: 3
    });

    if(file.isImage()){

        var imagemin = new Imagemin()
            .src(content)
            .use(Imagemin.gifsicle({interlaced: conf.interlaced}))
            .use(Imagemin.jpegtran({progressive: conf.progressive}))
            .use(Imagemin.optipng({optimizationLevel: conf.optimizationLevel}))
            .use(Imagemin.svgo({
                plugins: conf.svgoPlugins || [],
                multipass: conf.multipass
            }));

        imagemin.use.bind(imagemin);

        imagemin.run(function(err, files){

            if (err) {
                console.log('err: ', err);
                return;
            }

            var originalSize = content.length;
            var optimizedSize = files[0].contents.length;
            var saved = originalSize - optimizedSize;
            var percent = originalSize > 0 ? (saved / originalSize) * 100 : 0;
            saved && console.log(percent,'%');
            var _c = content;
            content = files[0].contents;

        });
    }

    return content;
};

