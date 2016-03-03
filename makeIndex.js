"use strict"

const fs = require('fs');
const path = require('path');
const source = `${__dirname}/${(process.argv[2] || 'src')}`;
const output = process.argv[3] || 'index.js';

const makeText = xs =>
  xs.reduce((acc, x) =>
    acc + `export * from './${x.slice(0, -3)}'\n`
    , ''
  )

console.log('\nlooking files in ', source);
fs.readdir(source, (err, files) => {
  let text = makeText(files);

  console.log(`\n\n------------${output}------------\n\n${text}
    \n------------END:${files.length}:LINES------------\n`);

  fs.writeFile(`${source}/${output}`, text, (err) => {
    if (err) throw err;
    console.log(output + ' saved!\n');
  })
})