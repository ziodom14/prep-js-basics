
'use strict';

const Test = require('tape');
const Util = require('util');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');

let filePath = Path.resolve(__dirname, './../index.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding: 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw, { filename: 'index.js' });
Script.runInNewContext(sandbox);

Test('js-basics', suite => {
  Test('Variables with String values', t => {
    t.ok(sandbox.firstName, 'firstName variable exists.');
    t.ok(sandbox.lastName, 'lastName variable exists.');
    t.ok(sandbox.birthPlace, 'birthPlace variable exists.');
    t.end();
  });

  Test('Variables with Number values', t => {
    t.ok(sandbox.favoriteNumber, 'favoriteNumber variable exists.');
    t.ok(sandbox.currentYear, 'currentYear variable exists.');
    t.ok(sandbox.thatOnePrinceSong, 'thatOnePrinceSong variable exists.');
    t.end();
  });

  Test('Variables with Boolean values', t => {
    t.notEquals(sandbox.isDaytime, void 0, 'isDayTime variable exists.');
    t.notEquals(sandbox.isLeftHanded, void 0, 'isLeftHanded variable exists.');
    t.notEquals(sandbox.inHawaii, void 0, 'inHawaii variable exists.');
    t.end();
  });

  Test('Variables with Null values', t => {
    t.equals(sandbox.enrolledAtDevLeague, null, 'enrolledAtDevLeague exists.');
    t.equals(sandbox.completedFridayPrep, null, 'completedFridayPrep exists.');
    t.end();
  });

  Test('An array with all West Coast state names', t => {
    t.ok(sandbox.westCoast, 'westCoast exists.');
    t.equals(sandbox.westCoast.length, 3);

    var westCoastStates = [ "California"
    , "Oregon"
    , "Washington"
    ];

    westCoastStates.forEach(state => {
      // `~` shifts the value one byte to the left. -1 becomes 0, 0 becomes 1, etc.
      // `!!` coerces value to true Bool (not 'truthy'). 0 becomes `false`, >1 becomes `true`
      t.ok(!!~sandbox.westCoast.indexOf(state), `${state} is found on the west coast.`)
    });

    t.end();
  });

  Test('An array containing only even-numbered values', t => {
    t.ok(sandbox.evenNumbers, 'evenNumbers variable exists.');
    t.equals(sandbox.evenNumbers.length >= 10, true)

    sandbox.evenNumbers.forEach(number => {
      t.ok(number % 2 === 0, `${number} is even.`)
    });

    t.end();
  });

  Test('Arithmetic Section', t => {
    t.notEquals(sandbox.sumOfNumbers, void 0, 'sumOfNumbers variable exists.')
    t.equals(typeof sandbox.sumOfNumbers, 'number', 'sumOfNumbers is of type: Number.')
    t.end();
  });

  Test('Comparisons & Logic', t => {
    t.notEquals(sandbox.isEqual, void 0, 'isEqual variable exists.');
    t.equals(typeof sandbox.isEqual, 'boolean');
    t.end();
  })

  suite.end()
})