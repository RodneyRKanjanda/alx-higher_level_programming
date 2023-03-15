#!/usr/bin/node

const fs = require('fs');

const args = process.argv.slice(2);
const fileA = args[0];
const fileB = args[1];
const dest = args[2];

const contentA = fs.readFileSync(fileA, 'utf8');
const contentB = fs.readFileSync(fileB, 'utf8');
const contentC = contentA + contentB;

fs.writeFileSync(dest, contentC);
