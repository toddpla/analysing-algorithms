const largeSortedArray = require('./fixtures/large-sorted-string-array.json');

function search(item) {
    const startTime = new Date();
    for (let i = 0; i < largeSortedArray.length; i++) {
        console.log(`index: ${i}`);
        if (largeSortedArray[i] === item) {
            console.log('\n---------------------------\n')
            console.log(`# FOUND ${item} @ ${i}`);
            console.log('\n---------------------------\n')
            break
        }
    }
    console.log(`Runtime: ${new Date() - startTime}ms\n`)
}

search(process.argv[2]);