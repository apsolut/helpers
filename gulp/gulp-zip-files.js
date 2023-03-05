const { src, dest, series, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const zip  = require('gulp-zip');

/*--- Extras  ----------*/
function ziptheme(cb) {
    const timestamps = Date.now();
    console.log(timestamps)
    return src(['./*/**/**', '!node_modules/**/**'])
        .pipe(plumber())
        .pipe(zip( 'backup-all-files-' + timestamps + '.zip'))
        .pipe(dest('./'))

}
exports.ziptheme = ziptheme;