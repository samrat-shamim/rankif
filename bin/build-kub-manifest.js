#!/usr/bin/env node
var exec = require('child_process').execFile;
exec('kompose.exe', ['convert', '-o kube-manifest.yml'], (e,d)=>{
    console.log(e,d);
});

