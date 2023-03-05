const { gulp, src, dest, series, parallel } = require('gulp');
const webp = require('gulp-webp');
const debug = require('gulp-debug');
const revertPath = require('gulp-revert-path');
const ext = require('gulp-ext');
const print = require('gulp-print').default;

/*--- Project settings  ----------*/
var decomSettings = {
    // different setup: where your images are placed
    // important: max image size is around 16500x
    uploadImages : 'D:/wordpress/wp-content/uploads/2022/08/',

};

function imageOptimisation(imgData) {
    return src(imgData)
        .pipe(webp())
        .pipe(revertPath())  // file.path => img.JPG/PNG
        .pipe(ext.append('webp'))
        .pipe(debug({title: 'unicorn:'}))
        .pipe(print())
        .pipe(dest(decomSettings.uploadImages));
}
function optimize_images(cb) {
    return imageOptimisation(decomSettings.uploadImages + '**/*.{png,jpg}');
}
exports.optimize_webp = optimize_images;
exports.owebp = optimize_images;
