#! /usr/bin/env node
'use strict';

var coords = {
  1: [146, 315, 258, 456],
  2: [258, 315, 371, 456],
  3: [371, 315, 484, 456],
  4: [484, 315, 596, 456],
  5: [146, 456, 258, 598],
  6: [258, 456, 371, 598],
  7: [315, 456, 484, 598],
  8: [484, 456, 596, 598]
};

var program = require('commander');
var Promise = require('bluebird');
var pkg = require('./package.json');
var lwip = require('lwip');
var fs = require('fs');
// var ColorThief = require('color-thief');
// var colorThief = new ColorThief();
var color = require('onecolor');
var lwip = require('lwip');
var path = require('path');

program
  .version('v' + pkg.version)
  .option('-v, --version', 'display version');


program
  .command('trans [dirname]')
  .description('处理图片')
  .action(function(opt) {
    // var p = '/Users/forsigner/repos/cr-data/cr.png'
    // var image = fs.readFileSync(p);
    // var rgb = colorThief.getColor(image);
    // var rgbCode = 'rgb( ' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ' )';
    // console.log(color(rgbCode).hex());

    var input = path.join(__dirname, '11.png');
    var output = path.join(__dirname, '2.png');
    var output2 = path.join(__dirname, '3.png');

    lwip.open(input, function(err, image) {

      // check err...
      // define a batch of manipulations and save to disk as JPEG:
      image.batch()
        .crop(coords[1][0], coords[1][1], coords[1][2], coords[1][3])// crop a 200X200 square from center
        .writeFile(output, function(err) {
          console.log('done');
        });
    });

  });

program.parse(process.argv);
