import Chart from 'chart.js';

export const chartusers = (id) => {
    var ctx = document.getElementById(id)
    return new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                backgroundColor: "tomato",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [0, 10, 20, 30, 40, 50, 60, 70]
            }]
        },
        options: {
            title: "Users",
            scales: {
                xAxes: [{
                    gridLines: {
                        offsetGridLines: true
                    }
                }]
            }
        }
    });
}

export const serviceschart = (id) => {
    var ctx = document.getElementById(id).getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'No order',
                '>50',
                '>=50',
            ],
            datasets: [{
                backgroundColor: [
                    "#2ecc71",
                    "#3498db",
                    "#95a5a6",
                ],
                data: [10, 20, 30]
            }],

        }
    });
}

export const newusers = (id) => {
    const number = 1002;
    document.getElementById(id).innerHTML = '<p>' + number + '</p>';
}