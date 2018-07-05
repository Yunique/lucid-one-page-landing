const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const reload      = browserSync.reload;
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

//Server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "src"
        }
    });
    
    browserSync.watch('./src/**/*.*').on('change', reload);
});

// Copy html
gulp.task('copy-html', function() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('build/'));
});

// Copy css
gulp.task('copy-css', function() {
    return gulp.src('./src/css/*.*')
    .pipe(gulp.dest('build/css'));
});

//Autoprefixer
gulp.task ('prefix', function() {
    return gulp.src('src/css/main.css')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('build/css'));
});

//Autoprefix & Minify css
gulp.task('mini-css', () => {
    return gulp.src('src/css/main.css')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build/css'));
});

// Copy images
gulp.task('copy-images', function() {
    return gulp.src('./src/images/*.*')
    .pipe(gulp.dest('build/images'));
});

// Copy JS
gulp.task('copy-js', function() {
    return gulp.src('./src/js/*.*')
    .pipe(gulp.dest('build/js'));
});

// // Copy
// gulp.task('copy', gulp.parallel('copy-html', 'copy-css', 'mini-css','copy-images'));
//
// // Default
// gulp.task('default',  gulp.parallel('prefix', 'copy'));