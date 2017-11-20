const gulp = require('gulp');


gulp.task('clean:dist', () => {
  const del = require('del');
  return del('dist');
});

gulp.task('lint:scss', () => {
  const stylelint = require('gulp-stylelint');
  return gulp.src('scss/**/*.scss')
  .pipe(stylelint({
    failAfterError: true,
    reporters: [
      {formatter: 'verbose', console: true},
    ],
    debug: true
  }));
})

gulp.task('build:css', ['clean:dist', 'lint:scss'], () => {
  const sass = require('gulp-sass');
  const cssnano = require('gulp-cssnano');
  const autoprefixer = require('gulp-autoprefixer');
  
  return gulp.src('scss/**/*.scss')
             .pipe(sass())
             .pipe(autoprefixer({
               browsers: [/*'last 2 versions',*/ '> 0.01%'],
               cascade: false
             }))
            // .pipe(cssnano())
             .pipe(gulp.dest('dist/css'));
});

gulp.task('build:html', ['clean:dist'], () => {
  const htmlmin = require('gulp-htmlmin');

  return gulp.src('*.html')
             .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest('dist'));
});


gulp.task('build', ['build:css', 'build:html']);

// 1 - Copier les 2 fichiers html dans dist
// 2 - Utiliser un plugin htmlmin

// 3 - Trouver un plugin stylelint et ne pas builder le css
// si stylelint échoue

// 4 - Créer une tache build ou default qui enchaine les 2 build