const $ = require('jquery')

const { remote } = require('electron')

var win = remote.getCurrentWindow();
$('#close').click(function(){
    win.close()
})