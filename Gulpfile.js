var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
var path = require("path");
var GulpSSH = require('gulp-ssh')


var gutil = require('gulp-util');
var rename = require('gulp-rename');

var config = {
    host: 'mstdevadmin01',
    port: 22,
    username: 'lumadmin',
    privateKey: fs.readFileSync('/Users/gene/.ssh/id_rsa')
}

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
})

gulp.task('less', function () {
    var processors = [
        autoprefixer
    ];

    // gutil.log("the path",path.join(__dirname, 'less', 'includes'))

    return gulp.src('./LP5-ellucian-theme/LESS/*.less')
        .pipe(less({
            paths: [
                path.join(__dirname, 'css'),
                // path.join(__dirname, 'theme', 'less'),
                // path.join(__dirname, 'theme'),
                //path.join(__dirname, 'theme/less/plone.toolbar.vars.less')
            ]
        }))
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(postcss(processors))
        .pipe(rename('./LP5-ellucian-theme/css/color_schemes/cnm.css'))
        .pipe(gulp.dest(''))
});

gulp.task('dest', ['less'], function () {
    return gulp
        .src(['./LP5-ellucian-theme/css/color_schemes/cnm.css'])
        .pipe(gulpSSH.dest('/u01/app/luminis/products/tomcat/tomcat-admin/webapps/LP5-ellucian-theme/css/color_schemes/'))
})

// Watch task
gulp.task('watch', function () {
    gulp.watch('./LP5-ellucian-theme/LESS/**/*.less', ['less','dest']);
});

// Default task
gulp.task('default', ['watch','less','dest']);

