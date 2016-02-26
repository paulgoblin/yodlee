var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var babel = require('gulp-babel');

var dirs = {
  src: {
    scss: {
      entry: "src/app/app.scss",
      all: "src/app/my_scss/**/*.scss",
    },
    html: "src/app/**/*.html",
    lib: "src/assets/**/*",
    js: "src/app/**/*.js",
  },
  out: {
    dist: 'dist/',
  }
}

gulp.task('default', ['clean', 'sass', 'assets', 'html', 'build', 'watch']);

gulp.task('clean', function(){
  del.sync([dirs.out.dist + '**']);
})

gulp.task('sass', function() {
  gulp.src(dirs.src.scss.entry)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss())
    .pipe(gulp.dest(dirs.out.dist))
});

gulp.task('assets', function() {
  gulp.src(dirs.src.lib)
    .pipe(gulp.dest(dirs.out.dist))
});

gulp.task('html', function(){
  gulp.src(dirs.src.html)
    .pipe(gulp.dest(dirs.out.dist))
})

gulp.task('build', function() {
  gulp.src(dirs.src.js)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dirs.out.dist))
});

gulp.task('watch', function() {
  gulp.watch([dirs.src.scss.all, dirs.src.scss.entry], ['sass']);
  gulp.watch(dirs.src.html, ['html']);
  gulp.watch(dirs.src.lib, ['assets']);
  gulp.watch(dirs.src.js, ['build']);
});
