var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
 
var childArgs = [path.join('phantom_screen.js')]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
})

