var gulp = require('gulp');
var shell = require('gulp-shell');

const dbName = 'tp-mongo';

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

};

gulp.task('runKeystone', shell.task('node keystone.js'));

gulp.task('createMongo', shell.task(`docker run --name ${dbName} -p 27017:27017 -d mongo`));
gulp.task('startMongo', shell.task(`docker start ${dbName}`));
gulp.task('stopMongo', shell.task(`docker stop ${dbName}`));

gulp.task('default', ['runKeystone']);
