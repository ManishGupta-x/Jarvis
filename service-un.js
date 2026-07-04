var Service = require('node-windows').Service;
var svc = new Service({
 name:'Jarvis',
 description: 'Node.js service description goes here.',
 script: 'C:\\Users\\Manish Gupta\\OneDrive\\Documents\\Jarvis-master\\Jarvis-master\\index.js'
});

svc.on('uninstall',function(){
 
});

svc.uninstall();