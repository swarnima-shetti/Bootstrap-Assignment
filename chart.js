const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
}
const datapoints1 = [0, 20, 20, 60, 60, 120, 93, 69, 60, 46, 79, 81, 94];
const datapoints2 = [100, 69, 20, 50, 70, 60, 93, 69, 60, 30, 45, 29, 35];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Today',
            data: datapoints1,
            borderColor: ["#0d6efd"],
            backgroundColor: ["#0d6efd30"],
            fill: true,
            tension: 0.4
        }, {
            label: 'Yesterday',
            data: datapoints2,
            borderColor: ["#358600"],
            backgroundColor: ["#35860030"],
            fill: true,
            tension: 0.4
        }
    ]
};

var id = document.getElementById("chart").getContext("2d");

var chart = new Chart(id, {
    type: "line",
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'FROM Chart.js: Today\'s trends'
            },
            legend: {
                display: true,
                labels: {
                    color: "#0d6efd"
                }
            }
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                },
                suggestedMin: 0,
                suggestedMax: 200
            }
        }
    },
})


chart()

