
const students = [
    { name: "Rahul", score: 85 },
    { name: "Amit", score: 78 },
    { name: "Sachin", score: 92 },
    { name: "Naveen", score: 88 },
    { name: "Ravi", score: 72 },
    { name: "Kiran", score: 95 },
    { name: "Ajay", score: 81 }
];

function calculateStatistics(data) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let student of data) {
        let score = student.score;
        sum += score;
        if (score < min) min = score;
        if (score > max) max = score;
    }

    let average = sum / data.length;
    return { sum, min, max, average };
}

function filterByName(data, name) {
    return data.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
}

function updateStatistics(stats) {
    const statsList = document.getElementById('stats-list');
    statsList.innerHTML = `
      <li>Sum: ${stats.sum}</li>
      <li>Minimum: ${stats.min}</li>
      <li>Maximum: ${stats.max}</li>
      <li>Average: ${stats.average.toFixed(2)}</li>
    `;
}

function updateCharts(data) {
    updateBarChart(data);
    updateLineChart(data);
    updatePieChart(data);
    updateDoughnutChart(data);
}

function updateBarChart(data) {
    const labels = data.map(student => student.name);
    const scores = data.map(student => student.score);

    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function updateLineChart(data) {
    const labels = data.map(student => student.name);
    const scores = data.map(student => student.score);

    const ctx = document.getElementById('line-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function updatePieChart(data) {
    const labels = data.map(student => student.name);
    const scores = data.map(student => student.score);

    const ctx = document.getElementById('pie-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }]
        }
    });
}

function updateDoughnutChart(data) {
    const labels = data.map(student => student.name);
    const scores = data.map(student => student.score);

    const ctx = document.getElementById('doughnut-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }]
        }
    });
}

document.getElementById('student-filter').addEventListener('input', function () {
    const filterValue = this.value.trim();
    const filteredData = filterByName(students, filterValue);
    const stats = calculateStatistics(filteredData);
    updateStatistics(stats);
    updateCharts(filteredData);
});

const initialStats = calculateStatistics(students);
updateStatistics(initialStats);
updateCharts(students);


