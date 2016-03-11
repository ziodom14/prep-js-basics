
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
  Test('firstName variable', t => {

  })


  suite.end()
})