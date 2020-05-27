#!/usr/bin/env node

var exec = require('child_process').execFile;
exec('kompose.exe', ['convert', 'kube-manifest.yaml']);

