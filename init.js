const express = require('express');
let port = 80;

for ( let i = 0; i < process.argv.length; i++ ) {
   if ( process.argv[i] === '-p' && i + 1 < process.argv.length ) port = parseInt(process.argv[i+1]);
}

const app = express();
app.use(express.static(__dirname));

app.listen(port);
console.log(`Server started on port ${port}`);
