/*
TASKS:
clean
img
js
twig
css
sprite
build
gulp - build and starts the Browsersync server
*/
// Paths
const root = {
  src: './src',
  srctwig: './twig',
  dest: '.',
};

const paths = {
  css: {
    src: {
      main: `${root.src}/project.scss`,
    },
    watch: `${root.src}/**/*.scss`,
    tmp: `${root.src}/css`,
    dest: `${root.dest}/css`,
  },

  markup: {
    src: `${root.srctwig}/**/*.twig`,
    watch: `${root.srctwig}/**/*.twig`,
    dest: `${root.srctwig}/page/`,
  },

  img: {
    src: {
      graphics: [
        `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp|ico)`,
        `!${root.src}/base/graphics/sprite/**/*`,
        `!${root.src}/img/**/*`,
      ],
      content: `${root.src}/img/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
    },
    // Vars array in watchers breaks build process, so there is one var for a watcher
    watch: [
      `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
      `!${root.src}/base/graphics/sprite/**/*`,
    ],
    dest: `${root.dest}/images`,
  },

  js: {
    src: {
      main: `${root.src}/main.js`,
      vendor: `${root.src}/js/**/*.js`,
    },
    watch: [`${root.src}/**/*.js`],
    dest: `${root.dest}/js`,
  },

  sprite: {
    src: {
      main: [`${root.src}/base/graphics/sprite/*.svg`],
    },
    dest: `${root.src}/base/graphics`,
  },
};


const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      svgSprite = require('gulp-svg-sprite'),
      browserSync = require('browser-sync'),
      connect = require('gulp-connect'),
      reload = browserSync.reload;

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        open: false,
        notify: false
    });
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['style']);
    gulp.watch('src/*.html', ['html'])
});




gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src(paths.markup.src)
        .pipe(twig())
        .pipe(gulp.dest(paths.markup.dest));
});

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('sass', function () {
  return gulp.src(paths.css.src.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('sprite', function () {
  return gulp.src(paths.sprite.src.main)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: '.', // Output in the same directory
            sprite: 'sprite.svg', // Sprite path and name
            prefix: '.', // Prefix for CSS selectors
            dimensions: '', // Suffix for dimension CSS selectors
          },
        },
        svg: {
          xmlDeclaration: false, // strip out the XML attribute
          doctypeDeclaration: false, // don't include the !DOCTYPE declaration
          namespaceClassnames: false, // keep the source class names untouched
        },
      })
    )
    .pipe(gulp.dest(paths.sprite.dest));
});












 
gulp.task('default', gulp.series('compile', 'sass', 'sprite', 'webserver','watch', 'browserSync'));


