class Notation {
    constructor(inputs) {
        this.inputs = inputs;
    }

}

class Constant extends Notation {
    calculate() {
        return 1;
    }
}

class Nth extends Notation {
    calculate(i) {
        return this.inputs[i];
    }
}

class N2 extends Notation {
    calculate(i) {
        return this.inputs[i] * this.inputs[i];
    }
}

class Log2n extends Notation {
    calculate(i) {
        const result = parseFloat(Math.log2(this.inputs[i])).toFixed(2);
        console.log(result)
        return isFinite(result) ? result : 0;
    }
}

const range0To5 = [0, 1, 2, 3, 4, 5];

const notations = {
    const: new Constant(range0To5),
    nth: new Nth(range0To5),
    n2: new N2(range0To5),
    log2n: new Log2n([100, 200, 300, 400, 500, 600])
}

const showResult = (notation, index, value) => {
    document.getElementById(`${notation}-${index}`).innerText = value
    const chart = notations[notation].chart;
    chart.data.labels[index] = notations[notation].inputs[index];
    chart.data.datasets[0].data[index] = value;
    chart.update()
};

for (let n in notations) {
    const rows = [];
    const results = [];
    const notation = notations[n];
    for (let i = 0; i <= 5; i++) {
        const result = notation.calculate(i);
        rows.push(
            `<tr>
                <td>${notation.inputs[i]}</td><td><div id="${n}-${i}" onclick="showResult('${n}', ${i}, ${result})"> - </div></td>
            </tr>`)
        results.push(result)
    }
    const html = (
        `<table class="results">
            <tr>
                <th>array size</th><th>executions</th>
            <tr>
            ${rows.join('')}
        </table>`
    );
    document.getElementById(`${n}Table`).innerHTML = html;
    const ctx = document.getElementById(`${n}Chart`).getContext('2d');
    notation.chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    fill: false,
                    label: results,
                    backgroundColor: 0,
                    borderColor: 'rgb(255, 99, 132)',
                    data: []
                },
            ]
        },
        options: {
            legend: {
                display: false
            }
        }
    });
}

const json = require('./assets/json/large-sorted-array.json');
console.log(json[0])