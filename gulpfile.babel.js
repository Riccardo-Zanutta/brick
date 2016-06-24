/**
 * BRick
 * https://github.com/Riccardo-Zanutta/brick
 * Copyright 2016 Riccardo Zanutta (@RiccardoZanutta)
 * Released under the MIT license (http://mit-license.org)
*/

'use strict';

import gulp from 'gulp';
import config from './config.json';
import pkg from './package.json';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import runSequence from 'run-sequence';
import merge from 'merge2';
import { argv } from 'yargs';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// List all tasks and subtasks
gulp.task('help', $.taskListing);

// Sass compile, autprefixer, minify, sourcemaps
gulp.task('styles', () => {
  return gulp.src(config.sass_src)
    .pipe($.if(argv.pretty, $.sourcemaps.init()))
    .pipe($.sass({
      precision: 10,
      includePaths: ['.src/css/']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(config.autoprefixer_options))
    .pipe($.if(!argv.pretty, $.cssnano()))
    .pipe($.size({title: 'Styles'}))
    .pipe($.if(argv.pretty, $.sourcemaps.write('./')))
    .pipe(gulp.dest(config.sass_dest))
});

// Concat, babelify, sourcemaps and minify js files
gulp.task('scripts', () => {
  return merge(
    gulp.src(config.js_vendor_src)
      .pipe($.size({title: 'Vendor scripts'})),
    gulp.src(config.js_build_src)
      .pipe($.babel())
  )
    .pipe($.if(argv.pretty, $.sourcemaps.init()))
    .pipe($.concat(config.js_file_name))
    .pipe($.if(!argv.pretty, $.uglify({preserveComments: 'some'})))
    .pipe($.if(argv.pretty, $.sourcemaps.write('./')))
    .pipe($.size({title: 'Scripts'}))
    .pipe(gulp.dest(config.js_dest));
});

// Clean the dist/ folder
gulp.task('clean', () => {
  return del.sync([
    config.del_folder
  ])
});

// Copy the content from src/ to dist/
gulp.task('copy', ['clean'], () => {
  return gulp.src(config.src_folder)
    .pipe($.size({title: 'Copying ./src content in ./dist'}))
    .pipe(gulp.dest(config.dist_folder))
});

// Serve the content, live reload with browsersync
gulp.task('serve', ['styles', 'scripts'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './src'
    },
    port: config.port
  });

  gulp.watch('./src/*.html').on('change', reload);
  gulp.watch(['./src/css/**/*.scss'], ['styles', reload]);
  gulp.watch(['./src/js/vendor/*.js', './src/js/build/*.js'], ['scripts', reload]);
});

gulp.task('production', ['styles', 'scripts'], () => {
  runSequence('copy');
});

// This is the default task :)
gulp.task('default', ['clean'], () => {
  const startTime = Date.now();
  runSequence('serve', () => {
    console.log('\x1b[42m************************************\x1b[0m\n');
    console.log('\x1b[32m  BRick is ready to Rock!\x1b[0m\n');
    console.log('\x1b[42m************************************\x1b[0m\n');
    console.log('[\x1b[32mBRick\x1b[0m]', `All finished in \x1b[35m${Date.now() - startTime} ms` ,'\x1b[0m\n');
  })
});
