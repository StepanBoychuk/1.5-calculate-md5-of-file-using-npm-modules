const md5File = require('md5-file');

md5File(process.argv[2]).then(hash => console.log(hash));