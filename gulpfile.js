'use strict';

var gulp = require('gulp');
var megazord = require('megazord-sdk');

//Registers megazord app generation tasks.
megazord.registerAppTasks();

gulp.tasks = megazord.gulp.tasks;

//You may add additional tasks here using gulp.

