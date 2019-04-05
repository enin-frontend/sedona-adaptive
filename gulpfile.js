var gulp = require('gulp');  
var less = require('gulp-less'); 
var browserSync = require('browser-sync'); 
var plumber = require('gulp-plumber');
var postcss  = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglifyjs');
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin'); 
var del = require('del');

gulp.task('less', function(){  
    return gulp.src('less/style.less')  
        .pipe(less())  
        .pipe(plumber())
        .pipe(postcss([ autoprefixer({
        	browsers: ['last 7 versions'],
            cascade: false}) ]))
        .pipe(gulp.dest('css'))  
        .pipe(browserSync.reload({stream: true})) 
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css')); 
});

gulp.task('browser-sync', function() {  
    browserSync({  
        server: {  
            baseDir: './'  
        },
        notify: false  
    });
});

gulp.task('scripts', function() {
    return gulp.src([  
        'js/*.js'
        ])
        .pipe(concat('libs.min.js'))  
        .pipe(uglify())  
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('code', function() {
    return gulp.src('*.html')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('images', function(){
    return gulp.src("img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel:3}),
        imagemin.jpegtran({progressive:true}),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('minify', () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

gulp.task('clean', async function() {
    return del.sync('dist');  
});

gulp.task('prebuild', async function() {

    var buildCss = gulp.src([  
        'css/style.min.css'
        ])
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('fonts/**/*')  
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('js/**/*')  
    .pipe(gulp.dest('dist/js'));
 
});

gulp.task('watch',  function() {
    gulp.watch('less/style.less', gulp.parallel('less'));  
    gulp.watch('*.html', gulp.parallel('code')); 
    gulp.watch(['js/common.js', 'libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync' , 'less'));

gulp.task('build', gulp.parallel('clean','prebuild' ,'less', 'images','minify','scripts'));
