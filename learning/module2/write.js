// import fs, { readFileSync } from 'node:fs';
// import { syncBuiltinESMExports } from 'node:module';
// import { Buffer } from 'node:buffer';
var fs = require ("fs")
fs.writeFile('message.txt', 'hello hana',(err)=>{
    if(err) throw err;
    console.log('The file has been saved!');
});