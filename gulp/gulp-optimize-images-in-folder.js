/**
* Images Extra: Optimize Uploaded Images
* uploadImages : 'app/u/YEAR/' 
*/
var decomSettings = {
    uploadImages : 'app/uploads/2023/',

};
function imageOptimisation(imgData) {
    return src(imgData)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imageminJpegtran({progressive: true}),
            //imagemin.optipng({optimizationLevel: 5}),
            imageminMozjpeg({quality: 80}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        //.pipe(dest('dist'));
        .pipe(dest(decomSettings.uploadImages));
}
function optimize_images(cb) {
    return imageOptimisation(decomSettings.uploadImages + '**/*.{png,jpg,gif,ico}');
}
exports.optimize_images = optimize_images;