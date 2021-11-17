console.time('app');

console.log('starting app...')

const fs = require('fs');
var hamt = require('hamt');

fs.readFile('./data/picture.png', function read(err: any, data: any) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content: any) {
    var h = hamt.empty.set('file', content)
    
    console.log(h.count())
    console.log(h.get('file'))
}

console.timeEnd('app took');