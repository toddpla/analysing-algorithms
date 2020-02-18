const fs = require('fs');

function createLargeSortedArray() {
    const result = [];
    let i = 0;
    while (i < 10000) {
        const number = Math.floor(Math.random() * 1000000);
        if (result.includes(number)) continue;
        result.push(number);
        i++
    }
    console.log(result.length);
    fs.writeFileSync(`${__dirname}/fixtures/large-sorted-array.json`, JSON.stringify(result.sort((a, b) => a - b)));
}

// createLargeSortedArray()

function createLargeSortedArrayOfStrings() {
    const result = [];
    let i = 0
    while (i < 100000) {
        const string = Math.random().toString(36).substring(2, 15)
        if (result.includes(string)) return
        result.push(string);
        i++;
    }
    fs.writeFileSync(`${__dirname}/fixtures/large-sorted-string-array.json`, JSON.stringify(result.sort()));
}

createLargeSortedArrayOfStrings()