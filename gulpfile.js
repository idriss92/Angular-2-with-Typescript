var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    sass      = require('gulp-sass'),       // Conversion des SCSS en CSS
    minifyCss = require('gulp-minify-css'), // Minification des CSS
    uglify    = require('gulp-uglify'),     // Minification/Obfuscation des JS
    plumber   = require('gulp-plumber');    // Ne pas s'arrêter en cas d'erreurs
    
    
// SCSS TASK
gulp.task('css', function() 
{
  return gulp.src('./assets/scss/*.scss')    // Prend en entrée les fichiers *.scss
    .pipe(sass())                      // Compile les fichiers
    .pipe(minifyCss())                 // Minifie le CSS qui a été généré
    .pipe(gulp.dest('./src/css/'));  // Sauvegarde le tout dans /src/style
});

/* Execution console
$ gulp css
[gulp] Using gulpfile ~/gulp-test/gulpfile.js
[gulp] Starting 'css'...
[gulp] Finished 'css' after 68 ms
*/

// JAVASCRIPT TASK
gulp.task('js-uglify', function() 
{
  return gulp.src('./src/js/*.src.js')    // Prend en entrée les fichiers *.src.js
    .pipe(rename(function(path){
      // Il y a différentes méthodes pour renommer les fichiers
      // Voir ici pour plus d'infos : https://www.npmjs.org/package/gulp-rename
      path.basename = path.basename.replace(".src", ".min");
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./src/js/'));
});


// WATCH TASK
gulp.task('watch', function() 
{
  gulp.watch('./src/scss/*.scss', ['css']);
  //gulp.watch('./src/js/*.src.js', ['js-uglify']);
});

/*
$gulp watch pour lancer les deux taches
*/ 


/** 
 * Execute la tache par défaut lorsque des changements sont detectés
 */
gulp.task('default', ['watch']);