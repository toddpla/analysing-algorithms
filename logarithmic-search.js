const largeSortedArray = require('./fixtures/large-sorted-string-array.json');

function logarithmicSearch(item) {
    const startTime = new Date();
    let left = 0;
    let right = largeSortedArray.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        console.log(`left: ${left} middle: ${middle} right: ${right}`)
        if (largeSortedArray[middle] < item) {
            left = middle + 1;
        } else if (largeSortedArray[middle] > item) {
            right = middle - 1;
        } else {
            console.log('\n---------------------------\n')
            console.log(`# FOUND ${item} @ ${middle}`);
            console.log('\n---------------------------\n')
            break;
        }
    }
    console.log(`Runtime: ${new Date() - startTime}ms\n`)
}

logarithmicSearch(process.argv[2]);
