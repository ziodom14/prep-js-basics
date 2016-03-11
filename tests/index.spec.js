
'use strict';

const Test = require('tape');
const Util = require('util');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');

let filePath = Path.resolve(__dirname, './../index.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding: 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw);
Script.runInNewContext(sandbox);

Test('js-basics', suite => {
  Test('Variables with String values', t => {
    t.ok(sandbox.firstName, 'firstName exists.');
    t.ok(sandbox.lastName, 'lastName exists.');
    t.ok(sandbox.birthPlace, 'birthPlace exists.');
  });


  suite.end()
})