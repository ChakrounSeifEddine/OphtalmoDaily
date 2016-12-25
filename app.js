'use strict';

//var app=angular.module("collectify",['ngRoute']);
var app=angular.module("collectify",['ui.router',"xeditable"]);
app.run(function(editableOptions){
	editableOptions.theme='bs3'
});

