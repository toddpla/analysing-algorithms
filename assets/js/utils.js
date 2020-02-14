const charts = {
    const: {
        ctx: document.getElementById(`constChart`).getContext('2d'),
    },
    nth: {
        ctx: document.getElementById(`nthChart`).getContext('2d'),
    },
    n2: {
        ctx: document.getElementById(`n2Chart`).getContext('2d'),
    }
}

for (let chart in charts) {
    charts[chart].chart = new Chart(charts[chart].ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            ],
            datasets: [
                {
                    fill: false,
                    label: chart,
                    backgroundColor: 0,
                    borderColor: 'rgb(255, 99, 132)',
                    data: []
                },
            ]
        },
        options: {}
    });
}

const showResult = (reference, index, value) => {
    document.getElementById(`${reference}-${index}`).innerText = value
    const chart = charts[reference].chart;
    // chart.data.labels[index] = index;
    chart.data.datasets[0].data[index] = value;
    chart.update()
};