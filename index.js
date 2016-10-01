#! /usr/bin/env node
'use strict';

var program = require('commander');
var Promise = require('bluebird');
var pkg = require('./package.json');

program
  .version('v' + pkg.version)
    .option('-v, --version', 'display version');


program
  .command('trans [dirname]')
  .description('处理图片')
  .action(function(opt) {
    console.log(opt);
    // TODO
  });

program.parse(process.argv);
