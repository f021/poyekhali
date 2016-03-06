"use strict"

const fs = require('fs')
const path = require('path')
const target = __dirname + '/' + (process.argv[2] || 'dist')
const source = process.argv[3] || 'pattern.js'

fs.readFile(__dirname + '/' + source, (err, paste) => {
  if (err) throw(err)
  fs.readdir(target, (err, files) => {
    if (err) throw err
    files.forEach(file => {
      file = target + '/' + file
      fs.readFile(file, 'utf-8', (err, text) => {
        if (err) throw err
        fs.writeFile(file, paste + text, err => {
          if (err) throw err
          console.log(file, ' - done')
        })
      })
    })
  })
})
