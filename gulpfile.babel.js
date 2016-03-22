'use strict';

import gulp from 'gulp';
import exec from 'gulp-exec';

gulp.task('build', () => {
	  gulp.src('./')             
	      .pipe(exec('./node_modules/.bin/babel -presets es2015,stage-0 -d lib/ src/')); 
});
