#! /usr/bin/env node
'use strict';

var coords = {
  1: [146, 315, 258, 456],
  2: [258, 315, 371, 456],
  3: [371, 315, 484, 456],
  4: [484, 315, 596, 456],
  5: [146, 456, 258, 598],
  6: [258, 456, 371, 598],
  7: [371, 456, 484, 598],
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
var mkdirp = require('mkdirp');
program
  .version('v' + pkg.version)
  .option('-v, --version', 'display version');


program
  .command('setup')
  .description('run remote setup commands')
  .action(function() {
    console.log('setup');

  });

// mkdir test
program
  .command('mkdir')
  .description('mkdir in node')
  .action(function() {
    var mkdirp = require('mkdirp');
    mkdirp('./input_test', function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('pow!');
      }
    });
  });
program
  .command('trans [dirname]')
  .description('处理图片')
  .action(function(opt) {
    // var p = '/Users/forsigner/repos/cr-data/cr.png'
    // var image = fs.readFileSync(p);
    // var rgb = colorThief.getColor(image);
    // var rgbCode = 'rgb( ' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ' )';
    // console.log(color(rgbCode).hex());
     //var url_input = path.join(__dirname);
     mkdirp('./input', function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('pow!');
      }
    });

    var url = path.join(__dirname,'input');

    var input = path.join(__dirname, '11.png');
    var output = path.join(url, '1.png');
    var output2 = path.join(url, '2.png');
    var output3 = path.join(url, '3.png');
    var output4 = path.join(url, '4.png');
    var output5 = path.join(url, '5.png');
    var output6 = path.join(url, '6.png');
    var output7 = path.join(url, '7.png');
    var output8 = path.join(url, '8.png');
    lwip.open(input, function(err, image) {

      // check err...
      // define a batch of manipulations and save to disk as JPEG:
      image.batch()
        .crop(coords[1][0], coords[1][1], coords[1][2], coords[1][3]) // crop a 200X200 square from center
        .writeFile(output, function(err) {
          console.log('done');
        });
    });



    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[2][0], coords[2][1], coords[2][2], coords[2][3]) // crop a 200X200 square from center
        .writeFile(output2, function(err) {
          console.log('done');
        });

    });






    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[3][0], coords[3][1], coords[3][2], coords[3][3]) // crop a 200X200 square from center
        .writeFile(output3, function(err) {
          console.log('done');

        });

    });

    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[4][0], coords[4][1], coords[4][2], coords[4][3]) // crop a 200X200 square from center
        .writeFile(output4, function(err) {
          console.log('done');

        });

    });

    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[5][0], coords[5][1], coords[5][2], coords[5][3]) // crop a 200X200 square from center
        .writeFile(output5, function(err) {
          console.log('done');

        });

    });

    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[6][0], coords[6][1], coords[6][2], coords[6][3]) // crop a 200X200 square from center
        .writeFile(output6, function(err) {
          console.log('done');

        });

    });

    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[7][0], coords[7][1], coords[7][2], coords[7][3]) // crop a 200X200 square from center
        .writeFile(output7, function(err) {
          console.log('done');

        });

    });

    lwip.open(input, function(err, image) {
      image.batch()
        .crop(coords[8][0], coords[8][1], coords[8][2], coords[8][3]) // crop a 200X200 square from center
        .writeFile(output8, function(err) {
          console.log('done');

        });
    });


  });

program.parse(process.argv);
