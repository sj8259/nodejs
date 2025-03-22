const fs = require('fs');
fs.writeFile('hello.txt', 'Hello from Node.js',(err) => {
    if (err) throw err;
    console.log('File created and saved');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File contents:', data);
});

});
